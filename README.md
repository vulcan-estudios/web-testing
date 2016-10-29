# web-testing

[![vulcan-estudios](https://img.shields.io/badge/vulcan_estudios-project-db8836.svg)](http://vulcanst.co)

Node.js, MongoDB, Express and React web application example with unit and integration tests written in Mocha, Chai, Karma and Enzyme.

## Install

Using Vagrant, start the box and everything will be installed:

```bash
$ vagrant up
```

## Start

Get inside:

```bash
$ vagrant ssh
```

And start the MongoDB server and the application server:

```bash
$ sudo service mongod start
$ cd /vagrant
$ npm run start
```

## Run tests

```bash
$ cd /vagrant
$ npm run test
```

## License

[MIT](./LICENSE)
