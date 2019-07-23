const controller = {};

controller.list = (req, res) => {
   req.getConnection((err, conn) => {
       conn.query('SELECT * FROM departamentos', (err, departamentos) =>{
        if (err) {
            res.json(err);
        }
        console.log(departamentos);
        res.render('departamentos', {
            data: departamentos
        });

       } );
   });
};

controller.save = (req, res) => {
const data = req.body;    
req.getConnection((err, conn) => {
conn.query('INSERT INTO departamentos set ?', [data], (err, departamentos) => {
res.redirect('/');
});
})
}

controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
      conn.query("SELECT * FROM departamentos WHERE id = ?", [id], (err, rows) => {
        res.render('departamentos_edit', {
          data: rows[0]
        })
      });
    });
  };  

  controller.update = (req, res) => {
    const { id } = req.params;
    const newdepartamentos = req.body;
    req.getConnection((err, conn) => {
  
    conn.query('UPDATE departamentos set ? where id = ?', [newdepartamentos, id], (err, rows) => {
      res.redirect('/');
    });
    });
  };

controller.delete = (req, res) => {
    const {id} = req.params; 
   req.getConnection((err, conn) => { 
    conn.query('DELETE FROM departamentos WHERE id = ?', [id], (err, rows ) => {
        res.redirect('/');  
    });
   })
   
    };




module.exports = controller;