// import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import DemoGrid from "./DemoGrid"
// import NavBar from "./components/NavBar"
import AboutPage from "./pages/AboutPage";
import ScrollToTop from "./utils/ScrollToTop";
import HomePage from './pages/HomePage';

function App() {


  return (
    <div className="size-full flex flex-col items-center">
      <Router basename="/test-portfolio">
        <ScrollToTop/>
        <Routes>
          {/* Define routes using the "element" prop and JSX */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      {/* <NavBar setTabSelected={setTabSelected}/>
      <div className="contenar w-full flex justify-center pb-[80px] overflow-hidden">
        <div className="w-[1200px] max-lg:w-[800px] max-md:w-[375px]">
          <DemoGrid tabSelected={tabSelected}/>
        </div>

      </div> */}
      {/* <AboutPage /> */}
    </div>
  )
}

export default App
