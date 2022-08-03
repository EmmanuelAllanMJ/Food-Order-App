import React, { useState, useReducer, useEffect } from "react";
import CartContent from "./cart-content";
import Food from "./Food";

let defaultCartState = {
  items: [
    {
      id: "m1",
      name: "Burger",
      price: 3.25,
      amount: 0,
      img: "./images/hamburger.png",
      color: "#E9F2E8",
    },
    {
      id: "m2",
      name: "Doughnut",
      price: 2.25,
      amount: 0,
      img: "./images/doughnut.png",
      color: "#EFDFE7",
    },
    {
      id: "m3",
      name: "Salad",
      price: 5.25,
      amount: 0,
      img: "./images/salad.png",
      color: "#EBE1D7",
    },
    {
      id: "m4",
      name: "Cake",
      price: 3.49,
      amount: 0,
      img: "./images/confectionery.png",
      color: "#F1D6DC",
    },
  ],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount = state.totalAmount + action.item.price;
    //1.Finding index
    console.log(Food);
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let existingCartItem = state.items[existingCartItemIndex];
    existingCartItem = {
      ...existingCartItem,
      amount: existingCartItem.amount + 1,
    };

    let updatedItem = [...state.items];
    updatedItem[existingCartItemIndex] = existingCartItem;

    return {
      items: updatedItem,
      totalAmount: updatedTotalAmount,
    };
  } else if (action.type === "REMOVE") {
    const existingCartItem = state.items.findIndex(
      (item) => item.id === action.id
    );

    let existingItem = state.items[existingCartItem];
    let updatedTotalAmount;
    if (state.amount !== 0) {
      updatedTotalAmount = state.totalAmount - existingItem.price;
    } else {
      updatedTotalAmount = 0;
    }

    existingItem = { ...existingItem, amount: existingItem.amount - 1 };
    let updatedItems = state.items;
    updatedItems[existingCartItem] = existingItem;
    console.log(updatedItems);

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
};

function CartProvider(props) {
  const [foodList, setFoodList] = useState();
  let newFoodList = {
    items: [],
    totalAmount: 0,
  };
  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(
        "https://react-http-bf01c-default-rtdb.firebaseio.com/foods.json"
      );
      const responseData = await response.json();
      const loadedFood = [];
      for (const key in responseData) {
        loadedFood.push({
          id: key,
          name: responseData[key].name,
          price: responseData[key].price,
          amount: responseData[key].amount,
          img: responseData[key].img,
          color: responseData[key].color,
        });
      }
      setFoodList(loadedFood);
    };
    fetchMeal();
  }, []);
  defaultCartState = {
    items: foodList,
    totalAmount: 0,
  };
  console.log(newFoodList);
  console.log(defaultCartState);
  const [cartState, dispatch] = useReducer(cartReducer, newFoodList);

  const addItemToCartHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };
  const removeItemFromCartHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContent.Provider value={cartContext}>
      {props.children}
    </CartContent.Provider>
  );
}

export default CartProvider;
