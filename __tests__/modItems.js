const modItem = require('../modItems');

// Some default items to test with:
const weapon = {
  name: 'Elven Longsword',
  type: 'weapon',
  durability: 70,
  enhancement: 0
};

const armor = {
  name: 'Bronze Chestplate',
  type: 'armor',
  durability: 100,
  enhancement: 0
};

// Test weapon specific:
describe('weapon enhancements:', () => {
  test('success', () => {});

  test('fail', () => {});

  test('repair', () => {
    expect( modItem.repair(weapon.durability)).toEqual(100);
  });
});

// Test armor specific:
describe('armor enhancements', () => {
  test('success', () => {});

  test('fail', () => {});

  test('repair', () => {
    expect( modItem.repair(armor.durability)).toEqual(100);
  });
});