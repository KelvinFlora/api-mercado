# Parking API

Basic API that register users cars and parking entrance/exit with pricing calculation.

- [Parking API](#parking-api)
  - [Features](#features)
  - [Info](#info)
  - [Environment Setup](#environment-setup)
  - [Environment Variables](#environment-variables)
  - [Routes](#routes)
    - [test](#test)

## Features

- Car/User registration
- Parking entrance/exit
- Pricing calculation

## Info

- Node Version 18 LTS
- Express
- Mongoose (MongoDB)
- NoSQL
  
## Environment Setup

- Setup `.env` using `.env-sample`

## Environment Variables

Create a .env with that variables:

| Variable | Description | Type | Default | Required? |
|----|---|---|--|--|
|DEVELOPMENT|Toggle development mode, show logs in console, etc.|boolean|Undefined (false)|NO|
|PORT | Server listen port | number |8000 | NO|

## Routes

Use docs/routes.json to import routes in clients like insomnia or postman.

### test