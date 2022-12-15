

//import components
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import FinalPage from "./Pages/FinalPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <section className="main-section">
        <FinalPage/>
        
      </section>
    </div>
  );
}

export default App;
