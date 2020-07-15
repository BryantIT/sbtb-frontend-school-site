export const setEvents = events => {
  return {
    type: "SET_EVENTS",
    events
  }
}

export const getEvents = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/events", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(res => res.json())
    .then(event => {
      if (event.error) {
        console.log(event.error)
      } else {
        console.log("Fetch", event.data)
        dispatch(setEvents(event.data))
      }
    })
    .catch(console.log)
  }
}
