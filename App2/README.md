# App 2

In order to use this application, you will need to run a mock server. This is because  web browsers don't let you read files locally via an HTTP protocol. That would be no good. Instead, we serve out all the files, and call upon ourselves when we want to use the data instead. This allows use to seperate our stuff and maintain our code a bit better

Running the code below in this folder will serve the folder as a project and will be available at `localhost:8080`
```bash
http-server .
```