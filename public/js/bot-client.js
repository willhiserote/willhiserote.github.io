(function () {
  const configured = window.BOT_WEB_APP_URL;
  if (configured && typeof configured === 'string' && configured.trim()) {
    window.botWebAppUrl = configured.trim();
    return;
  }
  window.botWebAppUrl = 'https://script.google.com/macros/s/AKfycbwmRoiJKTz8Musq8xheGUhxFW-p5Ft54KWvgxaPHp5KQVSBSFcRqyVt_RIJx0DgfNay2Q/exec;
})();

async function botRequest(options) {
  const response = await fetch(window.botWebAppUrl, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  const json = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(json.error || 'Request failed');
  return json;
}

async function fetchInventory() {
  const response = await fetch(`${window.botWebAppUrl}?action=inventory`);
  const json = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(json.error || 'Request failed');
  return json;
}

async function adjustInventory(payload) {
  return botRequest({
    method: 'POST',
    body: JSON.stringify({ action: 'adjust', ...payload })
  });
}

async function submitOrder(payload) {
  return botRequest({
    method: 'POST',
    body: JSON.stringify({ action: 'order', ...payload })
  });
}
