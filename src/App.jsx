import Feed from "./pages/Feed"


import "./App.css"
import { Footer } from "./components"


const App = () => {
  return (
    <div>
      <div className="container mx-auto px-3">
        <Feed />
      </div>
      <Footer />
    </div>
  )
}

export default App