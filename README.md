# Push Notifications 

Push Notification library written on top of socket.io

Send push notifications to clients in node.js.

## Installation and Setup
 - npm install push-notifications
 - In your server file
  - `var pushNotifications = require("push-notifications");
  - pushNotifications.push(socket, options);
  - options : 
   - title : Title of the Notification
   - body : Body of the notification
   - icon : Link to the image of the icon
  - Client
   - include notificationLogger.js 
    - 'Either <script src="js/pushNotifications.js"></script>'
    - 'Or <script src="https://raw.githubusercontent.com/hkirat/push-notifications/master/pushNotifications.js"></script>'

## Screenshot
 - pushNotifications.push(socket, {body : "Only body :)"});
  - ![Body Only](./img/1.png)
 - pushNotifications.push(socket, {title : "Custom Title", body : "Body with Title :("});
  - ![Body with Title](./img/2.png)
 - pushNotifications.push(socket, {icon : "./cat.png", title : "Custom Title", body : "Body With Title and Custom Icon :)"});
  - ![Image](./img/3.png)

## Browser Support

Works best on latest versions of Google Chrome, Firefox and Safari.