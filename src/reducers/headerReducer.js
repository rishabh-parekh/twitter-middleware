export default function reducer(state={
    header: {
      id: null,
      name: null,
      topic: null,
    },
    fetching: false,
    fetched: false,
    error: null,
  }, action) {

    switch (action.type) {
      case "FETCH_HEADER": {
        return {...state, fetching: true}
      }
      case "FETCH_HEADER_REJECTED": {
        return {...state, fetching: false, error: action.payload}
      }
      case "FETCH_HEADER_FULFILLED": {
        return {
          ...state,
          fetching: false,
          fetched: true,
          header: action.payload,
        }
      }
      case "SET_HEADER_NAME": {
        return {
          ...state,
          header: {...state.header, name: action.payload},
        }
      }
      case "SET_HEADER_TOPIC": {
        return {
          ...state,
          header: {...state.header, topic: action.payload},
        }
      }
    }

    return state
}
