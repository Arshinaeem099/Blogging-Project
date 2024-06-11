import "./App.css";
import BlogPage from "./BlogTab/blogPage";
import HomePage from "./HomeTab/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPage from "./HomeTab/AboutPage";
import LoginPage from "./SignInTab/LoginPage";
import store from "./Store/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/Home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/edit" element={<BlogPage />} />
            <Route path="/blogs/update" element={<BlogPage />} />
            <Route path="/blogs/delete" element={<BlogPage />} />
            <Route path="/logout" element={<LoginPage />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}

export default App;
