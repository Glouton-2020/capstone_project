import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { createSchedule } from '../../../_actions/schedule_actions';
import { useSelector } from 'react-redux';
import './CreateSchedule.css';

function CreateSchedule(props) {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);
	console.log(user, 'Is User On Create Schedule')

	const [expected, setExpected] = useState('');
	const [service, setService] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}

		let dataToSubmit = {
			expected: expected,
			service: service,
            author: user.userData.name,
			user: user.userData._id,
			email: user.userData.email
		};

		dispatch(createSchedule(dataToSubmit)).then(response => {
			if (response.payload) {
				form.reset();
				localStorage.setItem('newSchedule', true)
				props.props.history.push('/clientpage');
			} else {
				console.log(response.payload);
			}
		});
	};

	const handleChange = e => {
		if (e.target.id === 'expected') setExpected(e.target.value);
		if (e.target.id === 'service') setService(e.target.value);
	};

	return (
		
		<div className='new-schedule'>
		<div className="new-schedule-area">
			<h3 className='create-h3'>Schedule What Service You Require</h3>
			<div className="explanation">
				<p >Create a schedule detailing what services and when you require them.</p>
				<p >Your schedule will appear below, our team will contact you shortly to confirm.</p>
			</div>
			<Form className='new-schedule-form' onSubmit={handleSubmit}>
				<Form.Row>
				
					<Form.Group controlId='expected' onChange={handleChange}>
						<Form.Control.Feedback type='invalid'>* Required </Form.Control.Feedback>
						<Form.Label>Date For Services</Form.Label>
						<Form.Control type='date' placeholder='Enter Date' required />
                    </Form.Group>


                    
                    <Form.Group controlId='service' onChange={handleChange}>
					<Form.Control.Feedback type='invalid'>* Required</Form.Control.Feedback>
						<Form.Label>Service Required</Form.Label>
						<Form.Control type='text' placeholder='Enter Required Service' required />
                    </Form.Group>
    
				</Form.Row>

				<Button variant='primary' type='submit' className='create-schedule-btn'>
					Submit
				</Button>
			</Form>
			
			</div>
		</div>
	);
}

export default CreateSchedule;