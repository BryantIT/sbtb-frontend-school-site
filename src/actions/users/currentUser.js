import { resetLoginForm } from './loginForm';
import { resetSignupForm } from './signupForm';
import { trackPromise } from 'react-promise-tracker'


export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}


export const signup = (credentials, history) => {
  return dispatch => {
    const userInfo ={
      user: credentials
    }
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
    .then(r => r.json())
    .then(response => {
      if (response.error) {
        alert(response.error)
      } else {
        dispatch(setCurrentUser(response.data))
        dispatch(resetSignupForm())
        history.push('/')
      }
    })
    .catch(console.log)
  }
}

  export const login = (credentials, history) => {
    return dispatch => {
      return trackPromise(fetch("http://localhost:3000/api/v1/login", {

        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(credentials)
      })
      .then(res => res.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(resetLoginForm())
          history.push('/')
        }
      })
    )
      .catch(console.log)
    }
  }

export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    return fetch("http://localhost:3000/api/v1/logout", {
      credentials: "include",
      method: 'DELETE'
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          console.log(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
        }
      })
      .catch(console.log)
  }
}
