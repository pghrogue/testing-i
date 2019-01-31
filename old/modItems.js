module.exports = {

  // Success(item) method accepts an item object and returns a new item object modified
  // according to the rules defined.
  success: (item) => {

    // Setup new item:
    const newItem = {
      ...item
    };
  
    // Max enhancement level is PEN
    if( item.enhancement === "PEN" ){
      return item;
    }

    // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
    if( !isNan(item.enhancement) && (Number(item.enhancement) <= 14 && item.durability < 25) ) {
      return item;
    }

    // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
    if( !isNan(item.enhancement) && (Number(item.enhancement) >= 15 && item.durability < 10) ) {
      return item;
    }

    // Raise enhancement level. 
    const oldLevel = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13',
      '14','15','PRI','DUO','TRI','TET','PEN'];
    const newLevel = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14',
      '15','PRI','DUO','TRI','TET','PEN','PEN'];

    const levelPos = oldLevel.indexOf( item.enhancement );
    newItem.enhancement = newLevel[levelPos];

    // Add enhancement level to name, stripping old if needed.
    const name = item.name.split("] ");
    
    // In success method, every name should be tagged with enhancement level (should never be 0)
    newItem.name = `[${ isNaN(newItem.enhancement) ? '' : '+' }${newItem.enhancement}] ${name}`;
    
    console.log(newItem);
    return newItem;
  },


  // Fail(item) method accepts an item object and returns a new item object modified 
  // according to the rules.
  fail: (item) => {
    // Setup new item:
    const newItem = {
      ...item
    };

    const lvl = Number(item.enhancement);

    if( item.type === "armor" && !isNaN(lvl) && Number(lvl) <= 5 ){
      return item;
    }
    if( item.type === "weapon" && !isNaN(lvl) && Number(lvl) <= 7 ){
      return item;
    }

    // The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.
    if( !isNaN(lvl) && (lvl >= 0 && lvl <= 14) ){
      let newLvl = (lvl - 5) >= 0 ? (lvl - 5) : 0;
    } else if( !isNaN(lvl) && (lvl === 14 || lvl === 15) ) {
      // The durability of the item is decreased by 10 if the item's enhancement is greater than 14.
      let newLvl = (lvl - 10);
    }
    // Enhacing an armor up to 5 cannot fail.
    // if( item.type === "armor" && !isNaN(item.enhancement) && Number(item.enhancement) <= 5 ){
    //   throw new Error('invalid armor level');
    // }
    // // Enhacing a weapon up to 7 cannot fail.
    // if( item.type === "weapon" && !isNaN(item.enhancement) && Number(item.enhancement) <= 7 ){
    //   throw new Error('invalid weapon level');
    // }
    return newItem;
  },


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
