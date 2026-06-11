"use client";

import { AppShell, StatusBadge } from "@/components/layout/AppShell";
import { kpis, faturamentoMensal, leadsPorCanal, vendedores, campanhas, evolucaoVendas } from "@/lib/mock";
import {
  Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart,
  ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { TrendingUp, TrendingDown, Target, Users, DollarSign, Activity, Zap, Clock, Download } from "lucide-react";
import type { ReactNode } from "react";


function Kpi({ label, value, delta, icon, tone = "up", sub }: { label: string; value: string | number; delta?: string; icon: ReactNode; tone?: "up" | "down"; sub?: string }) {
  return (
    <div className="card-elevated p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wide truncate">{label}</div>
          <div className="mt-2 text-2xl font-black tracking-tight text-foreground">{value}</div>
          {sub && <div className="text-[11px] text-muted-foreground mt-0.5">{sub}</div>}
        </div>
        <div className="h-10 w-10 shrink-0 grid place-items-center rounded-lg bg-primary/5 text-primary">{icon}</div>
      </div>
      {delta && (
        <div className={`mt-3 inline-flex items-center gap-1 text-xs font-semibold ${tone === "up" ? "text-[color:var(--success)]" : "text-destructive"}`}>
          {tone === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          {delta} <span className="text-muted-foreground font-normal">vs mês anterior</span>
        </div>
      )}
    </div>
  );
}

export default function Dashboard() {
  return (
    <AppShell
      title="Dashboard Executiva"
      subtitle="Visão consolidada da operação comercial · Junho/2025"
      actions={
        <>
          <select className="h-9 px-3 text-sm border border-border rounded-md bg-card">
            <option>Junho 2025</option><option>Maio 2025</option><option>Abril 2025</option>
          </select>
          <button className="h-9 px-3 inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90">
            <Download className="h-4 w-4" /> Exportar
          </button>
        </>
      }
    >
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Kpi label="Faturamento do mês" value={kpis.faturamento} delta={kpis.faturamentoDelta} icon={<DollarSign className="h-5 w-5" />} />
        <Kpi label="Meta x Realizado" value={`${kpis.meta}%`} sub={kpis.metaValor} icon={<Target className="h-5 w-5" />} />
        <Kpi label="ROI Marketing" value={kpis.roi} delta={kpis.roiDelta} icon={<Zap className="h-5 w-5" />} />
        <Kpi label="Leads gerados" value={kpis.leads.toLocaleString("pt-BR")} delta={kpis.leadsDelta} icon={<Users className="h-5 w-5" />} />
        <Kpi label="Oportunidades abertas" value={kpis.oportunidades} icon={<Activity className="h-5 w-5" />} />
        <Kpi label="Taxa de conversão" value={kpis.conversao} delta="+2,1pp" icon={<TrendingUp className="h-5 w-5" />} />
        <Kpi label="Ticket médio" value={kpis.ticketMedio} delta="+R$ 320" icon={<DollarSign className="h-5 w-5" />} />
        <Kpi label="Tempo médio atendimento" value={kpis.tempoAtendimento} delta="-18min" icon={<Clock className="h-5 w-5" />} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
        <div className="card-elevated p-5 lg:col-span-2">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-bold text-foreground">Faturamento mensal vs Meta</h3>
              <p className="text-xs text-muted-foreground">Linha diesel · Todos os canais</p>
            </div>
            <StatusBadge tone="success">+12,4% YoY</StatusBadge>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={faturamentoMensal}>
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.4} />
                  <stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="mes" stroke="var(--color-muted-foreground)" fontSize={12} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickFormatter={(v) => `R$${(v / 1000000).toFixed(1)}M`} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} formatter={(v: unknown) => `R$ ${((v as number) / 1000).toLocaleString("pt-BR")}k`} />
              <Area type="monotone" dataKey="meta" stroke="var(--color-muted-foreground)" strokeDasharray="4 4" fill="transparent" />
              <Area type="monotone" dataKey="valor" stroke="var(--color-primary)" strokeWidth={2.5} fill="url(#g1)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card-elevated p-5">
          <h3 className="font-bold text-foreground">Leads por canal</h3>
          <p className="text-xs text-muted-foreground mb-4">Origem dos leads · Junho</p>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={leadsPorCanal} dataKey="leads" nameKey="canal" innerRadius={50} outerRadius={80} paddingAngle={3}>
                {leadsPorCanal.map((c, i) => <Cell key={i} fill={c.color} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="space-y-1.5 mt-2">
            {leadsPorCanal.map((c) => (
              <div key={c.canal} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: c.color }} />
                  <span className="text-foreground">{c.canal}</span>
                </div>
                <span className="font-semibold text-foreground">{c.leads}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div className="card-elevated p-5">
          <h3 className="font-bold text-foreground">Conversão por vendedor</h3>
          <p className="text-xs text-muted-foreground mb-4">Taxa de fechamento %</p>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={vendedores} layout="vertical" margin={{ left: 20 }}>
              <CartesianGrid horizontal={false} stroke="var(--color-border)" />
              <XAxis type="number" fontSize={11} stroke="var(--color-muted-foreground)" />
              <YAxis dataKey="nome" type="category" fontSize={11} width={110} stroke="var(--color-muted-foreground)" />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="conversao" fill="var(--color-accent)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card-elevated p-5">
          <h3 className="font-bold text-foreground">Evolução de vendas</h3>
          <p className="text-xs text-muted-foreground mb-4">Últimas 12 semanas · unidades vendidas</p>
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={evolucaoVendas}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="semana" fontSize={11} stroke="var(--color-muted-foreground)" />
              <YAxis fontSize={11} stroke="var(--color-muted-foreground)" />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} />
              <Line type="monotone" dataKey="vendas" stroke="var(--color-accent)" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
        <div className="card-elevated p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground">Ranking de vendedores</h3>
            <button className="text-xs text-accent font-medium">Ver todos</button>
          </div>
          <div className="space-y-2.5">
            {vendedores.map((v, i) => (
              <div key={v.nome} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/50">
                <div className={`h-7 w-7 grid place-items-center rounded-md text-xs font-black ${i === 0 ? "bg-[color:var(--warning)]/20 text-[color:var(--warning-foreground)]" : "bg-muted text-foreground/60"}`}>
                  {i + 1}º
                </div>
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-white text-[10px] font-bold">{v.avatar}</div>
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-foreground truncate">{v.nome}</div>
                  <div className="text-[11px] text-muted-foreground">{v.regional} · {v.vendas} vendas</div>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-sm font-bold text-foreground">R$ {(v.receita / 1000).toFixed(0)}k</div>
                  <div className="text-[11px] text-[color:var(--success)]">{v.conversao}% conv.</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card-elevated p-5">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-foreground">Ranking de campanhas</h3>
            <button className="text-xs text-accent font-medium">Ver todas</button>
          </div>
          <div className="space-y-2">
            {campanhas.map((c) => (
              <div key={c.nome} className="p-3 rounded-lg border border-border hover:border-accent/30 transition-colors">
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground truncate">{c.nome}</div>
                    <div className="text-[11px] text-muted-foreground">{c.canal} · {c.leads} leads · {c.vendas} vendas</div>
                  </div>
                  <StatusBadge tone="success">ROI {c.roi}x</StatusBadge>
                </div>
                <div className="mt-2 h-1.5 rounded-full bg-muted overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{ width: `${Math.min(100, c.roi * 5)}%` }} />
                </div>
                <div className="flex justify-between text-[11px] text-muted-foreground mt-1.5">
                  <span>Invest: R$ {(c.invest / 1000).toFixed(1)}k</span>
                  <span>Receita: R$ {(c.receita / 1000).toFixed(0)}k</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AppShell>
  );
}
