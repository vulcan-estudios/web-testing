import User from 'server/models/User';

function login (req, res) {

  const { email, pwd } = req.body;

  User.
    findOne({ email, pwd }).
    exec().
    then(function (user) {

      if (!user) {
        throw new Error('Email or password don\'t match');
      }

      req.session.sessionid = user._id;
      res.json(user);
    }).
    catch(function (error) {
      console.error(error);
      res.status(401).json({ message: error.message });
    });
}

export default login;
