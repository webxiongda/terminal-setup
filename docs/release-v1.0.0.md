# Release v1.0.0 · 发布说明（文案草稿）

> 本文件是 Release v1.0.0 的发布说明文案，供仓库 owner 日后手动发布时复制使用。
> 本文档本身不触发发布，也没有创建任何 GitHub Release。

## 亮点

- **可预览、可重跑、装不坏**：`--dry-run` 逐条预览；已有配置按时间戳自动备份（如 `~/.zshrc.bak.<timestamp>`）；重复执行不会弄坏环境，本机自定义放在 `~/.zshrc.local`。
- **开箱即用的现代终端**：Zsh + 自动建议 / 语法高亮 / 补全，Catppuccin Mocha 主题的 Starship 提示符，配 Nerd Font 后图标不乱码。
- **现代 CLI 全家桶**：eza / bat / fd / rg / fzf / zoxide / lazygit / delta / btop / fastfetch 等 25+ 工具，装好即用。
- **不劫持系统命令**：`ls` / `cat` / `top` 等常用 alias 保留；`fd` / `rg` 直接用短名，**不覆盖**系统 `find` / `grep`，避免 flag 语法冲突。
- **跨平台与双语文档**：macOS 主力支持，Debian / Ubuntu / WSL 实验性；中英 README + 官网 + 快捷键速查手册 + 教学视频。

## 安装

```bash
# 一行安装（建议先读脚本）
bash <(curl -fsSL https://raw.githubusercontent.com/webxiongda/terminal-setup/main/setup.sh)

# 或克隆后审查 setup.sh 再安装
git clone https://github.com/webxiongda/terminal-setup.git && cd terminal-setup && ./setup.sh
```

只想预览、不做改动：`./setup.sh --dry-run`。执行前请先看一遍 [setup.sh](../setup.sh)。

## 升级

```bash
cd terminal-setup
git pull
./setup.sh --reinstall
```

`--reinstall` 重新应用全部配置（忽略“已安装”判断）；本机自定义写在 `~/.zshrc.local`，不会被覆盖。

## 致谢

- 感谢 Starship、eza、bat、fd、ripgrep、fzf、zoxide、lazygit、delta 等开源工具的作者与维护者。
- 感谢所有提 issue、反馈问题与贡献 PR 的用户 —— 每一次反馈都让安装器更稳。
- 如果这套配置帮你省了时间，欢迎给仓库一个 ⭐，让更多人能搜到它（完全自愿）。
