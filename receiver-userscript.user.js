// ==UserScript==
// @name         Stake Bonus Code Receiver
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Receives and auto-claims bonus codes via postMessage relay
// @match        https://stake.*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const relayIframe = document.createElement("iframe");
    relayIframe.src = "https://yourusername.github.io/relay.html"; // Replace with your real URL
    relayIframe.style.display = "none";
    document.body.appendChild(relayIframe);

    window.addEventListener("message", (event) => {
        const msg = event.data;
        if (msg?.type === "stake_code" && typeof msg.code === "string") {
            console.log("[AutoClaimer] Received bonus code:", msg.code);
            handleBonusCode(msg.code); // Replace with your claiming function
        }
    });
})();