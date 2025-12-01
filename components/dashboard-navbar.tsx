import { Search, Plus, Bell, Settings, LogOut, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function DashboardNavbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-transparent bg-white/85 backdrop-blur supports-[backdrop-filter]:bg-white/75 shadow-[0px_12px_30px_rgba(15,23,42,0.08)]">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">
        {/* Logo and Navigation */}
        <div className="flex items-center gap-8">
          <a className="flex items-center gap-2 font-semibold" href="#">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
              M
            </div>
            <span className="hidden md:inline-block text-lg">MakeDash</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a className="text-[#1f3bff] font-semibold" href="#">
              Overview
            </a>
            <a
              className="transition-colors hover:text-[#1f3bff] text-[#5f6b7c]"
              href="#"
            >
              Projects
            </a>
            <a
              className="transition-colors hover:text-[#1f3bff] text-[#5f6b7c]"
              href="#"
            >
              Analytics
            </a>
            <a
              className="transition-colors hover:text-[#1f3bff] text-[#5f6b7c]"
              href="#"
            >
              Reports
            </a>
          </nav>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block w-full max-w-[300px]">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#98a2b3]" />
            <Input
              type="search"
              placeholder="Search projects..."
              className="w-[200px] md:w-[300px] pl-8 bg-white shadow-[0px_6px_20px_rgba(15,23,42,0.08)] border-none"
            />
          </div>

          <Button size="sm" className="hidden sm:flex gap-1">
            <Plus className="h-4 w-4" />
            New Project
          </Button>

          <Button variant="ghost" size="icon" className="text-[#5f6b7c]">
            <Bell className="h-5 w-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9 border border-[#e0e7ff]">
                  <AvatarImage
                    src="https://images.unsplash.com/photo-1615843423179-bea071facf96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB1c2VyJTIwYXZhdGFyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0NTUwNDI0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="User"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">John Doe</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    john@example.com
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive focus:text-destructive">
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

