import React from 'react'

/**
 * Renders a notification that displays a error message
 * about not being able to connect to GitHub API.
 */
const ErrorNotification = () => {
  return (
    <div
      className="grid grid-rows-2 justify-center h-32 w-96 bg-rose-100 border border-red-400 text-red-700 p-3 rounded relative m-6"
      role="alert"
    >
      <p className="font-bold text-center">Error!</p>
      <p> Cannot communicate with GitHub API. </p>
      <p> Please try again in a minute. </p>
    </div>
  )
}

export default ErrorNotification
