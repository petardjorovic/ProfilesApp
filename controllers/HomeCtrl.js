const db = require('../database');

const index = async(req,res)=>{
    let sql = `SELECT * FROM profiles`;
    const [data] = await db.query(sql);
    res.render('index',{data:data, title:"Home"});
}

const createUser = async(req,res)=>{
    let {full_name,email} = req.body;
    let sql = `INSERT INTO profiles (full_name, email) VALUES ('${full_name}', '${email}')`;
    let queryInfo = await db.query(sql);
    // console.log(queryInfo);
    res.redirect('/');
};

const deleteUser = async(req,res)=>{
    let id = req.params.id;
    let sql = `DELETE FROM profiles WHERE id = ${id}`;
    let queryInfo = await db.query(sql);
    // console.log(queryInfo);
    res.redirect('/');
};

const changeStatus = async(req,res)=>{
    let { id, status } = req.params;
    let sql = `UPDATE profiles SET active = ${status} WHERE id = ${id}`;
    const queryInfo = await db.query(sql);
    // console.log(queryInfo); 
    res.redirect('/');
};



module.exports = { index, createUser, deleteUser, changeStatus };