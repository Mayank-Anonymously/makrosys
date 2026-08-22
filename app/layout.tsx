import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import ContactPopup from './components/ContactPopup';

export const metadata: Metadata = {
	title:
		'Makrosys Solutions — Enterprise CRM & Offshore Development Partner Dubai',
	description:
		'Premium CRM Development Dubai, Web Development Company Dubai, and Dedicated Developers Dubai. We help GCC businesses and enterprise B2B clients scale their technology and operations.',
	keywords:
		'Web Development Company Dubai, CRM Development Dubai, Offshore Development UAE, Mobile App Development Dubai, Dedicated Developers Dubai, ERP Solutions UAE, SEO Agency Dubai, AI Automation Dubai',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>
				{children}
				<ContactPopup />
				<Script id='apollo-tracking'>
					{`function initApollo(){var n=Math.random().toString(36).substring(7),o=document.createElement("script");
  o.src="https://assets.apollo.io/micro/website-tracker/tracker.iife.js?nocache="+n,o.async=!0,o.defer=!0,
  o.onload=function(){window.trackingFunctions.onLoad({appId:"6a04544a705ea80021325cd4"})},
  document.head.appendChild(o)}initApollo();`}
				</Script>
			</body>
		</html>
	);
}
