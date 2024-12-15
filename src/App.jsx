import 'react-toastify/dist/ReactToastify.css';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router';
import Main from './Components/Main/Main';
import Home from './Components/Home/Home';
import ListedBook from './Components/ListedBook/ListedBook';
import PageToRead from './Components/PageToRead/PageToRead';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main></Main>}>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/listed-book' element={<ListedBook></ListedBook>}></Route>
            <Route path='/pageToRead' element={<PageToRead></PageToRead>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
