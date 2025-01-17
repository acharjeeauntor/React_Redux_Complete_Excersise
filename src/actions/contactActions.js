import { GET_CONTACTS, DELETE_CONTACT, ADD_CONTACT,GET_CONTACT,UPDATE_CONTACT } from './type'
import axios from 'axios'

export const getContacts = () => dispatch => {
     axios.get('https://jsonplaceholder.typicode.com/users')
     .then(res=>{
         dispatch({
              type: GET_CONTACTS,
              payload:res.data
     })
     })
     .catch(err=>console.log(err))
}

export const getContact = (id) => dispatch => {
     axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
     .then(res=>{
         dispatch({
              type: GET_CONTACT,
              payload:res.data
     })
     })
     .catch(err=>console.log(err))
}

export const deleteContact = (id) => dispatch => {
     axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
          .then(() => {
              dispatch({
          type: DELETE_CONTACT,
          payload:id
     }) 
          })
     .catch(err=>console.log(err))
}

export const addContact = (contact) => dispatch => {
     axios.post('https://jsonplaceholder.typicode.com/users', contact)
          .then(res => {
               dispatch({
          type: ADD_CONTACT,
          payload:res.data
     })
          })
          .catch(err=>console.log(err))
     
}

export const updateContact = (contact) => dispatch => {
     axios.put(`https://jsonplaceholder.typicode.com/users/${contact.id}`, contact)
          .then(res => {
               dispatch({
          type: UPDATE_CONTACT,
          payload:res.data
     })
          })
          .catch(err=>console.log(err))
     
}