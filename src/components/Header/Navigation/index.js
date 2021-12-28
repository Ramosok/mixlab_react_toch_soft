import {Link} from "react-router-dom";
//components
import ItemMenu from "./ItemMenu";
//initialValue
import {navigationList} from "./data";
//styles
import './navigation.css';



const Navigation = () => {

    return (
        <>
            <ul className='nav flex_container'>
                {navigationList.map(({tittle, linkTo}) => <li className='item_menu' key={tittle}>
                    <ItemMenu
                        tittle={tittle}
                        linkTo={linkTo}/>
                </li>)}
            </ul>
            <Link to="/counter">Counter</Link>
        </>
    );
};

export default Navigation;