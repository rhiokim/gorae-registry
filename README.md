# [![](media/gorae-registry-github-banner.png)](https://github.com/rhiokim/gorae-registry)

The `gorae-registry` project is web interface solution for a private docker registry using modern web technology.

## Usage

(not ready yet)
```
$ docker run \
  -d \
  --restart=always \
  -p 5001:8082 \
```

## Run test

```bash
$ npm test
```

## Dockerize

```bash
$ npm run docker:build  // build image
$ npm run docker:run    // run container
$ npm run docker:rm     // remove running container
$ npm run docker        // run build, rm, run at once
```

## Branch Structure
```
master
  \_ nw
  \_ material
  \_ ant-design
  \_ photon
    \_ photon-with-nwjs (photon + nw)
  \_ semantic-ui
```
## Screenshot
* with photon
![photon home](https://raw.githubusercontent.com/rhiokim/react-boilerplate/gh-pages/assets/images/photon.png)
* with material
![photon home](https://raw.githubusercontent.com/rhiokim/react-boilerplate/gh-pages/assets/images/material.png)
* with ant-design
![photon home](https://raw.githubusercontent.com/rhiokim/react-boilerplate/gh-pages/assets/images/ant-design.png)
* with photon and nwjs
![photon home](https://raw.githubusercontent.com/rhiokim/react-boilerplate/gh-pages/assets/images/nwjs.png)

## License
MIT
