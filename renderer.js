const urlInput = document.getElementById("url-input");
const checkButton = document.getElementById("check-button");
const status = document.getElementById("status");

checkButton.addEventListener("click", async () => {
  const url = urlInput.value.trim();

  if (!url) {
    status.textContent = "Enter a URL first.";
    status.className = "error";
    return;
  }

  status.textContent = "Checking...";
  status.className = "";
  checkButton.disabled = true;

  const isLive = await window.api.checkLive(url);

  checkButton.disabled = false;

  if (isLive) {
    status.textContent = "It's live! Opening...";
    status.className = "success";
    window.api.openApp(url);
  } else {
    status.textContent = "Not running. Start it with 'npx expo start' and try again.";
    status.className = "error";
  }
});

// Also let people just press Enter in the input box.
urlInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") checkButton.click();
});
