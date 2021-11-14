import Author from './Author';
import Main from './Main';
import Book from './Book';

import './Main.css';
import {
  Routes,
  BrowserRouter,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/book/:bookUrl" element={<Book />} />
        <Route path="/book/author/:url" element={<Author />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
