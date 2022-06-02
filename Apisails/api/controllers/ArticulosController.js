/**
 * ArticulosController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Articulos = require("../models/Articulos");

module.exports = {
    getAllUsers: async function (req, res){
        var misArticulos = await Articulos.find();
        res.ok(misArticulos)
      }

};

