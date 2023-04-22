# RESTFullAPI_for_todo

##Tech Stack Used:
-Node.Js
-Express.Js
-MongoDB
-JWT Authentication

## How-To-Use

- Clone this project
- Start by installing npm and mongoDB if you don't have them already.
- Run the Mongo Server.
- run following commands :
    ```
    npm install 
    ```
    ```
    npm start
    ```
## Basic-Features
- Users should be able to create, read, update, and delete tasks using appropriate HTTP methods (POST, GET, PUT, DELETE).
- Implement JWT authentication using jsonwebtoken.
- Users should be able to register, log in, and receive a JWT upon successful authentication.
- Only authenticated users can perform CRUD operations on their own tasks.
- pagination(per page 2 items only).

## API
-  To Register User:-  POST : http://localhost:8000/user/singup
-  To Login User:-  POST : http://localhost:8000/user/login
-  After login you get token , copy that taken and send it with every request to perform CURD operation in for Authorization.
-  To Create Task:-  POST : http://localhost:8000/user/tasks/
-  To Delete Task:-  DELETE : http://localhost:8000/user/tasks/:id
-  To Update Task:-  PUT : http://localhost:8000/user/tasks/:id
-  To Find Single Task:-  GET : http://localhost:8000/user/tasks/:id
-  To Find All Tasks Related To Logedin User :-  GET : http://localhost:8000/user/tasks/
   
## Directory Structure and flow of The Code
This code follows MVC pattern and hence everything is differentiated and well managed:

    RESTFull_API_for_todo
        |-----assets
        |------ config
        |         └--- mongoose.js
        |         └--- passport-jwt-strategy.js
        |------ controllers
        |         |-----api
        |                 |-----v1
        |                       └--- tasks_api.js
        |                       └--- user_api.js
        |------ models
        |         └--- task.js 
        |         └--- user.js
        |------ routes
        |         |-----api
        |                 |-----v1
        |                       └--- index.js
        |                       └--- tasks.js
        |                       └--- user.js
        |------ index.js
        |------ package.json
        |------ package-lock.json
        └------ README.md
