let GroceryStacks = [];

function peek() {
  if (GroceryStacks.length === 0) {
    alert("The stack is empty.");
  } else {
    alert("Top item in the stack: " + GroceryStacks[GroceryStacks.length - 1]);
  }
}

function push() {
  let item = prompt("Enter a grocery item to add:");
  if (item) {
    GroceryStacks.push(item);
    console.log("Item added: " + item);
    console.log("Updated Stack:", GroceryStacks);
    alert("Item added: " + item + "\nUpdated Stack: " + GroceryStacks.join(", "));
  } else {
    alert("No item entered. Try again.");
  }
}

function pop() {
  if (GroceryStacks.length === 0) {
    alert("The stack is empty. No item to remove.");
  } else {
    const removedItem = GroceryStacks.pop();
    console.log("Item removed: " + removedItem);
    console.log("Updated Stack:", GroceryStacks);
    alert("Item removed: " + removedItem + "\nUpdated Stack: " + GroceryStacks.join(", "));
  }
}

function main() {
  for (let i = 0; i < 5; i++) {
    let item = prompt(`Enter Grocery item ${i + 1}:`);
    if (item) {
      GroceryStacks.push(item);
      console.log("Item added: " + item);
    } else {
      alert("No item entered. Try again.");
      i--; 
    }
  }

  alert("Initial Stack: " + GroceryStacks.join(", "));
  console.log("Initial Stack:", GroceryStacks)
};