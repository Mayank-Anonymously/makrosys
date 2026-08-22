import HealthcareContactSelector from '@/app/components/healthcare/HealthcareContactSelector';

export const metadata = { title: 'Contact | Makrosys Healthcare' };

export default function ContactPage() {
	return (
		<main className='healthcare-page'>
			<HealthcareContactSelector />
		</main>
	);
}
