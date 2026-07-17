# Desktop Go

<p align="center">
  <img src="./build/icon.ico" width="120" alt="Desktop Go Logo">
</p>

[![Release](https://img.shields.io/github/v/release/the-bipu/Desktop-Go?include_prereleases)](https://github.com/the-bipu/Desktop-Go/releases)
[![License: MIT](https://img.shields.io/github/license/the-bipu/Desktop-Go)](LICENSE)
[![Electron](https://img.shields.io/badge/Electron-31.2.1-47848F?logo=electron)](https://www.electronjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js)](https://nodejs.org/)
[![Platform](https://img.shields.io/badge/Platform-Windows-blue)]()

A lightweight desktop companion for **React Native (Expo)** developers that lets you preview your application without installing Android Studio or running an Android emulator.

Desktop Go detects your running Expo development server and opens it inside a clean, mobile-sized preview window, making UI development significantly faster and more lightweight.

```text
🚀 Desktop Go v1.0.0
──────────────────────────────────────
📱 Expo Preview
🌐 http://localhost:8081

✓ Development server detected
✓ Opening mobile preview...
```

> **Current Version:** **v1.0.0**
>
> **Status:** Stable Release
>
> Desktop Go currently supports Expo development servers and Windows desktop builds. More features are planned for future releases.

---

## Why Desktop Go?

Developing React Native applications shouldn't require installing a multi-gigabyte Android Studio setup just to preview your UI.

Desktop Go is built for developers who want a lightweight workflow:

* No Android Studio
* No Android Emulator
* No Hypervisor configuration
* Faster startup
* Lower RAM usage
* Native desktop experience

Simply start your Expo project and Desktop Go takes care of the preview.

---

## Highlights

* 🚀 Lightweight Electron application
* 📱 Mobile-sized preview window
* 🔍 Automatically checks whether the Expo development server is running
* ⚡ One-click mobile preview
* 💻 Native Windows desktop application
* 🎯 Minimal, distraction-free interface
* 📦 Packaged using Electron Builder
* 🖥️ Optimized for rapid UI development

---

## How It Works

1. Start your Expo project.

```bash
npx expo start
```

2. Launch **Desktop Go**.

3. Enter your development server URL.

Example:

```text
http://localhost:8081
```

4. Click **Check & Open**.

Desktop Go will:

* Verify that your Expo development server is running.
* Automatically open your application in a mobile-sized desktop preview window.

---

## Version Compatibility

| Desktop Go | Electron | Node.js | Expo                  |
| ---------- | -------- | ------- | --------------------- |
| v1.0.0     | 31.2.1   | 20+     | SDK 50+ (Recommended) |

---

## Requirements

* Node.js 20+
* npm
* Expo CLI (or `npx expo`)
* A React Native (Expo) project

---

## Project Structure

```text
desktop-go
│
├── build/
├── index.html
├── style.css
├── renderer.js
├── preload.js
├── main.js
├── package.json
└── README.md
```

---

## Technology Stack

* Electron
* JavaScript
* HTML5
* CSS3
* Electron Builder

---

## Roadmap

* [ ] Automatic Expo project detection
* [ ] QR Code support
* [ ] Metro log viewer
* [ ] Multiple project management
* [ ] Device presets (iPhone, Pixel, Samsung, etc.)
* [ ] Dark mode
* [ ] Recent projects
* [ ] Custom device resolutions
* [ ] Live reload status
* [ ] React Native CLI support
* [ ] Auto-reconnect to development server

---

## Contributing

Contributions, bug reports, feature requests, and pull requests are always welcome.

If you have an idea that could improve Desktop Go, feel free to open an issue or submit a PR.

---

## Author

**Bipanshu Kumar**

GitHub: https://github.com/the-bipu

---

## License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## Support

If Desktop Go helps you build React Native apps faster, consider giving this repository a ⭐.

Your support helps the project reach more developers and motivates future improvements.

---

> **Disclaimer**
>
> Desktop Go is an independent open-source project and is **not affiliated with, endorsed by, or sponsored by Expo, React Native, Meta, or Electron**. All trademarks belong to their respective owners.
