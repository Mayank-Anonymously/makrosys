'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
	{ label: 'Home', href: '/' },
	{ label: 'Software & Technology', href: '/#services' },
	{ label: 'AI Solutions', href: '/#services' },
];

const HEALTHCARE_MENU = [
	{ label: 'Healthcare Staffing', href: '/healthcare/staffing' },
	{ label: 'Nursing Staffing', href: '/healthcare/nursing' },
	{
		label: 'Allied Healthcare Staffing',
		href: '/healthcare/allied-healthcare',
	},
	{ label: 'For Hospitals', href: '/healthcare/for-hospitals' },
	{
		label: 'For Healthcare Professionals',
		href: '/healthcare/for-professionals',
	},
	{ label: 'Our Process', href: '/healthcare/our-process' },
	{ label: 'Compliance', href: '/healthcare/compliance' },
];

export default function Navbar() {
	const [mobileOpen, setMobileOpen] = useState(false);
	const [healthcareOpen, setHealthcareOpen] = useState(false);
	const pathname = usePathname();
	const isHealthcareHeader = pathname?.startsWith('/healthcare');

	return (
		<nav
			className={`navbar ${isHealthcareHeader ? 'navbar-healthcare-shell' : ''}`}
			id='navbar'>
			<div className='container navbar-inner'>
				<Link
					href='/'
					className='navbar-logo'>
					<Image
						src='/images/logo.png'
						alt='MAKROSYS Solutions'
						width={180}
						height={42}
						style={{ objectFit: 'contain' }}
					/>
				</Link>

				<ul className={`navbar-links ${mobileOpen ? 'mobile-open' : ''}`}>
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								onClick={() => setMobileOpen(false)}>
								{link.label}
							</Link>
						</li>
					))}

					<li
						className={`navbar-healthcare ${healthcareOpen ? 'open' : ''}`}
						onMouseEnter={() => setHealthcareOpen(true)}
						onMouseLeave={() => setHealthcareOpen(false)}>
						<div className='healthcare-label'>
							<Link
								href='/healthcare'
								onClick={() => {
									setMobileOpen(false);
									setHealthcareOpen((prev) => !prev);
								}}>
								Healthcare
							</Link>
						</div>
						<div className='healthcare-dropdown'>
							<ul>
								{HEALTHCARE_MENU.map((m) => (
									<li key={m.href}>
										<Link
											href={m.href}
											onClick={() => {
												setMobileOpen(false);
												setHealthcareOpen(false);
											}}>
											{m.label}
										</Link>
									</li>
								))}
							</ul>
						</div>
					</li>
					<li>
						<Link
							href='/about'
							onClick={() => setMobileOpen(false)}>
							About
						</Link>
					</li>
					<li>
						<Link
							href='/contact'
							onClick={() => setMobileOpen(false)}>
							Contact
						</Link>
					</li>
					<li className='mobile-cta-item'>
						<button
							className='btn btn-primary navbar-cta'
							onClick={() => {
								setMobileOpen(false);
								window.dispatchEvent(new Event('open-contact-popup'));
							}}>
							Book a Strategy Call
						</button>
					</li>
				</ul>

				<button
					className='btn btn-primary navbar-cta desktop-cta'
					onClick={() => window.dispatchEvent(new Event('open-contact-popup'))}>
					{isHealthcareHeader ?
						'Request Healthcare Staff'
					:	'Book a Strategy Call'}
				</button>

				<button
					className={`navbar-hamburger ${mobileOpen ? 'active' : ''}`}
					aria-label='Toggle menu'
					onClick={() => setMobileOpen(!mobileOpen)}>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
		</nav>
	);
}
