import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, DollarSign, Briefcase, Activity } from "lucide-react";

const summaryData = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
    iconColor: "text-green-500",
  },
  {
    title: "Active Projects",
    value: "12",
    change: "+2 new this week",
    icon: Briefcase,
    iconColor: "text-blue-500",
  },
  {
    title: "Team Members",
    value: "24",
    change: "+4 hired recently",
    icon: Users,
    iconColor: "text-orange-500",
  },
  {
    title: "Active Tasks",
    value: "573",
    change: "+201 since last hour",
    icon: Activity,
    iconColor: "text-red-500",
  },
];

export function SummaryCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
      {summaryData.map((item, index) => {
        const Icon = item.icon;
        return (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
              <Icon className={`h-4 w-4 ${item.iconColor}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{item.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{item.change}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

