# 🎮 Nim Game AI

## 📌 Project Description

This project is an implementation of the **Nim game**, where an artificial intelligence plays against a human player. The goal is to develop a **computer-controlled opponent that always wins** using an optimal strategy.

The project was designed as part of an academic assignment focusing on **game theory and algorithmic optimization**. The objective was to implement:
- A **functional game engine** that follows the standard Nim game rules.
- A **winning AI strategy** capable of making optimal moves.
- A **web interface** to allow users to play against the AI.

## 🌍 App Overview


- **🏠 Home (`/`)** – Introduction and access to the game.
- **🕹️ Game (`/game`)** – The main game interface where users play against the AI.
- **📖 Rules (`/rules`)** – Explanation of the Nim game rules.

### 🏆 Features:
- **Start game** with a number of matches of your choice.
- **Play** with matches going from 1 to 3.
- **Start new game** start over a new game while you are already in playing. 
- The AI **always plays optimally** and aims to **win every game**.

## 🛠️ Technologies & Tools

### 🔹 Frontend:
- **Typescript**
- **Next.js** 
- **React** 
- **Chakra UI** 

### 🔹 Backend:
- **Python**
- **FastAPI**


## 🧠 AI Strategy: Always Winning

1. The AI calculates the number of matches remaining.
2. It ensures that after its move, the remaining matches follow the formula **1 + 4n** (where `n` is an integer).
3. This forces the player into a **no-win situation**, as they will eventually be left with 1 match and must take the last one.

If the player starts with a **number of matches that is not already in the form 1 + 4n**, the AI will **immediately take control** and guarantee a win.


---

