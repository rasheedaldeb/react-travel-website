import './App.css'
// 
// import Hero from './assets/Components/Hero/Hero'
// import Services from './assets/Components/Services/Services.jsx'
// import ExplorSection from './assets/Components/ExplorSection/ExplorSection.jsx'
// import TrendingSection from './assets/Components/TrendingSection/TrendingSection.jsx'
// import Footer from './assets/Components/Footer/Footer.jsx'
// import Test from './assets/Components/Test/Test.jsx'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import PackagesPage from './Pages/PackagesPage.jsx'
import ServicesPage from './Pages/ServicesPage.jsx'
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        <Route path='/packages' element={<PackagesPage/>}/>
        <Route path='/services' element={<ServicesPage/>}/>
      </Routes>
    </>
  )
}
export default App
