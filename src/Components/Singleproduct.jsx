import './Productlist.css'
import { Link, useParams } from 'react-router-dom';

function Singleproduct({ pro, addToCart }) {
    const {id} = useParams();
    const singlePro = pro.find((pp)=>pp.id==id);
    console.log(id);
    return (
        <div className='products'>
            {
                
                        <div className='Cart'>
                            <div className='image-box'>
                                <img className='image1' src={singlePro.prodImg} />
                            </div>
                            <div className='about'>
                                <Link to={`/title`}>
                                    <h1 classNamet='title'>{singlePro.prodName}</h1>
                                    {/* <img className='w-48' src={x.name}  alt={x.name} /> */}
                                </Link>
                                <p className='details'>{singlePro.longDescription}</p>

                                <p className='subtitle'>{singlePro.prodPrice}</p>
                                <button className='button' onClick={() => addToCart(singlePro)}>Add to cart</button>
                            </div>
                        </div>
                
            }
        </div>
    )

}
export default Singleproduct;