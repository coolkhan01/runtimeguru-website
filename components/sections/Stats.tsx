import { Users, Clock, Star, CheckCircle } from "lucide-react";

const stats = [
  { icon: Users,       value: "200+",  label: "Creators Served" },
  { icon: Clock,       value: "5yr",   label: "In YT Automation" },
  { icon: Star,        value: "4.9★",  label: "Client Rating" },
  { icon: CheckCircle, value: "100%",  label: "Done For You" },
];

export default function Stats() {
  return (
    <div className="bg-[#0B1230] border-y border-[#1A2548]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <div key={stat.label} className={`flex items-center gap-4 ${i < stats.length - 1 ? "lg:border-r lg:border-[#1A2548]" : ""} lg:px-6 first:lg:pl-0 last:lg:pr-0`}>
              <div className="w-10 h-10 rounded-xl bg-blue-700/10 border border-blue-700/20 flex items-center justify-center flex-shrink-0">
                <stat.icon className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-white font-bold text-xl leading-none">{stat.value}</p>
                <p className="text-[#64748B] text-xs mt-1">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
