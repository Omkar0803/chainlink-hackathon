import { Home, ProductResult, Category, Product } from "./pages";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/category" exact element={<Category />} />
          <Route path="/result/:id" exact element={<ProductResult />} />
          <Route path="/product" exact element={<Product />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
