
export function mutationRegisterUser(username: string, password: string) {
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

export function mutationLoginUser(username: string, password: string) {
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

export function queryRestaurantById(id: string) {
  return (`query GetRestaurantById {
    fitMe(id: "${id}") {
        name
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
          location
        }
      }
    }
  }`;
}

