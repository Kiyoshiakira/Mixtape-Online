const { app, BrowserWindow } = require('electron');
const path = require('path');

let mainWindow;

// Register custom protocol for Google sign-in callback
app.setAsDefaultProtocolClient('mixtape');

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    icon: path.join(__dirname, 'assets', 'logo.png')
  });

  mainWindow.loadFile(path.join(__dirname, 'src', 'index.html'));
}

app.whenReady().then(createWindow);

// Handle protocol callback from browser (mixtape://auth?token=XYZ)
app.on('open-url', (event, url) => {
  event.preventDefault();
  // Extract token from URL
  const match = url.match(/token=([^&]+)/);
  if (match && mainWindow) {
    const token = match[1];
    mainWindow.webContents.send('google-token', token);
  }
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
