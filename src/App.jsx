
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Detail from "./Pages/Detail";
import Favs from "./Routes/Favs";
import { useContextGlobal } from "./Components/utils/global.context";

function App() {

  const {state}= useContextGlobal()
  return (
      <div className={state.theme}>
        <div className="cuerpo">
              <Navbar/>
                <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/Contact' element={<Contact/>}/>
                  <Route path='/Detail/:id' element={<Detail/>}/>
                  <Route path='/Favoritos' element={<Favs/>}/>
                </Routes>
          
          <Footer/>

        </div>
         
      </div>
  );
}

export default App;
