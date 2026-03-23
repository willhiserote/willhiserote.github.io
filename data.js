(function () {
  const configured = window.BOT_WEB_APP_URL;
  if (configured && typeof configured === 'string' && configured.trim()) {
    window.botWebAppUrl = configured.trim();
    return;
  }
  window.botWebAppUrl = 'https://script.google.com/macros/s/AKfycbxdEtFLVYw_2yUtUiGIrt1dMyXme5ZhvKZJZO-80sV7dJEnDZDTutoKA1QMGuPmZve8/exec;
})();

function isAppsScriptUrl(url) {
  if (!url) return false;
  return /script\.google\.com/.test(url) || /\/exec$/.test(url) || /\/dev$/.test(url);
}

function normalizeBaseUrl(url) {
  return String(url || '').replace(/\/+$/, '');
}

async function requestJson(url, options) {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  const json = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(json.error || 'Request failed');
  }
  return json;
}

async function fetchInventory() {
  const baseUrl = normalizeBaseUrl(window.botWebAppUrl);
  if (isAppsScriptUrl(baseUrl)) {
    return requestJson(`${baseUrl}?action=inventory`);
  }
  return requestJson(`${baseUrl}/inventory`);
}

async function adjustInventory(payload) {
  const baseUrl = normalizeBaseUrl(window.botWebAppUrl);
  if (isAppsScriptUrl(baseUrl)) {
    return requestJson(baseUrl, {
      method: 'POST',
      body: JSON.stringify({ action: 'adjust', ...payload })
    });
  }
  return requestJson(`${baseUrl}/inventory/adjust`, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}

async function submitOrder(payload) {
  const baseUrl = normalizeBaseUrl(window.botWebAppUrl);
  if (isAppsScriptUrl(baseUrl)) {
    return requestJson(baseUrl, {
      method: 'POST',
      body: JSON.stringify({ action: 'order', ...payload })
    });
  }
  return requestJson(`${baseUrl}/orders`, {
    method: 'POST',
    body: JSON.stringify(payload)
  });
}
