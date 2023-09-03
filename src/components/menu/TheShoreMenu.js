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
  const sandwich3 = createItem("Sandwich", "Georgia", "£7.50", "Goat's cheese, Prosciutto, Hazelnuts, Honey & Rocket")
  const sandwich4 = createItem("Sandwich", "Life of Bryan", "£7.00", "Tomato Sugo, Mozzarella, Roast Peppers, Spainich & Chili Oil")
  const sandwich5 = createItem("Sandwich", "The Niall", "£7.50", "Aioli, Gruyere, Honey Roast Ham, Rocket & Caramelised onions")
  const sandwich6 = createItem("Sandwich", "Cousin Rachael", "£6.50", "Red Pesto, Falafel, Aubergine, Roast Peppers & Spainch")

  export const drinksMenu = [drink1, drink2];
  export const sandwichMenu = [sandwich1, sandwich2, sandwich3,sandwich4, sandwich5, sandwich6];
  