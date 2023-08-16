
export function getRestaurantByIdQuery(id) {
  return (`query GetRestaurantById {
    fitMe(id: "${id}") {
        name
        image
        location
        name
        rating
        deliveryTime
        topDishes{
            ... AllDishes
        }
    }
  }

  fragment AllDishes on Dish {
      name
      description
      image
      price
  }`);
}
