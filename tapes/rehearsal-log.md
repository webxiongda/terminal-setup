# 视频预演记录（2026-11-23）

## 环境与判定

- 录制环境：`/bin/zsh -i`，加载 `~/.zshrc`（即项目 `configs/.zshrc` 的安装效果），`HOME=/Users/polarbear`，
  `TERM=xterm-256color`，字体 `Maple Mono NF CN`，主题 `Catppuccin Mocha`，cwd = 仓库根。
- 预演方式：普通命令用交互 zsh 实测；TUI（`top` / `lg`）与 `Ctrl+R` 用 `expect` + `stty_init "rows 40 cols 150"`
  起真实 pty，停留 5s 后发送退出键。VHS 0.12.1 不支持 `Key`，且 `q` 不能可靠退出 lazygit，
  故 tape 统一改用 `Ctrl+C`；已用 VHS 最小 tape 复验：`Ctrl+C` 后幕布后的还原命令确实执行。
- 通过标准：退出码 0 + 有可见预期输出 + 无 `command not found` / 空输出 / 错误堆栈 / `fatal: not a git repository`。
- 下表中的命令均与 `tapes/*.tape` 的输入逐字一致；`Hide` 中的准备命令也一并预演。

## install.tape

| 命令 | 退出码 | 输出概况 |
|---|---|---|
| `clear` | 0 | 清屏，提示符返回 |
| `echo 'setup.sh --dry-run'` | 0 | `setup.sh --dry-run` |
| `ls` | 0 | eza 图标列表：`assets configs docs scripts tapes README.md …` |
| `git status` | 0 | `On branch feat/stage2-readme-site-video` + 分支状态 |
| `./setup.sh --dry-run > /tmp/pb-dry-raw.txt`（Hide） | 0 | 真实执行，130 行输出，含 `DRY-RUN MODE` 与 `Next steps` |
| `sed -n '1,20p' /tmp/pb-dry-raw.txt > /tmp/pb-dry-view.txt`（Hide） | 0 | 生成 20 行代表性片段 |
| `cat /tmp/pb-dry-view.txt` | 0 | `⚠ DRY-RUN MODE`、`[INFO] Detected macOS`、`📦 Step 1/9` 等 16 行 |
| `sed -n '121,130p' /tmp/pb-dry-raw.txt > /tmp/pb-dry-view.txt`（Hide） | 0 | 生成 10 行结尾片段 |
| `cat /tmp/pb-dry-view.txt` | 0 | `📝 glow … 🔧 direnv …` + `Next steps` 共 10 行 |
| `echo 'Ready - run ./setup.sh to install'` | 0 | `Ready - run ./setup.sh to install` |

## daily.tape

| 命令 / 快捷键 | 退出码 | 输出概况 |
|---|---|---|
| `clear` | 0 | 清屏 |
| `echo 'daily aliases'` | 0 | `daily aliases` |
| `ls` | 0 | eza 图标 + 目录优先列表（6 行） |
| `lt` | 0 | eza 两层树视图（46 行） |
| `cat .gitignore` | 0 | bat 高亮的 14 行配置 |
| `fastfetch` | 0 | 系统信息 30 行（OS / Shell / CPU / Memory …） |
| `echo fzf-history-entry`（Hide） | 0 | `fzf-history-entry`，作为 `Ctrl+R` 可搜索历史 |
| `Ctrl+R` → `fzf` → `Escape` → `Ctrl+U` | — | `Ctrl+R` 命中 `fzf-history-entry` 4 次；`Escape` 后输入行仍留查询文本，`Ctrl+U` 清空，避免污染下一条命令 |
| `cd ~/Music`（Hide） | 0 | zoxide 学习目录 A |
| `cd ~/Desktop`（Hide） | 0 | zoxide 学习目录 B |
| `pwd` | 0 | `/Users/polarbear/Desktop`（跳转前） |
| `z Music` | 0 | 跳到与目标不同的目录 |
| `pwd` | 0 | `/Users/polarbear/Music`（跳转后，肉眼可见） |
| `top` 停留 4.5s → `Ctrl+C` | 0 | btop 完整 TUI（pty 预演日志 10,947 字节），退出干净 |

## git.tape

| 命令 / 快捷键 | 退出码 | 输出概况 |
|---|---|---|
| `clear` | 0 | 清屏 |
| `echo '# git-diff-demo' >> .gitignore`（Hide） | 0 | 追加 1 行，制造一屏内可见 diff |
| `echo 'git workflow'` | 0 | `git workflow` |
| `git status` | 0 | `On branch …` + `modified: .gitignore` |
| `git diff` | 0 | 1 行新增，delta 高亮；录制前工作区干净，输出仅此一处 |
| `lg` 停留 6s → `Ctrl+C` | 0 | lazygit TUI（pty 预演日志 4,775 字节，Status / Diff / Files 面板）；VHS 最小 tape 复验退出与还原成功 |
| `git checkout -- .gitignore`（Hide） | 0 | 还原临时改动 |
| `git status` | 0 | `nothing to commit, working tree clean` |

## hero.tape

| 命令 | 退出码 | 输出概况 |
|---|---|---|
| `clear`（Hide） | 0 | 清屏 |
| `fastfetch`（Hide） | 0 | 系统信息 30 行，`Show` 第一帧即成果 |
| `ls`（Hide） | 0 | eza 图标列表 |
| `echo 'One command. Done.'` | 0 | `One command. Done.` |
| `ll` | 0 | eza 长格式列表（20 行） |
| `cat .gitignore` | 0 | bat 高亮的 14 行配置 |
| `git status` | 0 | `On branch …` 分支状态 |

## 关键验收结论

- `z Music`：`pwd` 从 `/Users/polarbear/Desktop` 变为 `/Users/polarbear/Music`，前后目录不同且可见。
- 全指令成功：上表 40 条命令 / 快捷键预演退出码均为 0（快捷键不产生退出码，按可见结果判定）。
- 最简指令：画面输入仅 `ls` / `lt` / `ll` / `cat` / `top` / `lg` / `z <目录名>` / `git status` / `git diff` / `echo`；
  无强制颜色参数、无管道截断命令、无错误流合并、无补丁式 git 日志。
- 出片指令：`top`（btop）与 `lg`（lazygit）各停留 5s ≥ 3s；`fastfetch` 在 daily 与 hero 均出镜。
- 无硬编码个人路径：tape 内没有中文个人项目目录字样；录制由 `scripts/record-videos.sh` 先 `cd` 到仓库根。
