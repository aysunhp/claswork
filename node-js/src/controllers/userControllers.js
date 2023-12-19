const postUser = async((req, res) => {
  console.log(req.body);
});

const getAllUser = async((req, res) => {
  console.log("all Data");
});

module.exports = { postUser, getAllUser };
