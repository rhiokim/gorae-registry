FROM mhart/alpine-node:7

MAINTAINER Rhio Kim "rhio.kim@gmail.com"

RUN sed -i -e 's/dl-cdn/dl-4/' /etc/apk/repositories && \
    apk --update add git openssh

# copy package first to cache npm-install and speed up build
RUN mkdir -p server root

COPY server/libs server/libs
COPY server/routes server/routes
COPY server/scripts server/scripts
COPY server/index.js server/index.js
COPY server/package.json server/package.json

# COPY server server
COPY build www

RUN ssh-keygen -t rsa -b 4096 -f /root/.ssh/id_rsa
RUN ssh-keyscan -H github.com,192.30.253.112 >> ~/.ssh/known_hosts
# RUN cat /root/.ssh/id_rsa.pub

WORKDIR server

RUN npm --quiet --no-color --prod install
RUN npm cache clean

EXPOSE 8082

CMD ["npm", "start"]
