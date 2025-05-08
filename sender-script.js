// sender-script.js
const relayIframe = document.createElement("iframe");
relayIframe.src = "https://yourusername.github.io/relay.html"; // Replace with your real URL
relayIframe.style.display = "none";
document.body.appendChild(relayIframe);

function sendBonusCode(code) {
    if (!code || typeof code !== "string") return;
    relayIframe.contentWindow.postMessage({ type: "stake_code", code }, "*");
    console.log("[Relay] Sent bonus code:", code);
}