module.exports = (req, res) => {
  if (req.fileValidationError)
    return res
      .status(403)
      .send({ error: { message: "Extension must be `png`" } });
  if (req.fileDuplicated)
    return res
      .status(403)
      .send({ error: { message: "File already exists" } });

  return res.status(200).json({ status: "file add" });
};
