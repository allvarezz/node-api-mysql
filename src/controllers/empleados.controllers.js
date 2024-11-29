import { pool } from "../db.js";

export const getEmpleados = async (req, res) => {
  try {
    const [getemple] = await pool.query("select * from emplado");
    console.log(getemple);
    res.send(getemple);
  } catch (error) {
    res.status(500).json({
      message: "Ocurrio un error en la ejecucion",
    });
  }
};

export const getEmpleado = async (req, res) => {
  try {
    const [nresg] = await pool.query("select count(id) from emplado");
    console.log(nresg[0]["count(id)"]);
    console.log(req.params);
    const { id } = req.params;
    const [empleadoID] = await pool.query(
      "select * from emplado where id = ?",
      [id]
    );
    console.log(empleadoID[0]);
    res.json("obteniendo el emplado");
  } catch (error) {
    res.status(500).json({
      message: "Ocurrio un error en la ejecucion",
    });
  }
};

export const creEmpleado = async (req, res) => {
  try {
    const { name, salario } = req.body;

    const [rows] = await pool.query(
      "INSERT INTO emplado(name,sueldo) values (?,?)",
      [name, salario]
    );

    console.log("Datos guardado exitosamente", {
      id: rows.insertId,
      name,
      salario,
    });
    res.send({ rows });
  } catch (error) {
    res.status(500).json({
      message: "Ocurrio un error en la ejecucion",
    });
  }
};

export const delEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const [ResultSetHeader] = await pool.query(
      "delete from emplado where id = ?",
      [id]
    );
    console.log(ResultSetHeader.affectedRows);
    if (ResultSetHeader.affectedRows <= 0)
      return res.status(404).json({
        message: "Empleado no eliminado",
      });

    return res.status(200).json({
      message: "Delete Success",
    });
  } catch (error) {
    res.status(500).json({
      message: "Ocurrio un error en la ejecucion",
    });
  }
};

export const upEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, sueldo } = req.body;

    const [upEmp] = await pool.query(
      "update emplado set name= IFNULL(?, name), sueldo= IFNULL(?, sueldo) where id = ?",
      [name, sueldo, id]
    );

    if (upEmp.affectedRows === 0)
      return res.status(404).json({
        message: "No actulizado",
      });

    const [rows] = await pool.query("select * from emplado where id = ?", [id]);
    res.json(rows[0]);
  } catch (error) {
    res.status(500).json({
      message: "Ocurrio un error en la ejecucion",
    });
  }
};
