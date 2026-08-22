import FAQ from '../components/FAQ';
import HealthcareHero from '../components/healthcare/HealthcareHero';
import HealthcareServices from '../components/healthcare/HealthcareServices';
import HealthcareProcess from '../components/healthcare/HealthcareProcess';
import HealthcareAI from '../components/healthcare/HealthcareAI';

const healthcareFaqs = [
	{
		question: 'What healthcare professionals do you recruit?',
		answer:
			'Makrosys Healthcare supports recruitment needs across nursing, allied healthcare and clinical support roles depending on facility requirements and applicable regulations.',
	},
	{
		question: 'Do you provide temporary staffing?',
		answer:
			'Yes, flexible temporary staffing solutions can be structured around facility requirements and staffing timelines.',
	},
	{
		question: 'Do you provide permanent placement?',
		answer:
			'Yes, permanent placement support is available for organizations seeking longer-term staffing solutions and more stable workforce coverage.',
	},
	{
		question: 'How can a hospital request staff?',
		answer:
			'Healthcare organizations can submit a staffing request through the hospital intake form and the team will review the requirement and follow up accordingly.',
	},
	{
		question: 'How can healthcare professionals join?',
		answer:
			'Healthcare professionals can apply through the healthcare professional intake form and share relevant professional information, availability and documentation details.',
	},
	{
		question: 'What information is required from candidates?',
		answer:
			'The information requested typically includes contact details, professional background, experience, location, availability, resume or profile details and any relevant documentation needed for review.',
	},
	{
		question: 'How does the candidate matching process work?',
		answer:
			'Matching is based on facility requirements, role fit, availability, location, credentials and relevant professional information reviewed by the recruitment team.',
	},
	{
		question: 'What credential information is reviewed?',
		answer:
			'Credential review focuses on the information provided by the candidate and the requirements shared by the facility, such as professional background, role-specific details and documentation status.',
	},
	{
		question: 'Do requirements vary by state?',
		answer:
			'Yes. Compliance requirements can vary by role, facility and state, so review is handled in line with the relevant requirements and documentation needs.',
	},
	{
		question: 'How do I contact Makrosys Healthcare?',
		answer:
			'You can reach the healthcare team through the contact page or by submitting a staffing request or professional registration form.',
	},
];

export const metadata = {
	title: 'Healthcare Staffing & Recruitment Solutions | Makrosys Healthcare',
	description:
		'Makrosys Healthcare provides technology-driven healthcare staffing and recruitment solutions connecting healthcare organizations with qualified professionals.',
};

export default function HealthcarePage() {
	return (
		<main className='healthcare-page'>
			<HealthcareHero />
			<section className='section'>
				<div className='container'>
					<h2 className='section-title'>
						Healthcare Staffing Built Around People and Precision
					</h2>
					<div className='healthcare-grid-4'>
						<div className='strategy-card'>
							<h4>Qualified Professionals</h4>
							<p>
								Connect healthcare organizations with professionals aligned to
								their staffing requirements.
							</p>
						</div>
						<div className='strategy-card'>
							<h4>Faster Staffing</h4>
							<p>
								Streamline candidate discovery, screening, credentialing and
								placement.
							</p>
						</div>
						<div className='strategy-card'>
							<h4>Compliance Focused</h4>
							<p>
								Build a structured credential and documentation process around
								every candidate.
							</p>
						</div>
						<div className='strategy-card'>
							<h4>Technology Driven</h4>
							<p>
								Use modern recruitment technology and intelligent matching to
								improve staffing workflows.
							</p>
						</div>
					</div>
				</div>
			</section>

			<HealthcareServices />
			<HealthcareProcess />
			<HealthcareAI />

			<section className='section'>
				<div className='container'>
					<h2 className='section-title'>
						Are you a Healthcare Organization or a Professional?
					</h2>
					<div className='healthcare-audience-grid'>
						<div className='healthcare-audience-card'>
							<h3>Are You a Healthcare Organization?</h3>
							<p>Request qualified professionals for your facility.</p>
							<a
								href='/healthcare/for-hospitals'
								className='btn btn-primary'>
								Request Healthcare Staff
							</a>
						</div>
						<div className='healthcare-audience-card'>
							<h3>Are You a Healthcare Professional?</h3>
							<p>Join the network and be considered for opportunities.</p>
							<a
								href='/healthcare/for-professionals'
								className='btn btn-outline'>
								Join Our Healthcare Network
							</a>
						</div>
					</div>
				</div>
			</section>

			<FAQ
				faqs={healthcareFaqs}
				title='Healthcare Staffing FAQ'
			/>

			<div className='healthcare-mobile-cta'>
				<a
					href='/healthcare/for-hospitals'
					className='btn btn-primary'>
					Request Staff
				</a>
				<a
					href='/healthcare/for-professionals'
					className='btn btn-outline'>
					Join Network
				</a>
			</div>
		</main>
	);
}
