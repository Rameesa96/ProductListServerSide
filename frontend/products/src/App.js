import logo from './logo.svg';
import './App.css';
import Allcategories from './Pages/Allcategories/Allcategories';
import { Routes, Route } from "react-router-dom";
import Subcategory from './Pages/Subcategory/Subcategory';
import Subsubcategory from './Pages/Subsub/Subsubcategory';
import Categorynot from './Pages/categorynotfound/Categorynot';
import SubElectronic from './Pages/Subcategory/SubElectronic';
function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Allcategories/>} />
          <Route path='/sub' element={<Subcategory/>}/>
          <Route path='/subelect' element={<SubElectronic/>}/>
          <Route path='/subsub' element={<Subsubcategory/>}/>
          <Route path='/noelement' element={<Categorynot/>}/>
      </Routes>
    </div>
  );
}

export default App;
