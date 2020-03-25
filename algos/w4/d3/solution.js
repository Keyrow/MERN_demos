/* 
  Create a function to determine the max amount of
  servings that can be made based on a recipe and
  available ingredients.
  Input:
    - recipe object where keys are ingredient names
      and values are unit required (int)
    - available ingredients object where keys are ingredient
      names and values are unit available (int)
  Output:
    int (max servings)
  Side note (not needed for solution): Realistically, the values
  would be an object as well with the keys: unit (unit of measure), and amount.
  If the avaialable ingredient was stored in a different unit,
  a conversion table would be needed to convert units of measure.
*/

// Example Input
const recipe = {
  "organic fat": 99,
  "live squid": 1,
  "birds nest": 1,
  "fried flesh": 1,
  spicy: 5,
  "gourmet memes": 4200
};

const available = {
  "organic fat": 990,
  "live squid": 0,
  "birds nest": 10,
  "fried flesh": 10,
  spicy: 50,
  "gourmet memes": 42000,
  sugar: 9001,
  spice: 5,
  "everything nice": 1
};
// Output: 1 because only 1 live squid is available
// Output: 10 IF we had 10 live squids because then we have 10x of every ingredient
// Output: 0 IF we had 0 live squids or live squids key didn't exist in 'available'

function getMaxServings(recipe, available) {
  let limitingAmount = Infinity;

  for (const reqIngred in recipe) {
    const availableAmnt = available[reqIngred];
    const reqAmnt = recipe[reqIngred];

    if (
      available.hasOwnProperty(reqIngred) === false ||
      availableAmnt < reqAmnt
    ) {
      // missing ingredient, can't make any
      return 0;
    }

    // how many servings can be made based on this 1 ingredient
    let servingsPerIngred = availableAmnt / reqAmnt;

    if (servingsPerIngred < limitingAmount) {
      limitingAmount = servingsPerIngred;
    }
  }
  return Math.floor(limitingAmount);
}