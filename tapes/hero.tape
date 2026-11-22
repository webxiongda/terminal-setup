# Polar Bear — 首屏精华短片 (video 4/4)
# 命令白名单（画面输入）：echo / ll / cat .gitignore / git status
#   Hide 中准备：clear、fastfetch、ls（让 Show 的第一帧就是装好后的成果）
# 预期成功条件：12–18s；首帧即成果；每条输入退出码 0、有可见输出；静音（无 audio 轨）。
# 预演记录见 tapes/rehearsal-log.md（2026-11-22）。

Output site/assets/videos/hero.mp4

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
Require fastfetch
Require git
Require zsh

# 首帧即成果：先在幕布后把结果跑出来，再 Show
Hide
Type "clear"
Enter
Type "fastfetch"
Enter
Sleep 1500ms
Type "ls"
Enter
Sleep 1000ms
Show

Sleep 2000ms

Type "echo 'One command. Done.'"
Sleep 400ms
Enter
Sleep 2000ms

Type "ll"
Sleep 300ms
Enter
Sleep 2500ms

Type "cat .gitignore"
Sleep 400ms
Enter
Sleep 2500ms

Type "git status"
Sleep 300ms
Enter
Sleep 2000ms
