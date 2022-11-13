/* eslint-disable no-unused-vars */
import { ACTIVITY_TYPES } from "../../constants";

const AddActivity = (props: {
    name: string, 
    duration: number, 
    type: ACTIVITY_TYPES, 
    handleAddActivity: () => void,
    setName: (name: string) => void,
    setDuration: (duration: number) => void,
    setType: (type: ACTIVITY_TYPES) => void
}) => (<form>
        <div>
            <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                value={props.name}
                placeholder="e.g. Reading"
                onChange={(e) => props.setName(e.target.value)}
            />
        </div>
        <div>
            <label htmlFor="duration">Duration (hours)</label>
            <input
                type="range"
                id="duration"
                value={props.duration}
                min="0.1"
                max="16"
                step="0.1"
                placeholder="e.g. 2.5"
                onChange={(e) => props.setDuration(Number(e.target.value))}
            />
            <span> {props.duration} hours</span>
        </div>
        <div>
            <label htmlFor="type">Type</label>
            <select
                id="type"
                onChange={(e) => props.setType(e.target.value as ACTIVITY_TYPES)}
                value={props.type}
            >
                <option value={ACTIVITY_TYPES.STUDY}>Study</option>
                <option value={ACTIVITY_TYPES.WORK}>Work</option>
                <option value={ACTIVITY_TYPES.SPORTS}>Sports</option>
                <option value={ACTIVITY_TYPES.FUN}>Fun</option>
            </select>
        </div>
        <button type="button" onClick={props.handleAddActivity}>
            Add Activity
        </button>
    </form>)

export default AddActivity;