# Todo List Application

This project is a Todo List application with a front-end and back-end component. The front-end is built using React, while the back-end is implemented using a RESTful API. The application allows users to manage tasks and sync them with the backend API.

## Front-end

The front-end of the Todo List application provides a user-friendly interface for managing tasks. The following guidelines are implemented:

- Tasks are added when the user presses the Enter key on the keyboard or by clicking a dedicated button.
- The delete icon is displayed when hovering over a task.
- Users can add as many tasks as they want.
- When there are no tasks, the list displays the message "No tasks, add a task".

![Todo List Front-end Screenshot](/images/frontend-screenshot.png)

## Back-end

The back-end of the Todo List application is implemented using React and Fetch. It interacts with a RESTful and public API to handle the tasks. The following features are supported:

- The to-do list syncs with the backend API every time a task is added or deleted.
- A "Clean all tasks" button is provided to delete the entire list from the server and update the empty list on the front-end.


## Getting Started

To run the Todo List application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/SaraMoreiraG/ToDo-List-React.git`
2. Navigate to the project directory: `cd todo-list-app`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Access the application in your browser at: `http://localhost:3000`

## Contributing

Contributions are welcome! If you'd like to contribute to the Todo List application, please follow these steps:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/my-feature`
3. Make your changes and commit them: `git commit -am 'Add your commit message'`
4. Push your changes to the branch: `git push origin feature/my-feature`
5. Submit a pull request
