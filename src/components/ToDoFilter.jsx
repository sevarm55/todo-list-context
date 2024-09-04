import { useContext } from 'react'
import { todoContext } from '../context'

const ToDoFilter = () => {
	const { currentFilter, setCurrentFilter } = useContext(todoContext)
	const filterLists = ['all', 'completed', 'active']

	console.log(currentFilter)

	return (
		<div className="todo-filter">
			{filterLists.map((list, i) => {
				return (
					<button
						key={i}
						className={currentFilter == list ? 'active' : ''}
                        onClick={() => setCurrentFilter(list)}
					>
						{list.toUpperCase()}
					</button>
				)
			})}
		</div>
	)
}

export default ToDoFilter
