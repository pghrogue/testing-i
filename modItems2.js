module.exports = {

  // can enhance?
  canEnhance: (item) => {
    // Items have name, type, durability and enhancement.
    // The item's type can be weapon or armor.
    // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
    // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
    if( (item.enhancement <= 14 && item.durability < 25) || (item.enhancement >= 15 && item.durability < 10) ){
      return false;
    }
    return item;
  },


  // change name?
  changeName: (item) => {
  //   Enhancement level is displayed as a string with a plus sign ( + ) before the number for levels 1 to 15.
  //   Enhancement level of 0 is not displayed.
    return item;
  },


  // pass?
  success: (item) => {
  //   The item's enhancement increases by 1.
  //   The maximum enhancement possible is PEN.
  //   The name is updated to reflect the new enhancement level.
    return item;
  },


  // fail?
  fail: (item) => {
  //   The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.
  //   The durability of the item is decreased by 10 if the item's enhancement is greater than 14.
  //   If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
  //   The name is updated to reflect the new enhancement level if it was decreased.
    return item;
  },


  // repair?
  repair: (item) => {
    // returns a new item with the durability restored to 100.
    const newItem = {
      ...item,
      durability: 100
    }
    //console.log(newItem);
    return newItem;
  }

};