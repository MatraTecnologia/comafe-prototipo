"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  LayoutDashboard, Users, UserPlus, Megaphone, Trophy, MessageCircle,
  FileText, Package, Target, BarChart3, Settings, Bell, Sparkles,
  ChevronDown, Search, PanelLeftClose, PanelLeftOpen,
} from "lucide-react";
import type { ReactNode } from "react";

const nav = [
  { to: "/",             label: "Dashboard",  icon: LayoutDashboard },
  { to: "/crm",          label: "CRM",        icon: Users           },
  { to: "/leads",        label: "Leads",      icon: UserPlus        },
  { to: "/marketing",    label: "Marketing",  icon: Megaphone       },
  { to: "/vendedores",   label: "Vendedores", icon: Trophy          },
  { to: "/whatsapp",     label: "WhatsApp",   icon: MessageCircle   },
  { to: "/orcamentos",   label: "Orçamentos", icon: FileText        },
  { to: "/pedidos",      label: "Pedidos",    icon: Package         },
  { to: "/metas",        label: "Metas",      icon: Target          },
  { to: "/relatorios",   label: "Relatórios", icon: BarChart3       },
  { to: "/configuracoes",label: "Config.",    icon: Settings        },
];

export function AppShell({ title, subtitle, actions, children }: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  const sidebarW  = collapsed ? "w-[68px]" : "w-56";
  const contentML = collapsed ? "lg:ml-[92px]" : "lg:ml-[248px]";

  return (
    <div className="min-h-screen bg-background">

      {/* ── Sidebar floating + fixed ── */}
      <aside
        className={`
          hidden lg:flex fixed top-3 left-3 bottom-3 z-40
          flex-col rounded-2xl bg-sidebar overflow-hidden
          transition-[width] duration-200 ease-in-out
          ${sidebarW}
        `}
      >
        {/* Logo + collapse toggle */}
        <div className="flex items-center justify-between px-3 pt-4 pb-3 shrink-0">
          {!collapsed && (
            <img src="/logo-comafe.svg" alt="COMAFE" className="h-9 w-auto ml-1 flex-1 min-w-0 bg-white rounded-lg px-4 py-1.5" />
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`h-7 w-7 grid place-items-center rounded-lg bg-white/6 hover:bg-white/12 text-white/50 hover:text-white transition-colors shrink-0 ${collapsed ? "mx-auto" : ""}`}
            title={collapsed ? "Expandir" : "Minimizar"}
          >
            {collapsed
              ? <PanelLeftOpen  className="h-3.5 w-3.5" />
              : <PanelLeftClose className="h-3.5 w-3.5" />
            }
          </button>
        </div>

        {/* Search — só quando expandido */}
        {!collapsed && (
          <div className="px-3 pb-2 shrink-0">
            <button className="w-full flex items-center gap-2.5 px-3 py-2 rounded-lg bg-white/6 hover:bg-white/10 text-[12px] text-white/40 transition-colors">
              <Search className="h-3.5 w-3.5 shrink-0" />
              <span>Buscar...</span>
              <kbd className="ml-auto text-[10px] text-white/25 font-mono">⌘K</kbd>
            </button>
          </div>
        )}

        {/* Nav */}
        <nav className="flex-1 px-2 py-1 space-y-0.5 overflow-y-auto overflow-x-hidden">
          {!collapsed && (
            <p className="px-2 pt-1 pb-2 text-[10px] font-semibold text-white/25 uppercase tracking-widest">
              Menu
            </p>
          )}
          {nav.map((item) => {
            const active = pathname === item.to;
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                href={item.to}
                title={collapsed ? item.label : undefined}
                className={`flex items-center gap-2.5 rounded-xl text-[13px] font-medium transition-all duration-150 group
                  ${collapsed ? "justify-center p-2" : "px-2 py-1.5"}
                  ${active
                    ? "bg-white/10 text-white"
                    : "text-white/45 hover:text-white/90 hover:bg-white/6"
                  }
                `}
              >
                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg transition-colors
                  ${active ? "bg-accent text-white" : "bg-white/6 text-white/45 group-hover:bg-white/10 group-hover:text-white/80"}
                `}>
                  <Icon className="h-3.5 w-3.5" />
                </span>

                {!collapsed && (
                  <>
                    <span className="truncate flex-1">{item.label}</span>
                    {active && <span className="h-1.5 w-1.5 rounded-full bg-accent shrink-0" />}
                  </>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Insights — só quando expandido */}
        {!collapsed && (
          <div className="mx-2 mb-2 p-3 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/15 shrink-0">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white/90 mb-1">
              <Sparkles className="h-3 w-3 text-accent" /> Insights
            </div>
            <p className="text-[11px] text-white/45 leading-relaxed">
              78% da meta atingida. Faltam R$ 1,32M.
            </p>
          </div>
        )}

        {/* User */}
        <div className={`border-t border-white/8 px-2 py-2.5 flex items-center shrink-0
          ${collapsed ? "justify-center" : "gap-2.5"}
        `}>
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-accent to-primary grid place-items-center text-white text-[11px] font-bold shrink-0">
            RA
          </div>
          {!collapsed && (
            <>
              <div className="min-w-0 flex-1">
                <div className="text-[12px] font-semibold text-white/90 truncate">Roberto Aquino</div>
                <div className="text-[10px] text-white/35 truncate">Diretor Comercial</div>
              </div>
              <ChevronDown className="h-3.5 w-3.5 text-white/25 shrink-0" />
            </>
          )}
        </div>
      </aside>

      {/* ── Main area ── */}
      <div className={`${contentML} mr-3 flex flex-col min-h-screen transition-[margin] duration-200 ease-in-out`}>

        {/* Topbar */}
        <header className="sticky top-3 z-30 mb-0 h-14 shrink-0 bg-card rounded-2xl border border-border shadow-sm flex items-center px-5 gap-4">
          <div className="min-w-0 flex-1">
            <h1 className="text-[15px] font-bold tracking-tight text-foreground truncate leading-tight">{title}</h1>
            {subtitle && <p className="text-[11px] text-muted-foreground truncate mt-0.5">{subtitle}</p>}
          </div>
          <div className="flex items-center gap-2">
            {actions}
            <button className="h-8 w-8 grid place-items-center rounded-lg border border-border hover:bg-muted transition-colors relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-destructive" />
            </button>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 pt-4 pb-3 px-0 bg-background">
          {children}
        </main>
      </div>
    </div>
  );
}

export function StatusBadge({ children, tone = "default" }: {
  children: ReactNode;
  tone?: "default" | "success" | "warning" | "info" | "danger";
}) {
  const tones: Record<string, string> = {
    default:  "bg-muted text-foreground/70",
    success:  "bg-[color:var(--success)]/10 text-[color:var(--success)]",
    warning:  "bg-[color:var(--warning)]/15 text-[color:var(--warning-foreground)]",
    info:     "bg-[color:var(--info)]/10 text-[color:var(--info)]",
    danger:   "bg-destructive/10 text-destructive",
  };
  return (
    <span className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium ${tones[tone]}`}>
      {children}
    </span>
  );
}
