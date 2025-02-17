# React Counter App

A simple counter application built using React.js and styled with Tailwind CSS. The app allows users to increment and decrement a counter value.

## 🚀 Features
- Increment and decrement functionality using React's `useState` hook.
- Styled using Tailwind CSS for a modern and responsive UI.
- Interactive buttons with hover effects.
- `Profile` component to display user information.
- `Header` component to display the application title.

## 📂 Project Structure
```
react-counter-app/
│── src/
│   │── components/
│   │   ├── Counter.jsx
│   │   ├── Profile.jsx
│   │   ├── Header.jsx
│   │── App.jsx
│   │── index.css
│   │── main.jsx
│── public/
│── package.json
│── tailwind.config.js
│── README.md
```

## 🛠️ Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/PLP-Full-Stack-Development-MERN/week-3-react-js-assignment-LEAKONO.git
cd react-assignment
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Start the Development Server
```sh
npm run dev
```

This will start the app at `http://localhost:5173` (or another available port).

## 📝 Usage
- Click the **Increment** button to increase the count.
- Click the **Decrement** button to decrease the count.
- View user details using the `Profile` component.
- See the application title in the `Header` component.

## 🖥️ Code Overview
### `Counter.jsx`
Contains the counter functionality, allowing users to increment and decrement values.

### `Profile.jsx`
Displays user information such as name and email.

### `Header.jsx`
Shows the application title.

### `App.jsx`
```jsx
import React from 'react';
import Counter from './components/Counter';
import Profile from './components/Profile';
import Header from './components/Header';

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <Header />
      <Profile name="John Doe" email="john@example.com" />
      <Counter />
    </div>
  );
}

export default App;
```

## 🛠️ Built With
- React.js
- Tailwind CSS
- Vite (for fast development server)

## 📌 Future Improvements
- Add a **reset** button.
- Implement a dark mode.
- Add animations for smooth transitions.



