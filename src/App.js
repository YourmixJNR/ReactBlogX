import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Layouts/Header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Header />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
