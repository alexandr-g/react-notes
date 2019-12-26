import React, { Fragment, useContext, useEffect } from 'react'

import { Form, Notes, Loader } from '../components'
import { FirebaseContext } from '../context/firebase/firebaseContext'

export const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)

  useEffect(() => {
    fetchNotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Fragment>
      <Form />

      <hr />

      {loading ? <Loader /> : <Notes notes={notes} onRemove={removeNote} />}
    </Fragment>
  )
}
