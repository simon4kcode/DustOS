function loadSetUp() {
  const savedBg = localStorage.getItem("selectedBackground");
  const savedTheme = localStorage.getItem("selectedTheme");
  document.getElementById(
    "background"
  ).style.backgroundImage = `url(${savedBg})`;
  applyTheme(savedTheme);
}
function applyTheme(theme) {
  const root = document.documentElement;

  if (theme === "theme1") {
    root.style.setProperty("--mainTextColor", "#000000");
    root.style.setProperty("--mainBackground", "#ffffff12");
    root.style.setProperty("--buttonBackground", "#98989829");
    root.style.setProperty("--mainBorderColor", "#000000");
    root.style.setProperty("--mainPlaceholderColor", "#d4d4d4");
  } else if (theme === "theme2") {
    root.style.setProperty("--mainTextColor", "#d1d1d1");
    root.style.setProperty("--mainBackground", "#ffffff12");
    root.style.setProperty("--buttonBackground", "#ffffff29");
    root.style.setProperty("--mainBorderColor", "#747474");
    root.style.setProperty("--mainPlaceholderColor", "#d4d4d4");
  } else if (theme === "theme3") {
    root.style.setProperty("--mainTextColor", "#d1d1d1");
    root.style.setProperty("--mainBackground", "#ffffff12");
    root.style.setProperty("--buttonBackground", "#ffffff29");
    root.style.setProperty("--mainBorderColor", "#747474");
    root.style.setProperty("--mainPlaceholderColor", "#d4d4d4");
  }
}
loadSetUp();

function LoadUserName() {
  let Name = localStorage.getItem("Name") || "Guest";
  document.getElementById("NamePlaceholder").textContent = Name;
}
LoadUserName();

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString(); 
  document.getElementById('timeDisplay').textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime(); 

function showTabs() {
  const win = new LunaWindow({
    title: "Galaxy Browser",
    x: 50,
    y: 50,
    width: 800,
    height: 600,
    content: `${window.location.origin}/tabs`,
  });
    win.show();
}
function showGames() {
  const win = new LunaWindow({
    title: "Games",
    x: 100,
    y: 80,
    width: 800,
    height: 500,
    content: `${window.location.origin}/g`,
  });
    win.show();
}
function showApps() {
  const win = new LunaWindow({
    title: "Apps",
    x: 200,
    y: 0,
    width: 800,
    height: 500,
    content: `${window.location.origin}/a`,
  });
    win.show();
}
function showSettings() {
  const win = new LunaWindow({
    title: "Settings",
    x: 0,
    y: 0,
    width: 900,
    height: 600,
    content: `${window.location.origin}/settings`,
  });
    win.show();
}
