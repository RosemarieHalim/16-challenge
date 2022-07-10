import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			name: 'Employee Tracker',
			description:
				'This application helps users who are in managment be able to view and manage departments, roles, and employees in their company',
			image: 'employee-tracker-image.gif',
			technologies: [
				'JavaScript',
				'Node.js',
				'Inquirer',
				'MySql2'
			],
			github: 'https://github.com/RosemarieHalim/10-challenge',
			deployed: 'https://rosemariehalim.github.io/10-challenge/',
		},
		{
			name: 'Note Taker',
			description:
				'A note taking application to assist a users to organize and keep track of tasks.',
			image: 'note-taker-image.PNG',
			technologies: ['HTML/CSS', 'JavaScript', 'jQuery'],
			github: 'https://github.com/RosemarieHalim/09-challenge',
			deployed: 'https://challenge-09.herokuapp.com/',
		},
		{
			name: 'Weather Dashboard',
			description:
				'A weather dashboard that shows current weather and five-day weather forecast for any city.',
			image: 'weather-dashboard-image.PNG',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/RosemarieHalim/06-challenge',
			deployed: 'https://rosemariehalim.github.io/06-challenge/',
		},
    {
			name: 'Work Day Scheduler',
			description:
				'A work day scheduler to assist employees with a busy schedule to add important events so they can manage their time effectively.',
			image: 'workday-scheduler-image.PNG',
			technologies: ['HMTL/CSS', 'JavaScript', 'JQuery', 'Bootstrap'],
			github: 'https://github.com/RosemarieHalim/05-challenge',
			deployed: 'https://rosemariehalim.github.io/05-challenge/',
		},
    {
			name: 'Quiz',
			description:
				'This application quizes developers with a timer feature.',
			image: 'quiz-image.PNG',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/RosemarieHalim/04-challenge',
			deployed: 'https://rosemariehalim.github.io/04-challenge/',
		},
		{
			name: 'Password Generator',
			description:
				'This is an application that generates a random password from 8 to 128 characters.',
			image: 'password-generator-image.PNG',
			technologies: ['HTML/CSS', 'JavaScript'],
			github: 'https://github.com/RosemarieHalim/03-challenge',
			deployed: 'https://rosemariehalim.github.io/03-challenge/',
		},
	];

	return (
		<section>
			<div className="center">
				<h1 className="page-header">My Portfolio</h1>
			</div>
			<div>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[0]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[1]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[2]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[3]}></Project>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Project projects={projects[4]}></Project>
					</li>
					<li className="padding">
						<Project projects={projects[5]}></Project>
					</li>
				</ul>
			</div>
		</section>
	);
}

export default Portfolio;
