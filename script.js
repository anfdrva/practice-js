
// function slugify(title) {
//     title = title.toLowerCase();
//     title = title.split(" ");
//     title = title.join("-");
//     return title;
// }

// slugify("Arrays for begginers");//"arrays-for-begginers"


// function makeArray(firstArray, secondArray, maxLength) {
//     const newArray = firstArray.concat(secondArray);
//     if (newArray.length > maxLength) {
//         return newArray.slice(0, maxLength);
//     }
//     return newArray;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));


// function calculateTotal(number) {
//     let num = 0;
//     for (let i = 1; i <= number; i += 1) {
//         num = num + i;
//     }
//     return num;
// }
// console.log(calculateTotal(7));



// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line
//     for (let i = 0; i < order.length; i += 1){
//         total = total + order[i];
// }
//   // Change code above this line
//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]))



// function findLongestWord(string) {
//     string = string.split(" ");
//     let word = "";
//     for (let i = 0; i < string.length; i += 1){
//         if (word.length <= string[i].length) {
//             word = string[i];
//             continue;
//         }
//     }
//     return word;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

//Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів,
//розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

//Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped


//------------------------------

// function createArrayOfNumbers(min, max) {
//     const numbers = [];
//     console.log(numbers);
//     for (let i = min; i <= max; i += 1){
//         numbers.push(i);
// }
//     return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));



// function filterArray(numbers, value) {
//    // Change code below this line
//     const arr = [];
//     for (let i = 0; i <= numbers.length; i += 1){
//         if (numbers[i] > value) {
//             arr.push(numbers[i]);
//         }
//     }
//  return arr;

//   // Change code above this line
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20))

//Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers)
//і повертає новий масив, в якому будуть тільки ті елементи масиву numbers,
//які більші за значення параметра value(число).

//Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]

//---------------------------------------------

// function getCommonElements(array1, array2) {
//   // Change code below this line

//     const arr = [];
//     for (let i = 0; i <= array1.length; i += 1){
//         if (array2.includes(array1[i])) {
//             arr.push(array1[i]);
//         }
//     }
//     return arr;
//  // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

//Напиши функцію getCommonElements(array1, array2),
//яка отримує два масиви довільної довжини в параметри array1 і array2,
//і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

//Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]



// function filterArray(numbers, value) {
//   // Change code below this line
//     const filteredNumbers = [];
//     for (let num of numbers){
//         if (num > value) {
//             filteredNumbers.push(num);
//         }
//     }
//     return filteredNumbers;
//   // Change code above this line
// }

// console.log(filterArray([12, 24, 8, 41, 76], 20))



// function getEvenNumbers(start, end) {
//     const arr = [];
//     for (let i = start; i <= end; i += 1){
//         if (i % 2 === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
//   }

// console.log(getEvenNumbers(6, 12));

//Виклик функції getEvenNumbers(6, 12) повертає [6, 8, 10, 12]

//Напиши функцію getEvenNumbers(start, end),
//яка повертає масив усіх парних чисел від start до end.
//Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).


// function includes(array, value) {
//   // Change code below this line
//     for (let i = 0; i <= array.length; i += 1){
//         if (array[i] === value) {
//             return true;
//         }
//     }
//     return false;
//   // Change code above this line
// }

// console.log(includes(["apple", "plum", "pear", "orange"], "plum"))


//Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
//Виклик includes([1, 2, 3, 4, 5], 17) повертає false

//Напиши функцію includes(array, value), яка робить те саме,
//що і метод масиву масив.includes(значення) - перевіряє,
//чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.


// const numbers = [5, 10, 15, 20, 25];
// numbers.forEach(function (number, index) {
//   console.log(`Індекс ${index}, значення ${number}`);
// });


// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line
// for (const key in apartment) {
//     keys.push(key);
//     values.push(apartment[key])
// }

// console.log(keys);
// console.log(values);


// function countProps(object) {
//   let propCount = 0;
//   // Change code below this line
//     for (const key of object) {
//         if (object.hasOwnProperty(key)) {
//             propCount = Object.keys(object);
//             propCount = propCount.length;
//     }
// }
//   // Change code above this line
//   return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));


// function countProps(object) {
//     const propCount = Object.keys(object);
//     for (const key of propCount) {
//         if (object.hasOwnProperty(key)) {
//             return propCount.length;
//         }
       
//     }
//     return 0;
// }

// console.log(countProps({}));

//Виклик countProps({ name: "Mango", age: 2 }) повертає 2

//Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі object.
//Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// }
// console.log(values);


// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Change code below this line

//     const keys = Object.values(salaries);
//     for (const key of keys) {
//         totalSalary += key;
//     }
    
//   // Change code above this line
//   return totalSalary;
// }

// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Change code below this line
    
//     for (const product of products) {
//         if (product.name === productName) {
//              return product.price;
//         }
             
//     }
    
//     return null;
// //     const names = [];
// //     const prices = [];
// //     for (const call of products) {
// //         names.push(call.name);
// //         prices.push(call.price);
// // }
// //     console.log(names);
// //     console.log(prices);
// //     for (const variable of names) {
// //         if (variable === productName) {
// //             return prices;
// //         }
// //     }

//   // Change code above this line
// }

// console.log(getProductPrice("Grip"));
//Виклик getProductPrice("Radar") повертає 1300

//Напиши функцію getProductPrice(productName), яка приймає один параметр productName - назва продукту.
//Функція шукає об'єкт продукту з таким ім'ям(властивість name) в масиві products і
//повертає його ціну(властивість price).Якщо продукт з такою назвою не знайдений, функція повинна повертати null.




// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Change code below this line
//     const arr = [];
//     for (const product of products) {
//         if (product[propName]) {
//             arr.push(product[propName]);
           
//         }
//  }
//     return arr;
//   // Change code above this line
// }

// console.log(getAllPropValues("name"));

//Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
//Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
//Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.
//Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Change code below this line
//     let calc;
//     for (const product of products) {
//         if (product.name === productName) {
//             calc = product.price * product.quantity;
//             return calc;
//         }
// }
//     return 0;
//   // Change code above this line
// }

// console.log(calculateTotalPrice("Rada"));

//Виклик calculateTotalPrice("Radar") повертає 5200
//Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.
//Функція повинна повернути загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products.


// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//     const arr = {
//         completed,
//         category,
//         priority,
//     }
//     return { ...arr, ...data };
//   // Change code above this line
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }))

//Виклик makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
//повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

//Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
//У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.
//В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути відсутніми.
//Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за замовчуванням,
//що зберігаються в однойменних локальних змінних.


// Change code below this line
// function add(...args) {
//   // Change code above this line
//     //console.log(args);
//     let n = 0;
//     for (const num of args) {
//         n += num;
//     }
//     return n;
// }
// console.log(add(15, 27))
//Виклик add(15, 27) повертає 42


// function addOverNum(first, ...args) {
//   let total = 0;

//     for (const arg of args) {
//       if(first <= arg)
//     total += arg;
//   }

//   return total;
//   // Change code above this line
// }

// console.log(addOverNum(50, 15, 27));



// Change code below this line
// function findMatches(first, ...args) {
//   const matches = []; // Don't change this line
//     for (const num of first) {
//         if (args.includes(num)) {
//             matches.push(num);
//         }
//     }

//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));

//Функція findMatches() приймає довільну кількість аргументів.
//Першим аргументом завжди буде масив чисел, а решта аргументів будуть просто числами.

//Доповни код функції таким чином, щоб вона повертала новий масив matches,
//в якому будуть тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

//Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути
//масив[1, 2], тому що тільки вони є в масиві першого аргументу.

//Виклик findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) повертає [17, 89, 2]


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line

//       const bookIndex = this.books.indexOf(oldName);
//       this.books.splice(bookIndex, 1, newName);

//     // Change code above this line
//   },
// };

// console.log(bookShelf.updateBook("The last kingdom", "Dune"));

//Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"),
//значення властивості books - це масив["Dune", "Haze", "The guardian of dreams"]

//Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на newName
//у властивості books.
//Використовуй indexOf() для того, щоб знайти потрібний елемент масиву,
//і splice() для того, щоб замінити цей елемент.


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//     addPotion(newPotion) {
//         for (const item of this.potions) {
//             if (item.name === newPotion.name) {
                
//               return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
           
//         }
//          this.potions.push(newPotion);
        
//     // if (this.potions.includes(newPotion)) {
//     //   return `Error! Potion ${newPotion} is already in your inventory!`;
//     // }

//     // this.potions.push(newPotion);
//   },
//     removePotion(potionName) {
      
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));

//Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
//в масиві potions останнім елементом буде цей об'єкт


// --------------------------------------------------

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

  // numbers.forEach(function (element) {
  //   if (element > value) {
  //     filteredNumbers.push(element);
  //   }
  // }); 
      

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

// //Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]

//---------------------------------------------------------------------------------------

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   // return commonElements;

// firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
// }); 
//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]))

// //Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]




// function changeEven(numbers, value) {
//   // Change code below this line
//   const newArray = [];

//   numbers.forEach(element => {
//     if(element % 2 === 0){
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//     }
//   });
  
//   return newArray;
//   // Change code above this line
// }


// console.log(changeEven([1, 2, 3, 4, 5], 10));



// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).sort((first, second) => first.author.localeCompare(second.author)).map(call => call.author);

// console.log(names);



// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]


// const getTotalBalanceByGender = (users, gender) => {
// return users.filter(user => user.gender == gender).reduce((previous, num) => previous + num, 0);
// };

// console.log(getTotalBalanceByGender(users, "male"));

// class Storage {
//   constructor(items) {
//     this.items = items;
//   }

// getItems(){
//   return this.items;
// }

// addItem(newItem){
//   this.items.push(newItem);
// }

//   removeItem(itemToRemove) {
//     const i = this.items.indexOf(itemToRemove);
//     this.items.splice(i, 1);
// }
  
// }


// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]




class StringBuilder {
  constructor(initialValue) {
    this.value = initialValue;
  }

  getValue(){
    return this.value;
  }

  padEnd(str){
    this.value = str + this.value;
  }

  

}

// Change code above this line
const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="








