const db = require('../database');

const index = async(req,res)=>{
    let id = req.params.id;
    let sql = `SELECT * FROM profiles WHERE id = ${id};`;
    const [data] = await db.query(sql);
    res.render('edit', {title:"Edit", user: data[0]})
}

const updateUser = async(req,res)=>{
    let id = req.params.id;
    let { full_name, email } = req.body;
    let sql = `UPDATE profiles SET full_name = '${full_name}', email = '${email}' WHERE id = ${id}`;
    let queryInfo = await db.query(sql);
    res.redirect('/');
};

module.exports = {
    index,
    updateUser
};