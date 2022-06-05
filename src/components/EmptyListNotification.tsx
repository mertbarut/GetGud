import React from 'react'

/**
 * Renders a notification that informs the user about
 * list being empty.
 */
const EmptyListNotification = () => {
  return (
    <div
      className="grid grid-rows-2 justify-center h-32 w-96 bg-sky-100 border border-blue-400 text-blue-700 p-3 rounded relative m-6"
      role="alert"
    >
      <p className="font-bold text-center">Wah Wah Waaaaah...</p>
      <p> Repositories list is empty! </p>
      <p> Try alternative filter parameters, or encourage this user to publish some repositories. </p>
    </div>
  )
}

export default EmptyListNotification