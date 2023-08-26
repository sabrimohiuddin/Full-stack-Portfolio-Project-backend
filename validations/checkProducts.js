const checkName = (req, res, next) => {
    if (req.body.product_name) {
      next();
    } else {
      res.status(400).json({ error: "Product name is required" });
    }
  };
  
  const checkPrice = (req, res, next) => {
    const { price } = req.body;
    if (price && !isNaN(price) && price > 0) {
      next();
    } else {
      res.status(400).json({ error: "Valid price is required" });
    }
  };
  
  const validateImageURL = (req, res, next) => {
    if (
      req.body.image_url.substring(0, 7) === "http://" ||
      req.body.image_url.substring(0, 8) === "https://"
    ) {
      return next();
    } else {
      res
        .status(400)
        .json({ error: `Image URL must start with http:// or https://` });
    }
  };
  
  module.exports = { checkPrice, checkName, validateImageURL };
  