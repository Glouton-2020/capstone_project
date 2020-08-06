import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { createSchedule } from '../../../_actions/schedule_actions';
import { useSelector } from 'react-redux';

function CreateSchedule(props) {
	const dispatch = useDispatch();
	const user = useSelector(state => state.user);
	console.log(user, 'is user on create schedule')

	const [seeking, setSeeking] = useState('');
	const [offering, setOffering] = useState('');

	const handleSubmit = e => {
		e.preventDefault();

		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}

		let dataToSubmit = {
			seeking: seeking,
			offering: offering,
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
		if (e.target.id === 'seeking') setSeeking(e.target.value);
		if (e.target.id === 'offering') setOffering(e.target.value);
	};

	return (
		<div className='new-schedule'>
		<div className="new-schedule-area">
			<h3 className='create-h3'>Schedule What Service You Require</h3>
			<div className="Explanation">
				<h2>Welcome!</h2>
				<p className='instructions'>Create a schedule detailing what services and when you require them.</p>
				<p className='instructions'>Your schedule will appear below, our team will contact you shortly to confirm.</p>
			</div>
			<Form className='new-schedule-form' onSubmit={handleSubmit}>
				<Form.Row>
				
					<Form.Group controlId='seeking' onChange={handleChange}>
						<Form.Control.Feedback type='invalid'>* Required </Form.Control.Feedback>
						<Form.Label>Service Required</Form.Label>
						<Form.Control type='text' placeholder='Enter Required Service' required />
                    </Form.Group>
                    
                    <Form.Group controlId='offering' onChange={handleChange}>
					<Form.Control.Feedback type='invalid'>* Required</Form.Control.Feedback>
						<Form.Label>Date For Services</Form.Label>
						<Form.Control type='text' placeholder='Enter Date' required />
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