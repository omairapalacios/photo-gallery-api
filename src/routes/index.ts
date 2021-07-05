import { Router } from 'express';
const router = Router();

import {
  getPhoto,
  getPhotos,
  createPhoto,
  deletePhoto,
  updatePhoto,
} from '../controllers/photo_controllers';
import multer from '../libs/multer';

router
  .route('/photos')
  .get(getPhotos)
  .post(multer.single('image'), createPhoto);

router.route('/photos/:id').get(getPhoto).put(updatePhoto).delete(deletePhoto);

export default router;
