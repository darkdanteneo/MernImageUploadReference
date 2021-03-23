import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/navbar.component";
import ImageList from "./components/imageList.component";
import AddImage from "./components/AddImage.component";
function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ImageList} />
        <Route path="/upload" component={AddImage} />
      </div>
    </Router>
  );
}

export default App;
