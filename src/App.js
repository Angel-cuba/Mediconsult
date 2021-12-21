import './App.css';
import { Layout } from './components/layout/Layout';
// import Login from './components/login/Login';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import Profile from './UserProfile/ProfileContent';
import Header from "./ComponentsFrontEnd/header";
import Logo from "./ComponentsFrontEnd/logo";

function App() {
	return ( <>
		<Layout>
			<AuthenticatedTemplate>
				<Profile />
			</AuthenticatedTemplate>
			<UnauthenticatedTemplate>
				<h1>Plzzz Sign In</h1>
				{/* <Login /> */}
			</UnauthenticatedTemplate>
		</Layout>
		<div className="container">
		<Header text="Call us: +358451234567" followus= "Follow us" support = "login to customer support" image ="logo.png"/>
		<Logo/>
		</div>
		</>
	);
}

export default App;
