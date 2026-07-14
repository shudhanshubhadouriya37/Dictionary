import Dictionary from "./components/Dictionary";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <Navbar />

      <Dictionary />

      <Footer />

    </div>
  );
};

export default App;