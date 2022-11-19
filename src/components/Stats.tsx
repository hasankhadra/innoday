import './Stats.module.css'
// eslint-disable-next-line no-unused-vars
import { DAYS } from '../constants'
import useGetStats from '../hooks/useGetStats'

const Stats = (props: { uid?: string }) => {
    // eslint-disable-next-line no-unused-vars
    const stats = useGetStats(props.uid)

    return <div> Hi </div>
    // (
    //     <div>
    //         {DAYS.map((day: string) => (
    //             <div className="dayStats" key={day}>
    //                 <h3>Stats for {day}</h3>
    //                 {stats && (
    //                     <div>
    //                         Total hours spent today: {stats[day].totalHours}
    //                     </div>
    //                 )}
    //                 {stats && (
    //                     <div>
    //                         Total people active today: {stats[day].totalHours}
    //                     </div>
    //                 )}
    //                 <div>
    //                     {stats &&
    //                         stats[day].activities.map((stat) => (
    //                             <div key={stat.name}>
    //                                 <h4>
    //                                     {stat.name} - {stat.type}
    //                                 </h4>
    //                                 <div>
    //                                     Total hours spent:{' '}
    //                                     {(
    //                                         (stat.numHours /
    //                                             stats[day].totalHours) *
    //                                         100
    //                                     ).toFixed(2)}{' '}
    //                                     %
    //                                 </div>
    //                                 <div>
    //                                     Total people who did this activity:{' '}
    //                                     {(
    //                                         (stat.numPeople /
    //                                             stats[day].totalPeople) *
    //                                         100
    //                                     ).toFixed(2)}{' '}
    //                                     %
    //                                 </div>
    //                             </div>
    //                         ))}
    //                 </div>
    //             </div>
    //         ))}
    //     </div>
    // )
}

export default Stats
