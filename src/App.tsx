import { Routes, Route ,useLocation} from "react-router-dom";
import { Landing } from "../pages/landing";
import { Details } from "../pages/details";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../lib/theme";
function App() {
  const location = useLocation();
  return (
    <ThemeProvider theme={theme}>
    
        <Routes key={location.pathname}>
          <Route path="/" element={<Landing  key={window.location.pathname}/>} />
          <Route path="/details/:id" element={<Details key={window.location.pathname} />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;
