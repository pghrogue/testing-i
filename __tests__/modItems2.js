const modItem = require('../modItems2');

// Some default items to test with:
const weapon = {
  name: 'Elven Longsword',
  type: 'weapon',
  durability: 11,
  enhancement: '15'
};

const armor = {
  name: 'Bronze Chestplate',
  type: 'armor',
  durability: 100,
  enhancement: '3'
};

describe('enhancements', () => {
  // Set this here once. This allows us to test specific values. Ie: testItem.name
  const testItem = modItem.success(armor);

  // can enhance?
  describe('can enhance:', () => {
    const testItem = modItem.canEnhance(armor);

    // Items have name, type, durability and enhancement.
    test('item has the right properties', () => {
      expect(testItem).toHaveProperty('name');
      expect(testItem).toHaveProperty('type');
      expect(testItem).toHaveProperty('durability');
      expect(testItem).toHaveProperty('enhancement');
    });

    // The item's type can be weapon or armor.
    test('item type is weapon or armor', () => {
      expect(testItem.type).toEqual(expect.stringMatching(/weapon|armor/));
    });

    // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
    // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
    test('(enh <= 14 and dur < 25) or (enh >= 15 and dur < 10)', () => {
      if( weapon.enhancement <= 14 && weapon.durability < 25 ) {
        console.log("1 falsy");
        expect(modItem.canEnhance(weapon)).toBeFalsy();
      } 
      else if( weapon.enhancement >= 15 && weapon.durability < 10 ) {
        console.log("2 falsy");
        expect(modItem.canEnhance(weapon)).toBeFalsy();
      }
      else {
        console.log("not falsy");
        expect(modItem.canEnhance(weapon)).not.toBeFalsy();
      }
    });

  });

  // change name?
  describe('change name:', () => {
  //   Enhancement level is displayed as a string with a plus sign ( + ) before the number for levels 1 to 15.
  //   Enhancement level of 0 is not displayed.
  });

  // pass?
  describe('success:', () => {
  //   The item's enhancement increases by 1.
  //   The maximum enhancement possible is PEN.
  //   The name is updated to reflect the new enhancement level.
  });

  // fail?
  describe('fail:', () => {
  //   The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.
  //   The durability of the item is decreased by 10 if the item's enhancement is greater than 14.
  //   If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
  //   The name is updated to reflect the new enhancement level if it was decreased.
  });

  // repair?
  describe('repair:', () => {
  //   returns a new item with the durability restored to 100.
    test('durability should always be 100', () => {
      const testItem = {
        ...weapon,
        durability: 100
      };
      expect( modItem.repair(weapon)).toEqual(testItem);
    });
  });
});
