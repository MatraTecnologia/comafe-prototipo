"use client";

import { AppShell, StatusBadge } from "@/components/layout/AppShell";
import { campanhas } from "@/lib/mock";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { TrendingUp } from "lucide-react";


const canais = [
  { canal: "Google Ads", invest: 73100, leads: 706, reunioes: 198, vendas: 149, receita: 1257800, roi: 17.2, color: "var(--color-chart-1)" },
  { canal: "Meta Ads", invest: 47500, leads: 430, reunioes: 124, vendas: 90, receita: 774400, roi: 16.3, color: "var(--color-chart-2)" },
  { canal: "Tráfego orgânico", invest: 12000, leads: 198, reunioes: 67, vendas: 48, receita: 412000, roi: 34.3, color: "var(--color-chart-3)" },
  { canal: "WhatsApp", invest: 8400, leads: 244, reunioes: 88, vendas: 62, receita: 524800, roi: 62.5, color: "var(--color-chart-4)" },
  { canal: "Indicações", invest: 4800, leads: 144, reunioes: 71, vendas: 54, receita: 498600, roi: 103.8, color: "var(--color-chart-5)" },
];

const serie = Array.from({ length: 30 }, (_, i) => ({ dia: i + 1, invest: 2000 + (i * 50), receita: 8000 + i * 400 }));

export default function Marketing() {
  const totals = canais.reduce((a, c) => ({ invest: a.invest + c.invest, receita: a.receita + c.receita, leads: a.leads + c.leads, vendas: a.vendas + c.vendas }), { invest: 0, receita: 0, leads: 0, vendas: 0 });
  return (
    <AppShell title="Marketing & ROI" subtitle="Atribuição multi-canal · Substitui o RD Station">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {[
          { l: "Investimento total", v: `R$ ${(totals.invest / 1000).toFixed(1)}k` },
          { l: "Receita gerada", v: `R$ ${(totals.receita / 1000).toFixed(0)}k` },
          { l: "ROI consolidado", v: `${(totals.receita / totals.invest).toFixed(1)}x` },
          { l: "CAC médio", v: `R$ ${Math.round(totals.invest / totals.vendas)}` },
        ].map((k) => (
          <div key={k.l} className="card-elevated p-5">
            <div className="text-xs text-muted-foreground uppercase tracking-wide">{k.l}</div>
            <div className="text-2xl font-black text-foreground mt-2">{k.v}</div>
            <div className="text-[11px] text-[color:var(--success)] mt-1 inline-flex items-center gap-1"><TrendingUp className="h-3 w-3" /> melhor mês do trimestre</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="card-elevated p-5">
          <h3 className="font-bold text-foreground mb-4">Investimento vs Receita (30 dias)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={serie}>
              <defs>
                <linearGradient id="r" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-accent)" stopOpacity={0.4} /><stop offset="100%" stopColor="var(--color-accent)" stopOpacity={0} /></linearGradient>
                <linearGradient id="i" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-primary)" stopOpacity={0.3} /><stop offset="100%" stopColor="var(--color-primary)" stopOpacity={0} /></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="dia" fontSize={11} stroke="var(--color-muted-foreground)" />
              <YAxis fontSize={11} stroke="var(--color-muted-foreground)" />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="receita" stroke="var(--color-accent)" fill="url(#r)" />
              <Area type="monotone" dataKey="invest" stroke="var(--color-primary)" fill="url(#i)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="card-elevated p-5">
          <h3 className="font-bold text-foreground mb-4">ROI por canal</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={canais} layout="vertical" margin={{ left: 30 }}>
              <CartesianGrid horizontal={false} stroke="var(--color-border)" />
              <XAxis type="number" fontSize={11} stroke="var(--color-muted-foreground)" />
              <YAxis dataKey="canal" type="category" fontSize={11} width={110} stroke="var(--color-muted-foreground)" />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="roi" fill="var(--color-accent)" radius={[0, 4, 4, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card-elevated overflow-hidden mb-4">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-bold text-foreground">Performance por canal</h3>
          <select className="h-8 text-xs px-2 border border-border rounded bg-background"><option>Últimos 30 dias</option></select>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-xs uppercase text-muted-foreground">
            <tr className="text-left">
              <th className="px-4 py-3">Canal</th><th className="px-4 py-3">Investimento</th><th className="px-4 py-3">Leads</th>
              <th className="px-4 py-3">Reuniões</th><th className="px-4 py-3">Vendas</th><th className="px-4 py-3">Receita</th><th className="px-4 py-3">ROI</th>
            </tr>
          </thead>
          <tbody>
            {canais.map((c) => (
              <tr key={c.canal} className="border-t border-border hover:bg-muted/30">
                <td className="px-4 py-3 font-semibold text-foreground"><span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: c.color }} />{c.canal}</span></td>
                <td className="px-4 py-3 text-muted-foreground">R$ {c.invest.toLocaleString("pt-BR")}</td>
                <td className="px-4 py-3 text-foreground">{c.leads}</td>
                <td className="px-4 py-3 text-foreground">{c.reunioes}</td>
                <td className="px-4 py-3 text-foreground">{c.vendas}</td>
                <td className="px-4 py-3 font-bold text-primary">R$ {(c.receita / 1000).toFixed(0)}k</td>
                <td className="px-4 py-3"><StatusBadge tone="success">{c.roi}x</StatusBadge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="card-elevated overflow-hidden">
        <div className="px-5 py-4 border-b border-border"><h3 className="font-bold text-foreground">Top campanhas ativas</h3></div>
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-xs uppercase text-muted-foreground"><tr className="text-left"><th className="px-4 py-3">Campanha</th><th className="px-4 py-3">Canal</th><th className="px-4 py-3">Invest.</th><th className="px-4 py-3">Leads</th><th className="px-4 py-3">Vendas</th><th className="px-4 py-3">Receita</th><th className="px-4 py-3">ROI</th></tr></thead>
          <tbody>
            {campanhas.map((c) => (
              <tr key={c.nome} className="border-t border-border hover:bg-muted/30">
                <td className="px-4 py-3 font-semibold text-foreground">{c.nome}</td>
                <td className="px-4 py-3"><StatusBadge tone="info">{c.canal}</StatusBadge></td>
                <td className="px-4 py-3 text-muted-foreground">R$ {c.invest.toLocaleString("pt-BR")}</td>
                <td className="px-4 py-3">{c.leads}</td>
                <td className="px-4 py-3">{c.vendas}</td>
                <td className="px-4 py-3 font-bold text-primary">R$ {(c.receita / 1000).toFixed(0)}k</td>
                <td className="px-4 py-3"><StatusBadge tone="success">{c.roi}x</StatusBadge></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}