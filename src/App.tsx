import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import WebsiteLandingPage from "./pages/website/landing-page/landing-page"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<WebsiteLandingPage />} />
      </Routes>
    </Router>
  )
}

export default App;
