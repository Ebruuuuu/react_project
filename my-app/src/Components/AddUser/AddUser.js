import React, { useState, useRef } from 'react'
import classes from './AddUser.module.css'
import Wrapper from '../Helpers/Wrapper'
import Card from '../../UI/Card/Card'
import Button from '../../UI/Button/Button'
import ErrorModal from '../../UI/ErrorModal/ErrorModal'

const AddUser = (props) => {
  //ref React hook = object
  /*ref genellikle sadece data okunmasının gerekli olduğu
  durumlarda state yerine kullanılır.
  state'de her keystroke'da current değer güncellenir.*/
  /* ref kullanılarak değerleri alınan inputlar "uncontrolled components"
  olarak adlandırılır.Çünkü inputların sadece değerleri(fetching) alınır.
  state'de ise inputların sahip olduğu internal state React tarafından kontrol edilir ve 
  inputlara bir geri data beslemesi olur. böylece input fields "controlled components" olur. */

  const inputNameRef = useRef()
  const inputAgeRef = useRef()

  // error hold the latest object
  const [error, setError] = useState()

  const AddUserHandler = (event) => {
    event.preventDefault()

    const enteredUsername = inputNameRef.current.value //string value
    const enteredUserAge = inputAgeRef.current.value
    console.log(enteredUsername, enteredUserAge)

    if (
      enteredUsername.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values)',
      })
      return
    }

    /* username ve age değişkenleri birer string ifadedir.
       Bu nedenle age değişkenini "+" ile number'a dönüştürdük.*/
    if (+enteredUserAge < 1) {
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid  age (>0)',
      })
      return
    }

    props.onAddUser(enteredUsername, enteredUserAge)
    //Ref normal şartlarda DOM manipulation'da kullanılmamalıdır.
    //Ancak state'in kullanılmadığı durumlarda nadiren de olsa kullanılabilir.
    //just used regular DOM API
    inputNameRef.current.value = ''
    inputAgeRef.current.value = ''
  }

  const errorHandler = () => {
    setError(null)
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={inputNameRef}></input>
          <label htmlFor="age">Age(Years)</label>
          <input id="age" type="number" ref={inputAgeRef}></input>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrapper>
  )
}

export default AddUser
