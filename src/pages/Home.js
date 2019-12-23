import React, { Fragment, useContext, useEffect } from 'react'
import { Form, Notes } from '../components'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {
  const { loading, notes, fetchNotes } = useContext(FirebaseContext)

  return (
    <Fragment>
      <Form />

      <hr />

      <Notes notes={notes} />
    </Fragment>
  )
}
