# Polar Bear — 日常工具演示 (video 2/3)
# Regenerate:  cd <repo> && vhs tapes/daily.tape
# Produces:    site/assets/videos/daily.mp4

Output site/assets/videos/daily.mp4

# 与项目安装后的效果一致：字体、主题、Shell 都对齐 configs/
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
Require eza
Require bat
Require fzf
Require zoxide
Require fastfetch
Require zsh

Hide
Type "cd ~/Desktop/GitHub项目/06-开发工具/terminal-setup"
Enter
Type "clear"
Enter
Show

# 标题卡
Type "# 日常工具 — ls / bat / zoxide / fzf"
Sleep 600ms
Enter
Sleep 1s

# 1) eza 替代 ls：图标 + git 状态
Type "ls"
Sleep 500ms
Enter
Sleep 2500ms

# 2) bat 替代 cat：语法高亮
Type "bat --color=always configs/.zshrc | head -18"
Sleep 500ms
Enter
Sleep 3000ms

# 3) zoxide 智能跳转
Type "z terminal-setup"
Sleep 500ms
Enter
Sleep 1800ms

# 4) fzf 模糊搜索 (Ctrl+R)
Ctrl+R
Sleep 1800ms
Type "git"
Sleep 1200ms
Escape
Sleep 800ms

# 5) fastfetch 系统信息
Type "fastfetch"
Sleep 500ms
Enter
Sleep 3500ms

Type "echo 'Polar Bear — terminal, ready.'"
Sleep 400ms
Enter
Sleep 2500ms
