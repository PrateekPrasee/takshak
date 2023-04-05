// import React from 'react';
// import emailjs from 'emailjs-com';
// import { Form, Input, TextArea, Button } from 'semantic-ui-react';
// import Swal from 'sweetalert2';
// import './apps.css';
// const SERVICE_ID = "service_jb0wfzda";
// const TEMPLATE_ID = "template_ec6810r";
// const USER_ID = "7owEfYGve9A4g-yLd";
// const Apps = () => {
//   const handleOnSubmit = (e) => {
//     e.preventDefault();
//     emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
//       .then((result) => {
//         console.log(result.text);
//         Swal.fire({
//           icon: 'success',
//           title: 'Message Sent Successfully'
//         })
//       }, (error) => {
//         console.log(error.text);
//         Swal.fire({
//           icon: 'error',
//           title: 'Ooops, something went wrong',
//           text: error.text,
//         })
//       });
//     e.target.reset()
//   };
// return (
//     <div className='Apps'>
//       <Form onSubmit={handleOnSubmit}>
//         <Form.Field
//           id='form-input-control-email'
//           control={Input}
//           label='Email'
//           name='from_email'
//           placeholder='Email…'
//           required
//           icon='mail'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-input-control-last-name'
//           control={Input}
//           label='Name'
//           name='from_name'
//           placeholder='Name…'
//           required
//           icon='user circle'
//           iconPosition='left'
//         />
//          <Form.Field
//           id='form-input-control-last-name'
//           control={Input}
//           label='Name'
//           name='send_to'
//           placeholder='Name…'
//           required
//           icon='user circle'
//           iconPosition='left'
//         />
//         <Form.Field
//           id='form-textarea-control-opinion'
//           control={TextArea}
//           label='Message'
//           name='message'
//           placeholder='Message…'
//           required
//         />
//         <Button type='submit' color='green'>Submit</Button>
//       </Form>
//     </div>
//   );
// }
// export default Apps;