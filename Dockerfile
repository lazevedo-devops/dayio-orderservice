FROM alpine as builder
WORKDIR /app
COPY . /app

RUN apk add git &&\
    apk add --update nodejs npm &&\
    apk add --update npm

RUN adduser -D dayio && chown -R dayio /app
USER dayio

RUN npm install

CMD node index.js

