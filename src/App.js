import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import AuthProvider from './Auth/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path={"/"} element={<Home />} />
          <Route exact path={"/login"} element={<Login />} />
          <Route exact path={"/signup"} element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
