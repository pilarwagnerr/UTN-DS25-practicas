const Contacto = () => {
return (
    <div className="container my-4">
    <h2 className="mb-4">Contacto</h2>
    <form className="row g-3">
        <div className="col-md-6">
        <label className="form-label">Nombre</label>
        <input type="text" className="form-control" placeholder="Juan" />
        </div>
        <div className="col-md-6">
        <label className="form-label">Apellido</label>
        <input type="text" className="form-control" placeholder="López" />
        </div>
        <div className="col-12">
        <label className="form-label">Email</label>
        <input type="email" className="form-control" placeholder="lopezjuan@gmail.com" />
        </div>
        <div className="col-12">
        <label className="form-label">Mensaje</label>
        <textarea className="form-control" rows="4" placeholder="Dejá tu mensaje"></textarea>
        </div>
        <div className="col-12">
        <button type="submit" className="btn btn-success">Enviar</button>
        </div>
    </form>
    </div>
);
};

export default Contacto;
