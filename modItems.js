module.exports = {

  // Success(item) method accepts an item object and returns a new item object modified
  // according to the rules defined.
  success: (item) => {
    const newItem = {
      ...item
    };
  
    // Raise enhancement level. 0-14 go up one digit.
    if( Number(item.enhancement) >= 1 || Number(item.enhancement) < 15 ) {
      newItem.enhancement = "+" + (Number(item.enhancement) + 1 );
    }
    return newItem;
  },


  // Fail(item) method accepts an item object and returns a new item object modified 
  // according to the rules.
  fail: (item) => {},


  // Repair(item) method accepts an item object and returns a new item object with
  // durability restored to 100.
  repair: (item) => {
    const newItem = {
      ...item,
      durability: 100
    }
    //console.log(newItem);
    return newItem;
  }
};
