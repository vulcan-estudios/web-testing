import User from 'server/models/User';

function get (req, res) {

  const { id } = req.params;

  User.
    findOne({ _id: id }).
    exec().
    then(function (user) {
      if (user) {
        res.json(user);
      } else {
        res.status(400).json({ message: 'Not found' });
      }
    }).
    catch(function (error) {
      console.error(error);
      res.status(500).json({ message: error.message });
    });
}

export default get;
