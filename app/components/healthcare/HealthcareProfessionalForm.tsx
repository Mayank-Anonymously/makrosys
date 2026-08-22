'use client';

import { useState } from 'react';

export default function HealthcareProfessionalForm() {
	const [sent, setSent] = useState(false);

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setSent(true);
	}

	if (sent) {
		return (
			<main className='healthcare-page section'>
				<div className='container'>
					<h2 className='section-title'>Thank you</h2>
					<p>
						Thank you for joining. Our team will review your submission and be
						in touch.
					</p>
				</div>
			</main>
		);
	}

	return (
		<section className='section'>
			<div className='container'>
				<h1 className='section-title'>
					Your Next Healthcare Opportunity Starts Here
				</h1>
				<p className='section-subtitle'>
					Join the Makrosys Healthcare professional network and discover
					staffing and career opportunities aligned with your experience,
					qualifications and availability.
				</p>

				<form
					onSubmit={handleSubmit}
					className='healthcare-form-grid'
					style={{ marginTop: 16 }}>
					<input
						placeholder='Full Name'
						required
					/>
					<input
						placeholder='Email'
						type='email'
						required
					/>
					<input placeholder='Phone' />
					<input placeholder='Current Location' />
					<input placeholder='Profession' />
					<input placeholder='Specialty' />
					<input placeholder='Years of Experience' />
					<input placeholder='Preferred Location' />
					<input placeholder='Availability' />
					<input
						placeholder='Resume Upload'
						type='file'
					/>
					<input placeholder='License Information' />
					<input placeholder='Certifications' />
					<textarea
						placeholder='Message'
						style={{ gridColumn: '1 / -1' }}
					/>
					<button
						className='btn btn-primary'
						style={{ gridColumn: '1 / -1' }}>
						Join Healthcare Network
					</button>
				</form>
			</div>
		</section>
	);
}
