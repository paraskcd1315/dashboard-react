import { useState } from 'react';
import Container from './components/layout/Container';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import avatar from './resources/images/profile-picture.jpg';
import './scss/App.scss';

function App() {
	const [userData, setUserData] = useState({ username: null });

	setUserData((userData) => [...userData, { username: 'John Doe' }]);

	return (
		<div className='root'>
			<Navbar avatar={avatar} />
			<div className='main'>
				<Header avatar={avatar} username={userData.username} />
				<Container pageTitle='Dashboard' username={userData.username} />
			</div>
		</div>
	);
}

export default App;
