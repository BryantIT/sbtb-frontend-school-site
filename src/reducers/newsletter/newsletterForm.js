const initialState = {
  title: "",
  author: "",
  published: "",
  body: "",
  imageUrl: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_NEWSLETTER_FORM":
      const returnValue = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnValue
    case "RESET_NEW_NEWSLETTER_FORM":
      return initialState
    case "SET_NEWSLETTER_DATA_FOR_EDIT":
      return action.newsletterFormData
    default:
      return state
  }
}
