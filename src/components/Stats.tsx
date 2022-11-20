/* eslint-disable no-prototype-builtins */
import './Stats.module.css'
import { DAYS } from '../constants'
import useGetStats from '../hooks/useGetStats'

const Stats = (props: { uid?: string }) => {
    const stats = useGetStats(props.uid)

    return (
        <div>
            {DAYS.map((day: string) => (
                <div className="dayStats" key={day}>
                    <h3>Stats for {day}</h3>
                    {stats?.hasOwnProperty(day) && stats[day] && (
                        <div>
                            <div>
                                Total hours spent today:{' '}
                                {stats[day].totalHours / 3600}
                            </div>
                            <div>
                                Total people active today:{' '}
                                {stats[day].totalPeople}
                            </div>
                            <div>
                                {stats[day].activities.map((stat) => (
                                    <div key={stat.type}>
                                        <h4>{stat.type}</h4>
                                        <div>
                                            Total hours spent:
                                            {(
                                                (stat.numHours /
                                                    stats[day].totalHours) *
                                                100
                                            ).toFixed(2)}
                                            %
                                        </div>
                                        <div>
                                            Total people who did this activity:
                                            {(
                                                (stat.numPeople /
                                                    stats[day].totalPeople) *
                                                100
                                            ).toFixed(2)}
                                            %
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Stats
