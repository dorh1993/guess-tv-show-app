import { getStatistics } from '../helpers/helpers';

export interface NotificationType {
  showNotification: boolean
  type: 'statistics' | 'repeated'
}


const Notification = ({ showNotification, type }: NotificationType) => {
  const statistics = getStatistics()

  return (
    //templet literal which checks if the show is true
    <div className={`notification-container ${showNotification ? 'show' : ''}`}>
      {type === 'statistics'
        ?
        <p>
          Wins: {statistics.winCounter} Losts: {statistics.lostCounter} Hints: {statistics.hintCounter}
        </p>
        :
        <p>
          You have already entered this word
        </p>
      }
    </div>
  )
}

export default Notification
