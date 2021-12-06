//import javascript element by calling the import method
// if the js.file has a default import we can import the file by using any name variables
// if the js.file is no imported by default we use the destructuring method and use the name of the file
import collection from "./collection.js";
import chalk from "chalk";

//function used to call the key(name,whatILike) inside the collection object(collection)
  function describeItem(itemIndex) {
      console.log
    let message = "I have a " + itemIndex.name + ". Here's what I like about it: " + itemIndex.whatILike
    return console.log(message)
  }

//function used to go trough every element on array
  function describeCollection(array) {
    array.forEach(colorCyan)
  }
//function used to change the color of each key name in the object
  function colorCyan(object){
    console.log(chalk.cyan(object.name))
}
//function used to change the color of each key count in the object
function countYellow(object){
  console.log(chalk.yellow(object.count))
}

  function collectionGreen(object){
    console.log(chalk.bgRedBright(object.whatILike))
  }

describeCollection(collection);

  collection.forEach(countYellow);
  collection.forEach(collectionGreen);