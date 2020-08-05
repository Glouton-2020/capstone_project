import React, { useState, Fragment, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getSchedules, deleteSchedule } from '../../../_actions/schedule_actions';
import { withRouter } from 'react-router-dom';
import EditSchedule from '../EditSchedule/EditSchedule';
import './Calender.css';
import moment from 'moment';

function AllSchedules(props) {
	const dispatch = useDispatch();
console.log(localStorage)
	let [schedules, setSchedules] = useState([]);
	let [editing, setEditing] = useState(false);
	let [newSchedule, setNewSchedule] = useState(false);

	useEffect(() => {
		setNewSchedule(localStorage.newSchedule);
		if (newSchedule === 'true') {
			dispatch(getSchedules()).then(response => {
				if (response.payload) {
					setSchedules(response.payload);
					localStorage.removeItem('newSchedule');
				} else {
					console.log('Could not get Schedule');
				}
			});
		}
	});

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
					} else {
						console.log('Could not get Schedule');
					}
				});
			} else {
				console.log('Having a hard time deleting');
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
		<div className='all-schedule row'>

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
															<li>
																<a href={`${schedule.github}`} className='social-icon' target="_blank" rel="noopener noreferrer">
																	<i className='fa fa-github-square' aria-hidden='true'></i>
																</a>
															</li>
															<li>
																<a href={`${schedule.linkedin}`} className='social-icon' target="_blank" rel="noopener noreferrer">
																	<i className='fa fa-linkedin-square' aria-hidden='true'></i>
																</a>
															</li>
														</ul>
													)}
												</ul>
											</div>
										</div>
									</div>
								) : (
									<EditPage
										props={props}
										schedule={schedule}
										scheduleId={localStorage.theScheduleId}
										toggleEdit={toggleEdit}
									/>
								)}
							</Fragment>
						);
					})}
		</div>
	);
}

export default withRouter(AllSchedules);


//  Calender page is broken after attempting page to host all Published. Will need to fix. 