import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import ListedBook from './Components/ListedBook/ListedBook';
import PageToRead from './Components/PageToRead/PageToRead';
import BookDetails from './Components/BookDetails/BookDetails';
import NotFound from './Components/NotFound/NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/listed-books' element={<ListedBook></ListedBook>}></Route>
            <Route path='/pageToRead' element={<PageToRead></PageToRead>}></Route>
            <Route path='/details/:title/:id' element={<BookDetails></BookDetails>}></Route>
          </Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
