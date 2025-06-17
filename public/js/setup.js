console.log("setup activated")
function checkForName() {
  let name = localStorage.getItem("Name");
  let selectedBackground = localStorage.getItem("selectedBackground");
  let proxyType = localStorage.getItem("proxyType");

  console.log("Name:", name);
  console.log("Selected Background:", selectedBackground);
  console.log("Proxy Type:", proxyType);

  if (name !== null && selectedBackground !== null && proxyType !== null) {
    document.location.href = "main/";
  } else {
    console.log("Not all values are set, continuing...");
  }
}
function checkStepTwo() {
  let proxyType = localStorage.getItem("proxyType");
  if (proxyType === null) {
    stepTwoIncomplete()
  }
  else {
    stepTwoLeave()
  }
}
function GetUserName() {
  document.getElementById("name").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      const userNameInput = document.getElementById("name").value;
      localStorage.setItem("Name", userNameInput);
      console.log("Your name:", localStorage.getItem("Name"));
    }
  });
}
GetUserName();

function LoadUserName() {
  document.getElementById("name").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      let Name = localStorage.getItem("Name") || "Guest";
      document.getElementById("NamePlaceholder").textContent = Name;
    }
  });
}
LoadUserName();

function ProxyType() {
  document
    .getElementById("proxySelector")
    .addEventListener("change", function () {
      localStorage.setItem("proxyType", this.value);
      console.log("Stored proxyType:", localStorage.getItem("proxyType"));
    });
}
ProxyType();

document.addEventListener("DOMContentLoaded", () => {
  const savedBg = localStorage.getItem("selectedBackground");
  const savedTheme = localStorage.getItem("selectedTheme");

  if (savedBg) {
    document.getElementById("background").style.backgroundImage = `url(${savedBg})`;
  }

  if (savedTheme) {
    applyTheme(savedTheme);
  }
});

document.querySelectorAll('.bgAll').forEach(bg => {
  console.log("found bg")
  bg.addEventListener('click', () => {
    const bgUrl = bg.dataset.bg;
    const theme = bg.dataset.theme;
    
    localStorage.setItem("selectedBackground", bgUrl);
    localStorage.setItem("selectedTheme", theme);
    document.getElementById("background").style.backgroundImage = `url(${bgUrl})`;

    applyTheme(theme);
  });
});

function applyTheme(theme) {
  const root = document.documentElement;

  if (theme === "theme1") {
    root.style.setProperty('--mainTextColor', '#000000');
    root.style.setProperty('--mainBackground', '#ffffff12');
    root.style.setProperty('--buttonBackground', '#98989829');
    root.style.setProperty('--mainBorderColor', '#000000');
    root.style.setProperty('--mainPlaceholderColor', '#d4d4d4');
  } else if (theme === "theme2") {
    root.style.setProperty('--mainTextColor', '#d1d1d1');
    root.style.setProperty('--mainBackground', '#ffffff12');
    root.style.setProperty('--buttonBackground', '#ffffff29');
    root.style.setProperty('--mainBorderColor', '#747474');
    root.style.setProperty('--mainPlaceholderColor', '#d4d4d4');
  } else if (theme === "theme3") {
    root.style.setProperty('--mainTextColor', '#d1d1d1');
    root.style.setProperty('--mainBackground', '#ffffff12');
    root.style.setProperty('--buttonBackground', '#ffffff29');
    root.style.setProperty('--mainBorderColor', '#747474');
    root.style.setProperty('--mainPlaceholderColor', '#d4d4d4');
  }
}