/*eslint default-case: [, { "commentPattern": "^skip\\sdefault" }]*/

import { LogLevel } from '@azure/msal-browser';

export const msalConfig = {
	auth: {
		clientId: '2156d385-7998-43c1-ade2-49016e3971b5',
		authority: 'https://login.microsoftonline.com/common', // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
		redirectUri: 'http://localhost:3000',
	},
	cache: {
		cacheLocation: 'sessionStorage', // This configures where your cache will be stored
		storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
	},
	system: {
		loggerOptions: {
			loggerCallBack: (level, message, constainsPii) => {
				if (constainsPii) {
					return;
				}
				switch (level) {
					case LogLevel.Error:
						console.error(message);
						return;
					case LogLevel.Info:
						console.info(message);
						return;
					case LogLevel.Verbose:
						console.debug(message);
						return;
					case LogLevel.Warning:
						console.warn(message);
						return;
				}
			},
		},
	},
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
	scopes: ['User.Read'],
};

// Add the endpoints here for Microsoft Graph API services you'd like to use.
export const graphConfig = {
	graphMeEndpoint: 'https://graph.microsoft.com/v1.0/me',
};
