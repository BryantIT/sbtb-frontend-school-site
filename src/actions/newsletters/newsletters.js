import { resetNewsletterForm } from './newsletterForm';

export const setNewsletters = newsletters => {
  return {
    type: "SET_NEWSLETTERS",
    newsletters
  }
}

export const clearNewsletters = () => {
  return {
    type: "CLEAR_NEWSLETTERS"
  }
}

export const addNewsletter = newsletter => {
  return {
    type: "ADD_NEWSLETTER",
    newsletter
  }
}

export const updateNewsletterSuccess = newsletter => {
  return {
    type: "UPDATE_NEWSLETTER",
    newsletter
  }
}

export const deleteNewsletterSuccess = newsletterId => {
  return {
    type: "DELETE_NEWSLETTER",
    newsletterId
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

export const createNewsletter = (newsletterData, history) => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/newsletters", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newsletterData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(addNewsletter(resp.data))
        dispatch(resetNewsletterForm())
      }
    })
    .catch(console.log)
  }
}

export const updateNewsletter = (newsletterData, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/newsletters/${newsletterData.newsletterId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newsletterData)
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(updateNewsletterSuccess(resp.data))
      }
    })
    .catch(console.log)
  }
}

export const deleteNewsletter = (newsletterId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/newsletters/${newsletterId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(r => r.json())
    .then(resp => {
      if (resp.error) {
        alert(resp.error)
      } else {
        dispatch(deleteNewsletterSuccess(newsletterId))
      }
    })
    .catch(console.log)
  }
}
