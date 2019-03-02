import fetch from 'cross-fetch'


export const RECEIVE_SETS = 'RECEIVE_SETS'
function receiveSets(subreddit, json) {
  return {
    type: RECEIVE_SETS,
    subreddit,
    //posts: json.data.children.map(child => child.data),
    posts: json.sets,
    receivedAt: Date.now()
  }
}

export const RECEIVE_CARDS = 'RECEIVE_CARDS'
function receiveCards(subreddit, json) {
  return {
    type: RECEIVE_CARDS,
    subreddit,
    //posts: json.data.children.map(child => child.data),
    posts: json.cards,
    receivedAt: Date.now()
  }
}


export const CLEAR_CARDS = 'CLEAR_CARDS'
function clearCards() {
  console.log("clear")
  return {
    type: CLEAR_CARDS,
    posts: []
  }
}



export function fetchSets(params) {
  return function(dispatch) {
    return fetch(`https://api.pokemontcg.io/v1/${params}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveSets(params, json))
      )
  }
}


export function fetchCards(params) {
  return function(dispatch) {
    dispatch(clearCards());
    return fetch(`https://api.pokemontcg.io/v1/cards?setCode=${params}`)
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receiveCards(params, json))
      )
  }
}


