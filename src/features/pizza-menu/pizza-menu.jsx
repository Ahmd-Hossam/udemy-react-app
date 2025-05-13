// Pizza.js
import SinglePizza from "./singel-piza.component";

function Pizza() {
  const pizzasStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", // auto adjusts number of columns
    gap: "2rem",
    padding: "0 5vw", // use relative units for better responsiveness
    justifyContent: "center",
  };

  const pizzass = [
    {
      name: "Strawberry Delight",
      description:
        "A sweet twist on your favorite treat with fresh strawberries and creamy cheese.",
      img: "https://img.freepik.com/premium-photo/pizza-with-lot-food-it-bottle-water-top_1293074-128692.jpg",
      price: "20",
      ingredients: ["Strawberries", "Cheese", "Sweet Sauce"],
      size: "Medium",
      rating: 4.5,
      isAvailable: true,
    },
    {
      name: "Potato Crunch",
      description: "Crispy potato topping on a cheesy base with smoky herbs.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIibPbOeDQQscm9g-fDNdCvROokQJukg8nYQ&s",
      price: 50,
      ingredients: ["Potatoes", "Cheddar", "Smoked Paprika"],
      size: "Large",
      rating: 4.2,
      isAvailable: false,
    },
    {
      name: "Pepperoni Classic",
      description: "The timeless classic loaded with pepperoni and mozzarella.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb_JrRET357E5ZQhtOTMoy0Aq_DDubQ6IkJg&s",
      price: 60,
      ingredients: ["Pepperoni", "Mozzarella", "Tomato Sauce"],
      size: "Large",
      rating: 4.8,
      isAvailable: true,
    },
    {
      name: "Veggie Supreme",
      description:
        "A colorful mix of bell peppers, olives, onions, and sweet corn.",
      img: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
      price: 45,
      ingredients: ["Bell Peppers", "Olives", "Onions", "Sweet Corn"],
      size: "Medium",
      rating: 4.3,
      isAvailable: true,
    },
  ];

  const numOfPizzass = pizzass.length;
  return (
    <div style={pizzasStyle}>
      {numOfPizzass > 0 ? (
        pizzass.map((ele, index) => <SinglePizza key={index} item={ele} />)
      ) : (
        <p> no data aviliable</p>
      )}
    </div>
  );
}

export default Pizza;
