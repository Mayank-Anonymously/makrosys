import HealthcareProfessionalForm from '@/app/components/healthcare/HealthcareProfessionalForm';

export const metadata = {
	title: 'For Healthcare Professionals | Makrosys Healthcare',
};

export default function ForProfessionals() {
	return (
		<main className='healthcare-page'>
			<HealthcareProfessionalForm />
		</main>
	);
}
