# api
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