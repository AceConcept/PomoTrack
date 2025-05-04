# build stage
FROM node:22.15.0-alpine as build-stage

RUN apk update && apk upgrade && \
    apk add --no-cache bash git openssh python3 make g++

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

COPY public public
COPY src src
COPY vue.config.js .
RUN yarn run web:build

# production stage
FROM nginx:stable-alpine as production-stage
COPY --from=build-stage /app/dist_web /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]