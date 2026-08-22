import Link from 'next/link';
import Image from 'next/image';

const SERVICES = [
	{
		title: 'Registered Nurse Staffing',
		description:
			'Staffing solutions for hospitals, healthcare facilities and other eligible healthcare organizations.',
		href: '/healthcare/nursing',
		img: '/images/healthcare/rn.jpg',
	},
	{
		title: 'LPN / LVN Staffing',
		description:
			'Connect facilities with qualified practical and vocational nursing professionals aligned to operational needs.',
		href: '/healthcare/staffing',
		img: '/images/healthcare/lpn.jpg',
	},
	{
		title: 'CNA Staffing',
		description:
			'Support healthcare facilities with nursing assistants who can help maintain day-to-day care coverage.',
		href: '/healthcare/staffing',
		img: '/images/healthcare/cna.jpg',
	},
	{
		title: 'Allied Healthcare Staffing',
		description:
			'Recruit and connect professionals across relevant allied healthcare disciplines to strengthen care teams.',
		href: '/healthcare/allied-healthcare',
		img: '/images/healthcare/allied.svg',
	},
	{
		title: 'Temporary Staffing',
		description:
			'Flexible staffing solutions based on facility requirements, timing and applicable workforce regulations.',
		href: '/healthcare/staffing',
		img: '/images/healthcare/temp.svg',
	},
	{
		title: 'Permanent Placement',
		description:
			'Recruitment solutions for organizations looking for long-term healthcare professionals and steady continuity.',
		href: '/healthcare/staffing',
		img: '/images/healthcare/permanent.svg',
	},
];

export default function HealthcareServices() {
	return (
		<section className='section'>
			<div className='container'>
				<h2 className='section-title'>Healthcare Staffing Solutions</h2>
				<p className='section-subtitle'>
					Flexible, compliant and technology-enabled staffing solutions for U.S.
					healthcare organizations.
				</p>

				<div className='healthcare-services-grid'>
					{SERVICES.map((s) => (
						<div
							key={s.title}
							className='healthcare-service-card'>
							<Image
								src={s.img}
								alt={s.title}
								width={800}
								height={450}
							/>
							<div className='content'>
								<h3>{s.title}</h3>
								<p>{s.description}</p>
								<Link
									href={s.href}
									className='btn btn-outline'>
									Learn more
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
