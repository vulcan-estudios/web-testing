import consts from './consts';

function login () {
  return chai.
    request(consts.SERVER).
    post('/api/login').
    field('email', consts.USER.EMAIL).
    field('pwd', consts.USER.PWD);
}

export { login };
