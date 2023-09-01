import './Menu.css'
import Knife from './icons/Knife';

const Menu = () => {
    return ( 
        <div class = "menu-container">
            <div class = "menu-title-box">
                <Knife/>
                <h1 class = "menu-title">OUR MENU</h1>
                <Knife/>
            </div>
            <hr class = "menu-deco"/>

            <div class= "menu-toggle">
                <h3>Breakfast</h3>
                <h3>Lunch</h3>
                <h3>Drinks</h3>
            </div>
        </div>
     );
}
 
export default Menu;