# Mixtape Online — Version 1 Feature Sets

## 1. Browser Extension (v1)

- One-click “Add to Mixtape” from supported streaming sites
- Automatically detects when user is browsing a supported site and offers to save the current episode/video URL
- Quick-access popup listing current mixtapes and allowing add/remove of episodes
- **Persistent Popup State:**  
  - The popup always displays up-to-date mixtape and episode info every time it is opened.
  - Data persists using browser extension storage, surviving browser restarts and popup refreshes.
  - Changes made in the popup (add, remove, edit) are instantly saved and reflected on next open.
  - Sync with desktop/web app updates the popup after login, but local changes are never lost.
- Syncs with desktop/web app via user account (basic authentication)
- Prevents duplicate episode URLs in a mixtape
- Lightweight UI: minimal menus, simple controls

---

## 2. Desktop Software (v1)

- Shuffle and playback mixtapes via persistent browser or virtual monitor window
- Direct login to supported streaming platforms within the app (session management, no cookie import required)
- Import/export mixtapes as files (basic .json or .csv format)
- Simple player UI: play, pause, next, previous, mixtape progress bar
- Persistent player window for entire mixtape session
- Basic resource management (close window at end, prevent duplicates)
- Manual control of mixtape playback (no auto-play handoff yet)
- Authentication for user account (local only; online sync in future v2)

---

## 3. VR Platform (v1)

- Basic WebXR support: join “watch together” rooms in VR
- Synchronized playback controls (play, pause, next) shared across room participants
- Simple avatar presence (default avatars, no customization yet)
- Room environment: default living room or theater
- Mixtape playlist visible in VR room
- Cross-platform sync for PC and VR users (basic session management)

---

## 4. Mobile App (v1)

- Browse and join active mixtape sessions
- View playlist info and current episode progress
- Remote control: play, pause, next, previous for session
- Receive push notifications for session invites or new mixtapes
- Basic user authentication
- No streaming/broadcasting in v1 (view-only, remote control for now)

---

*Each part focuses on core utility and session sync; advanced features, customizations, and smart playback logic will arrive in future versions!*