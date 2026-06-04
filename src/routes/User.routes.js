import { Router } from "express";
import { registerUser } from "../controllers/User.controllers.js";
import { upload } from "../middlewares/multer.middlewaare.js";

const router = Router();
router.route("/register").post(
    upload.fields([
        { name: "avatar", maxCount: 1 },
        { name: "coverImage", maxCount: 1 },
    ]),
    registerUser
);

export default router;
