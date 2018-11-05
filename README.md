# ToDo-Vue
[![Build Status](https://travis-ci.org/dtom90/ToDo-Vue.svg?branch=master)](https://travis-ci.org/dtom90/ToDo-Vue)
[![CircleCI](https://circleci.com/gh/dtom90/ToDo-Vue.svg?style=svg)](https://circleci.com/gh/dtom90/ToDo-Vue)

Simple To-Do application written in [Vue.js](https://vuejs.org/)

## Project setup
```
yarn install
```
#### Build Docker image for development:
```
docker build -t todo-vue .
```

## Development
#### Compile and hot-reload for development:
```
yarn run serve
```
#### Build Docker image and deploy container for development:
```
./docker/dev.sh
```

## Test
#### Lint and fix source files
```
yarn run lint
```
#### Run unit tests with jest
```
yarn run test:unit
```
#### Run end-to-end tests with [TestCafé](https://testcafe.devexpress.com/) (with dev or prod server)
```
yarn run test:e2e:dev
yarn run test:e2e:prod
```
#### Run all tests (lint, unit tests, end-to-end tests)
```
yarn run test
```
#### Run all tests in Docker containers
```
./docker/test.sh
```

## Production
#### Compile and minify for production
```
yarn run build
```
#### Serve production files
```
yarn run serve:prod
```
#### Build Docker image and deploy container for production:
```
./docker/prod.sh
```
