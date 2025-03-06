import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Landing } from "../pages/landing";
import { Details } from "../pages/details";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../lib/theme";
function App() {
  return (
    <ThemeProvider theme={theme}><Router>
    <Routes>
      <Route path="/" element={<Landing /> } />
      <Route  path="/details/:id" element={<Details/>} />
    </Routes>
  </Router></ThemeProvider>
    
  )
}

export default App
