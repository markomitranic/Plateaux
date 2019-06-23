# Plateaux
Plateaux is a multi-directional real-time creative collaboration platform based on WebSockets
Plateaux is a state of the art musical collaboration mechanism.
Pull requests are welcome.

Hosted Live: http://plateaux.space/
Thesis: https://medium.com/homullus/multi-directional-real-time-creative-collaboration-platform-based-on-websockets-c2636e736cd1

Multiple performers collaborate in a real-time, virtual, three-dimensional music jam session, with a goal of creating a non-stop, ever-changing and looping tune.
It feels like a game - In the top menu, you are presented with a selection of melodies asleep. By selecting any one, you will spawn a three-dimensional Gizmo which can be controlled by any other performer.

Plateaux was created by Marko Mitranić, as an open-source practical segment of his major BSc thesis at SAE Institute of Technology, in June 2017.
For any questions regarding the project, please contact the author directly, open up an issue or a pull request.

![Plateaux](http://i65.tinypic.com/29bziw9.jpg)

## Acknowledgements
This project was created using a plaethora of technologies, plugins and blogposts. The full reference list is available as a part of my major thesis (link soon).

In short, 
- Srdjan Popov created the audio sprites in 2012 as a part of our collaboration on EFSWM project.
- [Whitestorm.js](https://github.com/WhitestormJS) was used not only as a Three.js plugin of choice, but also the visual design of the planet and its asteroid belt was directly created from one of their documentation examples.
- [websockets/ws](https://github.com/websockets/ws) was used for websocket control on the Node server side.

## Installation
Application consists of two segments, server and a client. At this point, they are divided, and the client is served over standard nginx or apache. As Apache does not play well with Node on the same domain, at least not on UNIX systems, and as we do not want to run it as root, i am attaching a simple nginx server block below:
```
server {
        listen *:80;
        server_name plateaux.space;
        root /var/www/plateaux/client/app;

        error_log /usr/local/var/log/nginx/error-plateaux.dev.log;
        access_log /usr/local/var/log/nginx/access-plateaux.dev.log;

        index index.php index.html index.htm index.nginx-debian.html;

        location / {
                try_files $uri $uri/ /index.php?$args;
                autoindex on;
        }

        location /server {
                proxy_pass http://127.0.0.1:3000/;
                proxy_http_version 1.1;
                proxy_set_header Upgrade $http_upgrade;
                proxy_set_header Connection 'upgrade';
                proxy_set_header Host $host;
                proxy_cache_bypass $http_upgrade;
        }
}
```
Apart from that, everything should go smoothly, server should be mapped to run at `/server` URL, and is run by direct node call or pm2 monitor.

Generated front end scripts are not tracked and must be built with gulp. I have set up a custom `gulp watch` task to compile scripts.
 
So, in short:
```
cd client
gulp watch

cd server
node plateaux.js
```
## Known issues & TODOs
- Should implement icon textures as visual guidelines for Gizmo recognition (materials and meshes also).

## Future Prospects
- Mobile version of the project. Maybe even a Cordova Application?
- Initial loader stays at 99% for a surreal amount of time (while it loads 14MB of audio). This is the problem with the loader configuration (pace.js used).
- Users should not be able to hold more than one Gizmo at a time.
- After server terminates connection for whatever reason, clients should be told that they are working offline, and shown a reconnect button.
- Offline mode population should be allowed by default (move population logic to client).

## Mobile Support
Unfortunately, the Plateaux weighs somewhere around 16 MB, so mobile devices are not supported for the sake of users data bills.
Future prospects include a Cordova mobile app, which would keep audio in local storage. Pull requests are welcome. Until then, please use Plateaux from your desktop browser, thanks!
