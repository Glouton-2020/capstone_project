import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSchedules, deleteSchedule } from '../../../_actions/schedule_actions';
import { withRouter } from 'react-router-dom';
import EditSchedule from '../EditSchedule/EditSchedule';
import './Calender.css';
import moment from 'moment';

function Calender(props) {
	const dispatch = useDispatch();
	console.log(localStorage)
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
					console.log('error getting Schedules');
				}
			});
		} 
		if (localStorage.deletedSchedule === 'true'){
			dispatch(getSchedules()).then(response => {
				if (response.payload) {
					setSchedules(response.payload);
					localStorage.removeItem('deletedSchedule');
				} else {
					console.log('error getting Schedules');
				}
			});
		}
	});

	useEffect(() => {
		if (searchTerm === '') {
			dispatch(getSchedules()).then(response => {
				if (response.payload) {
					setSchedules(response.payload);
				} else {
					console.log('error getting Schedules');
				}
			});
		} else if (searchTerm !== '') {
			const results = schedules.filter(schedule => schedule.offering.toLowerCase().includes(searchTerm));
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
		<div className='calender row'>
			{editing === false ? (
				<div className='search'>
					<input type='text' onChange={handleSearch} placeholder='Search Schedule' className='search-bar' />
				</div>
			) : null}

			{schedules.length > 0 &&
				schedules
					.slice(0)
					.reverse()
					.map(schedule => {
						console.log(schedule)
						date = new Date(schedule.date);
						return (
							<Fragment key={schedule._id}>
								{editing === false ? (
									<div className='crudbox'>
										<div className='blog blog-border'>
											<div className='name-location'>
												<strong>{schedule.email}</strong>
												<span className='schedule-time'>Scheduled {moment(date).fromNow(true)} ago</span>
											</div>
											<div className='clearfix margin-bottom-20'></div>
											<p className='skills-p'>
												<span className='info'>Date Expected:</span> {schedule.seeking}
											</p>
											<p className='skills-p'>
												<span className='info'>Service Needed:</span> {schedule.offering}
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
														<ul className='list-inline social-list'>
															<li>
																<a href={`mailto:${schedule.email}`} className='social-icon'>
																	<i className='fa fa-envelope' aria-hidden='true'></i>
																</a>
															</li>
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


