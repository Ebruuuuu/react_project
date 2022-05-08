import React, { useState, Fragment } from 'react'

import AddUser from './Components/AddUser/AddUser'
import UserList from './Components/UserList/UserList'

const App = () => {
  const [usersList, setUsersList] = useState([])
  const AddUserHandler = (userName, userAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: userName, age: userAge, id: Math.random().toString() },
      ]
    })
  }
  return (
    <Fragment>
      <AddUser onAddUser={AddUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </Fragment>
  )
}

export default App
