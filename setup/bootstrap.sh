#!/bin/bash

## Environment setup.

## Node.js
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
sudo apt-get install -y nodejs

## Packages
cd /vagrant/
npm install

## MongoDB
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org
sleep 5s # Wait for mongod to be available
sudo service mongod start

## Database
cd /vagrant/
mongo < ./setup/mongodb.js
