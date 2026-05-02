import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Makrosys Solutions - Get A Free Strategy Audit',
  description: 'Ready to unlock predictable revenue growth? Contact MAKROSYS today. Fill out our form or reach out directly to discuss how we can help your business scale.',
  robots: 'index, follow',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
