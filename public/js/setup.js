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
ProxyType()