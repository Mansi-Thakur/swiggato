import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Components/Header.js";
import { Home } from "./Components/Home.js";
import Listing from "./Components/Listing.js";
import  Detail  from "./Components/Detail.js";
import store from "./Store/placeStore.js" 
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listing/:category" element={<Listing />} />
          <Route path="/details/:place_id" element={<Detail />} />
        </Routes>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
