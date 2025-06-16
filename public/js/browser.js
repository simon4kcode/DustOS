const input = document.querySelector("input");
let proxyType = localStorage.getItem("proxyType");
input.setAttribute("data-service", proxyType);
