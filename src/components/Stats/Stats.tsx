/* eslint-disable no-prototype-builtins */
import styles from './Stats.module.css'
import { DAYS } from '../../constants'
import useGetStats from '../../hooks/useGetStats'

const Stats = (props: { uid?: string }) => {
    const stats = useGetStats(props.uid)

    return (
        <div className="BlueBG">
            <div className="container">
                <div className={styles.DaysWrapper}>
                    {DAYS.map((day: string) => (
                        <div className={styles.dayStats} key={day}>
                            <h3 className={styles.h3}>Stats for {day}</h3>
                            {stats?.hasOwnProperty(day) && stats[day] && (
                                <div>
                                    <div>
                                        Total hours spent today:&nbsp;&nbsp;
                                        <span className={styles.number}>
                                            {stats[day].totalHours / 3600}
                                        </span>
                                    </div>
                                    <div>
                                        Total people active today:&nbsp;&nbsp;
                                        <span className={styles.number}>
                                            {stats[day].totalPeople}
                                        </span>
                                    </div>
                                    <div>
                                        {stats[day].activities.map((stat) => (
                                            <div key={stat.type}>
                                                <h4 className={styles.type}>
                                                    {stat.type}
                                                </h4>
                                                <div>
                                                    Total hours
                                                    spent:&nbsp;&nbsp;
                                                    <span
                                                        className={
                                                            styles.number
                                                        }
                                                    >
                                                        {(
                                                            (stat.numHours /
                                                                (stats[day]
                                                                    .totalHours ||
                                                                    1)) *
                                                            100
                                                        ).toFixed(2)}
                                                        %
                                                    </span>
                                                </div>
                                                <div>
                                                    People who did this
                                                    activity:&nbsp;&nbsp;
                                                    <span
                                                        className={
                                                            styles.number
                                                        }
                                                    >
                                                        {(
                                                            (stat.numPeople /
                                                                (stats[day]
                                                                    .totalPeople ||
                                                                    1)) *
                                                            100
                                                        ).toFixed(2)}
                                                        %
                                                    </span>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stats
