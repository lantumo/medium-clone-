import { Routes, Route } from "react-router-dom"
import { Demo } from "./components/demo/Demo"
import { DemoHeader } from "./components/demo/DemoHeader";
import { Home } from "./components/home/Home"
import { HomeHeader } from "./components/home/HomeHeader";


function App() {
  const auth = false;
  return (
    <>
    {auth? <HomeHeader/> : <DemoHeader/>}
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/demo" element={<Demo/>}/>
     </Routes>
    </>
  )
}

export default App
