import useGetHistory from '../hooks/useGetHistory'

const UserHistory = (props: { uid?: string }) => {
    const history = useGetHistory(props.uid)

    return (
        <div>
            {history?.activities.map((activity) => (
                <div key={activity.datetime}>
                    <h3>{activity.type} - {activity.name}</h3>
                    <div>Spent {(activity.duration / 3600).toFixed(2)} hours</div>
                    <div>Time: {new Date().getDate()}/{new Date().getMonth()}/{new Date().getFullYear()}</div>
                </div>
            ))}
        </div>
    )
}

export default UserHistory
