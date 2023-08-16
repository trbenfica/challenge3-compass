
const queries = {
  getAllRestaurants: `query GetAllRestaurants {
    fitMes {
      count
      edges {
        node {
          objectId
          name
          rating
          deliveryTime
          image
        }
      }
    }
  }`
}

export default queries;
