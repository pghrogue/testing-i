const modItem = require('../modItems');

// Some default items to test with:
const weapon = {
  name: 'Elven Longsword',
  type: 'weapon',
  durability: 70,
  enhancement: 'PRI'
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
    // Set this here once. This allows us to test specific values. Ie: testItem.name
    const testItem = modItem.success(weapon);

    test('enhancement level > 0', () => {
      // Item starts at level 0, it should always be higher:
      //const testItem = modItem.success(weapon);
      if( !Number.isNaN(testItem.enhancement) ){
        expect( Number(testItem.enhancement) ).not.toBeLessThanOrEqual(0);
      } else {
        expect( testItem.enhancement ).toBeNaN();
      }
    });

    test('enhancement level in range', () => {
      // Enhancement level should be 0-15, PRI, DUO, TRI, TET, or PEN
      //const testItem = modItem.success(weapon);
      const range = ['0','1','2','3','4','5','6','7','8','9','10','11','12','13',
                    '14','15','PRI','DUO','TRI','TET','PEN'];
      expect( range ).toContain( testItem.enhancement );
    });

    test('name should contain enhancement level', () => {
      // Name should be in the format of: [+1] Elven Longsword
      // expectedName = `[${ Number.isNaN(testItem.enhancement) ? '' : '+' }${testItem.enhancement}] ${testItem.name}`
    });


  });

  test('fail', () => {});

  test('repair', () => {
    // Item durability should always be set to 100 after repair.
    const testItem = {
      ...weapon,
      durability: 100
    };
    expect( modItem.repair(weapon)).toEqual(testItem);
  });
});
