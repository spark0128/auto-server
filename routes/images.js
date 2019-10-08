import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';
import { ImageModel } from '../models/Image';

const s3 = new aws.S3({
  region: 'ap-southeast-1',
});

const upload = multer({
  storage: multerS3({
    s3,
    bucket: 'cdn.automate-kh.com',
    acl: 'public-read',
    key: function (req, file, cb) {
      cb(null, `images/${Date.now().toString()}.png`);
    },
  })
});

export default (app) => {
  app.post('/v1/images', upload.single('image'), async (req, res) => {
    const image = await new ImageModel({
      url: req.file.location,
    }).save();
    res.send(image);
  });
}
