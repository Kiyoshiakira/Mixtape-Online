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

# Mixtape Online Desktop Software — Retro VHS/VCR Look & Feel (v1)

## 1. Overall Theme

- **Visual Style:**  
  - Inspired by classic VHS tapes, VCRs, and 80s/90s home video setups.
  - Colors: off-white, gray, black, muted reds/blues, with rainbow/gradient accent stripes (like old VHS tape labels).
  - Textures: subtle plastic grain, faux stickers, handwritten labels, and tracking/noise overlays.
  - UI icons mimic VCR buttons (triangle play, double bar pause, square stop, arrows for rewind/fast-forward).

- **UI Elements:**  
  - Main window resembles a VHS tape with a label area for mixtape name.
  - “Tape window” shows tape reels and progress as a moving tape strip.
  - Playlist appears as a handwritten episode list on the tape label or as sticky notes.
  - “Side 1 / Side 2” toggle for A/B playlists, like flipping the tape.

## 2. Layout

- **Header/Title:**  
  - VHS tape icon or VCR front panel left-aligned.
  - “Mixtape Online” in a retro VHS label font (Blocky, Marker, or faux handwriting).

- **Mixtape Display Area:**  
  - Large VHS tape graphic centered, with dynamic tape reels.
  - Playlist overlay: handwritten episode names, with “add” and “remove” sticker/button effects.
  - Drag-and-drop for reordering, with tape shuffle sound.

- **Player Controls:**  
  - Classic VCR button strip: play (►), pause (❚❚), stop (■), rewind (⏪), fast-forward (⏩), eject (⏏).
  - Progress bar styled as a tape being pulled past the window.
  - “Eject” opens mixtape library (shows other tapes by label).

- **Sidebar (optional, v2):**  
  - Tape rack showing “your collection” (covers, labels).
  - Import/export mixtape as VHS case file (.json/.csv with cover art).
  - Settings: toggle VHS effects, static, theme colors.

## 3. Details & Effects

- **Animations:**  
  - Tape reels spin/move as playback progresses.
  - VCR button clicks with mechanical sound.
  - Progress bar “jumps” if you fast-forward/rewind.
  - Handwritten label scribble animation on edits.

- **Sound Effects:**  
  - VCR “chunk” when pressing play/eject.
  - Tape hiss/static as ambient effect (optional).
  - Tracking noise overlays (faint, for retro atmosphere).

- **Accessibility:**  
  - High-contrast “VCR” mode for visibility.
  - Keyboard shortcuts for all controls (space for play/pause, arrows for skip).

## 4. Example User Flow

1. **Open App** → See a VHS tape with your mixtape title written on the label.
2. **Click Play** → Tape reels spin, tape strip moves, track plays in browser or embedded player.
3. **Reorder Tracks** → Drag episodes up/down, sticky note moves, tape shuffle sound.
4. **Add Track** → Click sticker “+”, paste URL, appears on the handwritten label.
5. **Switch Mixtape** → Hit “Eject”, see your tape collection, pick another tape.
6. **Export** → Save your mixtape as a “VHS case” file (.json/.csv).

---

## Inspiration Gallery

- [VHS Tape UI Reference](https://dribbble.com/shots/1984859-VHS-User-Interface)
- [VCR Graphics](https://www.pinterest.com/search/pins/?q=VCR%20ui)
- [Classic VHS Labels](https://www.fontspace.com/category/vhs)
- [Retro Electron App Demos](https://github.com/sudhakarhn/retro-electron-apps)

---

**Note:**  
- v1 focuses on core playback, mixtape management, and the VHS/VCR retro vibe.  
- Advanced effects, animated tape cases, and more features can be added in future versions.


*Each part focuses on core utility and session sync; advanced features, customizations, and smart playback logic will arrive in future versions!*
