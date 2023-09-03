import MenuOption from "./MenuOption";
import './MenuOptions.css'

const MenuOptions = ({activeCategory, drinksMenu, sandwichMenu}) => {


    const categoryChoice = () => {
        if (activeCategory === "Drinks"){
            return getDrinksMenu(drinksMenu)
        }
        else if (activeCategory === "Lunch"){
            return getSandwichMenu(sandwichMenu)
        }
    }

    const getDrinksMenu = (drinksMenu) => {
        const menuOptions = [];
        for (let drink of drinksMenu) {
          menuOptions.push(<MenuOption item={drink} />);
        }
        return menuOptions;
      }
      
    const getSandwichMenu = (sandwichMenu) => {
        const menuOptions = [];
        for(let sandwich of sandwichMenu){
            menuOptions.push(<MenuOption  item = {sandwich}/>)
        }
        return menuOptions;
    }
    return ( 
        <div class = "menu-layout">
            {categoryChoice()}
        </div>
    );
}
 
export default MenuOptions;