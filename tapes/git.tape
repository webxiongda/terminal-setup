# Polar Bear — 主题与 Git 工作流演示 (video 3/4)
# 命令白名单（画面输入）：echo / git status / git diff / lg(=lazygit)
#   快捷键：q（退出 lazygit）
#   Hide 中准备：clear、向 .gitignore 追加一行制造一屏内可见 diff、录制后原样还原
# 预期成功条件：git diff 输出含 delta 高亮的新增行；lg 停留 >=3s；
#   每条输入退出码 0、有可见输出；无 command not found / 空输出 / 错误堆栈。
# 预演记录见 tapes/rehearsal-log.md（2026-11-22）。

Output site/assets/videos/git.mp4

Set Shell "zsh"
Set FontFamily "Maple Mono NF CN"
Set FontSize 22
Set Width 1200
Set Height 640
Set Padding 20
Set Theme "Catppuccin Mocha"
Set TypingSpeed 20ms
Set CursorBlink false

Require starship
Require lazygit
Require delta
Require git
Require zsh

# 画面外制造一个最小 diff（一行），保证 git diff 有可见、短小的真实输出
Hide
Type "clear"
Enter
Type "echo '# git-diff-demo' >> .gitignore"
Enter
Show

Type "echo 'git workflow'"
Sleep 400ms
Enter
Sleep 2000ms

# 1) Catppuccin 提示符 + 工作区状态
Type "git status"
Sleep 300ms
Enter
Sleep 3000ms

# 2) delta 高亮的 git diff（一屏内）
Type "git diff"
Sleep 400ms
Enter
Sleep 4500ms

# 3) lazygit TUI，停留 >=3s
Type "lg"
Sleep 300ms
Enter
Sleep 6000ms
Key "q"
Sleep 1000ms

# 4) 回到干净工作区：画面外还原 .gitignore
Hide
Type "git checkout -- .gitignore"
Enter
Show

Type "git status"
Sleep 300ms
Enter
Sleep 2500ms
