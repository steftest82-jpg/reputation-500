const Check = () => (
  <svg className="w-5 h-5 text-[#004AAD] mx-auto" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const Dash = () => <span className="text-gray-800">&mdash;</span>;

type CellValue = string | number | "check" | "dash";

interface Row {
  feature: string;
  sub?: string;
  essential: CellValue;
  enhanced: CellValue;
  elite: CellValue;
  ultimate: CellValue;
}

const rows: Row[] = [
  {
    feature: "360° Web Presence & Reputation Management",
    sub: "Access to 3,500+ Premium media sites",
    essential: "check",
    enhanced: "check",
    elite: "check",
    ultimate: "check",
  },
  {
    feature: "Guaranteed Feature Articles and/or Interviews (total)",
    essential: 12,
    enhanced: 24,
    elite: 30,
    ultimate: 36,
  },
  {
    feature: "Web 2.0 Authority Profiles",
    sub: "e.g. Medium, Crunchbase; includes comprehensive bios, and strategic backlinks.",
    essential: "3+",
    enhanced: "6+",
    elite: "8+",
    ultimate: "9+",
  },
  {
    feature: "Social Media Posts",
    sub: "(X, Li, FB, IG, Threads, TikTok, YT, Pinterest)",
    essential: 320,
    enhanced: 524,
    elite: 660,
    ultimate: 816,
  },
  {
    feature: "Press Releases (as needed)",
    essential: 2,
    enhanced: 2,
    elite: 4,
    ultimate: 4,
  },
  {
    feature: "Websites",
    essential: 2,
    enhanced: 3,
    elite: 4,
    ultimate: 3,
  },
  {
    feature: "YouTube Channel Creation & Optimization",
    essential: "check",
    enhanced: "check",
    elite: "check",
    ultimate: "check",
  },
  {
    feature: "YouTube Video Creation",
    essential: 11,
    enhanced: 20,
    elite: 30,
    ultimate: 33,
  },
  {
    feature: "Wikipedia Page or Wikidata",
    sub: "Extra charge=Optional",
    essential: "€550 One time fee",
    enhanced: "€450 One time fee",
    elite: "check",
    ultimate: "check",
  },
  {
    feature: "Wikipedia Page Creation",
    sub: "Subject to approval",
    essential: "dash",
    enhanced: "dash",
    elite: "check",
    ultimate: "check",
  },
  {
    feature: "Wikipedia Link",
    sub: "Extra charge=Optional",
    essential: "€600 One time fee",
    enhanced: "€480 One time fee",
    elite: "check",
    ultimate: "check",
  },
  {
    feature: "VIP Features Guaranteed",
    sub: "(e.g. Forbes, The Luxury Playbook, IBTimes, etc)",
    essential: "1+",
    enhanced: "3+",
    elite: "3 + 1 Digital cover Feature guaranteed",
    ultimate: "3 + 1 Digital cover Feature guaranteed",
  },
  {
    feature: "Premium Guaranteed Features",
    sub: "(e.g. CEO Weekly, Dubai Weekly, Grid, etc)",
    essential: "check",
    enhanced: "check",
    elite: "check",
    ultimate: "check",
  },
  {
    feature: "Entrepreneur UK or ME or CEO Middle East full feature",
    sub: "If extra charge=Optional",
    essential: "€4700 One time fee",
    enhanced: "€3900 One time fee",
    elite: "€3300 One time fee",
    ultimate: "check",
  },
  {
    feature: "On-page SEO Optimization",
    sub: "Meta, HTML, title, image, and keyword optimisation. Google Kit set up with Search Console and Analytics.",
    essential: "Standard",
    enhanced: "Advanced",
    elite: "Advanced",
    ultimate: "Advanced",
  },
  {
    feature: "Off-Page SEO Optimization",
    sub: "Strategies for building external/online authority, and driving increased visibility & higher search rankings.",
    essential: "Intermediate",
    enhanced: "Advanced",
    elite: "Advanced",
    ultimate: "Advanced",
  },
  {
    feature: "Push Negative Search Results Away",
    essential: "dash",
    enhanced: "check",
    elite: "check",
    ultimate: "check",
  },
  {
    feature: "Ongoing Brand Discovery Analysis and optimisation for ultimate results",
    sub: "(+Reporting)",
    essential: "Monthly",
    enhanced: "Monthly",
    elite: "Weekly",
    ultimate: "Weekly",
  },
];

function renderCell(value: CellValue) {
  if (value === "check") return <Check />;
  if (value === "dash") return <Dash />;
  if (typeof value === "number") {
    return <span className="font-semibold text-gray-800">{value.toLocaleString()}</span>;
  }
  return <span className="text-sm font-medium text-gray-700">{value}</span>;
}

export default function ComparisonTable() {
  return (
    <section id="compare-plans" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse" style={{ fontFamily: "var(--font-body)" }}>
            <thead>
              <tr>
                <th
                  colSpan={2}
                  className="text-xl font-medium text-left py-3 pr-3"
                  style={{ fontFamily: "var(--font-heading)", width: "40%" }}
                >
                  Compare Plans
                </th>
                <th
                  className="text-[#004AAD] font-bold text-sm text-center py-3 border-b-3 border-[#004AAD] border-l border-[#004AAD]/10"
                  style={{ width: "15%" }}
                >
                  Essential
                </th>
                <th
                  className="text-[#004AAD] font-bold text-sm text-center py-3 border-b-3 border-[#004AAD] border-l border-[#004AAD]/10"
                  style={{ width: "15%" }}
                >
                  Enhanced
                </th>
                <th
                  className="text-[#004AAD] font-bold text-sm text-center py-3 border-b-3 border-[#004AAD] border-l border-[#004AAD]/10"
                  style={{ width: "15%" }}
                >
                  Elite
                </th>
                <th
                  className="text-[#004AAD] font-bold text-sm text-center py-3 border-b-3 border-[#004AAD] border-l border-[#004AAD]/10"
                  style={{ width: "15%" }}
                >
                  Ultimate
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i}>
                  <td
                    colSpan={2}
                    className="py-4 px-3 text-left font-medium text-gray-800 text-sm border-b border-[#004AAD]/10"
                  >
                    {row.feature}
                    {row.sub && (
                      <span className="block text-sm text-gray-900 mt-0.5">{row.sub}</span>
                    )}
                  </td>
                  <td className="py-4 px-3 text-center text-sm text-gray-900 border-b border-[#004AAD]/10 border-l border-[#004AAD]/10">
                    {renderCell(row.essential)}
                  </td>
                  <td className="py-4 px-3 text-center text-sm text-gray-900 border-b border-[#004AAD]/10 border-l border-[#004AAD]/10">
                    {renderCell(row.enhanced)}
                  </td>
                  <td className="py-4 px-3 text-center text-sm text-gray-900 border-b border-[#004AAD]/10 border-l border-[#004AAD]/10">
                    {renderCell(row.elite)}
                  </td>
                  <td className="py-4 px-3 text-center text-sm text-gray-900 border-b border-[#004AAD]/10 border-l border-[#004AAD]/10">
                    {renderCell(row.ultimate)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
