module.exports = {

  // Success(item) method accepts an item object and returns a new item object modified
  // according to the rules defined.
  success: (item) => {

    // Setup new item:
    const newItem = {
      ...item
    };
  
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

    // Enhacing an armor up to 5 cannot fail.
    if( item.type === "armor" && !isNaN(item.enhancement) && Number(item.enhancement) <= 5 ){
      throw new Error('invalid armor level');
    }
    // Enhacing a weapon up to 7 cannot fail.
    if( item.type === "weapon" && !isNaN(item.enhancement) && Number(item.enhancement) <= 7 ){
      throw new Error('invalid weapon level');
    }
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
