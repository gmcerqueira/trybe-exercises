module.exports = (req, res) => {
  const fileName = req.params.name;
  const path = __dirname.replace("/controllers", "") + "/uploads/" + fileName;

  res.download(path, (err) => {
    if (err) {
      res.status(500).send({
        message: "File can not be downloaded: " + err,
      });
    }
  });
};
