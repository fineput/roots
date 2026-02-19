import './styles/main.scss'
import Home from './pages/Home.jsx'
import Tools from './pages/Tools.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header/Header'


function App() {
  return (
    <BrowserRouter>
      <Header/>

      <main className='content-wrapper'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/tools' element={<Tools />}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
