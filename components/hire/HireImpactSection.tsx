interface CountryHub {
  code: string;
  flag: string;
  name: string;
  hubs: string;
  timezone: string;
  badge: string;
}

const COUNTRY_HUBS: CountryHub[] = [
  {
    code: "US",
    flag: "🇺🇸",
    name: "United States",
    hubs: "Silicon Valley · NYC · Austin",
    timezone: "PST / EST",
    badge: "Active Squads",
  },
  {
    code: "GB",
    flag: "🇬🇧",
    name: "United Kingdom",
    hubs: "London · Cambridge · Bristol",
    timezone: "GMT / BST",
    badge: "Active Squads",
  },
  {
    code: "DE",
    flag: "🇩🇪",
    name: "Germany",
    hubs: "Berlin · Munich · Frankfurt",
    timezone: "CET",
    badge: "Active Squads",
  },
  {
    code: "IN",
    flag: "🇮🇳",
    name: "India",
    hubs: "Bangalore · NCR · Hyderabad",
    timezone: "IST",
    badge: "Active Squads",
  },
  {
    code: "CA",
    flag: "🇨🇦",
    name: "Canada",
    hubs: "Toronto · Vancouver · Waterloo",
    timezone: "EST / PST",
    badge: "Active Squads",
  },
  {
    code: "SG",
    flag: "🇸🇬",
    name: "Singapore",
    hubs: "Singapore Central · APAC Hub",
    timezone: "SGT",
    badge: "Active Squads",
  },
  {
    code: "AU",
    flag: "🇦🇺",
    name: "Australia",
    hubs: "Sydney · Melbourne · Brisbane",
    timezone: "AEST",
    badge: "Active Squads",
  },
  {
    code: "AE",
    flag: "🇦🇪",
    name: "United Arab Emirates",
    hubs: "Dubai · Abu Dhabi Hub",
    timezone: "GST",
    badge: "Active Squads",
  },
];

export function HireImpactSection() {
  return (
    <section
      className="sars-hire-page__section sars-hire-page__section--orange"
      data-nav-theme="light"
      aria-labelledby="hire-global-title"
    >
      <div className="sars-container">
        {/* Full-width 90+ Countries Section */}
        <div className="sars-hire-page__global sars-hire-page__global--fullwidth sars-hire-page__reveal is-visible">
          <div className="sars-hire-page__global-header">
            <span className="sars-hire-page__global-tag">Global Talent Footprint</span>
            <h2 id="hire-global-title" className="sars-hire-page__global-title">
              90+ Countries. One Standard.
            </h2>
            <p className="sars-hire-page__global-copy">
              Our talent network spans every major tech hub &mdash; Silicon Valley, London, Bangalore, Singapore,
              Toronto, Berlin, and beyond. One platform. Elite talent, everywhere.
            </p>
          </div>

          <div className="sars-hire-page__countries-grid" aria-label="Countrywide tech hub locations">
            {COUNTRY_HUBS.map((hub) => (
              <div key={hub.code} className="sars-hire-page__country-card">
                <div className="sars-hire-page__country-flag-wrap">
                  <span className="sars-hire-page__country-flag" role="img" aria-label={`${hub.name} flag`}>
                    {hub.flag}
                  </span>
                  <div className="sars-hire-page__country-meta">
                    <strong className="sars-hire-page__country-name">{hub.name}</strong>
                    <span className="sars-hire-page__country-tz">{hub.timezone}</span>
                  </div>
                </div>
                <div className="sars-hire-page__country-hubs">{hub.hubs}</div>
                <div className="sars-hire-page__country-status">
                  <span className="sars-hire-page__country-dot" aria-hidden="true" />
                  <span>{hub.badge}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="sars-hire-page__global-footer">
            <div className="sars-hire-page__global-stat">
              <strong>90+</strong>
              <span>Countries Connected</span>
            </div>
            <div className="sars-hire-page__global-stat-divider" aria-hidden="true" />
            <div className="sars-hire-page__global-stat">
              <strong>24 / 7</strong>
              <span>Timezone Coverage</span>
            </div>
            <div className="sars-hire-page__global-stat-divider" aria-hidden="true" />
            <div className="sars-hire-page__global-stat">
              <strong>100%</strong>
              <span>Compliance & Payroll Handled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
