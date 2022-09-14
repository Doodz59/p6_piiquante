const jwt = require('jsonwebtoken');
require('dotenv').config();
module.exports = (req, res, next) => {
   try {
       const token = session.token;
       const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
       const userId = decodedToken.userId;
       req.auth = {
           userId: userId
       };
	next();
   } catch(error) {
       res.status(401).json({ error });
   }
};