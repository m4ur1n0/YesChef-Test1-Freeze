import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/App.css'
import { RecipeProvider } from './context/RecipeContext'
import Header from './components/Layout/Header'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <RecipeProvider>
            <div className='home-page-wrapper flex flex-col'>
              <Header />
              <Home />
            </div>
          </RecipeProvider>
        } />
      </Routes>
    </Router>
  )
}

export default App
