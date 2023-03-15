import { Fetchtodos } from '../Slices/Todoslice'
import { useDispatch, useSelector } from 'react-redux'

const Todoview = () => {
    const state = useSelector(state => state.todos)
    // console.log(state.data);
    const dispatch = useDispatch()
    if (state.loading) {
        <h1>Loading....</h1>
    }
    
    return (
        <div>
            <button onClick={(e) => dispatch(Fetchtodos())}>Fetchtodos</button>
            {state.data.map(e => (
                <ul  key={e.id}>
                <li>Userid: {e.userId}</li>
                <li>User Tasks: {e.title.toUpperCase()}</li>
                </ul>
            ))}
        </div>
    )
}

export default Todoview
