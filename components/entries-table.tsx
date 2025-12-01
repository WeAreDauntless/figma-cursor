"use client";

import { MoreHorizontal } from "lucide-react";
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

const entries = [
  {
    id: "INV001",
    project: "Website Redesign",
    status: "In Progress",
    statusVariant: "default" as const,
    method: "Credit Card",
    date: "2023-01-15",
    amount: "$2,500.00",
  },
  {
    id: "INV002",
    project: "Mobile App Dev",
    status: "Completed",
    statusVariant: "secondary" as const,
    method: "PayPal",
    date: "2023-02-10",
    amount: "$15,000.00",
  },
  {
    id: "INV003",
    project: "Logo Design",
    status: "Pending",
    statusVariant: "outline" as const,
    method: "Bank Transfer",
    date: "2023-03-05",
    amount: "$450.00",
  },
  {
    id: "INV004",
    project: "SEO Optimization",
    status: "In Progress",
    statusVariant: "default" as const,
    method: "Credit Card",
    date: "2023-04-01",
    amount: "$1,200.00",
  },
  {
    id: "INV005",
    project: "Marketing Campaign",
    status: "Failed",
    statusVariant: "destructive" as const,
    method: "PayPal",
    date: "2023-04-12",
    amount: "$3,000.00",
  },
];

export function EntriesTable() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Entries</CardTitle>
        <CardDescription>
          Manage your recent project entries and transactions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Invoice</TableHead>
              <TableHead>Project</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Date</TableHead>
              <TableHead className="text-right">Amount</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {entries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell className="font-medium">{entry.id}</TableCell>
                <TableCell>{entry.project}</TableCell>
                <TableCell>
                  <Badge variant={entry.statusVariant}>{entry.status}</Badge>
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

