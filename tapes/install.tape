# Polar Bear — 一键安装演示 (video 1/3)
# Regenerate:  cd <repo> && vhs tapes/install.tape
# Produces:    site/assets/videos/install.mp4
# 演示真实的 setup.sh --dry-run 输出（不联网、不改环境、非交互不卡死）。

Output site/assets/videos/install.mp4

Set Shell "zsh"
Set FontFamily "Maple Mono NF CN"
Set FontSize 18
Set Width 1200
Set Height 640
Set Padding 20
Set Theme "Catppuccin Mocha"
Set TypingSpeed 35ms
Set CursorBlink false

Require git
Require zsh

Hide
Type "cd ~/Desktop/GitHub项目/06-开发工具/terminal-setup"
Enter
Type "clear"
Enter
Show

# 标题卡：真实的两条安装命令
Type "# 一键安装：git clone 后 ./setup.sh"
Sleep 600ms
Enter
Sleep 800ms
Type "echo '  git clone https://github.com/webxiongda/terminal-setup.git  &&  cd terminal-setup  &&  ./setup.sh'"
Sleep 700ms
Enter
Sleep 1200ms

# 清屏，演示本机已克隆好的仓库上的 dry-run 真实输出
Hide
Type "clear"
Enter
Show

Type "# dry-run 预览 — 逐条打印将执行的动作，非交互下自动跳过问询"
Sleep 500ms
Enter
Sleep 800ms

Type "./setup.sh --dry-run 2>&1 | head -45"
Sleep 700ms
Enter
Sleep 5500ms

Type "echo '✅ dry-run 通过 — 真实安装只需 ./setup.sh'"
Sleep 400ms
Enter
Sleep 3000ms
