import './App.css';
import Productlist from './Components/Productlist';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import { useState, useEffect} from 'react';
import CartList from './Components/CartList';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Singleproduct from './Components/Singleproduct';
import Orderpage from './Components/Orderpage';


function App() {
  const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch("http://localhost:8081/cart/all")
        .then((response)=> response.json())
        .then((result)=> {
          console.log(result)
          setProducts(result)
        });
    },[]);

    
  const[cart,setCart] = useState([]);
const addToCart =(data) =>{
// console.log(data);
setCart([...cart,data])
}
  
  return (
    <>
     <Navbar></Navbar>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={ <Header cartitem={cart.length} product={products}></Header>}>
     <Route index element={<Productlist pro={products} addToCart={addToCart}></Productlist>}/>
      <Route path='/cart' element={ <CartList pro={cart}></CartList>}/>
      <Route path='/item/:id' element={ <Singleproduct pro={products}></Singleproduct>}/>
      {/* <Route path="/" element={ <Orderpage/>}> */}
      </Route>
    </Routes>
    </BrowserRouter>

     
    </>
  )
};

export default App;
