import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Briefcase, Activity } from "lucide-react";

const summaryData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
    iconColor: "text-white",
    iconBg: "bg-[#1f3bff]",
  },
  {
    title: "Active Projects",
    value: "12",
    change: "+2 new this week",
    icon: Briefcase,
    iconColor: "text-white",
    iconBg: "bg-[#2bb5ff]",
  },
  {
    title: "Team Members",
    value: "24",
    change: "+4 hired recently",
    icon: Users,
    iconColor: "text-[#1f3bff]",
    iconBg: "bg-[#e6edff]",
  },
  {
    title: "Active Tasks",
    value: "573",
    change: "+201 since last hour",
    icon: Activity,
    iconColor: "text-white",
    iconBg: "bg-[#ff6b3d]",
  },
];

export function SummaryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {summaryData.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card
            key={index}
            className="border-transparent shadow-[0px_12px_30px_rgba(31,59,255,0.08)]"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-[#475467]">
                {item.title}
              </CardTitle>
              <div
                className={cn(
                  "h-10 w-10 rounded-2xl flex items-center justify-center",
                  item.iconBg
                )}
              >
                <Icon className={cn("h-5 w-5", item.iconColor)} />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-[#0f172a]">
                {item.value}
              </div>
              <p className="text-xs text-[#5f6b7c] mt-1">{item.change}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

