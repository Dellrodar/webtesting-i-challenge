const enhancer = require('./enhancer.js');
// test away!

const Item = {
  name: 'Elven Longbow',
  durability: 75,
  enhancement: 0,
}

describe('Enhancer', () => {
  describe('repair method', () => {
    it('Takes in an object to repair, and outputs an object with a durability of 100', () => {
        let Weapon = enhancer.repair(Item);
        expect(Weapon.durability).toBe(100)
    })
  })

  describe('Success', () => {
    it('Should return an item with +1 to enhancement level', () => {
      let enhancedWeapon = enhancer.success(Item);
      expect(enhancedWeapon.enhancement).toBe(1);
    })
    it('Max enchantment item should return 20', () => {
      let maxItem = Item;
      maxItem.enchantment = 20;

      let maxxedOutItem = enhancer.success(maxItem);
      expect(maxxedOutItem.enchantment).toBe(20);
    })
  })

  describe('Failed enhancement', () => {
    it('Durability decreased by 5 when enhancement is less than 15', () => {
      let failedEnhancement = enhancer.fail(Item);
      expect(failedEnhancement.durability).toBe(70);
    })

    it('Durability decreased by 10 when enhancement is greater than or equal to 15', () => {
      let enhancedWeapon = Item;
      enhancedWeapon.enhancement = 15;
      let biggerFailedWeapon = enhancer.fail(enhancedWeapon);
      expect(biggerFailedWeapon.durability).toBe(65);
    })

    it('Item loses an enhancement level on failure when enhancement is greater than or equal to 16', () => {
      let enhancedWeapon = Item;
      enhancedWeapon.enhancement = 17;
      let biggerFailedWeapon = enhancer.fail(enhancedWeapon);
      expect(biggerFailedWeapon.enhancement).toBe(16);
    })
  })

  describe('Item name is changed with levels of enhancement', () => {
    it('Item name is normal with no enhancements', () => {
      let namedItem = Item;
      namedItem.enhancement = 0;
      const itemNameCheck = enhancer.get(namedItem);
      expect(itemNameCheck.name).toBe('Elven Longbow');
    })

    it('Item name is increased with enhancement level', () => {
      let namedItem = {
        name: 'Elven Longbow',
        durability: 75,
        enhancement: 0,
      };
      namedItem.enhancement = 4;
      const itemNameCheck = enhancer.get(namedItem);
      expect(itemNameCheck.name).toBe('[+4]Elven Longbow');
    })
    it('Item name is increased with enhancement level', () => {
      let namedItem = {
        name: 'Elven Longbow',
        durability: 75,
        enhancement: 0,
      };
      namedItem.enhancement = 13;
      const itemNameCheck = enhancer.get(namedItem);
      expect(itemNameCheck.name).toBe('[+13]Elven Longbow');
    })
    it('Item name is increased with enhancement level', () => {
      let namedItem = {
        name: 'Elven Longbow',
        durability: 75,
        enhancement: 0,
      };
      namedItem.enhancement = 18;
      const itemNameCheck = enhancer.get(namedItem);
      expect(itemNameCheck.name).toBe('[+18]Elven Longbow');
    })
  })
})

