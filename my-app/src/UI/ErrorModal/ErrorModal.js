import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './ErrorModal.module.css'
import Card from '../Card/Card'
import Button from '../Button/Button'

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onConfirm}></div>
}
const ModalOverlay = (props) => {
  return (
    <Fragment>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>{props.message}</div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </Fragment>
  )
}
const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm}></Backdrop>,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        ></ModalOverlay>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  )
}

export default ErrorModal
