export const metadata = { title: 'Compliance | Makrosys Healthcare' };

export default function CompliancePage() {
	return (
		<main className='healthcare-page'>
			<section className='section'>
				<div className='container'>
					<h1 className='section-title'>
						Built Around Responsible Healthcare Staffing
					</h1>
					<p className='section-subtitle'>
						Healthcare staffing requires careful attention to professional
						credentials, documentation, role fit and facility-specific
						requirements. Compliance requirements vary by role, facility and
						state.
					</p>

					<ul style={{ marginTop: 16, color: '#555' }}>
						<li>Professional credentials and background information</li>
						<li>License and qualification review where applicable</li>
						<li>Candidate documentation and record management</li>
						<li>Background screening where required by the hiring context</li>
						<li>State-specific requirements and worker eligibility checks</li>
					</ul>

					<p style={{ marginTop: 16, color: '#555' }}>
						Requirements are reviewed in line with the relevant role, hiring
						context and applicable legal or operational requirements.
					</p>

					<div style={{ marginTop: 16 }}>
						<a
							href='/healthcare/contact'
							className='btn btn-primary'>
							Talk to Our Healthcare Team
						</a>
					</div>
				</div>
			</section>
		</main>
	);
}
