Running node in a docker container

```
docker run -it -d --name nodejs -v "$(pwd)"/:/usr/src/app -p 3000:3000 node

docker exec -it nodejs bash
```