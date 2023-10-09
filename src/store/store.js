


import { createStore } from 'redux'

// rootReducer means multiple reducers
import rootReducer from './combineReducer'

const store = createStore(rootReducer)

export default store





/////////////////////////////////////////////////// only single reducer

// import { createStore } from 'redux'
// import counterReducer from '../reducers/reducers'

// const store = createStore(  
//     counterReducer
// )

// export default store
