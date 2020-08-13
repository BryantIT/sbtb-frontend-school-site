const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEWSLETTERS":
      return action.newsletters
    case "ADD_NEWSLETTER":
      return state.concat(action.newsletter)
    case "UPDATE_NEWSLETTER":
      return state.map(newsletter =>
         newsletter.id === action.newsletter.id ? action.newsletter : newsletter)
    case "DELETE_NEWSLETTER":
      return state.filter(newsletter =>
         newsletter.id === action.newsletterId ? false : true)
    default:
      return state
  }
}
