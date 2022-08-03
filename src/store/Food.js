import React, { useEffect, useState } from "react";

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
  console.log(loadedFood);
  return loadedFood;
};
const foodList = fetchMeal();

// function Food() {
//   const [foodList, setFoodList] = useState();

//   useEffect(() => {
//     const fetchMeal = async () => {
//       const response = await fetch(
//         "https://react-http-bf01c-default-rtdb.firebaseio.com/foods.json"
//       );
//       const responseData = await response.json();
//       const loadedFood = [];
//       for (const key in responseData) {
//         loadedFood.push({
//           id: key,
//           name: responseData[key].name,
//           price: responseData[key].price,
//           amount: responseData[key].amount,
//           img: responseData[key].img,
//           color: responseData[key].color,
//         });
//       }
//       setFoodList(loadedFood);
//     };
//     fetchMeal();
//   },[]);

//   return foodList;
// }

export default foodList;
