import collection from "./collection.js";


  function describeItem(itemIndex) {
      console.log
    let message = "I have a " + itemIndex.name + ". Here's what I like about it: " + itemIndex.whatILike
    return console.log(message)
  }


  function describeCollection(array) {
    array.forEach(describeItem)
  }

  describeCollection(collection);