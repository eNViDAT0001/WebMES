import Footer from "./components/Footer/footer";
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
