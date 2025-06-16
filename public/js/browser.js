const input = document.getElementById("search");
let proxyType = localStorage.getItem("proxyType");
input.setAttribute("data-service", proxyType);


// Decodes proxy url
async function decodeIframeUrl() {
  const iframe = document.getElementById('web');
  const searchInput = document.getElementById('search');

  try {
    const currentUrl = iframe.contentWindow.location.href;
    const decoded = await chemical.decode(currentUrl, { service: "uv" });
    searchInput.value = decoded;
  } catch (error) {
    console.warn("Could not decode iframe URL:", error);
  }
}

// Run on page load
window.addEventListener('DOMContentLoaded', decodeIframeUrl);

// Automatically updates (I feel so smart figuring this out)
document.getElementById('web').addEventListener('load', decodeIframeUrl);