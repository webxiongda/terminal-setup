// Polar Bear 官网：中英双语切换 + 复制安装命令
(function () {
  'use strict';

  const dict = {
    zh: {
      'nav.features': '特性', 'nav.videos': '视频', 'nav.tools': '工具', 'nav.start': '开始',
      'hero.eyebrow': '一条命令 · 几分钟搞定',
      'hero.title': '把全新终端，变成开箱即用的样子',
      'hero.lead': 'Zsh + Starship（Catppuccin 主题）+ eza / bat / fzf / zoxide / lazygit 等现代 CLI，macOS 与 Linux 一键安装。',
      'hero.cta': '立即安装',
      'hero.caption': '30 秒看装好后的日常使用',
      'features.title': '特性亮点',
      'features.f1t': '🎨 主题统一', 'features.f1d': 'Starship 提示符自动跟随系统明暗模式（Latte / Mocha）。',
      'features.f2t': '🚀 现代 CLI', 'features.f2d': 'eza / bat / fd / rg / fzf / zoxide / lazygit / delta 全覆盖。',
      'features.f3t': '📦 一键安装', 'features.f3d': '零配置，5 分钟搞定；本机自定义放 ~/.zshrc.local，重跑不丢。',
      'features.f4t': '🖥 不绑终端', 'features.f4d': '用你现有的终端就行，推荐 Warp（可选，脚本不安装）。',
      'features.f5t': '🔤 中文友好', 'features.f5d': 'Maple Mono NF CN 字体，图标不乱码、中文清晰。',
      'features.f6t': '🧪 可预览', 'features.f6d': '--dry-run 预览每一步，非交互下自动跳过问询不卡死。',
      'videos.title': '三步视频讲解',
      'videos.v1t': '一键安装', 'videos.v1d': '两条命令装好整套终端；dry-run 预览每一步，非交互下自动跳过问询、绝不卡死。',
      'videos.v2t': '日常工具', 'videos.v2d': 'eza 列目录带图标与 git 状态、bat 高亮看文件、zoxide 智能跳转、fzf 模糊搜索、fastfetch 系统信息。',
      'videos.v3t': '主题与 Git 工作流', 'videos.v3d': 'Catppuccin Mocha 提示符显示分支状态、lazygit 终端 UI 浏览仓库、delta 高亮 git diff。',
      'tools.title': '工具全家桶', 'tools.col1': '组件', 'tools.col2': '说明',
      'tools.s1': '跨 Shell 提示符（Catppuccin Mocha）', 'tools.s2': '更现代的 ls / cat / find / grep',
      'tools.s3': '模糊搜索 + 智能目录跳转', 'tools.s4': 'Git 终端 UI + 高亮 diff',
      'tools.s5': '系统信息与监控', 'tools.s6': 'Node / Python 版本与包管理',
      'start.title': '快速开始', 'start.sub': 'macOS / Debian Ubuntu / WSL 通用。Windows 原生请先装 WSL。',
      'start.copy': '复制', 'start.or': '或者克隆后安装：',
      'start.opts': '选项：--dry-run 预览 · --skip-node 跳过 Node · --reinstall 重装',
      'footer.text': 'Polar Bear · 用 ❤️ 与 zsh 打造 · MIT',
      'video.unsupported': '你的浏览器不支持视频播放。'
    },
    en: {
      'nav.features': 'Features', 'nav.videos': 'Videos', 'nav.tools': 'Tools', 'nav.start': 'Get started',
      'hero.eyebrow': 'One command · ready in minutes',
      'hero.title': 'Turn a fresh terminal into a ready-to-use setup',
      'hero.lead': 'Zsh + Starship (Catppuccin theme) + modern CLIs like eza / bat / fzf / zoxide / lazygit. One install on macOS & Linux.',
      'hero.cta': 'Install now',
      'hero.caption': '30 seconds of daily use after setup',
      'features.title': 'Highlights',
      'features.f1t': '🎨 Unified theme', 'features.f1d': 'Starship prompt follows system light/dark mode (Latte / Mocha).',
      'features.f2t': '🚀 Modern CLI', 'features.f2d': 'eza / bat / fd / rg / fzf / zoxide / lazygit / delta, all covered.',
      'features.f3t': '📦 One-command install', 'features.f3d': 'Zero config, ~5 min. Local tweaks live in ~/.zshrc.local and survive re-runs.',
      'features.f4t': '🖥 Terminal agnostic', 'features.f4d': 'Use your existing terminal; Warp recommended (optional, not installed).',
      'features.f5t': '🔤 Chinese friendly', 'features.f5d': 'Maple Mono NF CN font: crisp glyphs, icons and Chinese text.',
      'features.f6t': '🧪 Previewable', 'features.f6d': '--dry-run previews every step; non-interactive runs never block on prompts.',
      'videos.title': 'Three-step video guide',
      'videos.v1t': 'One-command install', 'videos.v1d': 'Two commands set up the whole terminal; dry-run previews every step and never blocks in non-interactive runs.',
      'videos.v2t': 'Daily tools', 'videos.v2d': 'eza lists with icons & git status, bat highlights files, zoxide jumps smartly, fzf searches, fastfetch shows system info.',
      'videos.v3t': 'Theme & Git workflow', 'videos.v3d': 'Catppuccin Mocha prompt shows branch state, lazygit browses repos, delta highlights git diff.',
      'tools.title': 'The full stack', 'tools.col1': 'Component', 'tools.col2': 'What it does',
      'tools.s1': 'Cross-shell prompt (Catppuccin Mocha)', 'tools.s2': 'Modern ls / cat / find / grep',
      'tools.s3': 'Fuzzy search + smart cd', 'tools.s4': 'Git TUI + highlighted diff',
      'tools.s5': 'System info & monitoring', 'tools.s6': 'Node / Python version & package management',
      'start.title': 'Get started', 'start.sub': 'Works on macOS / Debian Ubuntu / WSL. On native Windows, install WSL first.',
      'start.copy': 'Copy', 'start.or': 'Or clone and install:',
      'start.opts': 'Options: --dry-run preview · --skip-node skip Node · --reinstall reinstall',
      'footer.text': 'Polar Bear · built with ❤️ and zsh · MIT',
      'video.unsupported': 'Your browser does not support video playback.'
    }
  };

  let lang = localStorage.getItem('pb-lang') === 'en' ? 'en' : 'zh';

  function apply(next) {
    lang = next;
    const d = dict[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const key = el.getAttribute('data-i18n');
      const val = (d && d[key]) || dict.zh[key]; // 缺失 key 回退中文
      if (val !== undefined) el.textContent = val;
    });
    const btn = document.getElementById('lang-toggle');
    if (btn) btn.textContent = lang === 'zh' ? 'EN' : '中';
    localStorage.setItem('pb-lang', lang);
  }

  document.getElementById('lang-toggle').addEventListener('click', function () {
    apply(lang === 'zh' ? 'en' : 'zh');
  });

  document.querySelectorAll('.copy-btn').forEach(function (btn) {
    btn.addEventListener('click', async function () {
      const text = btn.getAttribute('data-copy') || '';
      try {
        await navigator.clipboard.writeText(text);
        const original = btn.textContent;
        btn.textContent = lang === 'zh' ? '已复制 ✓' : 'Copied ✓';
        setTimeout(function () { btn.textContent = original; }, 1500);
      } catch (e) {
        btn.textContent = lang === 'zh' ? '复制失败' : 'Copy failed';
      }
    });
  });

  apply(lang);
})();
