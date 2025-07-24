import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
// import Jaya from './components/Jaya.jsx'
// import Lava from './components/Lava.jsx'
// import Kusa from './components/Kusa.jsx'
// import App1 from './props/Basicprops/App1.jsx'
// import App2 from './props/Defaultprops/App2.jsx'
// import NitishBatting from './UseState/App3.jsx'
// import ArjunBatting from './UseState/counter.jsx'

// import MirrorInput from './UseState/MirrorInput.jsx'
// import Shreya from './Monday/shortcircuit.jsx'
// import Sai from './Monday/ternary.jsx'
// import App4 from './Monday/app4.jsx'
// import StudentList from './Monday/StudentList.jsX'
// import App5 from './formvalid/App5.jsx'
// import Loginpage from './formvalid/Loginpage.jsx'
// import RegisterPage from './formvalid/Registerpage.jsx'
// import Dashboard from './formvalid/Dashboard.jsx'
// import Effect from './UseEffect/Effect.jsx'
// import Salaar from './UseEffect/salaar.jsx'
// import ProductList from './UseEffect/Fetch.jsx'
// import App6 from './Route/App6'
// import App7 from './Route/App7'
import Lift from './UseRef/Lift'
// import Calc from './UseRef/Calc'
import Timer from './UseRef/Timer'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  {/* <App7/> */}
  {/* <Lift/> */}
  {/* <Calc/> */}
  <Timer/>
  </BrowserRouter>
  //  <StrictMode>
  //   <App />
  //   <Jaya/>
  //   <Lava/>
  //   <Kusa/>
  //    <App1/> 
  //    { <App2/>
  //   <NitishBatting/>
  //   <ArjunBatting/> 
  //     <MirrorInput>
  //   <Shreya/>
  //   <Sai/> 
  //     <App4/>
  //   <StudentList/>
  //    <App5/> 
  //     <Loginpage/>
  //   <RegisterPage/>
  //   <Dashboard/> 
  //   <Effect />
  //   <Salaar/> 
  //   <ProductList />
  //   // <App6/>
  // </StrictMode> 
  

);
