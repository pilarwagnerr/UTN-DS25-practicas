import { Card, Button } from "react-bootstrap";

export function LibroDestacadoBootstrap({ titulo, descripcion, categoria, imagen }) {
return (
    <div className="col">
    <Card className="h-100">
        <Card.Img variant="top" src={imagen} alt={titulo} />
        <Card.Body>
        <Card.Title>{titulo}</Card.Title>
        <Card.Text>{descripcion}</Card.Text>
        <Card.Text><strong>Categoría:</strong> {categoria}</Card.Text>
        <Button variant="primary" className="me-2">Ver detalles</Button>
        <Button variant="success">Agregar</Button>
        </Card.Body>
    </Card>
    </div>
);
}