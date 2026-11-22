#!/usr/bin/env node
/**
 * terminal-setup 文案生成器：把 content/site-content.json 写入
 *  - site/app.js 的 // BEGIN i18n / // END i18n 段
 *  - README.md / README_CN.md 的 <!-- BEGIN shared:* --> 段
 *  - site/index.html 的 meta description 与 <!-- BEGIN shared:install --> 段
 *  - site/assets/preview.png（复制自 assets/preview.png，供 gh-pages 发布）
 *
 * 只覆盖标记内的内容；标记外的人工文档一律不动。幂等。
 * 依赖：Node 内置模块，无 npm 依赖。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SITE_URL = 'https://webxiongda.github.io/terminal-setup/';
const VIDEO_URL = `${SITE_URL}#videos`;

const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const write = (rel, text) => fs.writeFileSync(path.join(ROOT, rel), text, 'utf8');
const escHtml = (s) => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const src = path.join(ROOT, 'content/site-content.json');
const content = JSON.parse(fs.readFileSync(src, 'utf8'));
const { zh, en } = content;
if (!zh || !en) throw new Error('content/site-content.json 必须包含 zh / en 两套文案');

const keysZh = Object.keys(zh).sort();
const keysEn = Object.keys(en).sort();
if (JSON.stringify(keysZh) !== JSON.stringify(keysEn)) {
  throw new Error(`zh/en 的 key 不一致：zh-only=${keysZh.filter((k) => !keysEn.includes(k))}, en-only=${keysEn.filter((k) => !keysZh.includes(k))}`);
}
for (const k of ['install.oneLiner', 'install.clone']) {
  if (zh[k] !== en[k]) throw new Error(`${k} 在中英两版必须逐字一致（安装命令不可翻译）`);
}
if (!fs.existsSync(path.join(ROOT, 'assets/preview.png'))) {
  throw new Error('缺少 assets/preview.png：请先生成静态封面');
}

const touched = new Set();
/** 只替换 begin/end 之间的内容，标记行本身保留；标记外内容绝不改写。 */
function replaceMarked(rel, begin, end, body) {
  const text = read(rel);
  const i = text.indexOf(begin);
  const j = i < 0 ? -1 : text.indexOf(end, i + begin.length);
  if (i < 0 || j < 0) throw new Error(`${rel} 缺少标记 ${begin} / ${end}`);
  const next = text.slice(0, i + begin.length) + '\n' + body.trimEnd() + '\n' + text.slice(j);
  if (next !== text) { write(rel, next); touched.add(rel); }
}

/* ---------- app.js 的 i18n 字典 ---------- */
function dictFor(lang, c) {
  const pairs = Object.entries(c).filter(([, v]) => typeof v === 'string');
  c.features.forEach((f, n) => {
    pairs.push([`features.f${n + 1}t`, f.title], [`features.f${n + 1}d`, f.desc]);
  });
  c.toolsGroups.forEach((t, n) => pairs.push([`tools.s${n + 1}`, t.desc]));
  c.platforms.forEach((p, n) => pairs.push([`platforms.n${n + 1}`, `${p.icon} ${p.name}`], [`platforms.p${n + 1}`, p.status]));
  c['install.options'].forEach((o, n) => pairs.push([`install.opt${n + 1}`, `${o.flag} — ${o.desc}`]));
  c['what.steps'].forEach((s, n) => pairs.push([`what.s${n + 1}`, s]));
  c['hero.get3'].forEach((s, n) => pairs.push([`hero.g${n + 1}`, s]));
  c.tools.forEach((t, n) => pairs.push([`tools.t${n + 1}`, `${t.name} — ${t.desc}`]));
  const body = pairs.map(([k, v]) => `      ${JSON.stringify(k)}: ${JSON.stringify(v)},`).join('\n');
  return `    ${lang}: {\n${body}\n    }`;
}

const dictBlock = [
  '  const dict = {',
  `${dictFor('zh', zh)},`,
  `${dictFor('en', en)}`,
  '  };',
].join('\n');
replaceMarked('site/app.js', '  // BEGIN i18n', '  // END i18n', dictBlock);

/* ---------- index.html：meta description + 安装命令 ---------- */
{
  const rel = 'site/index.html';
  const text = read(rel);
  const metaRe = /(<meta name="description" content=")[^"]*(">)/;
  if (!metaRe.test(text)) throw new Error(`${rel} 缺少 <meta name="description">`);
  const next = text.replace(metaRe, (_m, a, b) => a + escHtml(en['meta.description']) + b);
  if (next !== text) { write(rel, next); touched.add(rel); }
}
{
  const one = escHtml(en['install.oneLiner']);
  const clone = escHtml(en['install.clone']);
  const block = [
    `    <p class="muted" data-i18n="start.trust">${escHtml(zh['start.trust'])}</p>`,
    '    <div class="code-block">',
    `      <button class="copy-btn" type="button" data-copy="${one}" data-i18n="start.copy">复制</button>`,
    `      <code>${one}</code>`,
    '    </div>',
    `    <p class="muted" data-i18n="start.or">${escHtml(zh['start.or'])}</p>`,
    '    <div class="code-block">',
    `      <button class="copy-btn" type="button" data-copy="${clone}" data-i18n="start.copy">复制</button>`,
    `      <code>${clone}</code>`,
    '    </div>',
    `    <p class="muted" data-i18n="start.opts">${escHtml(zh['start.opts'])}</p>`,
  ].join('\n');
  replaceMarked('site/index.html', '    <!-- BEGIN shared:install -->', '    <!-- END shared:install -->', block);
}

/* ---------- 两个 README 的共享区块 ---------- */
function heroBlock(lang, c) {
  const link = lang === 'zh'
    ? `[🇬🇧 English](README.md) · [官网](${SITE_URL}) · [⭐ Star](https://github.com/webxiongda/terminal-setup/stargazers) · [MIT](LICENSE)`
    : `[🇨🇳 中文](README_CN.md) · [Website](${SITE_URL}) · [★ Star](https://github.com/webxiongda/terminal-setup/stargazers) · [MIT](LICENSE)`;
  return [
    `**${c['hero.title']}**`,
    '',
    c['hero.subtitle'],
    '',
    c['hero.value'],
    '',
    link,
  ].join('\n');
}
function previewBlock(c) {
  return [
    '<p align="center">',
    `  <img src="assets/before-after.png" width="720" alt="${escHtml(c['hero.previewAlt'])}">`,
    '</p>',
    `<p align="center"><sub>${c['hero.caption']} [${c['hero.videoLink']}](${VIDEO_URL})</sub></p>`,
  ].join('\n');
}

function get3Block(c) {
  return [
    `**${c['hero.get3Title']}**`,
    '',
    ...c['hero.get3'].map((s, i) => `${i + 1}. ${s}`),
  ].join('\n');
}

function siteHeroBlock(c) {
  return [
    '      <p class="eyebrow" data-i18n="hero.eyebrow">' + escHtml(c['hero.eyebrow']) + '</p>',
    '      <h1 data-i18n="hero.title">' + escHtml(c['hero.title']) + '</h1>',
    '      <p class="subtitle" data-i18n="hero.subtitle">' + escHtml(c['hero.subtitle']) + '</p>',
    '      <p class="lead" data-i18n="hero.value">' + escHtml(c['hero.value']) + '</p>',
    '      <p class="muted" data-i18n="hero.lead">' + escHtml(c['hero.lead']) + '</p>',
    '      <h2 class="get3-title" data-i18n="hero.get3Title">' + escHtml(c['hero.get3Title']) + '</h2>',
    '      <ul class="get3-list">',
    ...c['hero.get3'].map((s, i) => '        <li data-i18n="hero.g' + (i + 1) + '">' + escHtml(s) + '</li>'),
    '      </ul>',
    '      <div class="hero-actions">',
    '        <a class="btn primary" href="#start" data-i18n="hero.cta">立即安装</a>',
    '        <a class="btn ghost" href="https://github.com/webxiongda/terminal-setup" target="_blank" rel="noopener">GitHub ★</a>',
    '      </div>',
    '      <figure class="hero-video">',
    '        <img class="hero-preview" src="assets/before-after.png" width="1440" height="860"',
    '             style="max-width:100%;height:auto;display:block;margin:0 auto"',
    '             data-i18n-alt="hero.previewAlt" alt="' + escHtml(c['hero.previewAlt']) + '">',
    '        <figcaption data-i18n="hero.caption">' + escHtml(c['hero.caption']) + '</figcaption>',
    '      </figure>',
  ].join('\n');
}
function installBlock(c) {
  return [
    `## ${c['install.title']}`,
    '',
    `> ${c['install.trust']}`,
    '',
    '```bash',
    `# ${c['install.oneLinerNote']}`,
    c['install.oneLiner'],
    '',
    `# ${c['install.cloneNote']}`,
    c['install.clone'],
    '```',
  ].join('\n');
}
function platformsBlock(c) {
  return [
    `## ${c['platforms.title']}`,
    '',
    `| ${c['platforms.col1']} | ${c['platforms.col2']} | ${c['platforms.col3']} |`,
    '|---|---|---|',
    ...c.platforms.map((p) => `| ${p.icon} **${p.name}** | ${p.status} | ${p.pm} |`),
  ].join('\n');
}
function featuresBlock(c) {
  return c.features.map((f) => `- ${f.icon} **${f.title}** — ${f.desc}`).join('\n');
}
function whatBlock(c) {
  return [c['what.sub'], '', ...c['what.steps'].map((s, i) => `${i + 1}. ${s}`)].join('\n');
}
function toolsBlock(c) {
  return [
    `| ${c['tools.col1']} | ${c['tools.col2']} |`,
    '|---|---|',
    ...c.tools.map((t) => `| [${t.name}](${t.url}) | ${t.desc} |`),
  ].join('\n');
}

for (const [lang, c, rel] of [['zh', zh, 'README_CN.md'], ['en', en, 'README.md']]) {
  const sections = {
    hero: heroBlock(lang, c),
    preview: previewBlock(c),
    get3: get3Block(c),
    install: installBlock(c),
    platforms: platformsBlock(c),
    features: featuresBlock(c),
    what: whatBlock(c),
    tools: toolsBlock(c),
  };
  for (const [name, body] of Object.entries(sections)) {
    replaceMarked(rel, `<!-- BEGIN shared:${name} -->`, `<!-- END shared:${name} -->`, body);
  }
}

/* ---------- index.html hero：双钩子 + 3 件事 + before/after 图 ---------- */
replaceMarked('site/index.html', '      <!-- BEGIN shared:hero -->', '      <!-- END shared:hero -->', siteHeroBlock(zh));

/* ---------- 官网静态图：与 README 共用 assets 下的两张图 ---------- */
{
  const dstDir = path.join(ROOT, 'site/assets');
  fs.mkdirSync(dstDir, { recursive: true });
  for (const name of ['preview.png', 'before-after.png']) {
    const dst = path.join(dstDir, name);
    const from = fs.readFileSync(path.join(ROOT, 'assets', name));
    if (!fs.existsSync(dst) || !fs.readFileSync(dst).equals(from)) {
      fs.writeFileSync(dst, from);
      touched.add(`site/assets/${name}`);
    }
  }
}

console.log(touched.size
  ? `已生成文案，更新：${[...touched].sort().join(', ')}`
  : '文案已是最新，无变化（幂等）');
