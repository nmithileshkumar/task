import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import Products from './components/Products';
import { Provider } from 'react-redux';
import store from './store';
import Productdetail from './components/Productdetail';
import Copyright from './components/Copyright';
import './App.css';

function App() {
  return (
    <>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Products />}></Route>
          <Route path="/productdetail" element={<Productdetail />}></Route>
        </Routes>
      </BrowserRouter>
      </Provider>
      <Copyright />
    </>
  );
}

export default App;
