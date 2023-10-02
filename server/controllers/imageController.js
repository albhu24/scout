imageController = {};
const fs = require("fs");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const AWS = require("aws-sdk");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACC_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "us-west-1",
});

imageController.saveToDb = (req, res, next) => {
  const { listingName } = req.body;
  req.files.forEach((e) => uploadToS3(e, listingName));
  console.log("test post upload");
  return next();
};

imageController.getImages = async (req, res, next) => {
  const { folder } = req.body;
  const bucketName = "listing-photos-scout";
  const folderName = `${folder}/`; // Folder name with spaces
  // List objects in the specified folder
  await s3.listObjectsV2(
    { Bucket: bucketName, Prefix: folderName },
    (err, data) => {
      if (err) {
        console.error("Error listing objects:", err);
      } else {
        const urlArray = [];
        console.log(
          "Objects in the folder:",
          data.Contents.map((obj) => urlArray.push(constructUrl(obj.Key)))
        );
        req.locals = { urlArray };
        return next();
      }
    }
  );
};

function constructUrl(path) {
  const addPlus = path.split(" ").join("+");
  console.log(addPlus);
  const url = `https://listing-photos-scout.s3.us-west-1.amazonaws.com/${path}`;
  return url;
}

function uploadToS3(file, folderName) {
  const key = `${folderName}/${file.filename}`;
  const params = {
    Bucket: "listing-photos-scout",
    Body: fs.createReadStream(file.path),
    Key: key,
  };
  console.log("test upload function");

  s3.upload(params, (err, data) => {
    if (err) {
      console.error(`Error uploading file ${file.filename}: ${err}`);
    } else {
      console.log(`File ${file.filename} uploaded to S3 at ${data.Location}`);
    }
  });
}

module.exports = imageController;
