// import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// /**
//  * props:
//  * state: formData
//  */

// function ContactForm() {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);


//     return (
//         <>
//             <Button id="contact-button" className="contact shadow btn btn-lg border-3 btn-outline-dark" onClick={handleShow}>
//                 <strong className='contact-text'>

//                     Launch demo modal
//                 </strong>
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title className="contact-text">Modal heading</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                     <Button className="contact submit-button" onClick={handleClose}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </>
//     );
// }

// export default ContactForm;