import React from 'react'

const CartPage = () => {


    const [cartt, setCartt] = useState([])
    useEffect(()=>{
      fetch("http://localhost:8081/cart/all")
      .then((response)=> response.json())
      .then((result)=> {
        console.log(result)
        setCartt(result)
        
      });
  },[]);
  

  return (
    <div>CartPage</div>
  )
}

export default CartPage