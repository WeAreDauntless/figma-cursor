"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const activityData = [
  { name: "Mon", tasks: 4, completion: 3 },
  { name: "Tue", tasks: 7, completion: 5 },
  { name: "Wed", tasks: 5, completion: 4 },
  { name: "Thu", tasks: 9, completion: 8 },
  { name: "Fri", tasks: 12, completion: 10 },
  { name: "Sat", tasks: 6, completion: 5 },
  { name: "Sun", tasks: 4, completion: 4 },
];

const revenueData = [
  { month: "Jan", revenue: 4500, expenses: 3200 },
  { month: "Feb", revenue: 5200, expenses: 3400 },
  { month: "Mar", revenue: 4800, expenses: 3100 },
  { month: "Apr", revenue: 6100, expenses: 3800 },
  { month: "May", revenue: 5500, expenses: 3600 },
  { month: "Jun", revenue: 6700, expenses: 4100 },
  { month: "Jul", revenue: 7200, expenses: 4500 },
];

export function DashboardHero() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 mb-8">
      {/* Revenue Overview Section */}
      <Card className="col-span-4 lg:col-span-4 border-none shadow-[0px_24px_60px_rgba(15,23,42,0.08)]">
        <CardHeader>
          <CardTitle>Revenue Overview</CardTitle>
          <CardDescription>
            Monthly revenue vs expenses for the current year.
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={revenueData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="hsl(var(--border))"
                />
                <XAxis
                  dataKey="month"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `$${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  itemStyle={{ color: "hsl(var(--foreground))" }}
                  cursor={{ fill: "hsl(var(--muted))" }}
                />
                <Legend />
                <Bar
                  dataKey="revenue"
                  name="Revenue"
                  fill="hsl(var(--chart-1))"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="expenses"
                  name="Expenses"
                  fill="hsl(var(--chart-2))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Activity Overview Section */}
      <Card className="col-span-4 lg:col-span-3 border-none shadow-[0px_24px_60px_rgba(15,23,42,0.08)]">
        <CardHeader>
          <CardTitle>Activity Overview</CardTitle>
          <CardDescription>
            Task completion rate over the last 7 days.
          </CardDescription>
        </CardHeader>
        <CardContent className="pl-2">
          <div className="h-[250px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={activityData}
                margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
                    <stop
                      offset="5%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity={0.3}
                    />
                    <stop
                      offset="95%"
                      stopColor="hsl(var(--primary))"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="hsl(var(--border))"
                />
                <XAxis
                  dataKey="name"
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--background))",
                    borderColor: "hsl(var(--border))",
                    borderRadius: "var(--radius)",
                  }}
                  itemStyle={{ color: "hsl(var(--foreground))" }}
                />
                <Area
                  type="monotone"
                  dataKey="tasks"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#colorTasks)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

