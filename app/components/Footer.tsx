import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer
			className='footer'
			id='contact'>
			<div className='container'>
				<div className='footer-grid'>
					<div className='footer-brand'>
						<div className='footer-logo'>
							<Image
								src='/images/logo.png'
								alt='MAKROSYS Solutions'
								width={180}
								height={42}
								style={{
									filter: 'brightness(0) invert(1)',
									objectFit: 'contain',
								}}
							/>
						</div>
						<p>
							MAKROSYS HEALTHCARE supports healthcare staffing and recruitment
							needs by connecting healthcare organizations with qualified
							professionals through a structured, technology-enabled process.
						</p>
					</div>

					<div className='footer-column'>
						<h4>Healthcare</h4>
						<ul>
							<li>
								<Link href='/healthcare'>Healthcare Home</Link>
							</li>
							<li>
								<Link href='/healthcare/staffing'>Healthcare Staffing</Link>
							</li>
							<li>
								<Link href='/healthcare/nursing'>Nursing Staffing</Link>
							</li>
							<li>
								<Link href='/healthcare/allied-healthcare'>
									Allied Healthcare
								</Link>
							</li>
						</ul>
					</div>

					<div className='footer-column'>
						<h4>Makrosys Healthcare</h4>
						<ul>
							<li>
								<Link href='/healthcare/for-hospitals'>For Hospitals</Link>
							</li>
							<li>
								<Link href='/healthcare/for-professionals'>
									For Professionals
								</Link>
							</li>
							<li>
								<Link href='/healthcare/our-process'>Our Process</Link>
							</li>
							<li>
								<Link href='/healthcare/compliance'>Compliance</Link>
							</li>
							<li>
								<Link href='/healthcare/contact'>Contact</Link>
							</li>
						</ul>
						<p style={{ marginTop: 12, fontSize: 13 }}>
							Healthcare division of Makrosys Solutions
						</p>
					</div>

					<div className='footer-column'>
						<h4>Contact</h4>
						<ul>
							<li>
								<Link href='/healthcare/contact'>
									Contact Makrosys Healthcare
								</Link>
							</li>
							<li>
								<a href='mailto:onboarding@makrosyssolutions.com'>
									✉️ onboarding@makrosyssolutions.com
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className='footer-bottom'>
					<p>© 2026 MAKROSYS. All rights reserved.</p>
					<div className='footer-bottom-links'>
						<Link href='/privacy'>Privacy Policy</Link>
						<Link href='/terms'>Terms of Service</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
