"use client";

import { MoreHorizontal } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type EntryStatus = "In Progress" | "Completed" | "Pending" | "Failed";

const statusStyles: Record<EntryStatus, string> = {
  "In Progress": "bg-[#1f3bff] text-white border-transparent",
  Completed: "bg-[#2bb5ff] text-white border-transparent",
  Pending:
    "bg-[#f5f7fb] text-[#475467] border border-[#e4e7ec] font-medium shadow-sm",
  Failed: "bg-[#ff6b3d] text-white border-transparent",
};

const entries: Array<{
  id: string;
  project: string;
  status: EntryStatus;
  method: string;
  date: string;
  amount: string;
}> = [
  {
    id: "INV001",
    project: "Website Redesign",
    status: "In Progress",
    method: "Credit Card",
    date: "2023-01-15",
    amount: "$2,500.00",
  },
  {
    id: "INV002",
    project: "Mobile App Dev",
    status: "Completed",
    method: "PayPal",
    date: "2023-02-10",
    amount: "$15,000.00",
  },
  {
    id: "INV003",
    project: "Logo Design",
    status: "Pending",
    method: "Bank Transfer",
    date: "2023-03-05",
    amount: "$450.00",
  },
  {
    id: "INV004",
    project: "SEO Optimization",
    status: "In Progress",
    method: "Credit Card",
    date: "2023-04-01",
    amount: "$1,200.00",
  },
  {
    id: "INV005",
    project: "Marketing Campaign",
    status: "Failed",
    method: "PayPal",
    date: "2023-04-12",
    amount: "$3,000.00",
  },
];

export function EntriesTable() {
  return (
    <Card className="border-none shadow-[0px_24px_60px_rgba(15,23,42,0.08)]">
      <CardHeader>
        <CardTitle>Recent Entries</CardTitle>
        <CardDescription>
          Manage your recent project entries and transactions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="bg-[#f3f6ff] text-[#475467]">
              <TableHead className="w-[100px] text-[#475467]">Invoice</TableHead>
              <TableHead className="text-[#475467]">Project</TableHead>
              <TableHead className="text-[#475467]">Status</TableHead>
              <TableHead className="text-[#475467]">Method</TableHead>
              <TableHead className="text-[#475467]">Date</TableHead>
              <TableHead className="text-right text-[#475467]">Amount</TableHead>
              <TableHead className="w-[50px] text-[#475467]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry.id} className="bg-white">
                <TableCell className="font-medium">{entry.id}</TableCell>
                <TableCell>{entry.project}</TableCell>
                <TableCell>
                  <Badge
                    variant="outline"
                    className={cn("rounded-full px-3 py-1", statusStyles[entry.status])}
                  >
                    {entry.status}
                  </Badge>
                </TableCell>
                <TableCell>{entry.method}</TableCell>
                <TableCell>{entry.date}</TableCell>
                <TableCell className="text-right">{entry.amount}</TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem
                        onClick={() =>
                          navigator.clipboard.writeText(entry.id)
                        }
                      >
                        Copy ID
                      </DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>Edit entry</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

