import React, { useEffect, useState, useRef } from 'react'

function List() {
	const [toDoList, setToDoList] = useState([]);
	let toDoListFilter = toDoList.filter(todo => todo.done === false);
	let count = toDoListFilter.length;

	useEffect(() => {
		getToDoList();
	}, [])

	async function getToDoList() {
		const result = await fetch (`https://assets.breatheco.de/apis/fake/todos/user/sara_moreira`);
		const jsonResult = await result.json();
		setToDoList(jsonResult);
	}

	async function createList() {
		const emptyList = [];
		fetch('https://assets.breatheco.de/apis/fake/todos/user/sara_moreira', {
			method: "POST",
			body: JSON.stringify(emptyList),
			headers: {
			"Content-Type": "application/json"
			}
		})
		.then(resp => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			console.log(resp.text()); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is were your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			//error handling
			getToDoList();
			console.log(error);
		});
	}

	async function addToDo() {
		const newToDo = {
			label: `${input.current.value}`,
			done: false,
		}
		toDoList.push(newToDo);

		fetch('https://assets.breatheco.de/apis/fake/todos/user/sara_moreira', {
			method: "PUT",
			body: JSON.stringify(toDoList),
			headers: {
			"Content-Type": "application/json"
			}
		})
		.then(resp => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			console.log(resp.text()); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is were your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			//error handling
			getToDoList();
			console.log(error);
		});
	}

	async function deleteTodo(todo){
		todo.done = true;

		fetch('https://assets.breatheco.de/apis/fake/todos/user/sara_moreira', {
			method: "PUT",
			body: JSON.stringify(toDoList),
			headers: {
			"Content-Type": "application/json"
			}
		})
		.then(resp => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			console.log(resp.text()); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			//here is were your code should start after the fetch finishes
			console.log(data); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			//error handling
			getToDoList();
			console.log(error);
		});
	}

	async function deleteList(){
		fetch('https://assets.breatheco.de/apis/fake/todos/user/sara_moreira', {
			method: "DELETE",
			headers: {
			"Content-Type": "application/json"
			}
		})
		.then(resp => {
			console.log(resp.ok); // will be true if the response is successfull
			console.log(resp.status); // the status code = 200 or code = 400 etc.
			console.log(resp.text()); // will try return the exact result as string
			return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
		})
		.then(data => {
			console.log(data); //this will print on the console the exact object received from the server
		})
		.catch(error => {
			//error handling
			console.log(error);
			createList();
		});

	}

	const input = useRef();
	const [inputValue, setInputValue] = useState('');
	var fired = false;

	window.onkeydown = function(e) {
		if(!fired && e.keyCode === 13) {
			fired = true;
			addToDo();
			setInputValue('');
		}
	};

	window.onkeyup = function() {
		fired = false;
	};

	return (
		<div className='list'>
			<ul>
				<li>
					<input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} ref={input}/>
				</li>
				{toDoListFilter.map(todo => (
					<li key={todo.label}>
					{todo.label}
					<small className='erase' onClick={() => deleteTodo(todo)}>X</small>
				</li>
				))}
			</ul>
			<div className='footer'>
				<small>{count} item left</small>
				<h2 onClick={() => deleteList()}><small className='erase-all'>Delete list </small>X</h2>
			</div>
		</div>
	);
}

export default List
