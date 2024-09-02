// 1)

// 1. Создайте пустой объект vehicle.
let vehicle = {};

// 2. Добавьте свойство brandName со значением BMW (либо любая ваша любимая марка).
vehicle.brandName = "BMW";

// 3. Добавьте свойство model со значением X5 (либо любая ваша любимая модель).
vehicle.model = "X5";

// 4. Измените значение свойства model на M1.
vehicle.model = "M1";

// 5. Удалите свойство model из объекта.
delete vehicle.model;

console.log(vehicle); 

// 2)

// 1. Создайте объект salaries, где ключом (свойством) является имя, а значением — зарплата.
let salaries = {
    Aroo: 100,
    Dalida: 160,
    Samat: 130
};

// 2. С помощью for..in просуммируйте все значения и выведите в консоли.
let totalSalary = 0;

for (let person in salaries) {
    totalSalary += salaries[person];
}

console.log("Total Salary:", totalSalary); // Вывод у меня выходит: Total Salary: 390