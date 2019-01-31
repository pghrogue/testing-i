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
    const newLevel = ['1','2','3','4','5','6','7','8','9','10','11','12','13',
      '14','15','PRI','DUO','TRI','TET','PEN','PEN'];

    const levelPos = oldLevel.indexOf( item.enhancement );
    newItem.enhancement = newLevel[levelPos];

    // Add enhancement level to name, stripping old if needed.
    const name = item.name.split("] ");
    
    newItem.name = `[${ isNaN(newItem.enhancement) ? '' : '+' }${newItem.enhancement}] ${name}`;
    
    console.log(newItem);
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
