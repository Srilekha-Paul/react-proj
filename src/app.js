import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/about";

function App() {
  return (
    <BrowserRouter> 
    <Routes>
       <Route path= "/" element={<layout />}>
            <Route index element={<home />} />
            <Route path="about-us" element={<About />} />  
            <Route path="services" element={<services />} />
            <Route path="galary" element={<galary />} />
            <Route path="contact" element={<contact />} />
                      
        </Route>
    </Routes>
        
    </BrowserRouter>
  );
}
export default App;