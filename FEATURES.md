# Planned Features — Playlist Master & Mixtape Watch Together

Organized by platform for clarity and future planning.

---

## Supported Streaming Sites Policy

- **Whitelist of Streaming Sites:**  
  - The app will only support playback and playlist creation using reputable, safe-for-work (SFW) streaming platforms.
  - A curated list of approved streaming sites will be maintained (e.g., Netflix, Hulu, Crunchyroll, Disney+, Prime Video, etc.).
  - NSFW, illegal, or unmoderated sites will not be supported for playback, playlist creation, or broadcast.
  - Attempts to add unsupported sites will display a friendly notification and offer a way to request new (SFW, reputable) sites for future inclusion.
  - This policy ensures a safe, family-friendly, and high-quality experience for all users and protects the brand and community.

---

## Resource & Window Management Features

- **Single Window Playback:**  
  - The app uses one persistent browser/virtual monitor window for each user/session.  
  - Redirects for next tape/episode occur in the same window—no spawning of new tabs or browser instances.
- **Global Pause & Playback Safety:**  
  - Pausing playback halts all redirection, auto-play, and window activity until resumed.
  - Prevents accidental opening of multiple playback windows.
- **Resource Protection:**  
  - When a mixtape or session ends, the app fully releases playback resources and closes browser windows.
  - Monitors RAM and window usage; if excessive, warns the user and offers cleanup/reset.
  - Prevents runaway resource usage that could crash the user’s computer.

---

## PC Software (Electron/Desktop App)

- Shuffle and playback mixtapes
- “Virtual monitor” mode for VR/desktop use (plays media in a movable/resizable window that acts like a browser window, so streaming sites work as expected)
- Start window allowing users to log in directly to their streaming platforms inside the app (no cookie import required)
- Option to import saved passwords from the user's browser or password manager to make login easier (with user permission)
- Keeps authentication/session active natively within the app so episodes and streaming continue to work
- Import/export mixtapes
- Advanced playback controls
- Integration with desktop VR streaming utilities (e.g., Virtual Desktop, Immersed)
- Local playlist management
- User authentication (future)
- Companion mobile app support (future)
- **Persistent Player & Mixtape Redirection:**  
  - When a user plays a playlist item (tape), the app opens the streaming site in a persistent browser window/virtual monitor.
  - The window remains open for the entire mixtape session.
  - The app monitors the streaming window’s URL: when the URL changes (indicating the end of an episode/video), and it’s not an ad or overlay, the app automatically loads the next URL from the user’s mixtape.
  - This overrides the streaming site’s “auto-play next episode” feature, creating a true custom mixtape sequence.
  - Optionally, show a “Next Tape Loading…” animation/effect during transitions.
  - Manual Next/Prev controls and a mixtape progress bar.
  - Ad detection logic (optional) to skip or mute ads.
  - Visual feedback for current tape/episode and upcoming content.
  - **Auto-Play Assistant:**  
    - Detects when a streaming site’s play button is visible and automatically clicks it to start playback.
    - Uses a combination of image recognition (matching play button icons for supported streaming sites) and JavaScript playback detection.
    - Fallback logic: If the video doesn’t auto-play when the episode URL loads, the assistant will trigger play automatically.
    - Users can enable or disable automatic playback for mixtapes via an "Autoplay" toggle in the player/settings.
    - When disabled, playback will wait for the user to manually press play after each redirect.
    - Autoplay status is clearly shown in the UI, with prompts for user action if needed.
- **Note:**  
  - Timer and smart duration detection features are not needed for mixtape redirection. Playback management is handled by URL changes and autoplay logic.
- **Smart Auto-Play Handoff (Optional):**  
  - Optionally, if a mixtape playlist includes consecutive episodes of the same show from the same streaming site, the app may allow the site's built-in auto-play to run through them without redirecting each episode.
  - Once the sequence is complete, or a different show is up next, the app resumes mixtape redirection.
  - This feature may be enabled or disabled in settings.
  - Feedback welcome: Should the app always control playback, or smartly hand off to the site for consecutive episodes? Let us know what works best for you!

---

## Phone Broadcasting & Virtual Monitor Sync *(optional, uncertain design!)*

- **Optional Feature:**  
  - The desktop/VR app may broadcast its “virtual monitor” playback window or playlist info to connected phones.
  - Phones can join the session to view the video stream, live playback info, or both.
  - Supports screen sharing, synchronized playback, and remote controls.
  - Phones may act as secondary displays (“virtual monitors”) for immersive, multi-device viewing.
  - Session pairing could use QR code, PIN, or user account for privacy and ease of use.
  - **Feedback Request:**  
    - What experience would you prefer: screen sharing, dedicated remote control, playlist info only, or a mix?  
    - Please give feedback or ideas for what would make the phone experience most useful and enjoyable!

---

## Browser Extension

- Save episode URLs while browsing
- One-click “Add to Mixtape” from supported streaming sites
- Automatically detect site links and prevent duplicates
- Multiple site options per episode (choose source: Free, Sub, etc.)
- Playlist management (add, remove, organize)
- URL duplicate scanner (alerts when a link is already added)
- Import/export playlists
- Integration with community mixtape database (submit, fetch, sync)
- User profiles and badges (future)

---

## VR Platform

- WebXR room support (future)
- Virtual “couch”/living room watch-together experience
- Synchronized playback controls (play, pause, next) in VR rooms
- Avatar and simple chat support (future)
- Guides for setup with Meta Quest, Immersed, Virtual Desktop
- Voice chat (future)
- Cross-platform sync between PC/VR users
- **Customization Options:**  
  - Custom room layouts and environments (living room, theater, outdoor, etc.)
  - Custom objects: posters, furniture, screens, avatars, interactive items
  - Color schemes & themes for ambiance
  - Interactive/customizable items (remote controls, snacks, etc.)
  - *Free and paid content*: base customization options available to all users, with optional premium rooms/objects/theme packs for purchase
  - Planned future: Creator marketplace for user-uploaded custom rooms/objects (with free and paid options)

---

## Web Platform

- Search, discover, and submit community mixtapes
- Join or create “watch together” rooms
- Community moderation & reporting (flag, review, remove links)
- Curated and featured mixtape lists
- Marketplace for mixtape creators (future)
- Global/community-accessible URL scanner (future: shared web API to check for duplicate episodes/links)
- Knowledge base: setup, guides, troubleshooting, VR integration tips
- Contribution info and roadmap

---

## Episode & URL Management Features (Cross-Platform)

- Prevent duplicate episodes (same show, season, episode)
- Multiple site options per episode
- URL scanner for duplicate detection
- Global/community-accessible scanner (future, via web API/database)
- Curated, complete playlists with collaborative curation

---

See [ROADMAP.md](ROADMAP.md) for timeline and milestones!

---

## ✨ **Feedback Wanted!**

Sections marked *optional* or *uncertain* are open for community ideas, feedback, and suggestions.  
Help shape how smart auto-play handoff, phone broadcasting, virtual monitor sync, and other features work best for you!
