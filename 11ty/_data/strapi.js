const {getAPI} = require('../utils/reqAPI');
module.exports = {
  categories: async () => getAPI('/restaurants').then(res=>res),
  restaurants: async () => getAPI('/restaurants').then(res=>res),
}
