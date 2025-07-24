"use client";

import Link from "next/link";
import { usePathname } from "next/navigation"; // for active link detection
import {
  Home,
  TrendingUp,
  CreditCard,
  Target,
  User,
  LogOut,
} from "lucide-react";

const menuItems = [
  {
    id: "mainhub",
    label: "Main Dashboard",
    icon: Home,
    href: "/dashboard/mainhub",
  },
  {
    id: "investments",
    label: "Investments",
    icon: TrendingUp,
    href: "/dashboard/investments",
  },
  {
    id: "finance",
    label: "Finance",
    icon: CreditCard,
    href: "/dashboard/finances",
  },
  {
    id: "retirement",
    label: "Retirement Plan",
    icon: Target,
    href: "/dashboard/retirement",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-white/10 p-6 flex flex-col justify-between">
      <ul className="space-y-6 mt-10">
        {menuItems.map(({ id, label, icon: Icon, href }) => {
          const isActive = pathname === href;

          return (
            <li key={id}>
              <Link
                href={href}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                  isActive ? "bg-blue-600 text-white" : "text-white/70"
                }`}
              >
                <Icon className="w-5 h-5" />
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="p-4 border-t border-white/10">
        <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
          <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-blue-500 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <div className="flex-1">
            <p className="text-white font-medium">John Doe</p>
            <p className="text-white/60 text-sm">Premium Member</p>
          </div>
          <LogOut className="w-5 h-5 text-white/60 hover:text-white" />
        </div>
      </div>
    </aside>
  );
}
