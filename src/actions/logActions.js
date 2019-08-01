import { GET_LOGS, SET_LOADING, LOGS_ERROR, ADD_LOG, DELETE_LOG, SET_CURRENT, CLEAR_CURRENT, UPDATE_LOG, SEARCH_LOGS } from './types';


// export const getLogs = () => {
//   // redux thunk allows us to return a function
//   return async ( dispatch ) => {
//     setLoading();
//     const res = await fetch('/logs')
//     const data = await res.json();

//     dispatch({
//       type: GET_LOGS,
//       payload: data
//     })
//   }
// }

// refactored...

export const getLogs = () => async dispatch => {
  // redux thunk allows us to return a function
  try {
    setLoading();
    const res = await fetch('/logs')
    const data = await res.json();

    dispatch({
      type: GET_LOGS,
      payload: data
    })
  } catch (error) {

    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })

  }
}

// SET LOADING TO TRUE
export const setLoading = () => {
  return {
    type: SET_LOADING
  }
}

export const addLog = (log) => async dispatch => {
  // redux thunk allows us to return a function
  try {
    setLoading();
    const res = await fetch('/logs', {
      method: 'POST',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();

    dispatch({
      type: ADD_LOG,
      payload: data
    })
  } catch (error) {

    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })

  }
}

// DELETE LOG

export const deleteLog = (id) => async dispatch => {
  // redux thunk allows us to return a function
  try {
    setLoading();
    await fetch(`/logs/${id}`, {
      method: 'DELETE'
    })
    dispatch({
      type: DELETE_LOG,
      payload: id
    })
  } catch (error) {

    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })

  }
}

// Update log on server

export const updateLog = (log) => async dispatch => {
  // redux thunk allows us to return a function
  try {
    setLoading();
    const res = await fetch(`/logs/${log.id}`, {
      method: 'PUT',
      body: JSON.stringify(log),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await res.json();
    dispatch({
      type: UPDATE_LOG,
      payload: data
    })
  } catch (error) {

    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })

  }
}

// Search Logs

export const searchLogs = (text) => async dispatch => {
  // redux thunk allows us to return a function
  try {
    setLoading();
    const res = await fetch(`/logs?q=${text}`)
    const data = await res.json();

    dispatch({
      type: SEARCH_LOGS,
      payload: data
    })
  } catch (error) {

    dispatch({
      type: LOGS_ERROR,
      payload: error.response.data
    })

  }
}

// set current log

export const setCurrent = log => {
  return {
    type: SET_CURRENT,
    payload: log
  }
}

// clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  }
}