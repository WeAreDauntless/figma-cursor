import { DashboardNavbar } from "@/components/dashboard-navbar";
import { DashboardHero } from "@/components/dashboard-hero";
import { SummaryCards } from "@/components/summary-cards";
import { EntriesTable } from "@/components/entries-table";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground">
      <DashboardNavbar />

      <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
        <DashboardHero />
        <SummaryCards />
        <EntriesTable />
      </main>
    </div>
  );
}
