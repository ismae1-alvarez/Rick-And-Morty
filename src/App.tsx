import { Fragment } from "react";
import { Suspense } from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import Location from "./page/Location";
import Characters from "./page/character/Characters";
import Episodes from "./page/episodes/Episodes";



function App() {
  return(
    <Fragment>
      <BrowserRouter>
      <Suspense fallback={<div>Cargando...</div>}>
        <Routes>
          <Route path="/" element={<Location/>}/>
          <Route path="/characters" element={<Characters/>}/>
          <Route path="/episodes" element={<Episodes/>}/>
        </Routes>
      </Suspense>
    </BrowserRouter>

    </Fragment>
  )  
}

export default App;
