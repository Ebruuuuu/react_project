import React from 'react'
import classes from './NewUser.module.css'
const NewUser = (props) => {
  return <li className={`${classes['new-user']}`}>{props.children}</li>
}
export default NewUser
