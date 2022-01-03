import React from 'react'

interface Props {
    showNotification: boolean
}


const Notification = ({ showNotification }: Props) => {
    return (
      //templet literal which checks if the show is true
      <div className={`notification-container ${showNotification ? 'show' : ''}`}>  
        <p>You have already entered this word</p>
      </div>
    )
  }

export default Notification
