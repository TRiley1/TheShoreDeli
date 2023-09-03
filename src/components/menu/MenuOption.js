import './MenuOption.css'

const MenuOption = ({item}) => {
    return ( 
        <div class = "item-card-container">
            <div class = "item-card">
                <h1 class = "item-text">{item.name}</h1>
                <h2 class = "item-text">{item.price}</h2>
            </div>
            <p>{item.description}</p>
        </div>
     );
}
 
export default MenuOption;