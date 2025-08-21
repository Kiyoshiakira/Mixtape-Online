const { db, auth } = require('./firebase');
const { collection, getDocs } = require('firebase/firestore');
const fs = require('fs');
const path = require('path');
const playlistFile = path.join(__dirname, '..', 'playlist.json');
const errorLogFile = path.join(__dirname, '..', 'error.log');
const { ipcRenderer, shell } = require('electron');

// --- GOOGLE SIGN-IN (Electron handoff flow only) ---
ipcRenderer.on('google-token', async (event, token) => {
  try {
    await auth.signInWithCustomToken(token);
    setAuthStatus("Signed in with Google!", "success");
  } catch (err) {
    setAuthStatus("Google sign-in failed: " + err.message, "");
    logError("Google sign-in error", err);
  }
});

document.getElementById('google-btn').addEventListener('click', () => {
  shell.openExternal('https://mymixtape.online/auth.html?platform=electron');
});

// --- AUTH STATE & UI ---
auth.onAuthStateChanged((user) => {
  if (user) {
    let profileHtml = "";
    if (user.photoURL) {
      profileHtml += `<img src="${user.photoURL}" class="profile-pic" style="width:32px;height:32px;border-radius:16px;margin-right:8px;">`;
    }
    profileHtml += `<span>${user.displayName || user.email}</span>`;
    document.getElementById('user-profile').innerHTML = profileHtml;
    setAuthStatus(`Logged in as ${user.email}`, "success");
    document.getElementById('logout-btn').style.display = '';
    document.getElementById('login-btn').style.display = 'none';
    document.getElementById('register-btn').style.display = 'none';
    document.getElementById('google-btn').style.display = 'none';
  } else {
    document.getElementById('user-profile').innerHTML = "";
    setAuthStatus("Not logged in.", "");
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('login-btn').style.display = '';
    document.getElementById('register-btn').style.display = '';
    document.getElementById('google-btn').style.display = '';
  }
});

function logError(message, errorObj = null) {
  const logMsg = `[${new Date().toISOString()}] ${message}` +
    (errorObj ? `\n${errorObj.stack || errorObj.message || errorObj}\n` : '') + '\n';
  try {
    fs.appendFileSync(errorLogFile, logMsg);
  } catch (e) {
    alert("Cannot write to error.log!");
  }
}

function setAuthStatus(msg, type = "") {
  const el = document.getElementById('auth-status');
  el.textContent = msg;
  el.className = "auth-status " + type;
}

function login() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if (!email || !password) {
    setAuthStatus("Please enter email and password.", "");
    return;
  }
  setAuthStatus("Logging in...", "loading");
  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      setAuthStatus("Logged in!", "success");
    })
    .catch((err) => {
      logError("Login error", err);
      if (err.code === 'auth/user-not-found') {
        setAuthStatus("User not found. Try registering.", "");
      } else if (err.code === 'auth/wrong-password') {
        setAuthStatus("Wrong password. Try again.", "");
      } else {
        setAuthStatus(err.message, "");
      }
    });
}

function register() {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  if (!email || !password) {
    setAuthStatus("Please enter email and password.", "");
    return;
  }
  setAuthStatus("Registering...", "loading");
  auth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      setAuthStatus("Registered & logged in!", "success");
    })
    .catch((e) => {
      logError("Registration error", e);
      if (e.code === "auth/email-already-in-use") {
        setAuthStatus("Email already registered. Try logging in.", "");
      } else if (e.code === "auth/weak-password") {
        setAuthStatus("Password too weak (min 6 chars).", "");
      } else {
        setAuthStatus(e.message, "");
      }
    });
}

function logout() {
  auth.signOut()
    .then(() => {
      setAuthStatus("Logged out.", "");
    })
    .catch((err) => {
      logError("Logout error", err);
      setAuthStatus("Error during logout.", "");
    });
}

auth.onAuthStateChanged((user) => {
  if (user) {
    setAuthStatus(`Logged in as ${user.email}`, "success");
    document.getElementById('logout-btn').style.display = '';
    document.getElementById('login-btn').disabled = true;
    document.getElementById('register-btn').disabled = true;
  } else {
    setAuthStatus("Not logged in.", "");
    document.getElementById('logout-btn').style.display = 'none';
    document.getElementById('login-btn').disabled = false;
    document.getElementById('register-btn').disabled = false;
  }
});

document.getElementById('login-btn').addEventListener('click', login);
document.getElementById('register-btn').addEventListener('click', register);
document.getElementById('logout-btn').addEventListener('click', logout);

// --- FIRESTORE LOGIC FOR SHOWS/EPISODES ---

// Fetch all shows
async function fetchShows() {
  const showsCol = collection(db, 'shows');
  const showSnapshot = await getDocs(showsCol);
  return showSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Fetch episodes for a given show
async function fetchEpisodes(showId) {
  const episodesCol = collection(db, `shows/${showId}/episodes`);
  const episodeSnapshot = await getDocs(episodesCol);
  return episodeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

// Render show list
async function renderShows() {
  try {
    const shows = await fetchShows();
    const ul = document.getElementById('shows-list');
    ul.innerHTML = '';
    shows.forEach(show => {
      const li = document.createElement('li');
      li.textContent = show.title + ' (' + show.provider + ')';
      li.style.cursor = 'pointer';
      li.onclick = () => renderEpisodes(show.id, show.title);
      ul.appendChild(li);
    });
  } catch (err) {
    logError("Render shows error", err);
    alert("Error loading shows.");
  }
}

// Render episode list for a show
async function renderEpisodes(showId, showTitle) {
  try {
    const episodes = await fetchEpisodes(showId);
    const ul = document.getElementById('episodes-list');
    ul.innerHTML = `<h3>Episodes for ${showTitle}</h3>`;
    episodes.forEach(ep => {
      const li = document.createElement('li');
      li.textContent = `S${ep.season}E${ep.episodeNumber}: ${ep.title}`;
      ul.appendChild(li);
    });
  } catch (err) {
    logError("Render episodes error", err);
    alert("Error loading episodes.");
  }
}

// --- PLAYLIST LOGIC (local file) ---
function loadPlaylist() {
  try {
    const data = fs.readFileSync(playlistFile, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    logError("Load playlist error", err);
    return [];
  }
}

function savePlaylist(playlist) {
  try {
    fs.writeFileSync(playlistFile, JSON.stringify(playlist, null, 2));
  } catch (err) {
    logError("Save playlist error", err);
  }
}

function renderPlaylist() {
  try {
    const playlist = loadPlaylist();
    const ul = document.getElementById('playlist-list');
    ul.innerHTML = '';
    if (playlist.length === 0) {
      ul.innerHTML = '<li style="opacity:0.6;">No mixtape episodes yet!</li>';
      return;
    }
    playlist.forEach((ep, idx) => {
      const li = document.createElement('li');
      li.className = 'playlist-episode';
      const name = document.createElement('span');
      name.textContent = ep.name;
      name.className = 'ep-name';
      const url = document.createElement('a');
      url.textContent = ep.url;
      url.href = ep.url;
      url.target = '_blank';
      url.className = 'ep-url';
      const remove = document.createElement('button');
      remove.textContent = 'Remove';
      remove.className = 'remove-btn';
      remove.onclick = () => {
        try {
          playlist.splice(idx, 1);
          savePlaylist(playlist);
          renderPlaylist();
        } catch (err) {
          logError("Remove episode error", err);
        }
      };
      li.appendChild(name);
      li.appendChild(document.createTextNode(' - '));
      li.appendChild(url);
      li.appendChild(remove);
      ul.appendChild(li);
    });
  } catch (err) {
    logError("Render playlist error", err);
    setAuthStatus("Error rendering playlist.", "");
  }
}

function addEpisode(name, url) {
  try {
    if (!name.trim() || !url.trim()) return;
    const playlist = loadPlaylist();
    if (playlist.some(ep => ep.url === url)) {
      alert('This URL is already in your mixtape!');
      return;
    }
    playlist.push({ name, url });
    savePlaylist(playlist);
    renderPlaylist();
    document.getElementById('episode-name').value = '';
    document.getElementById('episode-url').value = '';
  } catch (err) {
    logError("Add episode error", err);
    alert('Error adding episode.');
  }
}

document.getElementById('add-btn').addEventListener('click', () => {
  addEpisode(
    document.getElementById('episode-name').value,
    document.getElementById('episode-url').value
  );
});

document.addEventListener('DOMContentLoaded', () => {
  renderPlaylist();
  renderShows(); // Load shows at startup
});

document.getElementById('import-btn').addEventListener('click', () => {
  alert('Import functionality coming soon!');
});
document.getElementById('export-btn').addEventListener('click', () => {
  try {
    const playlist = loadPlaylist();
    const blob = new Blob([JSON.stringify(playlist, null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'mixtape_playlist.json';
    a.click();
  } catch (err) {
    logError("Export playlist error", err);
    alert('Error exporting playlist.');
  }
});
