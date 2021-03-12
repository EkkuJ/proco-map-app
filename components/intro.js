import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import HeaderComponent from '../components/headerComponent';
import { useContext } from 'react';
import {Accordion, AccordionContext, Button, useAccordionToggle, Card} from 'react-bootstrap';

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
  return (
    <Layout myClass="intro">
		<Head>
			<title>Project Connect</title>
			<link rel="icon" href="/favicon.ico" />
			<link href="https://fonts.googleapis.com/css2?family=Cabin&display=swap" rel="stylesheet" />
		</Head>

		<HeaderComponent inverse={false} />

		<div className="main">
			<h1>Welcome to Project Connect mapping game</h1>
			<p>With just one minute you can help us map 5 schools.</p>
		</div>

		<div className="next-section">
			<Link href="/start-test" passHref>
				<Button variant="primary"><span>Start Mapping Schools<img className="white" src="/white.svg"/></span></Button>
			</Link>
		</div>

		<div>
			<p className="stdpar">
				Want to know what a school looks like on a map? <Link href="/tips" passHref>
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
							<Link href="https://projectconnect.world" passHref>
								<a target="_blank" rel="noopener">our website</a>
							</Link>.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<ContextAwareToggle eventKey="1">
						What is the purpose of this game?
					</ContextAwareToggle>
					<Accordion.Collapse eventKey="1">
						<Card.Body>
							In this first version, the purpose of the game is to crowdsource the validation of known locations
							– at least in the short term, we are not planning to use this game to crowdsource the location of
							new schools. We have other methods and tools for that purpose (i.e. ML models, apps that crowdsource geolocation
							from teachers and students when they are in their school, etc.) Once we have the thresholds well defined,
							it will be technically possible to send images of any areas with buildings and use this to map locations of
							unknown schools.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<ContextAwareToggle eventKey="2">
						Where does the school location data come from?
					</ContextAwareToggle>
					<Accordion.Collapse eventKey="2">
						<Card.Body>
							The main sources of data for the game are country governments. Project Connect works very closely
							with governments to gather existing data from different local stakeholders. The accuracy of the
							data we receive varies from country to country and it is very time consuming for an individual
							to manually validate all the locations one by one. That’s why the game will help us crowdsource
							the task – and eventually have automated machine learning models do the validation.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<ContextAwareToggle eventKey="3">
						How will you estimate the accuracy of my school tagging?
					</ContextAwareToggle>
					<Accordion.Collapse eventKey="3">
						<Card.Body>
							This is a beta version of the tool. Your responses will help us develop algorithms that process
							results and set thresholds for the number of individual responses needed in order to accurately
							tag a school. No single person will have the power to validate a school alone.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<ContextAwareToggle eventKey="4">
						What is done with the yes/no/unsure ratings?
					</ContextAwareToggle>
					<Accordion.Collapse eventKey="4">
						<Card.Body>
							Right now, we are gathering data to determine what is the yes/no ratio we need for the same
							location to reach some confidence level that the location contains a school, and the same
							to reach some confidence level that the location does not contain a school. We are using
							a dataset that has been manually validated by a trained team of "data mappers" as ground
							truth for this initial validation and for determining the yes/no thresholds. The more users
							play the game and the more answers we have, the better we’ll be able to define these thresholds.
							<br/><br/>
							The ratings will be used in the following ways:
							<ol>
								<li>for locations that are rated with a high number of "NO", this information will be sent
								to the government (our main source of data) and we’ll work with them to correct the geolocation tagging
								of the corresponding schools</li>
								<li>locations that are rated with high number of "NO" and "YES" will be used to train our ML algorithms.</li>
								<li>for locations that are rated with high number of "UNSURE", we will consider that satellite imagery is
								not sufficient to determine that the location contains a school or not and they won’t be used to train
								our ML algorithms.</li>
							</ol>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
				<Card>
					<ContextAwareToggle eventKey="5">
						What will I receive for my contribution?
					</ContextAwareToggle>
					<Accordion.Collapse eventKey="5">
						<Card.Body>
							For now, only the greatest reward of supporting the Project Connect mission. In future development,
							we plan to build leaderboards and a reward system that is integrated with other Digital Public Goods.
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</div>

		<footer className="masthead pt-3 mt-3">
			<p style={{textAlign:"center"}}>
				<a href="/legal">Legal</a>
				&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
				<a href="https://github.com/unicef/projectconnect-game" target="_blank" rel="noopener">Source Code</a>
				&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
				<a href="mailto:projectconnect@unicef.org">Contact us</a>
			</p>
		</footer>
    </Layout>
  )
}