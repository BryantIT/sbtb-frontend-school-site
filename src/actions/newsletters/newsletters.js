export const setNewsletters = newsletters => {
  return {
    type: "SET_NEWSLETTERS",
    newsletters
  }
}

export const getNewsletters = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/newsletters", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setNewsletters(response.data))
      }
    })
    .catch(console.log)
  }
}
