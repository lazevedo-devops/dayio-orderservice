# Order Service

Sample application that exposes a Rest API through 8080 port

#### Pre-Requisites

* NodeJS Installed

#### Install

```npm install```<br>
Run to install all required Node modules.

#### Run the App

```node .```<br> 
Run to exeute the server and start listening at 8080 port.

#### REST API

#### Getting a polite Hello

```GET /order```<br>
```code
curl -il http://localhost:8080/order
```

#### Response

```code
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: text/html; charset=utf-8
Content-Length: 26
ETag: W/"1a-GTHDlTZQXY7W5W6sXt81WVJO2KY"
Date: Sat, 16 Dec 2023 19:15:08 GMT
Connection: keep-alive
Keep-Alive: timeout=5

Hello World Order Service!
```

#### Questions and Feedback?

Find me on the Linkedin as lazevedo-devops or feel free to contact me through mail lazevedo@darkscreen.io.