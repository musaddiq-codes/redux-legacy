import { combineReducers } from 'redux'
import counterReducer from '../reducers/reducers'
// import userReducer from './user/reducers'

const rootReducer = combineReducers({
    counterReducer,
    //    userReducer
})

export default rootReducer


// ///////////////////////////   Alternative


// import { combineReducers } from 'redux'
// import counterReducer from '..educers/reducers'
// // import userReducer from './reducers'

// const rootReducer = combineReducers({
//   count: counterReducer,
// //   user: userReducer
// })

// export default rootReducer
