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

## License
MIT
