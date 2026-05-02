import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Services from './components/Services';
import ClientTypes from './components/ClientTypes';
import WhyChooseUs from './components/WhyChooseUs';
import CaseStudiesPreview from './components/CaseStudiesPreview';
import PartnershipModels from './components/PartnershipModels';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function Home() {
	return (
		<>
			<Navbar />
			<main>
				<Hero />
				<Problem />
				<Solution />
				<Services />
				<ClientTypes />
				<WhyChooseUs />
				<CaseStudiesPreview />
				<PartnershipModels />
				<FinalCTA />
			</main>
			<Footer />
		</>
	);
}
