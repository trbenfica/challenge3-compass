
export function mutationRegisterUser(username, password) {
  return (`mutation SignUp{
    signUp(input: {
      fields: {
        username: "${username}"
        password: "${password}"
      }
    }){
      viewer{
        user{
          id
          createdAt
        }
        sessionToken
      }
    }
  }`);
}

export function mutationLoginUser(username, password) {
  return (`mutation LogIn{
    logIn(input: {
      username: "${username}"
      password: "${password}"
    }){
      viewer{
        user{
          id
          createdAt
          updatedAt
          username
        }
        sessionToken
      }
    }
  }`);
}

export function queryRestaurantById(id) {
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


export function queryAllRestaurants() {
  return `query GetAllRestaurants {
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
  }`;
}

