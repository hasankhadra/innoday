import useGetHistory from '../hooks/useGetHistory'

const UserHistory = (props: { uid?: string }) => {
    const history = useGetHistory(props.uid)

    return (
        <div>
            {history?.activities.map((activity) => (
                <div key={activity.datetime}>
                    <div>{activity.name}</div>
                    <div>{activity.duration}</div>
                    <div>{activity.type}</div>
                    <div>{activity.datetime}</div>
                </div>
            ))}
        </div>
    )
}

export default UserHistory
