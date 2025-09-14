import { useState } from "react";
import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";

export default function AgregarLibro({ onAgregar }) {
const [datos, setDatos] = useState({
    titulo: "",
    descripcion: "",
    categoria: "General",
    imagen: ""
});

const handleChange = (e) => setDatos({ ...datos, [e.target.name]: e.target.value });

const handleSubmit = (e) => {
    e.preventDefault();

    const nuevoLibro = {
        ...datos,
        id: `libro-${Date.now()}`,
        imagen: datos.imagen || "https://via.placeholder.com/150"
    };

    onAgregar(nuevoLibro);
    setDatos({ titulo: "", descripcion: "", categoria: "General", imagen: "" });
};

return (
    <Container className="py-4">
    <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
        <Card>
            <Card.Header>Agregar Nuevo Libro</Card.Header>
            <Card.Body>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                <Form.Label>Título</Form.Label>
                <Form.Control
                    type="text"
                    name="titulo"
                    value={datos.titulo}
                    onChange={handleChange}
                    required
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Descripción</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    name="descripcion"
                    value={datos.descripcion}
                    onChange={handleChange}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>Categoría</Form.Label>
                <Form.Control
                    type="text"
                    name="categoria"
                    value={datos.categoria}
                    onChange={handleChange}
                />
                </Form.Group>

                <Form.Group className="mb-3">
                <Form.Label>URL Imagen</Form.Label>
                <Form.Control
                    type="text"
                    name="imagen"
                    value={datos.imagen}
                    onChange={handleChange}
                />
                </Form.Group>

                <Button type="submit" variant="primary">Agregar Libro</Button>
            </Form>
            </Card.Body>
        </Card>
        </Col>
    </Row>
    </Container>
);
}