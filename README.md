# 🔐 JavaScript Password Generator

A clean, responsive password generator built with vanilla HTML, CSS, and JavaScript. Pick your length and character types, generate, and copy with one click. May built-in strength meter din para makita agad kung gaano ka-secure yung password.

## ✨ Features

- **Adjustable length** — slider from 6 to 24 characters
- **Character options** — toggle uppercase, lowercase, numbers, and symbols
- **Strength meter** — color-coded bar (Weak / Medium / Strong) based on length and character variety
- **One-click copy** — copies to clipboard, with a check icon as confirmation
- **Auto-generate on load** — may password agad pagbukas ng page
- **Responsive design** — works on desktop and mobile

## 🛠️ Built With

- HTML5
- CSS3 (custom properties, flexbox, gradients)
- Vanilla JavaScript (no frameworks)
- [Bootstrap Icons](https://icons.getbootstrap.com/) for the clipboard and key icons
- [Montserrat](https://fonts.google.com/specimen/Montserrat) font via Google Fonts

## 📁 Project Structure

```
Javascript-Password-Generator/
├── index.html    # Page structure
├── styles.css    # Styling and responsive layout
└── index.js      # Password generation, strength meter, copy logic
```

## 🚀 Getting Started

No installation or build step needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/PeyMuz/Javascript-Password-Generator.git
   ```
2. Go to the project folder:
   ```bash
   cd Javascript-Password-Generator
   ```
3. Open `index.html` in your browser.

## 📖 How to Use

1. Adjust the **Password Length** slider.
2. Check or uncheck the character types you want to include (at least one must be selected).
3. Click **Generate Password**.
4. Click the clipboard icon to copy the password.

## Passwords shorter than 8 characters are capped at a score of 40. Then:

- **Weak** — score below 40
- **Medium** — score 40 to 69
- **Strong** — score 70 and above

## 🔮 Possible Improvements

- Use `crypto.getRandomValues()` instead of `Math.random()` for cryptographically secure generation
- Guarantee at least one character from each selected type
- Add an option to exclude similar-looking characters (`O`, `0`, `l`, `1`)
- Password history for the current session


## 👤 Author

**Kylle** — [@PeyMuz](https://github.com/PeyMuz)

## 📄 License

This project is open source and free to use for learning purposes.
