const products = [
    {
        id: 1,
        price: 500,
        name: "pickle",
        type: "vegetable",
        eatable: true,
        drinkable: undefined,
        amount: 10000,
    },
    {
        id: 2,
        price: 1250,
        name: "apple",
        type: "fruit",
        eatable: true,
        drinkable: undefined,
        left: 30,
    },
    {
        id: 23,
        price: 120,
        name: "orange juice",
        type: "juice",
        drinkable: true,
        eatable: true,
        left: 30,
    },
];

console.log(`name: ${products[0].name}, price: ${products[0].price}, isDrinkable: ${products[0].drinkable}`);
console.log(`name: ${products[1].name}, price: ${products[1].price}, isDrinkable: ${products[1].drinkable}`);
console.log(`name: ${products[2].name}, price: ${products[2].price}, isDrinkable: ${products[2].drinkable}`);