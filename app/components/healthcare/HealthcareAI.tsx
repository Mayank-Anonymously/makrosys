export default function HealthcareAI() {
	const flow = [
		'Hospital Requirement',
		'Skills & Specialty',
		'Experience',
		'Availability',
		'Location',
		'Credential Information',
		'Intelligent Candidate Matching',
		'Qualified Candidate Shortlist',
	];

	return (
		<section
			className='section'
			aria-labelledby='ai-title'>
			<div className='container'>
				<h2
					id='ai-title'
					className='section-title'>
					Smarter Healthcare Staffing Through Technology
				</h2>
				<p className='section-subtitle'>
					Makrosys combines healthcare recruitment expertise with modern
					technology to streamline candidate discovery, matching and staffing
					workflows.
				</p>

				<div className='healthcare-ai-layout'>
					<div className='healthcare-tech-diagram'>
						{flow.map((step, index) => (
							<div
								key={step}
								className='healthcare-tech-node'>
								<span className='healthcare-tech-index'>0{index + 1}</span>
								<span>{step}</span>
							</div>
						))}
					</div>

					<div className='healthcare-tech-copy'>
						<p>
							Assistive recruitment technology helps teams organize candidate
							information, compare role fit and speed up shortlisting while
							keeping final hiring decisions in human hands.
						</p>
						<div style={{ marginTop: 16 }}>
							<a
								href='/healthcare/about'
								className='btn btn-outline'>
								Explore Our Technology
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
