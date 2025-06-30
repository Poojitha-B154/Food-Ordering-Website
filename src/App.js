
import './App.css';
import Home from './Components/Home';
import Footer from './Components/Layout/Footer';
import Header from './Components/Layout/Header';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
       <Header />
         <div className='container container-fluid'>
          <Routes>
            {/*  Router: it is a navigator of the web application, it helps the app to understand and respond the web address i.e. url */3}
            <Route path ="/" element={<Home/>} exact /> 
          </Routes>
        
         </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
