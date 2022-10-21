![GitHub](https://img.shields.io/github/license/Ahmed101Mohammed/simple-chat-app?color=blue&style=flat-square)
&nbsp;
![GitHub Repo stars](https://img.shields.io/github/stars/Ahmed101Mohammed/simple-chat-app?style=flat-square)
&nbsp;
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/Ahmed101Mohammed/simple-chat-app?color=blue&style=flat-square)
&nbsp;
![GitHub repo file count](https://img.shields.io/github/directory-file-count/Ahmed101Mohammed/simple-chat-app?style=flat-square)

# simple-chat-app
It's a simple chat application I build as an exercise from
socket.io document examples.

I built it with the following:
- node.js
- express
- socket.io => for making real-live applications.

## Installation and running of the application:
### Installation:
You can install the project by cloning the repository in your computer by typing this line in your terminal:
```
gh repo clone Ahmed101Mohammed/simple-chat-app
```
### Running the application:
To run the project, inter the project file by your terminal and do that: 
<br />

1- Type this line in your terminal:
```
npm install
```
This line will install these packages:
- express
- socket.io
- nodemon
<br />

2- After installation is done, you can write this line in your terminal:
```
npm test
```
<br />

3- Open your browser and type that in the search place:
```
http://localhost:8080/
```

## How to use the application:
### How to write a message:
When you open the application in the browser, you will see the home page:
![Home page](https://github.com/Ahmed101Mohammed/simple-chat-app/blob/main/images/allPage.png)

in the lower part of the home page you can see the message input field, where you can write your message:
![Message input](https://github.com/Ahmed101Mohammed/simple-chat-app/blob/main/images/messageInput.png)

### How to send a message:
To send the message you will press on the ``send`` button and the message will appear in the messages container:
<br />

![container of messages (messages view)](https://github.com/Ahmed101Mohammed/simple-chat-app/blob/main/images/messagingContainer.png)

## How to test the WebSocket protocol in this project:
> Open many pages of this project in your browser and send messages from them,
> You will see that the messages appear in all sockets.
