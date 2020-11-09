import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { useContext } from 'react';
import {Accordion, AccordionContext, Button, useAccordionToggle, Card} from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './headerCompoent';

function ContextAwareToggle({ children, eventKey, callback }) {
	const currentEventKey = useContext(AccordionContext);

	const decoratedOnClick = useAccordionToggle(
	eventKey,
	() => callback && callback(eventKey),
	);

	const isCurrentEventKey = currentEventKey === eventKey;

	return (
		<Card.Header
			style={{ fontWeight: isCurrentEventKey ? 700 : 400 }}
			onClick={decoratedOnClick}
		>
			{children}
		<img src="/blue.svg" style={{float: 'right', transform: isCurrentEventKey ? 'rotate(-180deg)' : null}} />
	</Card.Header>)
}



export default function Intro(props) {

	const { isAuthenticated, user } = useAuth0();

	let greeting = 'Welcome to Project Connect mapping game';

	if (isAuthenticated) {
		greeting = 'Hello, ' + user.name + '! Welcome to Project Connect mapping game'
	}
	
  return (
    <Layout myClass="intro">
		<Head>
			<title>Project Connect</title>
			<link rel="icon" href="/favicon.ico" />
			<link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet" />
		</Head>

		<Header/>

		<div className="main">
			<h1>{greeting}</h1>
			<p>With just one minute you can help us map 5 schools.</p>
		</div>

		<div className="next-section">
			<Link href="/start-test" passHref>
				<Button variant="primary"><span>Start Mapping Schools<img className="white" src="/white.svg"/></span></Button>
			</Link>
		</div>

		<div>
			<p className="stdpar">
				Want to know what a school looks like on a map? <Link href="/tips">
			    <a>View school mapping tips</a></Link>
			</p>
		</div>
		
		<div>
			<p style= {{textAlign: 'center'}}>
				<b>Frequently asked questions</b><br/>
				<img src="/blue.svg" />
			</p>
			<Accordion>
				<Card>
					<ContextAwareToggle eventKey="0">
						How is my contribution important?
					</ContextAwareToggle>
					<Accordion.Collapse eventKey="0">
						<Card.Body>
							There are approximately 6 million schools in the world, but nobody knows where all of them are.
							We want to use the power of crowdsourcing to map and validate the location of these schools.
							For more information on the mission of Project Connect, visit&nbsp;
							<Link href="https://projectconnect.world">
								<a>our website</a>
							</Link>.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<ContextAwareToggle eventKey="1">
						How will you estimate the accuracy of my school tagging?
					</ContextAwareToggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							This is a beta version of the tool. Your responses will help us develop algorithms that process
							results and set thresholds for the number of individual responses needed in order to accurately
							tag a school. No single person will have the power to validate a school alone.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<ContextAwareToggle eventKey="2">
						What will I receive for my contribution?
					</ContextAwareToggle>
					<Accordion.Collapse eventKey="2">
						<Card.Body>
							For now, only the greatest reward of supporting the Project Connect mission. In future development,
							we plan to build leaderboards and a reward system that is integrated with other Digital Public Goods.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>
    </Layout>
  )
}