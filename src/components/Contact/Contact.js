import React, { Component } from 'react'
import {firestore} from '../../Database/firebase.utils'
import './contact.css'
export default class Contact extends Component {
  constructor(props) {
    super()
    this.state = {
      name:'',
      email:'',
      message:'',
    }
  }
  render() {
    return (
      <div className="container">
     <form id="contact">
       <label>
         <input
         type="text"
         name="name"
         placeholder="Your Name"
         />
       </label>
       <label>
         <input
         type="text"
         name="email"
         placeholder="Enter email"
         />
         </label>
         <label>
           <textarea
           placeholder="message..."
           require
           ></textarea>
         </label>
         <div>
           <button type="submit">submit</button>
         </div>

      
     </form>
      </div>
    )
  }
}
