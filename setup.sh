#!/bin/bash
# Usage ./setup.sh [databasename] [username] [password]

# Create database and user
mongo --eval "use $1"
mongo admin -u admin -p admin --eval "db.getSiblingDB('$1').addUser('$2', '$3')"

# Set up environment variables
echo "DBUSER=$2" > .env
echo "DBPASSWORD=$3" >> .env
echo "SECRET=sauce" >> .env
