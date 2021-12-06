let myCollection = [
    {
      name: "Fanta",
      count: 1,
      whatILike: "It has an orange taste"
    },
    {
      name: "water",
      count: 1,
      whatILike: "essential for life"
    },
    {
      name: "Coffee",
      count: 1,
      whatILike: "Keeps me awake"
    },
    {
        name: "Tea",
        count: 1,
        whatILike: "Warms me up"
    }
  ];


  function describeItem(itemIndex) {
      console.log
    let message = "I have a " + itemIndex.name + ". Here's what I like about it: " + itemIndex.whatILike
    return console.log(message)
  }


  function describeCollection(array) {
    array.forEach(describeItem)
  }

  describeCollection(myCollection)