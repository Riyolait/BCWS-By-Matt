# 🚀 Bitcoin Blockchain Simulator

Welcome to the Bitcoin Blockchain Simulator! This app is a simple demonstration of how transactions between two users, Alice and Bob, can be recorded on a blockchain using a simulated Bitcoin-like ledger. 🧑‍💻

## 🎯 Purpose of the App

The purpose of this app is to provide an interactive visualization of blockchain technology. It simulates transactions between two users, Alice and Bob, and keeps track of these transactions in blocks, creating a basic blockchain structure. It's an educational tool to understand how a blockchain can be structured and used.

## 🛠️ Technologies Used

This project leverages a variety of modern technologies to simulate the blockchain and provide an interactive user experience:

- React ⚛️ for the frontend user interface
- Styled-Components for styling the UI
- Node.js and Express for the backend API that handles session saving
- ShaderGradient for background visual effects
- Fetch API for handling requests between the frontend and backend

## 🚀 How to Run the App

Follow these steps to get the simulator up and running on your local machine:

1. Clone the repository:

```
git clone https://github.com/Riyolait/BCWS-By-Matt.git
cd BCWS-By-Matt
```

2. Install the dependencies:

```
npm install
```

3. Start the backend server:

```
cd blockchain-simulator-backend
npm start
```

The server will handle the session storage (saving the blockchain state).

4. Start the React frontend:

```
npm run dev
```

This will launch the app in your browser. Open http://localhost:5173 to view the simulator.
