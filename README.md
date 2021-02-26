ToDo Front End Test project

Project made with:
create-react-app
Bootstrap
redux-toolkit
react-redux
react-router
Express
Mysql

To run this project:

Clone this Repository.

On a system running Mysql server, execute the schema file on Backend/app/db/schema.sql, add your local credentials by environmental variables or directly on Backend/app/config/connection.js.

In the front-end directory run:'npm install' and when it finishes run: 'npm run build' to create a production bundle, after that copy the build folder to the Backend directory.

In the backend directory run 'npm install' and then 'npm run start' to start the server.

Open [http://localhost:8000] to view it in the browser.

If you're not installing locally modify Frontend\src\Api\api.js to add Server URL.
