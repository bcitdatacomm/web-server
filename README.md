# api

[![Greenkeeper badge](https://badges.greenkeeper.io/bcitdatacomm/api.svg)](https://greenkeeper.io/)

This repository contains a server which handles the registration, authentication, and long term data storage for the game. 

## Download
`git clone https://github.com/bcitdatacomm/api.git`

## Install and Setup
Install dependencies:
`npm install`

Create a `.env` file in the root directory of the repository. Populate the file with the following environment variables: 

`DBUSER` Username of the remote DB user

`DBPASSWORD` Password of the remote DB user

`SECRET` A random secret to be used creating tokens

## Running
`npm start` or `node server.js`

<br>

# Endpoints
This section documents the available endpoints of the API.

### Common Params:
`token` the token returned from the login endpoint

`name` the players unique username

`password` the un hashed password of the player




## login

###### Note: this is endpoint does not require a token

POST - `/api/login`

#### Parameters
`name`
`password`


## register

###### Note: this is endpoint does not require a token

POST - `/api/register`

#### Parameters
`name`
`password`


## report_match
POST - `/api/report_match`

#### Parameters
`token`
`name`

`shots_fired` number of shots fired throughout match

`kills` number of kills throughout match

`if_game_won` 1 if game was won, 0 if game was lost

`time_played` time played in seconds

`deaths` number of deaths throughout match

## users
GET - `/api/users`

#### Parameters
`token`

## user
GET - `/api/user`

#### Parameters
`token`
`name`

