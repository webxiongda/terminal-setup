# Polar Bear — 日常工具演示 (video 2/4)
# 命令白名单（画面输入）：echo / ls / lt / cat / fastfetch / top(=btop) / pwd / z <目录名>
#   快捷键：q（退出 btop）、Ctrl+R + 关键字 + Escape（fzf 历史搜索）
#   Hide 中准备：clear、cd ~/Music、cd ~/Desktop（教 zoxide）、echo（造可搜索历史）
# 预期成功条件：每条输入退出码 0、有可见输出；z Music 后 pwd 与跳转前不同；
#   btop 停留 >=3s；无 command not found / 空输出 / 错误堆栈。
# 预演记录见 tapes/rehearsal-log.md（2026-11-22）。

Output site/assets/videos/daily.mp4

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
Require eza
Require bat
Require fzf
Require zoxide
Require fastfetch
Require btop
Require zsh

Hide
Type "clear"
Enter
Show

Type "echo 'daily aliases'"
Sleep 400ms
Enter
Sleep 2000ms

# 1) eza 别名：ls / lt
Type "ls"
Sleep 300ms
Enter
Sleep 2500ms

Type "lt"
Sleep 300ms
Enter
Sleep 2500ms

# 2) bat 别名：cat（短文件，一屏内）
Type "cat .gitignore"
Sleep 400ms
Enter
Sleep 2500ms

# 3) 系统信息
Type "fastfetch"
Sleep 300ms
Enter
Sleep 3500ms

# 4) top = btop：好看的 TUI，停留 >=3s 后按 q 退出
Type "top"
Sleep 300ms
Enter
Sleep 4500ms
Key "q"
Sleep 1000ms

# 5) fzf 历史搜索：先隐藏写入一条可搜索记录，避免 Ctrl+R 空白
Hide
Type "echo fzf-history-entry"
Enter
Show
Ctrl+R
Sleep 1500ms
Type "fzf"
Sleep 1200ms
Escape
Sleep 500ms
Ctrl+U
Sleep 500ms

# 6) zoxide：隐藏步骤先 cd 到两个不同名称目录让 z 学习；
#    当前在 ~/Desktop，演示 z Music 跳到不同目标，紧跟 pwd 可见
Hide
Type "cd ~/Music"
Enter
Type "cd ~/Desktop"
Enter
Show

Type "pwd"
Sleep 300ms
Enter
Sleep 2000ms

Type "z Music"
Sleep 400ms
Enter
Sleep 2000ms

Type "pwd"
Sleep 300ms
Enter
Sleep 2500ms
