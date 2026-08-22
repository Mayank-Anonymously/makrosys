export default function HealthcareProcess() {
	const steps = [
		'Tell Us Your Requirement',
		'Candidate Discovery',
		'Screening & Credential Review',
		'Matching & Presentation',
		'Placement',
	];

	return (
		<section
			className='section'
			aria-labelledby='process-title'>
			<div className='container'>
				<h2
					id='process-title'
					className='section-title'>
					How It Works
				</h2>
				<p className='section-subtitle'>
					A simple, transparent five-step process focused on quality and
					compliance.
				</p>

				<div className='healthcare-timeline'>
					{steps.map((s, i) => (
						<div
							key={s}
							className='healthcare-step'>
							<div className='healthcare-step-number'>
								{String(i + 1).padStart(2, '0')}
							</div>
							<h4>{s}</h4>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
