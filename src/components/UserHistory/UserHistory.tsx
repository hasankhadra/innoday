import useGetHistory from '../../hooks/useGetHistory'
import { formatTime } from '../../utils/global'
import styles from './UserHistory.module.css'

const UserHistory = (props: { uid?: string }) => {
    const history = useGetHistory(props.uid)

    return (
        <div className="BlueBG">
            <div className="container">
                <div className={styles.HistoryWrapper}>
                    <h2 className={styles.h2}>History</h2>
                    <div className={styles.History}>
                        {history &&
                            history.map((activity, index) => (
                                <div className={styles.HistoryItem} key={index}>
                                    <h3 className={styles.h3}>
                                        <span className={styles.ActivityName}>
                                            {activity.name__c}
                                        </span>
                                        <span className={styles.ActivityType}>
                                            {activity.type__c}{' '}
                                        </span>
                                    </h3>
                                    <div>
                                        Spent&nbsp;
                                        <span className={styles.number}>
                                            {(
                                                activity.duration__c / 3600
                                            ).toFixed(2)}
                                        </span>
                                        &nbsp;hrs
                                    </div>
                                    <div>
                                        Date:{' '}
                                        <span className={styles.number}>
                                            {new Date(
                                                activity.datetime__c * 1000,
                                            ).getDate()}
                                            /
                                            {new Date(
                                                activity.datetime__c * 1000,
                                            ).getMonth() + 1}
                                            /
                                            {new Date(
                                                activity.datetime__c * 1000,
                                            ).getFullYear()}{' '}
                                            -&nbsp;
                                            {formatTime(
                                                new Date(
                                                    activity.datetime__c * 1000,
                                                ).getHours(),
                                            )}
                                            :
                                            {formatTime(
                                                new Date(
                                                    activity.datetime__c * 1000,
                                                ).getMinutes(),
                                            )}
                                        </span>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserHistory
