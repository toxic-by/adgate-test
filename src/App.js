import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Main from "./pages/home/home";
import Profile from "./pages/profile/profile";
import Login from "./pages/login/login";
import News from "./pages/news/news";
import PrivateRoute from "./components/privateRoute/privateRoute";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="/profile"
                    element={
                        <PrivateRoute>
                            <Profile />
                        </PrivateRoute>
                    }
                />
                <Route path="/news" element={<News />} />
                <Route path="*" element={<p>There's nothing here: 404!</p>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
