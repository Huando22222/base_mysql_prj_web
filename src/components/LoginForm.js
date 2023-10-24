import { useState,useEffect,useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./LoginForm.css";

import { UserContext, UserProvider } from "../contexts/UserContext";
function LoginForm() {
	const { user, setUser } = useContext(UserContext);
	
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	////////////////////////
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phone, setPhone] = useState("");
	const [agreed, setAgreed] = useState(false);
	//////////////////////////////////
	const [validated, setValidated] = useState(false);

	const handleSubmit = (event) => {
		const form = event.currentTarget;
		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		} else {
			event.preventDefault();
			
			// let user {
				
			// }
			// try {
			// 	const reponse = await fetch('http://localhost:4000/user/', {
			// 		method: 'POST',
			// 		headers: {
			// 			'Content-Type': 'application/json',
			// 		},
			// 		body: JSON.stringify({ user }),
			// 	});
			// } catch (error) {
			// 	console.log(error);
			// }

			// Xử lý form ở đây, sau khi form hợp lệ
			// Sau khi xử lý xong, đóng modal
			handleClose();
		}

		setValidated(true);
	};
	///////////////////////////////////

	return (
		<>
			{user ? (
				<p>co user</p>
			) : (
				<div>
					<div className="modal-button">
						<Button
							variant="secondary"
							className="launch-text"
							onClick={handleShow}
						>
							Login
						</Button>
					</div>

					<Modal show={show} onHide={handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Modal heading</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form
								noValidate
								validated={validated}
								onSubmit={handleSubmit}
							>
								<Row className="mb-3">
									<Form.Group
										as={Col}
										md="4"
										controlId="validationCustom01"
									>
										<Form.Label>User name</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="User name"
											onChange={(e) =>
												setUserName(e.target.value)
											}
										/>
										<Form.Control.Feedback>
											Looks good!
										</Form.Control.Feedback>
									</Form.Group>
									<Form.Group
										as={Col}
										md="4"
										controlId="validationCustom02"
									>
										<Form.Label>Password</Form.Label>
										<Form.Control
											required
											type="text"
											placeholder="Password"
										/>
										<Form.Control.Feedback>
											Looks good!
										</Form.Control.Feedback>
									</Form.Group>
									{/* <Form.Group
										as={Col}
										md="4"
										controlId="validationCustomUsername"
									>
										<Form.Label>Username</Form.Label>
										<InputGroup hasValidation>
											<InputGroup.Text id="inputGroupPrepend">
												@
											</InputGroup.Text>
											<Form.Control
												type="text"
												placeholder="Username"
												aria-describedby="inputGroupPrepend"
												required
											/>
											<Form.Control.Feedback type="invalid">
												Please choose a username.
											</Form.Control.Feedback>
										</InputGroup>
									</Form.Group> */}
								</Row>
								<Row className="mb-3">
									<Form.Group
										as={Col}
										md="6"
										controlId="validationCustom03"
									>
										<Form.Label>First name</Form.Label>
										<Form.Control
											type="text"
											placeholder="First name"
											required
										/>
										<Form.Control.Feedback type="invalid">
											Please provide a valid First name.
										</Form.Control.Feedback>
									</Form.Group>
									<Form.Group
										as={Col}
										md="3"
										controlId="validationCustom04"
									>
										<Form.Label>Last name</Form.Label>
										<Form.Control
											type="text"
											placeholder="Last name"
											required
										/>
										<Form.Control.Feedback type="invalid">
											Please provide a valid Last name.
										</Form.Control.Feedback>
									</Form.Group>
									<Form.Group
										as={Col}
										md="3"
										controlId="validationCustom05"
									>
										<Form.Label>Phone</Form.Label>
										<Form.Control
											type="text"
											placeholder="Phone"
											required
										/>
										<Form.Control.Feedback type="invalid">
											Please provide a valid Phone.
										</Form.Control.Feedback>
									</Form.Group>
								</Row>
								<Form.Group className="mb-3">
									<Form.Check
										required
										label="Agree to terms and conditions"
										feedback="You must agree before submitting."
										feedbackType="invalid"
									/>
								</Form.Group>
								<Button type="submit" onChange={handleSubmit}>Submit form</Button>
							</Form>
							{/* Woohoo, you are reading this text in a modal! */}
						</Modal.Body>

						{/* <Modal.Footer>
							<Button variant="secondary" onClick={handleClose}>
								Close
							</Button>
							<Button variant="primary" onClick={handleClose}>
								Save Changes
							</Button>
						</Modal.Footer> */}
					</Modal>
				</div>
			)}
		</>
	);
}

export default LoginForm;
