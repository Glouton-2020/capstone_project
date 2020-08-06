import React, { Fragment } from 'react';
import NewSchedule from '../CreateSchedule/CreateSchedule';
import Calender from '../Calender/Calender';
import Footer from '../Footer/Footer';
import { withRouter } from 'react-router-dom';
import './ClientPage.css';

function ClientPage(props) {
	console.log(localStorage, 'IS STORAGE ON ClientPAGE');

	return (
		<Fragment>
			<div className='welcome'>
				<h3> {localStorage.user}</h3>
			</div>
			<div className='app'>
				<div className='home-main'>
					<NewSchedule props={props} />
					<Calender />
				</div>
			</div>
			<Footer />
		</Fragment>
	);
}

export default withRouter(ClientPage);