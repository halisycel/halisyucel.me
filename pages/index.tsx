import Command from '../components/command';
import GithubActivity from '../components/github-activity';
import Layout from '../components/layout';
import Title from '../components/title';
import { getAboutData } from '../utils/about';
import texts, { Locale } from '../utils/texts';
import { NextPage } from 'next';
import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import {AiFillGithub, AiFillLinkedin, AiFillMediumCircle} from 'react-icons/ai';
import ReactMarkdown from 'react-markdown';

export interface AboutProps {
	data: string;
}

const About: NextPage<AboutProps> = ({ data }) => {
	const router = useRouter();
	const t = texts(router.locale as Locale);
	return (
		<Layout>
			<Title value={t.pages.about.title} />
			<Command className={'mt-2'} location={'~/about'} />
			<div
				className={
					'hidden w-full h-[280px] rounded-2xl bg-cover bg-no-repeat bg-center mt-6 xs:block'
				}
				style={{
					backgroundImage: 'url(/pp.jpeg)',
				}}
			/>
			<div
				className={
					'markdown-content font-source-sans mb-6 pb-7 border-b-[1px] border-slate-600/10 xs:border-y-[1px]'
				}
			>
				<ReactMarkdown>{data}</ReactMarkdown>
			</div>
			<div
				className={
					'flex mb-8 justify-center items-center pb-6 border-b-[1px] border-slate-600/10'
				}
			>
				{[
					{ href: process.env.NEXT_PUBLIC_GITHUB_URL, element: <AiFillGithub className={'text-2xl mr-1.5'} />, label: 'GitHub' },
					{ href: process.env.NEXT_PUBLIC_MEDIUM_URL, element: <AiFillMediumCircle className={'text-2xl mr-1.5'} />, label: 'Medium' },
					{ href: process.env.NEXT_PUBLIC_LINKEDIN_URL, element: <AiFillLinkedin className={'text-2xl mr-1.5'} />, label: 'Linkedin' }
				].map((item) => (
					<a
						key={item.label}
						href={item.href}
						target={'_blank'}
						rel={'noopener noreferrer'}
						className={
							'cursor-pointer text-black font-source-sans flex items-center text-lg mr-6 last:mr-0'
						}
					>
						{item.element} {item.label}
					</a>
				))}
			</div>
			<GithubActivity />
		</Layout>
	);
};

const getStaticProps: GetStaticProps = async ({ locale }) => {
	const data = getAboutData({ locale: locale as Locale });
	return { props: { data } };
};

export default About;
export { getStaticProps };
