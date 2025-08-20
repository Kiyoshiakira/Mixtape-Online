// Mixtape storage and UI logic for the extension popup

function renderMixtapeList() {
  chrome.storage.local.get(['mixtape'], (result) => {
    const mixtape = result.mixtape || [];
    const list = document.getElementById('mixtape-list');
    list.innerHTML = '';

    if (mixtape.length === 0) {
      list.innerHTML = '<span style="opacity:0.7;">No videos added yet.</span>';
      return;
    }

    mixtape.forEach((url, idx) => {
      const item = document.createElement('div');
      item.className = 'mixtape-item';

      const urlSpan = document.createElement('span');
      urlSpan.className = 'mixtape-url';
      urlSpan.textContent = url;

      const removeBtn = document.createElement('button');
      removeBtn.className = 'remove-btn';
      removeBtn.textContent = 'Remove';
      removeBtn.onclick = () => removeMixtapeItem(idx);

      item.appendChild(urlSpan);
      item.appendChild(removeBtn);
      list.appendChild(item);
    });
  });
}

function addMixtapeItem(url) {
  if (!url.trim()) return;
  chrome.storage.local.get(['mixtape'], (result) => {
    let mixtape = result.mixtape || [];
    // Prevent duplicates
    if (mixtape.includes(url)) return;
    mixtape.push(url);
    chrome.storage.local.set({ mixtape }, renderMixtapeList);
    document.getElementById('add-url').value = '';
  });
}

function removeMixtapeItem(idx) {
  chrome.storage.local.get(['mixtape'], (result) => {
    let mixtape = result.mixtape || [];
    mixtape.splice(idx, 1);
    chrome.storage.local.set({ mixtape }, renderMixtapeList);
  });
}

document.getElementById('add-btn').addEventListener('click', () => {
  const url = document.getElementById('add-url').value;
  addMixtapeItem(url);
});

document.getElementById('add-url').addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addMixtapeItem(e.target.value);
  }
});

// Render mixtape list on popup open
document.addEventListener('DOMContentLoaded', renderMixtapeList);