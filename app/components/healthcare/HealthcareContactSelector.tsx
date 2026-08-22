'use client';

import { useState } from 'react';

export default function HealthcareContactSelector() {
	const [mode, setMode] = useState<'facility' | 'professional'>('facility');

	return (
		<section className='section'>
			<div className='container'>
				<h1 className='section-title'>Contact Makrosys Healthcare</h1>
				<div
					style={{ display: 'flex', gap: 12, marginTop: 16, flexWrap: 'wrap' }}>
					<button
						className={
							mode === 'facility' ? 'btn btn-primary' : 'btn btn-outline'
						}
						onClick={() => setMode('facility')}>
						I&apos;m a Healthcare Facility
					</button>
					<button
						className={
							mode === 'professional' ? 'btn btn-primary' : 'btn btn-outline'
						}
						onClick={() => setMode('professional')}>
						I&apos;m a Healthcare Professional
					</button>
				</div>

				<div
					style={{ marginTop: 24, display: 'grid', gap: 10, color: '#53667d' }}>
					<p>
						<strong>Business email:</strong> info@makrosys.com
					</p>
					<p>
						<strong>Phone:</strong> +1 469-895-7031
					</p>
					<p>
						<strong>Primary route:</strong>{' '}
						{mode === 'facility' ?
							'Request Healthcare Staff'
						:	'Join Our Network'}
					</p>
				</div>
			</div>
		</section>
	);
}
