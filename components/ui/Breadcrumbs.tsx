import Link from "next/link";
import { StructuredData } from "./StructuredData";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const siteUrl = "https://sarsglobal.io";
  
  const allItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...items,
  ];

  const breadcrumbListSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: allItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href ? (item.href.startsWith("http") ? item.href : `${siteUrl}${item.href}`) : undefined,
    })),
  };

  return (
    <>
      <StructuredData items={[breadcrumbListSchema]} />
      <nav aria-label="Breadcrumb" className={`sars-breadcrumbs ${className}`.trim()}>
        <ol className="sars-breadcrumbs__list" itemScope itemType="https://schema.org/BreadcrumbList">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li
                key={index}
                className="sars-breadcrumbs__item"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {!isLast && item.href ? (
                  <Link href={item.href} itemProp="item" className="sars-breadcrumbs__link">
                    <span itemProp="name">{item.label}</span>
                  </Link>
                ) : (
                  <span className="sars-breadcrumbs__current" itemProp="name" aria-current={isLast ? "page" : undefined}>
                    {item.label}
                  </span>
                )}
                <meta itemProp="position" content={String(index + 1)} />
                {!isLast && <span className="sars-breadcrumbs__sep" aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
