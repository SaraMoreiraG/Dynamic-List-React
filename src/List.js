import React, { useState } from 'react'

function List() {
	const [list, setList] = useState([]);
	const [input, setInput] = useState('');
	const count = list.length;

	window.addEventListener("keydown", handlekeydown, true);
	function handlekeydown(e) {
		if(e.keyCode === 13){
			addToDo(input);
		}

	}

	window.onload = function() {
		const firstTask ={ id: Math.random(), todo: 'Make the bed' };
		const secondTask ={ id: Math.random(), todo: 'Wash my hands' };
		const thirdTask ={ id: Math.random(), todo: 'Eat' };
		const fourthTask ={ id: Math.random(), todo: 'Walk the dog' };

		setList([...list, firstTask, secondTask, thirdTask, fourthTask]);
	};

	const addToDo = (todo) => {
		const newTask = {
			id: Math.random(),
			todo: todo,
		};
		setList([...list, newTask]);
		setInput('');
	}

	const deleteTodo = (id) => {
		const newList = list.filter((todo) => todo.id !== id);
		setList(newList);
	}

	return (
		<div className='list'>
			<ul>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				{list.map((todo) => (
					<li key={todo.id}>
						{todo.todo}
						<small className='erase' onClick={() => deleteTodo(todo.id)}>X</small>
					</li>
				))}
			</ul>
			<div className='footer'>
				<small>{count} item left</small>
			</div>
		</div>
	);
}

export default List
