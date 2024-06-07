import Container from 'react-bootstrap/Container';
import { Col, Row } from 'react-bootstrap';

import CatalogueCard from '../components/CatalogueCard';
import NavigationBar from '../components/Navbar';

function Home() {
	return (
		<Container>
			<NavigationBar />

			<Row className="mt-10" style={{ marginTop: 10 }}>
				{new Array(12).fill(Math.random()).map((_, index) => (
					<Col key={index} className="mb-5">
						<CatalogueCard />
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default Home;
