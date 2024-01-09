document.addEventListener("DOMContentLoaded", () => {
  const colorPicker = document.getElementById("colorPicker");

  colorPicker.addEventListener("input", () => {
    const color = colorPicker.value;
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { color: color });
    });
  });
});
