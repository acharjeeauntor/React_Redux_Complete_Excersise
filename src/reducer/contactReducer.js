import { GET_CONTACTS,DELETE_CONTACT,ADD_CONTACT, GET_CONTACT,UPDATE_CONTACT } from '../actions/type'

const initialState = {
     contacts: [],
     contact:{}
}

export default function (state=initialState,action) {
     switch (action.type) {
          case GET_CONTACTS:
               return {
                    ...state,
                    contacts:action.payload
               }
          case GET_CONTACT:
               return {
                    ...state,
                    contact:action.payload
                   
               }
          case DELETE_CONTACT:
               return {
                    ...state,
                    contacts:state.contacts.filter(contact=>contact.id !== action.payload)
               }
          case ADD_CONTACT:
               return {
                    ...state,
                    contacts: [action.payload, ...state.contacts]
// ekhane new akta contact add holo tar sathe ager contact gulo thakbe r duita mile akta akta matroi array toiri hobe ja contacts er moddhe thakbe                    
               }
          case UPDATE_CONTACT:
               return {
                    ...state,
                    contacts: state.contacts.map(contact =>
                         contact.id === action.payload.id ?
                         (contact=action.payload):contact)
               }
          default:
               return state
     }
}