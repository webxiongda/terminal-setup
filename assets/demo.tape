# Polar Bear — reproducible terminal demo
# Regenerate:  brew install vhs && vhs assets/demo.tape
# Produces:    assets/demo.gif  (the animation shown in README)

Output assets/demo.gif

# Match the font this project installs so icons/glyphs render as on a real setup.
Set Shell "zsh"
Set FontFamily "Maple Mono NF CN"
Set FontSize 18
Set Width 1200
Set Height 640
Set Padding 20
Set Theme "Catppuccin Mocha"
Set TypingSpeed 40ms
Set CursorBlink false

# Require the tools this setup installs; fail early if the demo machine lacks them.
Require starship
Require eza
Require bat
Require fzf
Require zoxide

Hide
# Start from a clean prompt with a representative working directory.
cd ~/Desktop/GitHub项目/06-开发工具/terminal-setup
clear
Show

# 1) Modern file listing — eza replaces ls (icons + git status).
Type "ls"
Sleep 400ms
Enter
Sleep 2s

# 2) Syntax-highlighted file output — bat replaces cat.
Type "bat configs/starship.toml | head -20"
Sleep 400ms
Enter
Sleep 3s

# 3) Smart cd — zoxide learns your habits.
Type "z terminal-setup"
Sleep 400ms
Enter
Sleep 2s

# 4) Fuzzy finder — Ctrl+R history search.
Ctrl+R
Sleep 2s
Type "git"
Sleep 1s
Escape
Sleep 1s

# 5) Git TUI — lazygit.
Type "lg"
Sleep 400ms
Enter
Sleep 3s
Ctrl+C
Sleep 1s

# 6) System info — fastfetch.
Type "fastfetch"
Sleep 400ms
Enter
Sleep 4s

Type "echo 'Polar Bear — terminal, ready.'"
Sleep 400ms
Enter
Sleep 3s
