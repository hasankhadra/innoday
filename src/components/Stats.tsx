import useGetStats from '../hooks/useGetStats'

const Stats = () => {
    const stats = useGetStats()

    return (
        <div>
            <div>Stats for today</div>
            {stats && <div>Total hours spent today: {stats.totalHours}</div>}
            {stats && <div>Total people active today: {stats.totalHours}</div>}
            <div>
                {stats &&
                    stats.activities.map((stat) => (
                        <div key={stat.name}>
                            <div>
                                {stat.name} - {stat.type}
                            </div>
                            <div>
                                Total hours spent:{' '}
                                {(
                                    (stat.numHours / stats.totalHours) *
                                    100
                                ).toFixed(2)}{' '}
                                %
                            </div>
                            <div>
                                Total people who did this activity:{' '}
                                {(
                                    (stat.numPeople / stats.totalPeople) *
                                    100
                                ).toFixed(2)}{' '}
                                %
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Stats
