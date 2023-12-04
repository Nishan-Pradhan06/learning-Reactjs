
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/homepage'
import AboutPage from './pages/aboutpage'
import SkillsPage from './pages/SkillsPage'
function App() {
  //internal css use camel case property only for internal css
  const myStyle = {
    backgroundColor: 'orange'
  }

  return (
    <BrowserRouter>
      <Routes>


        {/* routing */}
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/skills' element={<SkillsPage />} />


      </Routes>
    </BrowserRouter>
  )
}

export default App
