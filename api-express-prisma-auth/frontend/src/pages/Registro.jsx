const Registro = () => {
return (
    <div className="container my-4">
    <h2 className="mb-4">Registro</h2>
    <form className="row g-3">
        <div className="col-md-6">
            <label className="form-label">Nombre</label>
            <input type="text" className="form-control" placeholder="Juan" />
        </div>
        <div className="col-md-6">
            <label className="form-label">Apellido</label>
            <input type="text" className="form-control" placeholder="López" />
        </div>
        <div className="col-md-6">
            <label className="form-label">Fecha de nacimiento</label>
            <input type="date" className="form-control" />
        </div>
        <div className="col-md-6">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="lopezjuan@gmail.com" />
        </div>
        <div className="col-md-6">
            <label className="form-label">Contraseña</label>
            <input type="password" className="form-control" placeholder="********" />
        </div>
        <div className="col-md-6">
            <label className="form-label">Sexo</label>
        <div>
            <input type="radio" name="sexo" className="form-check-input me-2" /> Masculino
            <input type="radio" name="sexo" className="form-check-input ms-3 me-2" /> Femenino
        </div>
        </div>
        <div className="col-md-6">
        <label className="form-label">Tema Favorito</label>
        <select className="form-select">
            <option value="op_1">Ficción</option>
            <option value="op_2">Terror</option>
            <option value="op_3">Infantiles</option>
            <option value="op_4">Romance</option>
        </select>
        </div>
        <div className="col-12">
        <button type="submit" className="btn btn-primary">Enviar</button>
        </div>
    </form>
    </div>
);
};

export default Registro;
