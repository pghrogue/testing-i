module.exports = {

  // can enhance?
  canEnhance: (item) => {
    // Items have name, type, durability and enhancement.
    // The item's type can be weapon or armor.
    // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
    // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
    const lvlStr = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','PRI','DUO','TRI','TET','PEN'];
    const lvlNum = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
    const lvl = lvlNum[lvlStr.indexOf(item.enhancement)];

    if( (lvl <= 14 && item.durability < 25) || (lvl >= 15 && item.durability < 10) ){
      return false;
    }
    return item;
  },


  // change name?
  changeName: (itemName, itemLvl) => {
    // Enhancement level is displayed as a string with a plus sign ( + ) before the number for levels 1 to 15.
    // Enhancement level of 0 is not displayed.
    const name = itemName.split("] ");
    
    if( itemLvl === '0' ){
      return name;
    }
    return `[${ isNaN(itemLvl) ? '' : '+' }${itemLvl}] ${name}`;
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