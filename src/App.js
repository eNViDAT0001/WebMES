import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header"; 
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
