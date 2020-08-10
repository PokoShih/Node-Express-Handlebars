# Node-Express-Handlebars

This application demonstrates the use of MySQL, Node, Express, Handlebars, and ORM.

In the application you are able to create(order) the burger you want.
Eat the burger(remove burger).

The initial burgers are entered from the server hosted on AWS via Heroku.
\public\assets\css\img/
<img src="/public/assets/img/Capture.PNG">
Tough Assignment


All the recommended files and directories from the steps above should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│   
│
├── server.js
│
└── views
    ├── index.handlebars
    └── layouts
        └── main.handlebars
```