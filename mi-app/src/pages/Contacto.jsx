const Contacto = () => {
return (
    <div className="form">
    <form>
        <div className="name">
        <label> Nombre <br/>
            <input type="text" placeholder="Juan" />
        </label>
        </div>

        <div className="surname">
        <label> Apellido <br/>
            <input type="text" placeholder="López" />
        </label>
        </div>

        <div className="email">
        <label> Email <br/>
            <input type="email" placeholder="lopezjuan@gmail.com" />
        </label>
        </div>

        <div className="txta">
        <label> Mensaje <br/>
            <textarea placeholder="Dejá tu mensaje" maxLength="200" minLength="15"></textarea>
        </label>
        </div>

        <div className="enviar">
        <label>
            <input type="submit" value="ENVIAR" />
        </label>
        </div>
    </form>
    </div>
);
};

export default Contacto;
