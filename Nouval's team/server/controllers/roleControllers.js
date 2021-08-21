const { Role } = require("../models");
const routes = {};

routes.postRole = async (req, res) => {
  try {
    const role = req.body;
    await Role.create(role);
    res.send({
      statusCode: 200,
      statusText: "success",
      message: "New role has been created",
      data: role,
    });
  } catch (err) {
    res.status(500).json({
      statusText: "Internal Server Error",
      message: "Sorry, we failed to create a new role",
      Error: err,
    });
  }
};

module.exports = routes;
