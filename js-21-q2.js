// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.

const persons = [
    { name: "Alice", age: 18 },
    { name: "Bob", age: 21 },
    { name: "Charlie", age: 15 },
  ];

// creating the container Div
const containerDiv = document.createElement("div");
containerDiv.className = "container";
document.body.appendChild(containerDiv);

function printPersons() {
   // Looping over the array of objects and creating list:
   persons.forEach(user=>{
      const userBox = document.createElement("div");
      userBox.className = "userData";
      userBox.style.border = "2px solid black";
      userBox.style.margin = "5px";
      userBox.style.paddingLeft = "5px";

      const list = document.createElement("p");
      list.innerText = `${user.name}: ${user.age}`
      userBox.appendChild(list);

      containerDiv.appendChild(userBox)
   })
}


printPersons(persons);
