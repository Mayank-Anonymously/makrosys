import HealthcareFacilityRequestForm from '@/app/components/healthcare/HealthcareFacilityRequestForm';

export const metadata = { title: 'For Hospitals | Makrosys Healthcare' };

export default function ForHospitals() {
	return (
		<main className='healthcare-page'>
			<HealthcareFacilityRequestForm />
		</main>
	);
}
