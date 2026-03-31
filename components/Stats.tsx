interface StatsProps {
  stats?: {
    label: string;
    value: number;
    icon: string;
  }[];
}

export default function Stats({ stats }: StatsProps) {
  const defaultStats = [
    { label: 'Satisfied Clients', value: 7000, icon: 'fa-smile-o' },
    { label: 'Exclusive Bookings', value: 6890, icon: 'fa-building' },
    { label: 'Private Engagements', value: 6215, icon: 'fa-home' },
    { label: 'Elite Escorts', value: 27, icon: 'fa-users' },
  ];

  const displayStats = stats || defaultStats;

  return (
    <section className="stats-section">
      <div className="container">
        <div className="section-header">
          <h2>
            Discover Our Exclusive{' '}
            <span className="text-highlight">Escorts in Pune</span>
          </h2>
          <p>
            At <strong>Hot Natasha Escorts In Pune</strong>, we provide an elite
            selection of <strong>VIP escorts, model escorts, and premium Escorts
            Service</strong> in Pune. Whether you seek elegance, sophistication,
            or a thrilling experience, we ensure every encounter is exceptional
            and tailored to your desires.
          </p>
        </div>
        <div className="stats-grid">
          {displayStats.map((stat, index) => (
            <div key={index} className="stat-item">
              <i className={`fa ${stat.icon}`}></i>
              <p className="stat-value">{stat.value.toLocaleString()}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
