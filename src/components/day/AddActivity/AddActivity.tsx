/* eslint-disable no-unused-vars */
import { ACTIVITY_TYPES } from '../../../constants'
import styles from './AddActivity.module.css'

const AddActivity = (props: {
    name: string
    duration: number
    type: ACTIVITY_TYPES
    handleAddActivity: () => void
    setName: (name: string) => void
    setDuration: (duration: number) => void
    setType: (type: ACTIVITY_TYPES) => void
}) => (
    <form className={styles.FormWrapper}>
        <h3 className={styles.h3}>Activity Form</h3>

        <div>
            <input
                className={styles.input}
                type="text"
                id="name"
                value={props.name}
                placeholder="e.g. Reading"
                onChange={(e) => props.setName(e.target.value)}
            />
        </div>

        <label className={styles.DurationLabel}>Duration</label>
        <div className={styles.DurationWrapper}>
            <input
                className={styles.DurationInput}
                type="range"
                id="duration"
                value={props.duration}
                min="0.1"
                max="16"
                step="0.1"
                placeholder="e.g. 2.5"
                onChange={(e) => props.setDuration(Number(e.target.value))}
            />
            <span> {props.duration} hrs</span>
        </div>

        <label className={styles.TypeLabel}>Type</label>
        <div>
            <select
                className={styles.SelectInput}
                id="type"
                onChange={(e) =>
                    props.setType(e.target.value as ACTIVITY_TYPES)
                }
                value={props.type}
            >
                <option value={ACTIVITY_TYPES.STUDY}>Study</option>
                <option value={ACTIVITY_TYPES.WORK}>Work</option>
                <option value={ACTIVITY_TYPES.SPORTS}>Sports</option>
                <option value={ACTIVITY_TYPES.FUN}>Fun</option>
            </select>
        </div>

        <button
            className={styles.button}
            type="button"
            onClick={props.handleAddActivity}
        >
            Add Activity
        </button>
    </form>
)

export default AddActivity
