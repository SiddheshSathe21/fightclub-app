// ============================================================
//  FIREBASE CONFIGURATION
//  Replace every "REPLACE_WITH_YOUR_..." value below with
//  the real values from your Firebase project.
//
//  How to get your config:
//  1. Go to https://console.firebase.google.com
//  2. Open your project
//  3. Click the gear icon ⚙ → Project settings
//  4. Scroll to "Your apps" → click the Web app (</>)
//  5. Copy the firebaseConfig object and paste the values below
// ============================================================

const firebaseConfig = {
  apiKey: "AIzaSyC81wyO92bBHY1YrVE3t9UAEI5IiNoBV6o",
  authDomain: "fightclub-app-4ee48.firebaseapp.com",
  projectId: "fightclub-app-4ee48",
  storageBucket: "fightclub-app-4ee48.firebasestorage.app",
  messagingSenderId: "828298095677",
  appId: "1:828298095677:web:aa8a6efb44b4ddf6d70e54",
  measurementId: "G-WGM14M86JZ"
};

// ── Initialise Firebase ──────────────────────────────────────
try {
  const app  = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db   = firebase.firestore();

  // Enable offline data persistence (user data loads even without internet)
  db.enablePersistence().catch(() => {});

  // Make auth and db available to the whole app
  window._firebase = { auth, db };

  console.log("✅ Firebase initialised successfully");
} catch (e) {
  console.error("❌ Firebase init failed:", e.message);
  console.error("Check that all values in js/firebase-config.js are correct.");
  window._firebase = null;
}
