//keys

const fruit = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruit.keys();
let text = "";
for (let x of keys) {
  text += x + "<br>";
}

document.getElementById("demo").innerHTML = text;