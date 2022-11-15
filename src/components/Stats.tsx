import { DAYS } from '../constants'
import useGetStats from '../hooks/useGetStats'

const Stats = (props: { uid?: string }) => {
    const stats = useGetStats(props.uid)

    return (
        <div>
            {DAYS.map((day: string) => (
                <div key={day}>
                    ----------------------------------------
                    <div>Stats for {day}</div>
                    {stats && (
                        <div>
                            Total hours spent today: {stats[day].totalHours}
                        </div>
                    )}
                    {stats && (
                        <div>
                            Total people active today: {stats[day].totalHours}
                        </div>
                    )}
                    <div>
                        {stats &&
                            stats[day].activities.map((stat) => (
                                <div key={stat.name}>
                                    <div>
                                        {stat.name} - {stat.type}
                                    </div>
                                    <div>
                                        Total hours spent:{' '}
                                        {(
                                            (stat.numHours /
                                                stats[day].totalHours) *
                                            100
                                        ).toFixed(2)}{' '}
                                        %
                                    </div>
                                    <div>
                                        Total people who did this activity:{' '}
                                        {(
                                            (stat.numPeople /
                                                stats[day].totalPeople) *
                                            100
                                        ).toFixed(2)}{' '}
                                        %
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Stats
