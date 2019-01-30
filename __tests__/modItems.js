const modItem = require('../modItems');

// Some default items to test with:
const weapon = {
  name: 'Elven Longsword',
  type: 'weapon',
  durability: 70,
  enhancement: ''
};

const armor = {
  name: 'Bronze Chestplate',
  type: 'armor',
  durability: 100,
  enhancement: ''
};

// Test weapon specific:
describe('enhancements:', () => {

  describe('success:', () => {

    test('enhancement level > 0', () => {
      // Item starts at level 0, it should always be higher:
      expect( modItem.success(Number(weapon.enhancement)) ).toBeGreaterThan(0);
    });

    test('enhancement level in range', () => {
      // Enhancement level should be 0-15, PRI, DUO, TRI, TET, or PEN
      const range = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13',
                    '14','15','PRI','DUO','TRI','TET','PEN'];
      expect( range ).toContain( modItem.success(weapon.enhancement));
    });


  });

  test('fail', () => {});

  test('repair', () => {
    expect( modItem.repair(weapon.durability)).toEqual(100);
  });
});
