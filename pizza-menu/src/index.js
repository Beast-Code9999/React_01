import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  

function App() {
    return (
        <div className="container">
          <Header />
          <Menu />
          <Footer />
        </div>
    )    
}

function Header() {
  // const style = {color: "red", fontSize: "40px", textTransform: "uppercase"};
  // return <h1 style={style}>Fast React Pizza Company</h1>
  return ( 
    <header className="header">
      <h1>Fast React Pizza Company</h1> 
    </header>
  )
}

function Menu() {
  return (
    <main  className="menu">
      <h2>Our menu</h2>

      <ul className="pizzas">
        {/* very important technique below */}
        {pizzaData.map(pizza => (
          <Pizza pizzaObj={pizza} key={pizza.name}/>
        ))}
      </ul>
      {/* <Pizza name="Pizza Spinaci" 
      ingredients='Tomato, mozarella, spinach, and ricotta cheese' 
      photoName="pizzas/spinaci.jpg" 
      price={10} />
      
      <Pizza name="Pizza Funghi" 
      ingredients='Tomato, mushrooms' 
      photoName="pizzas/funghi.jpg" 
      price={8} /> */}
    </main>
  )
}

function Pizza(props) {
  console.log(props);

  return (
   <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}/>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 2}</span>
      </div>
   </li>   
  )    
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen) 

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>We are open until {closeHour}pm. Come visit us when you are craving a pizza or two</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  )
  // return React.createElement('footer', null, "We are currently open")
}



// react verion 18
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);