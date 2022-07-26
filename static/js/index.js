async function sendUrl(url, data) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),

  });
  return response.json();
}

function showShortUrl(shortUrl, sendButton) {
  const shortUrlContainer = document.createElement('div');
  const shortUrlText = document.createElement('a');
  shortUrlText.innerText = `${window.location.href}/url/${shortUrl}`;
  shortUrlText.href = `/url/${shortUrl}`;
  shortUrlContainer.append(shortUrlText);
  sendButton.after(shortUrlContainer);
}

function bindSendButton() {
  const sendButton = document.querySelector('button#send-button');
  sendButton.addEventListener('click', async (event) => {
    const urlField = document.querySelector('input.url-input-field');
    const response = await sendUrl('/url', { url: urlField.value });
    showShortUrl(response.shortUrlHash, event.target);
    event.preventDefault();
  });
}

bindSendButton();
