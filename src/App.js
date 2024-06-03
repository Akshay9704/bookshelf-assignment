import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Books from "./components/books";
import BookShelf from "./components/bookshelf";
import Header from "./components/header";
import BookContextProvider from "./context/bookContextProvider";

function App() {
  return (
    <>
      <Router>
        <Header />
        <BookContextProvider>
          <Routes>
            <Route exact path="/" element={<Books />} />
            <Route exact path="/bookshelf" element={<BookShelf />} />
          </Routes>
        </BookContextProvider>
      </Router>
    </>
  );
}

export default App;
