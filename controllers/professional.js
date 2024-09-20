const professionalController = {};
const path = require("path");
const fs = require("fs");

professionalController.getData = (req, res) => {
  const filePath = path.join(__dirname, '../user.json');
  
  // Check if the file exists before sending
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.error("File not found:", filePath);
      return res.status(404).send('File not found');
    }

    res.sendFile(filePath);
  });
};

module.exports = professionalController;