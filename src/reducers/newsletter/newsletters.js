const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEWSLETTERS":
      return action.newsletters
    default:
      return state
  }
}
