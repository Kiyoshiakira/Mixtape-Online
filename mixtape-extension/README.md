# Mixtape Online Browser Extension (v1)

Pixel-art styled Chrome/Firefox extension for creating and managing video mixtapes!

## Installation

1. Clone or download this folder.
2. Put your logo in `assets/logo.png` (128x128px recommended).
3. Go to your browser's extensions page and "Load Unpacked" (Chrome) or "Debug Add-ons" (Firefox).
4. Select this folder.

## Usage

- Click the extension icon to open the popup.
- Paste a video/episode URL and click "Add to Mixtape".
- Remove entries with the "Remove" button.
- Mixtape list is saved and persists across browser sessions.

## Style

- Retro pixel-art look, inspired by the attached logo.
- Change colors/fonts in `popup.css` to customize further.

## Structure

- `manifest.json` – Extension manifest.
- `popup.html` – Main popup UI.
- `popup.css` – Pixel-art inspired theme.
- `popup.js` – Mixtape logic/persistence.
- `assets/logo.png` – Your logo.