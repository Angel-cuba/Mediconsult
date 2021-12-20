import './App.css';
import { Layout } from './components/layout/Layout';
// import Login from './components/login/Login';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import Profile from './UserProfile/ProfileContent';

function App() {
	return (
		<Layout>
			<AuthenticatedTemplate>
				<Profile />
			</AuthenticatedTemplate>
			<UnauthenticatedTemplate>
				<h1>Plzzz Sign In</h1>
				{/* <Login /> */}
			</UnauthenticatedTemplate>
		</Layout>
	);
}

export default App;
