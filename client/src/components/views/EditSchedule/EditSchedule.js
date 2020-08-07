import React, { useState } from 'react';
import { updateSchedule } from '../../../_actions/schedule_actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';

function EditPage(props) {
	const dispatch = useDispatch();

	const [updatedExpected, setExpected] = useState(props.schedule.expected);
	const [updatedService, setService] = useState(props.schedule.Service);

	const handleSubmit = e => {
		e.preventDefault();

		const form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}

		let dataToSubmit = {
			expected: updatedExpected,
			service: updatedService,
			author: localStorage.user,
			user: localStorage.userId,
			id: props.schedule._id,
		};

		dispatch(updateSchedule(dataToSubmit)).then(response => {
			if (response.payload) {
				form.reset();
				props.setSearchTerm('');
				props.toggleEdit();
			} else {
				console.log(response.payload);
			}
		});
	};

	const handleChange = e => {
		if (e.target.id === 'expected') setExpected(e.target.value);
		if (e.target.id === 'service') setService(e.target.value);
	};
	if (props.schedule.user === localStorage.userId && props.scheduleId === props.schedule._id) {
		return (
			<div className='edit'>
				<h3 className='edit-h3'>Edit Your Schedule</h3>
				<Form className='new-schedule-form' onSubmit={handleSubmit}>
					<Form.Row>
						<Form.Group controlId='expected' onChange={handleChange}>
						<Form.Control.Feedback type='invalid'>* Required</Form.Control.Feedback>
							<Form.Label>Date Expected</Form.Label>
							<Form.Control type='text' defaultValue={props.schedule.expected} required />
						</Form.Group>

						<Form.Group controlId='service' onChange={handleChange}>
						<Form.Control.Feedback type='invalid'>Required*</Form.Control.Feedback>
							<Form.Label>Service Needed</Form.Label>
							<Form.Control type='textarea' defaultValue={props.schedule.service} required />
						</Form.Group>
					</Form.Row>

					<Button variant='primary' type='submit' className='create-schedule-btn'>
						Submit
					</Button>
				</Form>
			</div>
		);
	} else {
		return null;
	}
}

export default EditPage;