'use client';

import { useState } from 'react';

export default function HealthcareFacilityRequestForm() {
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
						Thank you. Our healthcare staffing team will review your requirement
						and contact you.
					</p>
				</div>
			</main>
		);
	}

	return (
		<section className='section'>
			<div className='container'>
				<h1 className='section-title'>
					Staffing Solutions Designed for Healthcare Organizations
				</h1>
				<p className='section-subtitle'>
					Tell us what your facility needs. Our recruitment and staffing team
					will help identify healthcare professionals aligned with your
					requirements.
				</p>

				<form
					onSubmit={handleSubmit}
					className='healthcare-form-grid'
					style={{ marginTop: 16 }}>
					<input
						placeholder='Facility Name'
						required
					/>
					<input
						placeholder='Contact Person'
						required
					/>
					<input
						placeholder='Business Email'
						type='email'
						required
					/>
					<input placeholder='Phone' />
					<input placeholder='Facility Type' />
					<input placeholder='Location' />
					<input placeholder='Position Required' />
					<input placeholder='Number of Professionals' />
					<input placeholder='Employment Type' />
					<input
						placeholder='Required Start Date'
						type='date'
					/>
					<input placeholder='Shift' />
					<input placeholder='Experience Required' />
					<textarea
						placeholder='Additional Requirements'
						style={{ gridColumn: '1 / -1' }}
					/>
					<textarea
						placeholder='Message'
						style={{ gridColumn: '1 / -1' }}
					/>
					<button
						className='btn btn-primary'
						style={{ gridColumn: '1 / -1' }}>
						Submit Staffing Requirement
					</button>
				</form>
			</div>
		</section>
	);
}
