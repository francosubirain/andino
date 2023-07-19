import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from "../src/componets/NavBar/NavBar";
import ItemListContainer from "../src/componets/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../src/componets/ItemDetailContainer/ItemDetailContainer";
import Error404 from "../src/componets/Error404";


function App() {
  return (
        <div >      
          <BrowserRouter >
            <NavBar />
            <Routes>
              <Route path={"/"} element={<ItemListContainer />} />
              <Route path={"/category/:id"} element={<ItemListContainer />} />
              <Route path={"/item/:id"} element={<ItemDetailContainer/>} />
              <Route path={"*"} element={<Error404 />} />
            </Routes>           
          </BrowserRouter>
          


         
        </div>
  );
}

export default App;