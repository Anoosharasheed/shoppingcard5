import './Productlist.css'
import { Link } from 'react-router-dom';

function Productlist({ pro, addToCart }) {
    return (
        <div className='products'>
            {
                pro.map((x, i) => {
                    return (
                        <div className='Cart' key={i}>
                            <div className='image-box'>
                                <img className='image1' src={x.prodImg} />
                            </div> 
                            <div className='about'>
                            <Link to={`/item/${x.id}`}>
                                <h1 classNamet='title'>{x.prodName}</h1>
                                </Link>
                                <p className='details'>{x.short_description}</p>

                                <p className='subtitle'>{x.prodPrice}</p>
                                <Link to="/cart"> 
                                <button className='button' onClick={() => addToCart(x)}>Add to cart</button>
                                </Link>

                            </div>
                        </div>)
                })
            }
        </div>
    )

}
export default Productlist;