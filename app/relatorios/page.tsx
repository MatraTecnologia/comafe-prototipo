"use client";

import { AppShell } from "@/components/layout/AppShell";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis, Line, LineChart } from "recharts";
import { FileText, FileSpreadsheet, FileDown, Calendar } from "lucide-react";


const produtos = [
  { nome: "Bombas injetoras Bosch", vendas: 412, receita: 1480000 },
  { nome: "Bicos injetores common rail", vendas: 1284, receita: 982000 },
  { nome: "Turbocompressores", vendas: 186, receita: 842000 },
  { nome: "Kits revisão linha pesada", vendas: 96, receita: 612000 },
  { nome: "Filtros e lubrificantes", vendas: 2410, receita: 488000 },
  { nome: "Linha agrícola MWM", vendas: 142, receita: 412000 },
];

const regioes = [
  { regiao: "Sudeste", vendas: 482, receita: 2840000 },
  { regiao: "Sul", vendas: 286, receita: 1280000 },
  { regiao: "Centro-Oeste", vendas: 198, receita: 920000 },
  { regiao: "Nordeste", vendas: 142, receita: 612000 },
  { regiao: "Norte", vendas: 84, receita: 380000 },
];

const tendencia = Array.from({ length: 12 }, (_, i) => ({ m: `M${i + 1}`, r: 2400000 + i * 180000 + (i * 7777) % 200000 }));

export default function Relat() {
  return (
    <AppShell title="Relatórios Executivos" subtitle="Análise consolidada · Filtros avançados · Exportação">
      <div className="card-elevated p-4 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="flex items-center gap-2 text-sm font-semibold text-foreground"><Calendar className="h-4 w-4" /> Período</div>
          <select className="h-9 px-3 text-sm border border-border rounded-md bg-background"><option>01/06/2025 → 30/06/2025</option><option>Mês anterior</option><option>Últimos 90 dias</option></select>
          <select className="h-9 px-3 text-sm border border-border rounded-md bg-background"><option>Todos vendedores</option></select>
          <select className="h-9 px-3 text-sm border border-border rounded-md bg-background"><option>Todos produtos</option></select>
          <select className="h-9 px-3 text-sm border border-border rounded-md bg-background"><option>Todos canais</option></select>
          <select className="h-9 px-3 text-sm border border-border rounded-md bg-background"><option>Todas regiões</option></select>
          <div className="flex-1" />
          <button className="h-9 px-3 inline-flex items-center gap-2 text-sm border border-border rounded-md hover:bg-muted"><FileDown className="h-4 w-4" /> PDF</button>
          <button className="h-9 px-3 inline-flex items-center gap-2 text-sm border border-border rounded-md hover:bg-muted"><FileSpreadsheet className="h-4 w-4" /> Excel</button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {[
          { l: "Faturamento", v: "R$ 4,87M" },
          { l: "Pedidos", v: "1.192" },
          { l: "Ticket médio", v: "R$ 4.083" },
          { l: "Margem média", v: "32,4%" },
        ].map((k) => (
          <div key={k.l} className="card-elevated p-5">
            <div className="text-xs text-muted-foreground uppercase">{k.l}</div>
            <div className="text-2xl font-black text-foreground mt-2">{k.v}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
        <div className="card-elevated p-5">
          <h3 className="font-bold text-foreground mb-4">Receita por região</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={regioes}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="regiao" fontSize={11} stroke="var(--color-muted-foreground)" />
              <YAxis fontSize={11} stroke="var(--color-muted-foreground)" tickFormatter={(v) => `R$${(v / 1000000).toFixed(1)}M`} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} formatter={(v: unknown) => `R$ ${(v as number).toLocaleString("pt-BR")}`} />
              <Bar dataKey="receita" fill="var(--color-primary)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="card-elevated p-5">
          <h3 className="font-bold text-foreground mb-4">Tendência mensal (12m)</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={tendencia}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="m" fontSize={11} stroke="var(--color-muted-foreground)" />
              <YAxis fontSize={11} stroke="var(--color-muted-foreground)" tickFormatter={(v) => `R$${(v / 1000000).toFixed(1)}M`} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} />
              <Line type="monotone" dataKey="r" stroke="var(--color-accent)" strokeWidth={2.5} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card-elevated overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <div>
            <h3 className="font-bold text-foreground">Ranking de produtos</h3>
            <p className="text-xs text-muted-foreground">Linha diesel · Junho/2025</p>
          </div>
          <button className="text-xs text-accent font-medium inline-flex items-center gap-1"><FileText className="h-3.5 w-3.5" /> Relatório completo</button>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-xs uppercase text-muted-foreground">
            <tr className="text-left"><th className="px-4 py-3">#</th><th className="px-4 py-3">Produto</th><th className="px-4 py-3">Unidades</th><th className="px-4 py-3">Receita</th><th className="px-4 py-3">Participação</th></tr>
          </thead>
          <tbody>
            {produtos.map((p, i) => {
              const total = produtos.reduce((s, x) => s + x.receita, 0);
              const pct = (p.receita / total) * 100;
              return (
                <tr key={p.nome} className="border-t border-border hover:bg-muted/30">
                  <td className="px-4 py-3 font-bold text-muted-foreground">{i + 1}º</td>
                  <td className="px-4 py-3 font-semibold text-foreground">{p.nome}</td>
                  <td className="px-4 py-3 text-foreground">{p.vendas.toLocaleString("pt-BR")}</td>
                  <td className="px-4 py-3 font-bold text-primary">R$ {(p.receita / 1000).toFixed(0)}k</td>
                  <td className="px-4 py-3 w-64">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-muted overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-accent rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-xs font-medium text-foreground w-10 text-right">{pct.toFixed(1)}%</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
