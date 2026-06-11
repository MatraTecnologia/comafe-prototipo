"use client";

import { AppShell } from "@/components/layout/AppShell";
import { vendedores } from "@/lib/mock";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Legend } from "recharts";
import { Trophy, DollarSign, TrendingUp } from "lucide-react";


export default function Metas() {
  const dataCom = vendedores.map((v) => ({
    nome: v.nome.split(" ")[0],
    acumulada: Math.round(v.receita * 0.025),
    prevista: Math.round((v.receita / (v.vendas || 1)) * v.meta * 0.025),
  }));

  return (
    <AppShell title="Metas & Comissões" subtitle="Acompanhamento de metas individuais e da equipe · Junho/2025">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
        <div className="card-elevated p-5 comafe-gradient text-white">
          <div className="flex items-center gap-2 mb-3"><Trophy className="h-5 w-5" /><span className="text-sm font-semibold uppercase tracking-wide">Meta equipe</span></div>
          <div className="text-4xl font-black">78%</div>
          <div className="text-sm text-white/70 mt-1">R$ 4,87M de R$ 6,2M</div>
          <div className="mt-4 h-2 rounded-full bg-white/20 overflow-hidden"><div className="h-full bg-white rounded-full" style={{ width: "78%" }} /></div>
          <div className="mt-4 text-xs text-white/70">Faltam R$ 1,33M · 18 dias úteis</div>
        </div>

        <div className="card-elevated p-5">
          <div className="flex items-center gap-2 mb-3"><DollarSign className="h-5 w-5 text-[color:var(--success)]" /><span className="text-sm font-semibold uppercase tracking-wide text-foreground">Comissão acumulada</span></div>
          <div className="text-4xl font-black text-foreground">R$ 184.230</div>
          <div className="text-sm text-muted-foreground mt-1">Equipe · pagas + a pagar</div>
          <div className="mt-4 text-xs text-[color:var(--success)] inline-flex items-center gap-1"><TrendingUp className="h-3 w-3" /> +24% vs maio</div>
        </div>

        <div className="card-elevated p-5">
          <div className="flex items-center gap-2 mb-3"><TrendingUp className="h-5 w-5 text-accent" /><span className="text-sm font-semibold uppercase tracking-wide text-foreground">Comissão prevista (fim do mês)</span></div>
          <div className="text-4xl font-black text-foreground">R$ 242.800</div>
          <div className="text-sm text-muted-foreground mt-1">Projeção atingindo 100% da meta</div>
          <div className="mt-4 text-xs text-muted-foreground">Bônus equipe se &gt;100%: <span className="font-bold text-foreground">+ R$ 42.000</span></div>
        </div>
      </div>

      <div className="card-elevated p-5 mb-4">
        <h3 className="font-bold text-foreground mb-4">Comissão acumulada vs prevista por vendedor</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={dataCom}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
            <XAxis dataKey="nome" fontSize={11} stroke="var(--color-muted-foreground)" />
            <YAxis fontSize={11} stroke="var(--color-muted-foreground)" tickFormatter={(v) => `R$${(v / 1000).toFixed(0)}k`} />
            <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} formatter={(v: unknown) => `R$ ${(v as number).toLocaleString("pt-BR")}`} />
            <Legend wrapperStyle={{ fontSize: 12 }} />
            <Bar dataKey="acumulada" name="Acumulada" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            <Bar dataKey="prevista" name="Prevista" fill="var(--color-accent)" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="card-elevated overflow-hidden">
        <div className="px-5 py-4 border-b border-border"><h3 className="font-bold text-foreground">Metas individuais</h3></div>
        <div className="divide-y divide-border">
          {vendedores.map((v) => {
            const atingido = Math.round((v.vendas / v.meta) * 100);
            const com = Math.round(v.receita * 0.025);
            return (
              <div key={v.nome} className="p-4 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-white text-xs font-bold shrink-0">{v.avatar}</div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <div className="font-semibold text-foreground">{v.nome} <span className="text-xs text-muted-foreground font-normal">· {v.regional}</span></div>
                    <div className="text-sm font-bold text-foreground">{v.vendas}/{v.meta} <span className="text-xs text-muted-foreground font-normal">vendas</span></div>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                    <div className={`h-full rounded-full transition-all ${atingido >= 100 ? "bg-[color:var(--success)]" : atingido >= 80 ? "bg-gradient-to-r from-primary to-accent" : "bg-[color:var(--warning)]"}`} style={{ width: `${Math.min(100, atingido)}%` }} />
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-1">
                    <span>{atingido}% da meta · Conversão {v.conversao}%</span>
                    <span>Comissão: <span className="font-bold text-[color:var(--success)]">R$ {com.toLocaleString("pt-BR")}</span></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AppShell>
  );
}
