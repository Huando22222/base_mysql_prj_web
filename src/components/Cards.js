import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./Cards.css";
function Cards({product}) {
	return (

		<Row xs={1} md={3} className="g-4">
			{product.map((item) => {
				return <h1>{item.title}</h1>;
			})}
			{Array.from({ length: 10 }).map((_, idx) => (
				<Col key={idx}>
					{/* <Card border="primary" style={{ width: "18rem" }}> */}
					<Card border="primary" >
						{/* <Card.Img variant="top" src="holder.js/100px160" /> */}
						<Card.Img
							variant="top"
							src="https://cdn.tgdd.vn/Products/Images/7264/313966/baby-g-bga-320-4adr-nu-thumb-600x600.jpg"
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a longer card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			))}
			{Array.from({ length: 10 }).map((_, idx) => (
				<Col key={idx}>
					{/* <Card border="primary" style={{ width: "18rem" }}> */}
					<Card border="primary" >
						{/* <Card.Img variant="top" src="holder.js/100px160" /> */}
						<Card.Img
							variant="top"
							src="https://scontent.fsgn2-7.fna.fbcdn.net/v/t39.30808-6/395324179_2418576068350259_4112161493114966427_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=WsOrLFa0NPYAX_2aTov&_nc_oc=AQnBZL6VyMuqHwe7Bq8M3C6HWfKms0siGDWEzK0vrJK2ekX84yJKdyPu0809VojTQTE&_nc_ht=scontent.fsgn2-7.fna&oh=00_AfCGSB6tjON3nOT_k908oXYnAJnlnginccSQShRVN-563A&oe=653A8A33"
						/>
						<Card.Body>
							<Card.Title>Card title</Card.Title>
							<Card.Text>
								This is a longer card with supporting text below
								as a natural lead-in to additional content. This
								content is a little bit longer.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
	);
}

export default Cards;
