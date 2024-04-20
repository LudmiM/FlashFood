import { Router } from "express";
import {
  getCommerce,
  getCommerces,
  postCommerce,
  putCommerce,
  deleteCommerce
} from "../controllers/commerce.controllers.js";

const router = Router();

router.get("/:id", getCommerce);

router.get("/", getCommerces);

router.post("/", postCommerce);

router.put("/:id", putCommerce);

router.delete("/:id", deleteCommerce);

export default router;
