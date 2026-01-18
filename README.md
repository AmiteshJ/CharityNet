CharityNet

CharityNet is a location-based donation ecosystem designed to bridge the "lack of connection" between surplus resources and unmet social needs. By connecting donors—both individuals and restaurants—with nearby verified NGOs, the platform ensures that perfectly edible food and essential items like clothes, books, and stationery reach those in need efficiently.

🌟 Key Features

Interactive Map Discovery: Real-time location-based NGO discovery using interactive maps to find the nearest help.


Verified NGOs: Integration with NGO Darpan (NITI Aayog) data ensures donors interact only with legitimate, government-registered entities.


Multi-Category Support: Specialized flows for "Food For All" (surplus restaurant food) and "Community Essentials" (clothing, books, toys, etc.).


Real-time Tracking: Secure donation request system with history tracking powered by Firebase.


Dignified Impact: Focuses on the redistribution of usable and dignified resources to minimize waste and maximize social utility.

🛠️ Technical Stack
Frontend: React.js with Vite

Styling: Antigravity-influenced UI & Tailwind CSS

Backend/Database: Firebase Realtime Database

Authentication: Firebase Auth (Google Sign-In)

Maps: Leaflet.js

📦 Required Node Modules
To run this project, ensure you have the following dependencies installed. You can install them all at once using the command below.

Core Dependencies:

react & react-dom: Core library for building the UI.

react-router-dom: For seamless navigation between pages.

firebase: To handle Authentication and the Realtime Database.

leaflet & react-leaflet: For the interactive map interface.

lucide-react: For a consistent and modern icon set.

Development Tools:

vite: For a fast development environment and optimized builds.

Bash
npm install firebase react-router-dom leaflet react-leaflet lucide-react
🚀 Getting Started
Clone the Repository:

Bash
git clone https://github.com/AmiteshJ/CharityNet.git
cd CharityNet
Setup Environment Variables: Create a .env file in the root directory and add your Firebase credentials:

Code snippet

VITE_FIREBASE_API_KEY="AIzaSyBlP91iQoSxaWxk-S1WbxrT7ic5bu4vIoc"
VITE_FIREBASE_AUTH_DOMAIN="charitynet-6ebdc.firebaseapp.com"
VITE_FIREBASE_DATABASE_URL="https://charitynet-6ebdc-default-rtdb.firebaseio.com"
VITE_FIREBASE_PROJECT_ID="charitynet-6ebdc"
VITE_FIREBASE_STORAGE_BUCKET="charitynet-6ebdc.firebasestorage.app"
VITE_FIREBASE_MESSAGING_SENDER_ID="197476262169"
VITE_FIREBASE_APP_ID="1:197476262169:web:0c05f2ecce43f129c7a588"
VITE_FIREBASE_MEASUREMENT_ID="G-JDBJGKRLC8"
Run the Project:

Bash

npm install

npm run dev

Give A Visit : https://charity-net-pqh3.vercel.app/
