import { initializeApp } from "firebase/app";
console.log("1");

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
console.log("2");

import { Html5Qrcode } from "html5-qrcode";
console.log("3");

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  storageBucket: "...",
  messagingSenderId: "...",
  appId: "...",
  measurementId: "..."
};

console.log("4");

const app = initializeApp(firebaseConfig);
console.log("5");

const db = getFirestore(app);
console.log("6");

const scanBtn = document.getElementById("scan-btn");
console.log("Button:", scanBtn);

scanBtn.addEventListener("click", async () => {
    console.log("Button clicked!");

    const scanner = new Html5Qrcode("reader");

    try {
        await scanner.start(
            { facingMode: "environment" },
            {
                fps: 10,
                qrbox: 250
            },
            (decodedText) => {
                console.log("Scanned:", decodedText);
                scanner.stop();
            },
            (errorMessage) => {
                // Ignore scan failures
            }
        );

        console.log("Scanner started!");
    } catch (err) {
        console.error("Scanner failed:", err);
    }
});