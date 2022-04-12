import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App flex flex-col h-screen justify-between">
      <Navbar />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Footer />
    </div>
  );
}

export default App;
