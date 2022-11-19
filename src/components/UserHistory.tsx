import useGetHistory from '../hooks/useGetHistory'

const UserHistory = (props: { uid?: string }) => {
    const history = useGetHistory(props.uid)

    return (
        <div>
            {history &&
                history.map((activity, index) => (
                    <div key={index}>
                        {activity ? (
                            <div>
                                <h3>
                                    {activity.type__c} - {activity.name__c}
                                </h3>
                                <div>
                                    Spent
                                    {(activity.duration__c / 3600).toFixed(2)}
                                    hours
                                </div>
                                <div>
                                    Time: {new Date().getDate()}/
                                    {new Date().getMonth()}/
                                    {new Date().getFullYear()}
                                </div>
                            </div>
                        ) : (
                            <div>no data for this day</div>
                        )}
                    </div>
                ))}
        </div>
    )
}

export default UserHistory
