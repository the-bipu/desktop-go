# Desktop Go

Checks if your Expo app is running, and opens it if it is.

## What it does

1. You type in the URL your Expo dev server is running on (defaults to `http://localhost:8081`).
2. Click **Check & Open**.
3. If something responds at that URL, it opens in its own window — the same way a browser tab would.
4. If nothing responds, you get a plain message telling you it's not running.

That's it. No project scanning, no live console, no Fast Refresh wiring — just "is it live, then open it," as requested.

## Running it

```bash
npm install
npm start
```

## Files

- `main.js` — the whole backend: creates the window, checks if a URL responds, opens a new window for it.
- `preload.js` — exposes those two actions (`checkLive`, `openApp`) to the page, safely.
- `index.html` / `style.css` — the one-screen UI: a text input and a button.
- `renderer.js` — wires the button up to `main.js`.

No build step, no TypeScript, no framework. What you see in these files is exactly what runs.
