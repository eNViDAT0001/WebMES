import Footer from "./components/footer/Footer";
import Header from "./components/header/Header"; 
import MainRoute from "./routing/MainRoute";
import './App.css';
function App() {
  
  return (
    <div className="App">
      <Header/>
      <MainRoute></MainRoute>
      <Footer/>
    </div>
  );
}

export default App;
