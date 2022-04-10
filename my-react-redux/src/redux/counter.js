const moduleName = 'counter'
export const COUNTER_INCREASE = `${moduleName}/COUNTER_INCREASE`
export const COUNTER_DESCENDING = `${moduleName}/COUNTER_DESCENDING`
export const EDIT_STRING = `${moduleName}/EDIT_STRING`

const initialState = {
  value: 0,
  string: ''
}

export default function Reducer(state = initialState, action) {
  const {type, payload} = action
  switch (type) {
    case COUNTER_DESCENDING:
    case COUNTER_INCREASE:
      return {...state, value: payload }
    case EDIT_STRING:
      return {...state, string: payload }
    default:
      return state
  }
}

