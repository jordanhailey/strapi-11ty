const {getAPI} = require('../utils/reqAPI');



module.exports = async () => {
  const 
    categories = await getAPI('/categories'),
    restaurants = await getAPI('/restaurants');
  return {
    categories,
    restaurants
  }
}
