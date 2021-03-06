# api

[![Greenkeeper badge](https://badges.greenkeeper.io/bcitdatacomm/api.svg)](https://greenkeeper.io/)

This repository contains a server which handles the registration, authentication, and long term data storage for the game. 

## Download
`git clone https://github.com/bcitdatacomm/api.git`

## Install and Setup
Install dependencies:
`npm install`

Instal MongoDB
`sudo dnf install mongodb mongodb-server`

Run the setup script
`./setup.sh DBNAME DBUSER DBPASSWORD`

`DBNAME` Name of the remote DB

`DBUSER` Username of the remote DB user

`DBPASSWORD` Password of the remote DB user

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

Log in an existing user. Pass in the name and password. Token is returned. 

#### Parameters
`name`
`password`


## register

###### Note: this is endpoint does not require a token

POST - `/api/register`

Register a new user. Pass in desired name and password.

#### Parameters
`name`
`password`


## report_match
POST - `/api/report_match`

Reports the statistics for a users match. Requires a token and a user to report for. See parameters for other information to be posted.

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

Gets all users. Requires a token.

#### Parameters
`token`

## user
GET - `/api/user`

Gets a user by name. Requires a token.

#### Parameters
`token`
`name`

