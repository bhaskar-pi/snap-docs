import { Routes } from "@enums/routes";
import { LayoutDashboard, Users, Send, Settings, LogOut } from "lucide-react";

export const navItems = [
  { path: Routes.DASHBOARD, label: "Dashboard", icon: LayoutDashboard },
  { path: Routes.CLIENTS, label: "Clients", icon: Users },
  { path: Routes.SEND_REQUEST, label: "Send Request", icon: Send },
  { path: Routes.SETTINGS, label: "Settings", icon: Settings },
  { path: Routes.LOGOUT, label: "Logout", icon: LogOut },
];
