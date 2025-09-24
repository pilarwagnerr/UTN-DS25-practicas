import { Card, Button } from "react-bootstrap";

export function BootstrapBookCard({ titulo, descripcion, categoria, imagen }) {
return (
    <div className="col">
    <Card className="h-100">
        <Card.Img variant="top" src={imagen || "https://via.placeholder.com/150"} alt={titulo} />
        <Card.Body className="d-flex flex-column">
        <Card.Title>{titulo}</Card.Title>
        <Card.Text><strong>Descripción:</strong> {descripcion}</Card.Text>
        <Card.Text><strong>Categoría:</strong> {categoria}</Card.Text>
        <div className="mt-auto">
            <Button variant="outline-primary" size="sm" className="me-2">Ver detalles</Button>
            <Button variant="primary" size="sm">Agregar</Button>
        </div>
        </Card.Body>
    </Card>
    </div>
);
}
