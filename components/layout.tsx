import React from 'react';
import Header from './header';
import Head from 'next/head';

interface Layout {
	children: React.ReactNode;
}

const Layout: React.FC<Layout> = ({ children }) => {
	return (
		<React.Fragment>
			<Head>
				<title>Halis Yücel</title>
			</Head>
			<Header />
			{children}
		</React.Fragment>
	);
};

export default Layout;
