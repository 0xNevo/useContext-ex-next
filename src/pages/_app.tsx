import {Fragment} from "react";
import { AppProps } from 'next/app';
import '@/styles/globals.css';
import { AuthProvider } from "../context/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
	<Fragment>
		<AuthProvider>
			<Component {...pageProps} />
		</AuthProvider>
	</Fragment>
  )
}