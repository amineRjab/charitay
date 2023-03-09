
const { Association } = require("../orm");



module.exports = {
  //method to fetch all associations from the blog database.
  getAllAssociation: async (req, res) => {
    try {
      const associations = await Association.findAll({
        order: [["createdAt", "ASC"]],
        // attributes: { exclude: ['userId'] },
      });
      res.status(200).json(associations);
    } catch (error) {
      res.status(500).send(error);
    }
  },

     //method to fetch one association from the blog database.

  getOneAssociation: async (req, res) => {
    try {
      const associations = await Association.findOne({where:{email:req.params.email}});
      res.status(200).json(associations);
    } catch (error) {
      res.status(500).send(error);
    }
  },
  
  //method to add an association to the database via the respective model function.
  addAssociation: async (req, res) => {
    try {
      const associations = await Association.create(req.body);
      res.status(201).json(associations);
    } catch (error) {
      res.status(500).send(error);
    }
  },
 

  updateOneAssociation: async (req, res) => {
    try {
      const associations = await Association.update(req.body,{
        where: {email: req.params.email},
      });
      res.status(200).json(associations);
    } catch (error) {
      res.status(500).send(error);
    }
  },

  deleteOneAssociation: async (req, res) => {
    try {
      const associations = await Association.destroy({where:{email:req.params.email}});
      res.status(200).json(associations);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};




