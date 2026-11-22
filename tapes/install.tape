# Polar Bear — 一键安装演示 (video 1/4)
# 命令白名单（画面输入）：echo / ls / git status / cat
#   Hide 中准备：clear、./setup.sh --dry-run > /tmp/pb-dry-raw.txt、sed 截取代表性片段
# 预期成功条件：dry-run 退出码 0，输出含 "DRY-RUN MODE" 与 "Next steps"；
#   画面每条输入退出码 0、有可见输出；无 command not found / 空输出 / 错误堆栈。
# 预演记录见 tapes/rehearsal-log.md（2026-11-22）。
# 不硬编码个人路径：录制脚本先 cd 到仓库根，VHS 继承该 cwd。

Output site/assets/videos/install.mp4

Set Shell "zsh"
Set FontFamily "Maple Mono NF CN"
Set FontSize 22
Set Width 1200
Set Height 640
Set Padding 20
Set Theme "Catppuccin Mocha"
Set TypingSpeed 20ms
Set CursorBlink false

Require git
Require zsh
Require sed

Hide
Type "clear"
Enter
Show

# 1) 仓库现状：文件 + 干净工作区
Type "echo 'setup.sh --dry-run'"
Sleep 400ms
Enter
Sleep 2000ms

Type "ls"
Sleep 300ms
Enter
Sleep 2500ms

Type "git status"
Sleep 300ms
Enter
Sleep 2500ms

# 2) 真实 dry-run 在画面外执行；只把代表性片段放到一屏里展示
Hide
Type "./setup.sh --dry-run > /tmp/pb-dry-raw.txt"
Enter
Type "sed -n '1,20p' /tmp/pb-dry-raw.txt > /tmp/pb-dry-view.txt"
Enter
Show

Type "cat /tmp/pb-dry-view.txt"
Sleep 400ms
Enter
Sleep 4000ms

Hide
Type "sed -n '121,130p' /tmp/pb-dry-raw.txt > /tmp/pb-dry-view.txt"
Enter
Show

Type "cat /tmp/pb-dry-view.txt"
Sleep 400ms
Enter
Sleep 3000ms

Type "echo 'Ready - run ./setup.sh to install'"
Sleep 400ms
Enter
Sleep 2500ms
