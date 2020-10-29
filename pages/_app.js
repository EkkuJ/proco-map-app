import { CookiesProvider } from "react-cookie";
import { Auth0Provider } from "@auth0/auth0-react";

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/global.css';

const domain = process.env.NEXT_PUBLIC_AUTH0_DOMAIN;
const clientID = process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID;
const redirectURI = process.env.NEXT_PUBLIC_AUTH0_REDIRECT_URI;

export default function MyApp({ Component, pageProps }) {

	return (
		<Auth0Provider
			domain={domain}
			clientId={clientID}
			redirectUri={redirectURI}
		>
			<CookiesProvider>
				<Component {...pageProps} />
			</CookiesProvider>
		</Auth0Provider>
	);
}
