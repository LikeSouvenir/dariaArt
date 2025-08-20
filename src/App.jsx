import { RouterProvider } from 'react-router-dom'
import './App.css'
import { AppProvider } from './core/Context'
import { router } from './core/Router'
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <AppProvider>
      <RouterProvider router={router}/>
    </AppProvider>    
  )
}

export default App
