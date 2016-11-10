import express    from 'express';
import bodyParser from 'body-parser';
import session    from 'cookie-session';
import users      from 'server/api/users';
import settings   from 'server/settings';

function routers (server) {

  // Middlewares
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.use(session({
    name: settings.session.name,
    secret: settings.session.pwd
  }));

  // Users
  server.get('/api/users', users.getAll);
  server.get('/api/users/:id', users.get);
  server.post('/api/login', users.login);

  // Public assets
  server.use(express.static(process.cwd() + '/public'));
}

export default routers;
