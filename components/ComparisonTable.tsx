export default function ComparisonTable() {
  const features = [
    { name: 'Unlimited Phone Conversation', concierge: true, lifestyle: true, competition: true },
    { name: 'Medically-Backed Coaching', concierge: true, lifestyle: true, competition: true },
    { name: 'Bloodwork Analysis', concierge: true, lifestyle: true, competition: true },
    { name: 'Nutrition Planning', concierge: false, lifestyle: true, competition: true },
    { name: 'Competition Guidance', concierge: false, lifestyle: false, competition: true },
  ];

  return (
    <section className="relative py-16 my-8 md:my-12">
      {/* Background overlay - slightly wider than content */}
      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-[90rem] bg-white/70 backdrop-blur-md border border-white/20 shadow-2xl rounded-2xl"></div>
      
      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Table */}
        <div className="hidden md:block bg-white/95 backdrop-blur-sm border border-white/20 overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-900/95 border-b-2 border-gray-900">
                  <th className="px-8 py-5 text-left text-sm font-semibold text-white tracking-wide">
                    Includes
                  </th>
                  <th className="px-8 py-5 text-center text-sm font-semibold text-white tracking-wide border-l border-gray-700">
                    Concierge Wellness
                  </th>
                  <th className="px-8 py-5 text-center text-sm font-semibold text-white tracking-wide border-l border-gray-700">
                    Lifestyle Coaching
                  </th>
                  <th className="px-8 py-5 text-center text-sm font-semibold text-white tracking-wide border-l border-gray-700">
                    Competition Prep
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50">
                {features.map((feature, index) => (
                  <tr 
                    key={index} 
                    className="hover:bg-white/80 transition-colors duration-150"
                  >
                    <td className="px-8 py-5 text-sm font-medium" style={{ color: '#0a0a0a' }}>
                      {feature.name}
                    </td>
                    <td className="px-8 py-5 text-center border-l border-gray-200/50">
                      {feature.concierge ? (
                        <span className="text-lg font-bold" style={{ color: '#0a0a0a' }}>✓</span>
                      ) : (
                        <span className="text-gray-400 text-lg">—</span>
                      )}
                    </td>
                    <td className="px-8 py-5 text-center border-l border-gray-200/50">
                      {feature.lifestyle ? (
                        <span className="text-lg font-bold" style={{ color: '#0a0a0a' }}>✓</span>
                      ) : (
                        <span className="text-gray-400 text-lg">—</span>
                      )}
                    </td>
                    <td className="px-8 py-5 text-center border-l border-gray-200/50">
                      {feature.competition ? (
                        <span className="text-lg font-bold" style={{ color: '#0a0a0a' }}>✓</span>
                      ) : (
                        <span className="text-gray-400 text-lg">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-white/95 backdrop-blur-sm border border-white/20 p-5 shadow-lg">
              <h3 className="font-semibold mb-4 text-sm" style={{ color: '#0a0a0a' }}>{feature.name}</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="font-semibold text-xs mb-2 uppercase tracking-wide text-gray-700">Concierge</div>
                  {feature.concierge ? (
                    <span className="text-lg font-bold" style={{ color: '#0a0a0a' }}>✓</span>
                  ) : (
                    <span className="text-gray-400 text-lg">—</span>
                  )}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xs mb-2 uppercase tracking-wide text-gray-700">Lifestyle</div>
                  {feature.lifestyle ? (
                    <span className="text-lg font-bold" style={{ color: '#0a0a0a' }}>✓</span>
                  ) : (
                    <span className="text-gray-400 text-lg">—</span>
                  )}
                </div>
                <div className="text-center">
                  <div className="font-semibold text-xs mb-2 uppercase tracking-wide text-gray-700">Competition</div>
                  {feature.competition ? (
                    <span className="text-lg font-bold" style={{ color: '#0a0a0a' }}>✓</span>
                  ) : (
                    <span className="text-gray-400 text-lg">—</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
