import Link from 'next/link';

export function MegaMenuColumn({ title, links }: { title: string, links: { label: string, href: string }[] }) {
  return (
    <div className="mega-menu-column">
      <h4 className="mega-menu-title">{title}</h4>
      <ul className="mega-menu-list">
        {links.map((link, i) => (
          <li key={i}>
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function MegaMenuCTA({ title, subtitle, ctaText, href, colorClass = "bg-primary" }: { title: string, subtitle?: string, ctaText: string, href: string, colorClass?: string }) {
  return (
    <div className={`mega-menu-cta ${colorClass}`}>
      {subtitle && <span className="mega-menu-cta-sub">{subtitle}</span>}
      <h3 className="mega-menu-cta-title">{title}</h3>
      <Link href={href} className="btn mega-menu-btn">
        {ctaText}
      </Link>
    </div>
  );
}
