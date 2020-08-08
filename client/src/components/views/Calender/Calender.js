import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSchedules, deleteSchedule } from '../../../_actions/schedule_actions';
import { withRouter } from 'react-router-dom';
import EditSchedule from '../EditSchedule/EditSchedule';
import './Calender.css';
import moment from 'moment';

function Calender(props) {
	const dispatch = useDispatch();
	// console.log(localStorage)
	let [schedules, setSchedules] = useState([]);
	let [editing, setEditing] = useState(false);
	let [searchTerm, setSearchTerm] = useState('');
	let [newSchedule, setNewSchedule] = useState(false);

	useEffect(() => {
		setNewSchedule(localStorage.newSchedule);
		if (newSchedule === 'true') {
			dispatch(getSchedules()).then(response => {
				if (response.payload) {
					setSchedules(response.payload);
					localStorage.removeItem('newSchedule');
				} else {
					console.log('Error Getting Schedules');
				}
			});
		} 
		if (localStorage.deletedSchedule === 'true'){
			dispatch(getSchedules()).then(response => {
				if (response.payload) {
					setSchedules(response.payload);
					localStorage.removeItem('deletedSchedule');
				} else {
					console.log('Error Getting Schedules');
				}
			});
		}
	}, []);

	useEffect(() => {
		if (searchTerm === '') {
			dispatch(getSchedules()).then(response => {
				if (response.payload) {
					setSchedules(response.payload);
				} else {
					console.log('Error Getting Schedules');
				}
			});
		} else if (searchTerm !== '') {
			const results = schedules.filter(schedule => schedule.service.toLowerCase().includes(searchTerm));
			setSchedules(results);
		}
	}, [searchTerm, editing]);

	const handleDelete = id => {
		let dataToSubmit = {
			scheduleId: id,
			userId: localStorage.userId,
		};
		dispatch(deleteSchedule(dataToSubmit)).then(response => {
			if (response.payload) {
				dispatch(getSchedules()).then(response => {
					if (response.payload) {
						setSchedules(response.payload);
						localStorage.setItem('deletedSchedule', true)
					} else {
						console.log('error getting Schedule');
					}
				});
			} else {
				console.log('error deleting');
			}
		});
	};

	const toggleEdit = scheduleId => {
		localStorage.setItem('theScheduleId', scheduleId);
		editing === false ? setEditing(true) : setEditing(false);
	};

	const handleSearch = e => {
		setSearchTerm(e.target.value);
	};

	let date;

	return (
		<div className='calender'>
			{editing === false ? (
				<div className='search'>
				<input type='text' onChange={handleSearch} placeholder='Search Schedule' className='searchbar' />
			</div>
			) : null}
			{schedules.length > 0 &&
				schedules
					.slice(0) .reverse()
					.map(schedule => {
						console.log(schedule)
						date = new Date(schedule.date);
						return (
							<Fragment key={schedule._id}>
								{editing === false ? (
									<div className='col-xs-12 col-sm-8 col-md-6 col-lg-4 contentful'>
										<div className='update-border'>
											<div className='email-location'>
												<strong className='account'>{schedule.email}</strong>
												<br/>
												<span className='time-scheduled'>Scheduled {moment(date).fromNow(true)} ago</span>
											</div>
											<div className='clearfix margin-bottom-20'></div>
											<p className='date'>
												<span className='info'>Date Requested:</span> {schedule.expected}
											</p>
											<p className='service'>
												<span className='info'>Service Requested:</span> {schedule.service}
											</p>
											<hr />
											<div>
												<ul className='ul'>
													{localStorage.userId === schedule.user ? (
														<div className='schedule-btns'>
															<button onClick={() => toggleEdit(schedule._id)} className='edit-btn btn '>
																Edit
															</button>
															<button onClick={() => handleDelete(schedule._id)} className='delete-btn btn'>
																Delete
															</button>
														</div>
													) : (
														<ul className='list-inline'>
														</ul>
													)}
												</ul>
											</div>
										</div>
									</div>
								) : (
									<EditSchedule
										props={props}
										schedule={schedule}
										scheduleId={localStorage.theScheduleId}
										toggleEdit={toggleEdit}
										searchTerm={searchTerm}
										setSearchTerm={setSearchTerm}
									/>
								)}
							</Fragment>
						);
					})}
		</div>
	);
}

export default withRouter(Calender);


