import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login'
import Register from './components/Register/Register';
import Comments from './components/Comments/Comments';
import ImagePage from './components/ImagePage/ImagePage';
import Posts from './components/Posts/Posts';
import Signup from './components/Signup/Signup';
import Home from './components/Home/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/images" element={<ImagePage />} />
        <Route path="/posts" element={<Posts />} />
      </Routes>
    </Router>
  );
}

export default App;
