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
The application is served over 3 Docker containers. Node, Build and Http Server.
 
So, in short:
```
cd Docker
./deploy.sh

http://plateaux.local
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
