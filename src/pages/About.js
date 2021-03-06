import React from 'react'

export const About = () => (
  <div className='jumbotron'>
    <div className='container'>
      <h1 className='display-4'>React Notes</h1>
      <p className='lead'>
        Version number <strong>00.00.01</strong>
      </p>
      <p>
        {' '}
        It is a simple <strong>React</strong> app made exclusively using &nbsp;
        <strong>React Hooks</strong> with a connection to &nbsp;
        <strong>Firebase</strong>.
      </p>
      What you can do:
      <ul>
        <li>add a new note</li>
        <li>remove note</li>
        <li>fetch all notes from the server</li>
        <li>navigate between pages</li>
        <li>see alerts and close them</li>
      </ul>
    </div>
  </div>
)
