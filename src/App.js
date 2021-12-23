import './App.css';
import { Layout } from './components/layout/Layout';
// import Login from './components/login/Login';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import Profile from './UserProfile/ProfileContent';
// import Header from "./ComponentsFrontEnd/header";
// import Logo from "./ComponentsFrontEnd/logo";
import Calendar from './components/calendar/calendar.js'

const style = {
	position: "relative",
	margin: "50px auto"
}

function App() {
	return ( <>
		<Layout>
			<AuthenticatedTemplate>
				<Profile />
			</AuthenticatedTemplate>
			<UnauthenticatedTemplate>
				{/* <h1>Plzzz Sign In</h1> */}
				{/* <Login /> */}
			</UnauthenticatedTemplate>
			<div>
				<Calendar style={style} width="302px" />
					{/* onDayClick={(e, day)=> this.onDayClick(e, day)} */}
				{/* <button href="./components/calendar/index.js">Check the Calendar</button> */}
			</div>
		</Layout>

		</>
	);
}

export default App;
