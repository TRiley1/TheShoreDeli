class Item {
    constructor(type, name, price, description = null) {
      this.type = type;
      this.name = name;
      this.price = price;
      this.description = description;
    }
  }

  const createItem = (type, name, price, description = null) => {
    return new Item(type, name, price, description);
  }
  
  const drink1 = createItem("Drink", "Coca Cola", "£1.50");
  const drink2 = createItem("Drink", "Orange Juice", "£1.00");
  const sandwich1 = createItem("Sandwich", "Big P", "£7.00", "Oak smoked cheddar, Honey roast ham, Coleslaw, Mustard, Pickles & Rocket");
  const sandwich2 = createItem("Sandwich", "Mummas", "£7.50", "Basil, Pesto, Mozzarella, Tomatoes, Prosciutto, Salami & Rocket");
  
  export const drinksMenu = [drink1, drink2];
  export const sandwichMenu = [sandwich1, sandwich2];
  