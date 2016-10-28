import User from 'server/models/User';

function getAll (req, res) {
  User.
    find({}).
    exec().
    then(function (users) {
      res.json(users);
    }).
    catch(function (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    });
}

export default getAll;
