// Polar Bear 官网：中英双语切换 + 复制安装命令
// 字典由 content/site-content.json 经 scripts/gen-content.mjs 生成，禁止手改标记内内容。
(function () {
  'use strict';

  // BEGIN i18n
  const dict = {
    zh: {
      "meta.description": "Polar Bear 一键把全新 macOS / Linux 终端配置成 Catppuccin 主题 + Zsh + eza / bat / fzf / zoxide / lazygit 的高效日常环境。",
      "nav.features": "特性",
      "nav.videos": "视频",
      "nav.tools": "工具",
      "nav.start": "开始",
      "hero.eyebrow": "Polar Bear · 终端安装器",
      "hero.title": "装完只需 3 条命令，你的终端就会长这样。",
      "hero.lead": "Polar Bear 一键装好 Zsh、Catppuccin 主题的 Starship 提示符，以及 eza / bat / fzf / zoxide / lazygit / delta 等现代 CLI。macOS 与 Linux 通用，不换终端、不用手动调配置。",
      "hero.subtitle": "旧配置自动备份 · 可 --dry-run 预览 · 重复运行不会弄坏环境",
      "hero.value": "不是又一个 dotfiles 仓库，而是一个可预览、可重跑、装不坏的终端安装器。",
      "hero.previewAlt": "终端装完前后对照：左侧朴素终端，右侧带图标、高亮与 git 分支",
      "hero.caption": "BEFORE → AFTER，中间只隔 3 条命令。",
      "hero.get3Title": "装完得到 3 件事",
      "hero.videoLink": "看视频讲解 →",
      "hero.cta": "立即安装",
      "convert.whoTitle": "适合谁",
      "convert.starTitle": "如果你觉得好用",
      "convert.star": "顺手点个 ⭐，让更多人能搜到它 —— 不强制，纯粹是让好工具被看见。",
      "convert.forkTitle": "想改自己的 dotfiles？",
      "convert.fork": "可以直接 fork 这个仓库，按自己的习惯改 configs/ 与 setup.sh；你的改动只留在自己的仓库，不影响上游。",
      "features.title": "核心特性",
      "videos.title": "进阶视频讲解",
      "videos.v1t": "一键安装",
      "videos.v1d": "一条命令自动 clone，或先审查 setup.sh；--dry-run 逐条预览，非交互不卡死。",
      "videos.v2t": "日常工具",
      "videos.v2d": "ls / cat / z 智能跳转 / fzf 搜索 / top 系统监控 / fastfetch 系统信息 —— 常用命令用最短 alias；fd / rg 直接用短名，不覆盖系统 find / grep（避免 flag 冲突）。",
      "videos.v3t": "主题与 Git 工作流",
      "videos.v3d": "Catppuccin 提示符显示分支状态，lg 浏览仓库，git diff 由 delta 高亮。",
      "tools.title": "工具全家桶",
      "tools.col1": "组件",
      "tools.col2": "说明",
      "tools.fullTitle": "完整工具清单（25+）",
      "start.title": "快速开始",
      "start.sub": "macOS / Debian / Ubuntu / WSL 通用。Windows 原生请先装 WSL。",
      "start.trust": "先读脚本再运行：下面两条命令都会安装工具并写入 dotfiles，建议先打开 setup.sh 看一遍。",
      "start.copy": "复制",
      "start.or": "或者克隆后手动审查再安装：",
      "start.opts": "选项：--dry-run 预览 · --skip-node 跳过 Node · --reinstall 重装",
      "install.title": "快速开始",
      "install.trust": "**先看脚本再运行。** 下面两条命令都会安装工具并写入 dotfiles；建议先打开 [setup.sh](setup.sh) 审查一遍，再选一条执行。",
      "install.oneLiner": "bash <(curl -fsSL https://raw.githubusercontent.com/webxiongda/terminal-setup/main/setup.sh)",
      "install.oneLinerNote": "一行命令 — 自动 clone 并配置",
      "install.clone": "git clone https://github.com/webxiongda/terminal-setup.git && cd terminal-setup && ./setup.sh",
      "install.cloneNote": "或者克隆、审查 setup.sh 后再运行",
      "platforms.title": "支持平台",
      "platforms.col1": "平台",
      "platforms.col2": "状态",
      "platforms.col3": "包管理器",
      "what.title": "它做了什么",
      "what.sub": "只碰该碰的地方，已有配置先备份。",
      "docs.title": "文档与链接",
      "more.title": "安全 / 卸载 / 排障 / 许可",
      "footer.text": "Polar Bear · 用 ❤️ 与 zsh 打造 · MIT",
      "video.unsupported": "你的浏览器不支持视频播放。",
      "features.f1t": "主题统一",
      "features.f1d": "Starship 提示符自动跟随系统明暗模式（Latte / Mocha），配色与字体一次到位。",
      "features.f2t": "现代 CLI",
      "features.f2d": "eza / bat / fd / rg / fzf / zoxide / lazygit / delta 全覆盖，装好即用；fd = 更快的 find、rg = 更快的 grep，不覆盖系统 find/grep（避免 flag 冲突）。",
      "features.f3t": "一键安装",
      "features.f3d": "零配置，几分钟搞定；本机自定义放 ~/.zshrc.local，重跑不丢。",
      "features.f4t": "不绑终端",
      "features.f4d": "用你现有的终端就行，推荐 Warp（可选，脚本不安装）。",
      "features.f5t": "中文友好",
      "features.f5d": "Maple Mono NF CN 字体，图标不乱码、中文清晰。",
      "features.f6t": "可预览",
      "features.f6d": "--dry-run 先打印每一步，非交互环境自动跳过问询不卡死。",
      "tools.s1": "跨 Shell 提示符（Catppuccin Mocha）",
      "tools.s2": "更现代的 ls / cat / find / grep；fd / rg 不覆盖系统命令",
      "tools.s3": "模糊搜索 + 智能目录跳转",
      "tools.s4": "Git 终端 UI + 高亮 diff",
      "tools.s5": "系统信息与监控",
      "tools.s6": "Node / Python 版本与包管理",
      "platforms.n1": "🍎 macOS",
      "platforms.p1": "✅ 主力平台 — 长期使用验证",
      "platforms.n2": "🐧 Debian / Ubuntu",
      "platforms.p2": "🧪 实验性 — 可用但未经长期测试",
      "platforms.n3": "🪟 Windows (WSL)",
      "platforms.p3": "🧪 实验性 — 可用但未经长期测试",
      "platforms.n4": "🪟 Windows (原生)",
      "platforms.p4": "⛔ 不支持",
      "install.opt1": "--dry-run — 预览会做什么，不做任何改动",
      "install.opt2": "--skip-node — 跳过 fnm + Node.js 安装",
      "install.opt3": "--reinstall — 强制重新安装所有工具",
      "what.s1": "安装包管理器（macOS 用 Homebrew，Linux 用 apt）。",
      "what.s2": "安装 Zsh 与插件：自动建议、语法高亮、补全。",
      "what.s3": "安装现代 CLI 工具，并部署 Catppuccin Mocha 主题的 Starship 提示符。",
      "what.s4": "部署配置文件；已有配置先按时间戳备份，本机自定义写入 ~/.zshrc.local。",
      "hero.g1": "🎨 彩色提示符：Catppuccin 主题 + 分支状态",
      "hero.g2": "🚀 现代 ls · cat：eza / bat 带图标与高亮",
      "hero.g3": "🧭 智能跳转 + 模糊搜索：zoxide / fzf",
      "tools.t1": "Starship — 跨 Shell 提示符（Catppuccin Mocha）",
      "tools.t2": "Zsh — 带自动建议、语法高亮与补全的 Shell",
      "tools.t3": "zsh plugins — autosuggestions / syntax-highlighting / completions",
      "tools.t4": "Maple Mono NF CN — 支持中文的 Nerd Font，图标与 Powerline 字形齐全",
      "tools.t5": "eza — 带图标、git 状态、树形视图的 ls",
      "tools.t6": "bat — 带语法高亮和行号的 cat",
      "tools.t7": "fd — 更快更直观的 find",
      "tools.t8": "ripgrep — 比 grep 快几个数量级",
      "tools.t9": "fzf — 模糊查找器（Ctrl+R / Ctrl+T / Alt+C）",
      "tools.t10": "btop — 漂亮的系统监控 TUI",
      "tools.t11": "zoxide — 更聪明的 cd，学习你的习惯",
      "tools.t12": "jq — JSON 处理器",
      "tools.t13": "tldr — 带示例的简化版 man 手册",
      "tools.t14": "delta — 带语法高亮的 git diff",
      "tools.t15": "lazygit — Git 终端 UI",
      "tools.t16": "fnm — 快速 Node 版本管理器（Rust）",
      "tools.t17": "Zellij — 现代终端复用器（可选）",
      "tools.t18": "fastfetch — 极快的系统信息展示",
      "tools.t19": "procs — 彩色 ps 替代",
      "tools.t20": "sd — 直观的 sed 替代",
      "tools.t21": "hyperfine — 命令行基准测试",
      "tools.t22": "uv — 极快的 Python 包管理器",
      "tools.t23": "git + delta — git diff 默认走 delta 高亮",
      "tools.t24": "Mesh / Meslo 字体 — Linux 上内置的 Nerd Font 回退",
      "tools.t25": "你的终端 — 脚本不安装终端模拟器，推荐 Warp（可选）",
    },
    en: {
      "meta.description": "Polar Bear sets up a fresh macOS or Linux terminal in one command: Catppuccin Starship prompt, Zsh, eza, bat, fzf, zoxide, lazygit and more.",
      "nav.features": "Features",
      "nav.videos": "Videos",
      "nav.tools": "Tools",
      "nav.start": "Get started",
      "hero.eyebrow": "Polar Bear · terminal installer",
      "hero.title": "After installing, type just 3 commands — and your terminal looks like this.",
      "hero.lead": "Polar Bear sets up Zsh, a Catppuccin Starship prompt, and modern CLI tools — eza, bat, fzf, zoxide, lazygit, delta — on macOS and Linux. No terminal emulator to install, no config to babysit.",
      "hero.subtitle": "Old configs auto-backed up · Preview with --dry-run · Safe to re-run",
      "hero.value": "Not another dotfiles repo — a previewable, repeatable installer that won't break your setup.",
      "hero.previewAlt": "Terminal before and after setup: plain shell on the left, icons / highlights / git branch on the right",
      "hero.caption": "BEFORE → AFTER, just 3 commands away.",
      "hero.get3Title": "What you get in 3 things",
      "hero.videoLink": "Watch the video guide →",
      "hero.cta": "Install now",
      "convert.whoTitle": "Who it's for",
      "convert.starTitle": "If it helps you",
      "convert.star": "A ⭐ helps others find it in search — entirely optional, just a way to let a good tool be seen.",
      "convert.forkTitle": "Want your own dotfiles?",
      "convert.fork": "Fork the repo and tailor configs/ and setup.sh to your own habits; your changes stay in your fork and never affect upstream.",
      "features.title": "Core features",
      "videos.title": "Advanced video guides",
      "videos.v1t": "One-command install",
      "videos.v1d": "One line auto-clones, or review setup.sh first; --dry-run previews every step and never blocks in non-interactive runs.",
      "videos.v2t": "Daily tools",
      "videos.v2d": "ls / cat / smart z jumps / fzf search / top monitor / fastfetch — common commands use the shortest aliases; fd / rg are used directly and never override system find / grep (no flag conflicts).",
      "videos.v3t": "Theme & Git workflow",
      "videos.v3d": "Catppuccin prompt shows branch state, lg browses the repo, and git diff is highlighted by delta.",
      "tools.title": "The full stack",
      "tools.col1": "Component",
      "tools.col2": "What it does",
      "tools.fullTitle": "Full stack (25+ tools)",
      "start.title": "Get started",
      "start.sub": "Works on macOS, Debian / Ubuntu and WSL. On native Windows, install WSL first.",
      "start.trust": "Read the script first: both lines below install tools and write dotfiles. Open setup.sh and review it before running.",
      "start.copy": "Copy",
      "start.or": "Or clone and review it before installing:",
      "start.opts": "Options: --dry-run preview · --skip-node skip Node · --reinstall reinstall",
      "install.title": "Quick Start",
      "install.trust": "**Read the script first.** Both lines below install tools and write dotfiles; open [setup.sh](setup.sh) and review it before you pick one.",
      "install.oneLiner": "bash <(curl -fsSL https://raw.githubusercontent.com/webxiongda/terminal-setup/main/setup.sh)",
      "install.oneLinerNote": "One line — auto-clones and sets everything up",
      "install.clone": "git clone https://github.com/webxiongda/terminal-setup.git && cd terminal-setup && ./setup.sh",
      "install.cloneNote": "Or clone, review setup.sh, then run",
      "platforms.title": "Supported Platforms",
      "platforms.col1": "Platform",
      "platforms.col2": "Status",
      "platforms.col3": "Package manager",
      "what.title": "What It Does",
      "what.sub": "Touches only what it should — existing configs are backed up first.",
      "docs.title": "Docs & Links",
      "more.title": "Safety / Uninstall / Troubleshooting / License",
      "footer.text": "Polar Bear · built with ❤️ and zsh · MIT",
      "video.unsupported": "Your browser does not support video playback.",
      "features.f1t": "Unified theme",
      "features.f1d": "Starship follows your system's light/dark mode (Latte / Mocha); colors and font are set in one go.",
      "features.f2t": "Modern CLI",
      "features.f2d": "eza / bat / fd / rg / fzf / zoxide / lazygit / delta, all covered and ready; fd = faster find, rg = faster grep — system find/grep are left untouched to avoid flag conflicts.",
      "features.f3t": "One-command install",
      "features.f3d": "Zero config, ready in minutes. Local tweaks live in ~/.zshrc.local and survive re-runs.",
      "features.f4t": "Terminal agnostic",
      "features.f4d": "Use your existing terminal; Warp recommended (optional, not installed).",
      "features.f5t": "Chinese friendly",
      "features.f5d": "Maple Mono NF CN font: crisp glyphs, icons and Chinese text.",
      "features.f6t": "Previewable",
      "features.f6d": "--dry-run prints every step first; non-interactive runs never block on prompts.",
      "tools.s1": "Cross-shell prompt (Catppuccin Mocha)",
      "tools.s2": "Modern ls / cat / find / grep; fd / rg do not override system commands",
      "tools.s3": "Fuzzy search + smart cd",
      "tools.s4": "Git TUI + highlighted diff",
      "tools.s5": "System info & monitoring",
      "tools.s6": "Node / Python version & package management",
      "platforms.n1": "🍎 macOS",
      "platforms.p1": "✅ Primary — battle-tested",
      "platforms.n2": "🐧 Debian / Ubuntu",
      "platforms.p2": "🧪 Experimental — works but not extensively tested",
      "platforms.n3": "🪟 Windows (WSL)",
      "platforms.p3": "🧪 Experimental — works but not extensively tested",
      "platforms.n4": "🪟 Windows (native)",
      "platforms.p4": "⛔ Not supported",
      "install.opt1": "--dry-run — Preview actions without changing anything",
      "install.opt2": "--skip-node — Skip fnm + Node.js installation",
      "install.opt3": "--reinstall — Force reinstall all tools",
      "what.s1": "Installs a package manager (Homebrew on macOS, apt on Linux).",
      "what.s2": "Installs Zsh plus autosuggestions, syntax highlighting and completions.",
      "what.s3": "Installs modern CLI tools and deploys the Catppuccin Mocha Starship prompt.",
      "what.s4": "Deploys configs; existing files are timestamped and backed up first, local overrides go to ~/.zshrc.local.",
      "hero.g1": "🎨 Colorful prompt: Catppuccin theme + git branch",
      "hero.g2": "🚀 Modern ls · cat: eza / bat with icons & highlights",
      "hero.g3": "🧭 Smart jumps + fuzzy search: zoxide / fzf",
      "tools.t1": "Starship — Cross-shell prompt (Catppuccin Mocha)",
      "tools.t2": "Zsh — Shell with autosuggestions, highlighting and completion",
      "tools.t3": "zsh plugins — autosuggestions / syntax-highlighting / completions",
      "tools.t4": "Maple Mono NF CN — CJK-capable Nerd Font with icons and powerline glyphs",
      "tools.t5": "eza — ls with icons, git status and tree view",
      "tools.t6": "bat — cat with syntax highlighting and line numbers",
      "tools.t7": "fd — find, but fast and intuitive",
      "tools.t8": "ripgrep — grep, orders of magnitude faster",
      "tools.t9": "fzf — Fuzzy finder (Ctrl+R / Ctrl+T / Alt+C)",
      "tools.t10": "btop — Beautiful system monitor TUI",
      "tools.t11": "zoxide — A smarter cd that learns your habits",
      "tools.t12": "jq — JSON processor",
      "tools.t13": "tldr — Simplified man pages with examples",
      "tools.t14": "delta — git diffs with syntax highlighting",
      "tools.t15": "lazygit — Terminal UI for git",
      "tools.t16": "fnm — Fast Node version manager (Rust)",
      "tools.t17": "Zellij — Modern terminal multiplexer (optional)",
      "tools.t18": "fastfetch — Fast system information, modern neofetch",
      "tools.t19": "procs — Colorful ps replacement",
      "tools.t20": "sd — Intuitive sed replacement",
      "tools.t21": "hyperfine — Command-line benchmarking tool",
      "tools.t22": "uv — Blazing-fast Python package manager",
      "tools.t23": "git + delta — git diff is paged through delta by default",
      "tools.t24": "Meslo 字体 — Bundled Nerd Font fallback on Linux",
      "tools.t25": "Your terminal — No emulator installed; Warp recommended (optional)",
    }
  };
  // END i18n

  let lang = localStorage.getItem('pb-lang') === 'en' ? 'en' : 'zh';

  function lookup(d, key) {
    const val = (d && d[key]) || dict.zh[key]; // 缺失 key 回退中文
    return val === undefined ? null : val;
  }

  function apply(next) {
    lang = next;
    const d = dict[lang];
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      const val = lookup(d, el.getAttribute('data-i18n'));
      if (val !== null) el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      const val = lookup(d, el.getAttribute('data-i18n-alt'));
      if (val !== null) el.alt = val;
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
