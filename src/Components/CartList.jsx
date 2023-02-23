import { Link } from 'react-router-dom';
import './CartList.css'

function CartList({ pro }) {
    return (
        <>
        <table className='tabledata'>
            <thead className='thead'>
                <tr className='top'>
                    <th>
                        S.No
                    </th>
                    <th>
                        Image
                    </th>
                    <th>
                        Product Name
                    </th>
                    <th>
                        Detail
                    </th>
                    <th>
                        Price
                    </th>
                </tr>
            </thead>
            {
                pro.map((x, i) => {
                    return (
                        <tr key={i}>
                            <td className='list'>{i+1}</td>
                            <td className='list'>
                                <img className='cartimage' src={x.prodImg} />
                            </td>
                            <td className='list'>
                                <h1 className='title'>{x.prodName}</h1>
                            </td>
                            <td className='list'>
                                <p className='details'>{x.longDescription}</p>
                            </td>
                            <td className='list'>
                                <p className='price'>{x.prodPrice}</p>
                            </td>
                        </tr>
                    )
                })
            }

        </table>
        <Link to="/"><button className='Shopping1'>Return to Shopping</button></Link>
        <Link to="/order"> <button className='checkbutton'>Check Out</button></Link>
        </>
    )
}
export default CartList;