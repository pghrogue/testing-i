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
  enhancement: '10'
};

describe('enhancements:', () => {

  describe('success:', () => {
    // Set this here once. This allows us to test specific values. Ie: testItem.name
    const testItem = modItem.success(armor);

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
      expectedName = `[${ isNaN(testItem.enhancement) ? '' : '+' }${testItem.enhancement}]`;
      expect( testItem.name ).toContain(expectedName);
    });


  });

  describe('fail:', () => {
    // Set this here once. This allows us to test specific values. Ie: testItem.name
  
    const testItem = modItem.fail(weapon);
    console.log("testcase:", weapon);
    test('fail does not work if enhancement level is too low', () => {
      const lvl = weapon.enhancement;
      if( testItem.type === "armor" && !isNaN(testItem.enhancement) && Number(testCase.enhancement) <= 5) {
        // Enhacing an armor up to 5 cannot fail.
        expect( () => {
          modItem.fail(testCase);
        }).toThrow();

      } else if( testItem.type === "weapon" && !isNaN(testItem.enhancement) && Number(testCase.enhancement) <= 7) {
        // Enhacing a weapon up to 7 cannot fail.
        expect( () => {
          modItem.fail(testCase);
        }).toThrow();
      } 
    });

  });

  describe('repair:', () => {
    test('durability should always be 100', () => {
      // Item durability should always be set to 100 after repair.
      const testItem = {
        ...weapon,
        durability: 100
      };
      expect( modItem.repair(weapon)).toEqual(testItem);
    });  
  });
});
