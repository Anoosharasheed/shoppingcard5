import { Link, Outlet } from 'react-router-dom';
import './Header.css'
import { ShoppingCartOutlined } from '@ant-design/icons';
function Header({cartitem},{product}){
    console.log(product)

    return(
        <>
        <div className="header">
        
         
            <Link to="/"></Link>
            <Link to="/cart">             
        <p className='cartbtn'><ShoppingCartOutlined /><sup class>{cartitem}</sup></p></Link>
        </div>
        <div className="">
            <link to="/"></link>
            <link to="/imagebox"></link>
        </div>


        
        <Outlet/>
        </>
    )
}
export default Header;