import Link from 'next/link';
import Image from 'next/image';

export default function HealthcareHero() {
	return (
		<section
			className='hero'
			style={{ background: '#f7fbff' }}>
			<div className='container hero-inner'>
				<div className='hero-content'>
					<div className='hero-badge'>
						Healthcare Staffing • Recruitment • Workforce Solutions
					</div>
					<h1 className='hero-title'>
						Qualified Healthcare Professionals. When You Need Them.
					</h1>
					<p className='hero-desc'>
						Makrosys Healthcare connects hospitals, healthcare facilities, and
						healthcare professionals through a technology-driven staffing and
						recruitment platform built around quality, compliance, and speed.
					</p>
					<div className='hero-buttons'>
						<Link
							href='/healthcare/for-hospitals'
							className='btn btn-primary'>
							Request Healthcare Staff
						</Link>
						<Link
							href='/healthcare/for-professionals'
							className='btn btn-outline'>
							Join Our Healthcare Network
						</Link>
					</div>
					<div style={{ marginTop: 12, color: '#6b7280', fontSize: 14 }}>
						Healthcare Staffing • Recruitment • Workforce Solutions
					</div>
				</div>

				<div className='hero-visual'>
					<div
						style={{
							width: '100%',
							maxWidth: 720,
							aspectRatio: '16/9',
							position: 'relative',
						}}>
						<Image
							src='/images/healthcare/rn.jpg'
							alt='Healthcare professionals in a clinical setting'
							fill
							priority
							style={{ objectFit: 'cover', borderRadius: 12 }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
