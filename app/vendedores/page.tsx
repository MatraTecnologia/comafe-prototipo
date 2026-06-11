"use client";

import { AppShell, StatusBadge } from "@/components/layout/AppShell";
import { vendedores } from "@/lib/mock";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Trophy, Phone, Calendar, FileText, DollarSign } from "lucide-react";


export default function Vendedores() {
  const totalMeta = vendedores.reduce((s, v) => s + v.meta, 0);
  const totalReal = vendedores.reduce((s, v) => s + v.vendas, 0);
  return (
    <AppShell title="Performance dos Vendedores" subtitle="Equipe comercial · 6 vendedores ativos · Meta equipe 466 vendas">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {[
          { l: "Vendas (mês)", v: totalReal, i: DollarSign },
          { l: "Ligações realizadas", v: "1.997", i: Phone },
          { l: "Reuniões", v: "275", i: Calendar },
          { l: "Orçamentos enviados", v: "466", i: FileText },
        ].map((s) => {
          const I = s.i;
          return (
            <div key={s.l} className="card-elevated p-5">
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground uppercase tracking-wide">{s.l}</div>
                <I className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="text-2xl font-black mt-2 text-foreground">{s.v}</div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="card-elevated p-5 lg:col-span-2">
          <h3 className="font-bold text-foreground mb-1">Ranking — Vendas vs Meta individual</h3>
          <p className="text-xs text-muted-foreground mb-4">Junho/2025</p>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={vendedores}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="nome" fontSize={11} stroke="var(--color-muted-foreground)" />
              <YAxis fontSize={11} stroke="var(--color-muted-foreground)" />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="meta" fill="var(--color-muted)" radius={[4, 4, 0, 0]} />
              <Bar dataKey="vendas" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card-elevated p-5">
          <div className="flex items-center gap-2 mb-3">
            <Trophy className="h-5 w-5 text-[color:var(--warning-foreground)]" />
            <h3 className="font-bold text-foreground">Meta da equipe</h3>
          </div>
          <div className="text-4xl font-black text-primary">{Math.round((totalReal / totalMeta) * 100)}%</div>
          <p className="text-xs text-muted-foreground mt-1">{totalReal} de {totalMeta} vendas</p>
          <div className="mt-3 h-3 rounded-full bg-muted overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all" style={{ width: `${(totalReal / totalMeta) * 100}%` }} />
          </div>
          <div className="mt-6 space-y-3">
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Faltam para meta</span><span className="font-bold text-foreground">{totalMeta - totalReal} vendas</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Comissão equipe</span><span className="font-bold text-[color:var(--success)]">R$ 184.230</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Bônus se 100%</span><span className="font-bold text-foreground">+ R$ 42.000</span></div>
          </div>
        </div>
      </div>

      <div className="card-elevated mt-4 overflow-hidden">
        <div className="px-5 py-4 border-b border-border">
          <h3 className="font-bold text-foreground">Detalhamento individual</h3>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-xs uppercase text-muted-foreground">
            <tr className="text-left">
              <th className="px-4 py-3">#</th><th className="px-4 py-3">Vendedor</th><th className="px-4 py-3">Vendas</th><th className="px-4 py-3">Meta</th>
              <th className="px-4 py-3">Conversão</th><th className="px-4 py-3">Ligações</th><th className="px-4 py-3">Reuniões</th><th className="px-4 py-3">Orçamentos</th>
              <th className="px-4 py-3">Ticket médio</th><th className="px-4 py-3">Receita</th>
            </tr>
          </thead>
          <tbody>
            {vendedores.map((v, i) => (
              <tr key={v.nome} className="border-t border-border hover:bg-muted/30">
                <td className="px-4 py-3 font-bold text-muted-foreground">{i + 1}º</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-white text-[10px] font-bold">{v.avatar}</div>
                    <div><div className="font-semibold text-foreground">{v.nome}</div><div className="text-[11px] text-muted-foreground">{v.regional}</div></div>
                  </div>
                </td>
                <td className="px-4 py-3 font-bold text-foreground">{v.vendas}</td>
                <td className="px-4 py-3 text-muted-foreground">{v.meta}</td>
                <td className="px-4 py-3"><StatusBadge tone={v.conversao >= 28 ? "success" : "warning"}>{v.conversao}%</StatusBadge></td>
                <td className="px-4 py-3 text-muted-foreground">{v.ligacoes}</td>
                <td className="px-4 py-3 text-muted-foreground">{v.reunioes}</td>
                <td className="px-4 py-3 text-muted-foreground">{v.orcamentos}</td>
                <td className="px-4 py-3 text-foreground">R$ {v.ticket.toLocaleString("pt-BR")}</td>
                <td className="px-4 py-3 font-bold text-primary">R$ {(v.receita / 1000).toFixed(0)}k</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
