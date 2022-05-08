import React from 'react'
import NewUser from '../AddUser/NewUser/NewUser'
import classes from './UserList.module.css'
import Card from '../../UI/Card/Card'
const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <NewUser key={user.id}>
            {user.name} ({user.age} years old)
          </NewUser>
        ))}
      </ul>
    </Card>
  )
}
export default UserList
