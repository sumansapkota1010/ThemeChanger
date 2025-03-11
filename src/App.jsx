
import './App.css'
import ToggleTheme from './component/ToggleTheme'
import ThemeContextProvider from './context/ThemeContextProvider'

function App() {


  return (
    <ThemeContextProvider>
      <ToggleTheme />
    </ThemeContextProvider>
  )
}

export default App
