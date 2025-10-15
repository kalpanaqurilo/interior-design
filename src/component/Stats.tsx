
// "use client";

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// type StatItem = {
//   key: string;
//   value: number | string;
//   suffix?: string;
//   label: string;
// };

// export default function StatsBanner() {
//   const [stats, setStats] = useState<StatItem[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchStats = async () => {
//       try {
//         const response = await axios.get(
//           "https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/stats"
//         );
//         setStats(response.data.stats); 
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching stats:", err);
//         setError("Failed to load stats");
//         setLoading(false);
//       }
//     };

//     fetchStats();
//   }, []);

//   if (loading) {
//     return (
//       <section className="w-full bg-[#0a0f1c] py-6  text-center text-white">
//         <p>Loading stats...</p>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="w-full bg-[#0a0f1c] py-8 text-center text-white">
//         <p>{error}</p>
//       </section>
//     );
//   }

//   return (
//     <section className="w-full bg-[#0a0f1c] py-4">
//       <div className="max-w-[1400px] mx-auto grid grid-cols-2 sm:grid-cols-4 text-center text-white gap-6">
//         {stats.map((item) => (
//           <div key={item.key}>
//             <h3 className="text-3xl font-bold text-yellow-500">
//               {item.value}
//               {item.suffix}
//             </h3>
//             <p className="text-sm mt-2">{item.label}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

type StatItem = {
  key: string;
  value: number | string;
  suffix?: string;
  label: string;
};

export default function StatsBanner() {
  const [stats, setStats] = useState<StatItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "https://d2j83cbk-4000.inc1.devtunnels.ms/api/home/stats"
        );
        setStats(response.data.stats);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching stats:", err);
        setError("Failed to load stats");
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <section className="w-full bg-[#0a0f1c] py-8 text-center text-white">
        <p className="text-base sm:text-lg">Loading stats...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full bg-[#0a0f1c] py-8 text-center text-white">
        <p className="text-base sm:text-lg">{error}</p>
      </section>
    );
  }

  return (
    <section className="w-full bg-[#0a0f1c] py-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
        {stats.map((item) => (
          <div key={item.key} className="flex flex-col items-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-500">
              {item.value}
              {item.suffix}
            </h3>
            <p className="text-sm sm:text-base md:text-lg mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
