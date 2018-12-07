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
      res.send('work');
    }); //cuando inserto los datos puedo obtener dos cosas un error o los mismo datos
    // insertar en la tabla customer los siguiente datos
  })

}
//
//set: establecer nuevos datos cuando se insertan
//para evitar SQLInyection se utiliza el signo ?  y se referencia los datos mendiante un array
//exportando el controlador
module.exports = controller;