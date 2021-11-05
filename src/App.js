import { BrowserRouter, Route } from 'react-router-dom'
import './App.scss'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import RoutesConfig from './config/RoutesConfig'

function App() {
  return (
    <BrowserRouter>
      <Route
        render={(props) => (
          <>
            <Header {...props} />
            <RoutesConfig />
            <Footer />
          </>
        )}
      />
    </BrowserRouter>
  )
}

export default App
