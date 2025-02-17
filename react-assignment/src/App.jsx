import Header from "./components/Header";
import Profile from "./components/Profile";
import Counter from "./components/Counter";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4 p-5">
      <Header />
      <Profile name="John Doe" email="john@example.com" />
      <Counter />
    </div>
  );
}
