import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MainRoute from "./routing/MainRoute";
import "./App.css";
function App() {
  return (
    <div className="page-container">
      <Header />
      <div className="body">
        <MainRoute></MainRoute>
      </div>
      <Footer />
    </div>
  );
}

export default App;
