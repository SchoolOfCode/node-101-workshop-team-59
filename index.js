import collection from "./collection.js";
import chalk from "chalk";


  function describeItem(itemIndex) {
      console.log
    let message = "I have a " + itemIndex.name + ". Here's what I like about it: " + itemIndex.whatILike
    return console.log(message)
  }


  function describeCollection(array) {
    array.forEach(colorCyan)
  }

  function colorCyan(object){
    console.log(chalk.cyan(object.name))
}

function countYellow(object){
  console.log(chalk.yellow(object.count))
}

  function collectionGreen(object){
    console.log(chalk.green(object.whatILike))
  }

describeCollection(collection);

  collection.forEach(countYellow);
  collection.forEach(collectionGreen);