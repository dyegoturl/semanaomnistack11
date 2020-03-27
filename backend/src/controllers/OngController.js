const crypto = require("crypto");
const connection = require("../database/connection");

module.exports = {

    async index(request, response){
        const ongs = await connection("ongs").select("*");
    
        return response.json(ongs);
    },

    async create(request, response){
        const { nome, name, email, whatsapp, city, uf } = request.body;
        const id = crypto.pseudoRandomBytes(4).toString('HEX');
        
        await connection("ongs").insert({
            id, 
            name, 
            email, 
            whatsapp, 
            city, 
            uf
        })

        return response.json({ id });
    },

    /*
    I've tried to delete an ONG but I couldn't throught the code below
    
    async delete(request, response){
        const { id } = request.params;
        await connection("ongs").where("id", id).delete();
        return response.status(204).send();

    }
    */

}