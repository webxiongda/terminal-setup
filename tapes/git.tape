# Polar Bear — 主题与 Git 工作流演示 (video 3/3)
# Regenerate:  cd <repo> && vhs tapes/git.tape
# Produces:    site/assets/videos/git.mp4

Output site/assets/videos/git.mp4

Set Shell "zsh"
Set FontFamily "Maple Mono NF CN"
Set FontSize 18
Set Width 1200
Set Height 640
Set Padding 20
Set Theme "Catppuccin Mocha"
Set TypingSpeed 35ms
Set CursorBlink false

Require starship
Require lazygit
Require delta
Require git
Require zsh
Hide
Type "cd ~/Desktop/GitHub项目/06-开发工具/terminal-setup"
Enter
Type "clear"
Enter
Show

# 标题卡
Type "# Catppuccin 提示符 + lazygit + delta"
Sleep 600ms
Enter
Sleep 1s

# 1) 提示符与 git 状态（starship 在提示符显示分支/状态）
Type "git status --short"
Sleep 400ms
Enter
Sleep 1800ms

# 2) lazygit TUI
Type "lazygit"
Sleep 500ms
Enter
Sleep 4000ms
Ctrl+C
Sleep 1000ms

# 3) delta 高亮 diff（显式调用，避免 pager 配置差异）
Type "git log -p -1 -- setup.sh | delta | head -40"
Sleep 500ms
Enter
Sleep 4000ms

Type "echo 'Polar Bear — Git, beautiful.'"
Sleep 400ms
Enter
Sleep 2500ms
