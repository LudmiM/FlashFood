import { handleHTTP } from "../utils/errors.handle.js";
import { insertCommerce, removeCommerce, retrieveCommerce, retrieveCommerces, updateCommerce } from "../services/commerce.services.js";

const getCommerce = async (req, res) => {
  try {
    const retrievedCommerce = await retrieveCommerce(req.params.id);
    res.json({ commerce: retrievedCommerce })
  } catch (error) {
    handleHTTP(res, 'GET_Commerce: ' + error.message);
  }
}

const getCommerces = async (req, res) => {
  try {
    const allCommerces = await retrieveCommerces();
    res.json({ commerces: allCommerces })
  } catch (error) {
    handleHTTP(res, 'GET_CommerceS: ' + error.message);
  }
}

const postCommerce = async ({ body }, res) => {
  try {
    const newCommerce = await insertCommerce(body.commerce);
    res.json({ commerce: newCommerce })
  } catch (error) {
    handleHTTP(res, 'POST_Commerce: ' + error.message);
  }
}

const putCommerce = async (req, res) => {
  try {
    const updatedCommerce = await updateCommerce(req.params.id, req.body.commerce);
    res.json({ commerce: updatedCommerce })
  } catch (error) {
    handleHTTP(res, 'UPDATE_Commerce: ' + error.message);
  }
}

const deleteCommerce = async (req, res) => {
  try {
    const deletedCommerce = await removeCommerce(req.params.id);
    res.json({ commerce: deletedCommerce })
  } catch (error) {
    handleHTTP(res, 'DELETE_Commerce: ' + error.message);
  }
}

export {
  getCommerce,
  getCommerces,
  postCommerce,
  putCommerce,
  deleteCommerce
};
