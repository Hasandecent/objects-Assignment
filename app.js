// // Question 01
// var itemsArray = [
//     {
//         name: "juice",
//         price: "50",
//         quantity: "3"
//     },
//     {
//         name: "cookie",
//         price: "30",
//         quantity: "9"
//     },
//     {
//         name: "shirt",
//         price: "880",
//         quantity: "1"
//     },
//     {
//         name: "pen",
//         price: "100",
//         quantity: "2"
//     }
// ]
// var totalItemPrice;
// var allTotalPrice = 0;
// for (var i = 0; i < itemsArray.length; i++) {
//     totalItemPrice = +itemsArray[i].price * +itemsArray[i].quantity
//     document.write("Total Price of item " + itemsArray[i].name + " is " + totalItemPrice + "<br>")
//     allTotalPrice += totalItemPrice
// }
// document.write("<br> Total of all prices is : " + allTotalPrice)


// Question 02
// var std = {
//     Name: "Hasan",
//     Email: "hasandecentt3@gmail.com",
//     Password: "123hasan789@",
//     Age: 22,
//     Gender: "Male",
//     City: "Karachi",
//     Country: "Pakistan"
// }
// var checkAge = "Age" in std;
// var checkCountry = "Country" in std;
// var checkFrstName = std.hasOwnProperty("FirstName")
// var checkLastName = std.hasOwnProperty("lastName")
// console.log(checkAge);
// console.log(checkCountry);
// console.log(checkFrstName);
// console.log(checkLastName);


// Question 03
// function Std(rollnumber, name, age, classs, secttion) {
//     this.RollNumber = rollnumber
//     this.Name = name
//     this.Age = age
//     this.Class = classs
//     this.Section = secttion
// }

// var std1 = new Std(14 , "Hasan", 21, "Web And Mobile", "Morning")
// var std2 = new Std(15 ,"Ali", 27, "Web And Mobile", "Morning")
// var std3 = new Std(16 , "Khalil", 62, "Web And Mobile", "Morning")
// console.log(std1);
// console.log(std2);
// console.log(std3);

// Question 04
