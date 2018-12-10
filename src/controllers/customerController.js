//crear un objeto -> puede obtener muchos memtodoso
const controller = {};

//Concatenano metodo 
controller.list = (req, res) => {
  //res.send('Hola mundo');
  //metodo getconnection es el encargado de pedir una conexion a mysql
  req.getConnection((err, con) => {
    //si tengo un error o una conexion aquì se procesa - calback
    con.query('SELECT * FROM customer', (err, customers) => {
      if(err){
        res.json(err);
      }
      //renderizar a una vista llamada customer que gener ejs, pero como datos a esta vista vamos a darle los datos que me genera la base de datos
      console.log(customers);
      res.render('customers', {
        data:customers
      })
    });

  });
};

//Guardar datos
controller.save = (req, res) => {
  const data = req.body;
  //console.log(req.body);
  //res.send("work");
  req.getConnection((err, con) => {
    if(err){
      alert('No hubo conexiòn con la base de datos');
    }
    con.query('INSERT INTO customer set ?', [data], (err, customers) => {
      //obtenermops
      console.log(customers);
      //res.send('work');
      res.redirect('/');
    }); //cuando inserto los datos puedo obtener dos cosas un error o los mismo datos
    // insertar en la tabla customer los siguiente datos
  })

}

//
//set: establecer nuevos datos cuando se insertan
//para evitar SQLInyection se utiliza el signo ?  y se referencia los datos mendiante un array
//exportando el controlador

//Editando Datos
controller.edit = (req, res) =>{
  //recibiendo el id como parametro
  const id = req.params.id;
  //res.redirect('../views/customer_edit.ejs');
  //res.send('Nueva Vista');

  //conexion a la base de atos
  req.getConnection((err, con) => {
    con.query('SELECT * FROM customer WHERE id = ?', [id], (err, customers) => {
      console.log(customers);
      res.render('customer_edit.ejs', {
        //asignar a data los datos
        data: customers[0],
      })
    });
  });
};

//Actualizar el dato
controller.update = (req,res) => {
  const id = req.params.id;
  //se encarga de recibir los campos de un formulario
  const newCustomer = req.body;

  req.getConnection((err, con)=>{
    con.query('UPDATE customer SET ? WHERE id = ?', [newCustomer, id], (err, customers) => {
        res.redirect('/');
    });
  })
}


//Eliminar Datos
controller.delete = (req, res) => {
  const id = req.params.id;
  //console.log(req.body);
  //res.send("work");
  req.getConnection((err, con) => {
    if(err){
      alert('No hubo conexiòn con la base de datos');
    }
    con.query('DELETE FROM customer WHERE id = ?', [id], (err, customers) => {
      //obtenermops
      console.log(customers);
      //res.send('work');
      res.redirect('/');
    }); //cuando inserto los datos puedo obtener dos cosas un error o los mismo datos
    // insertar en la tabla customer los siguiente datos
  })

}
module.exports = controller;