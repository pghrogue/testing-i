module.exports = {

  // Success(item) method accepts an item object and returns a new item object modified
  // according to the rules defined.
  success: (item) => {},

  // Fail(item) method accepts an item object and returns a new item object modified 
  // according to the rules.
  fail: (item) => {},

  // Repair(item) method accepts an item object and returns a new item object with
  // durability restored to 100.
  repair: (item) => {
    return item.durability = 100;
  }
};