// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from "./components/about";

// function App() {
//   return (
//     <BrowserRouter> 
//     <Routes>
//        <Route path= "/" element={<layout />}>
//             <Route index element={<home />} />
//             <Route path="about-us" element={<About />} />  
//             <Route path="services" element={<services />} />
//             <Route path="gallary" element={<gallary />} />
//             <Route path="contact" element={<contact />} />
                      
//         </Route>
//     </Routes>
        
//     </BrowserRouter>
//   );
// }
// export default App;





// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// import Layout from "./Layout";

// import Homepage from "./components/Homepage";
// import About from "./components/About";
// import Gallary from "./components/Gallary";
// import Services from "./components/services";
// import Contact from "./components/Contact";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Homepage />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//       {
//         path: "gallery",
//         element: <Gallary />,
//       },
//       {
//         path: "services",
//         element: <Services />,
//       },
//       {
//         path: "contact",
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

// function App() {
//   return <RouterProvider router={router} />;
// }

// export default App;
