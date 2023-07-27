import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navigation from './components/Navigation';
import Detail from './pages/Detail';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Tambah from './pages/Tambah';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/detail/:id" exact element={<Detail />} />
          <Route path="/edit/:id" exact element={<Edit />} />
          <Route path="/tambah" exact element={<Tambah />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;