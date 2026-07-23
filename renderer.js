const urlInput = document.getElementById("url-input");
const checkButton = document.getElementById("check-button");
const status = document.getElementById("status");

const appContainer = document.querySelector(".app-container");
const hamburgerBtn = document.getElementById("hamburger-btn");
const navOverlay = document.getElementById("nav-overlay");
const NAV_BREAKPOINT = 700;

function openNav() {
  appContainer.classList.add("nav-open");
}

function closeNav() {
  appContainer.classList.remove("nav-open");
}

hamburgerBtn.addEventListener("click", () => {
  appContainer.classList.toggle("nav-open");
});

navOverlay.addEventListener("click", closeNav);

document.querySelectorAll(".nav-item").forEach((item) => {
  item.addEventListener("click", () => {
    if (window.innerWidth <= NAV_BREAKPOINT) closeNav();
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth <= NAV_BREAKPOINT) {
    closeNav();
  }
});

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

urlInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") checkButton.click();
});