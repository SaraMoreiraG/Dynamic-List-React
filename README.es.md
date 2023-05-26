# Aplicación de Lista de Tareas

Este proyecto es una aplicación de Lista de Tareas con componentes de front-end y back-end. El front-end está construido usando React, mientras que el back-end se implementa utilizando una API RESTful. La aplicación permite a los usuarios gestionar tareas y sincronizarlas con la API del back-end.

## Front-end

El front-end de la aplicación de Lista de Tareas proporciona una interfaz de usuario amigable para gestionar las tareas. Se implementan las siguientes directrices:

- Las tareas se agregan cuando el usuario presiona la tecla Enter en el teclado o al hacer clic en un botón dedicado.
- El ícono de eliminar se muestra al pasar el cursor sobre una tarea.
- Los usuarios pueden agregar tantas tareas como deseen.
- Cuando no hay tareas, la lista muestra el mensaje "Sin tareas, agregar una tarea".

![Captura de pantalla del front-end de la Lista de Tareas](/images/frontend-screenshot.png)

## Back-end

El back-end de la aplicación de Lista de Tareas se implementa utilizando React y Fetch. Interactúa con una API RESTful y pública para manejar las tareas. Se admiten las siguientes características:

- La lista de tareas se sincroniza con la API del back-end cada vez que se agrega o elimina una tarea.
- Se proporciona un botón "Limpiar todas las tareas" para eliminar toda la lista del servidor y actualizar la lista vacía en el front-end.

## Empezando

Para ejecutar la aplicación de Lista de Tareas localmente, sigue estos pasos:

1. Clona el repositorio: `git clone https://github.com/SaraMoreiraG/ToDo-List-React.git`
2. Navega al directorio del proyecto: `cd todo-list-app`
3. Instala las dependencias: `npm install`
4. Inicia el servidor de desarrollo: `npm start`
5. Accede a la aplicación en tu navegador en: `http://localhost:3000`

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas contribuir a la aplicación de Lista de Tareas, sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b feature/mi-caracteristica`
3. Realiza tus cambios y haz commit de ellos: `git commit -am 'Agrega tu mensaje de commit'`
4. Sube tus cambios a la rama: `git push origin feature/mi-caracteristica`
5. Envía una solicitud de extracción (pull request).

