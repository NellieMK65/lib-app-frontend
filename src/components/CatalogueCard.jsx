import { Card, Button } from 'react-bootstrap';

function CatalogueCard() {
	return (
		<Card style={{ width: '18rem' }}>
			<Card.Img
				variant="top"
				src="https://m.media-amazon.com/images/I/61zClQH6aRL._AC_UF1000,1000_QL80_.jpg"
			/>
			<Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make
					up the bulk of the card's content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
}

export default CatalogueCard;
