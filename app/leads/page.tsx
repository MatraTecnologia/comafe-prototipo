import type { Metadata } from "next";
import { AppShell, StatusBadge } from "@/components/layout/AppShell";
import { leadsTabela } from "@/lib/mock";
import { Plus, Upload, Filter, Search, MoreHorizontal } from "lucide-react";

export const metadata: Metadata = { title: "Central de Leads — COMAFE" };

const tone = (s: string): "info" | "success" | "warning" | "default" =>
  s === "Novo" ? "info" : s === "Qualificado" ? "success" : s === "Proposta enviada" ? "warning" : "default";

export default function Leads() {
  return (
    <AppShell
      title="Central de Leads"
      subtitle="1.284 leads · 312 em atendimento · Distribuição automática ativa"
      actions={
        <>
          <button className="h-9 px-3 inline-flex items-center gap-2 text-sm border border-border rounded-md hover:bg-muted"><Upload className="h-4 w-4" /> Importar</button>
          <button className="h-9 px-3 inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground rounded-md"><Plus className="h-4 w-4" /> Novo lead</button>
        </>
      }
    >
      <div className="card-elevated p-4 mb-4">
        <div className="flex flex-wrap gap-3 items-center">
          <div className="relative flex-1 min-w-[200px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input className="w-full h-9 pl-9 pr-3 text-sm border border-border rounded-md bg-background" placeholder="Buscar por empresa, contato, telefone..." />
          </div>
          <select className="h-9 px-3 text-sm border border-border rounded-md bg-background"><option>Todos os canais</option><option>Google Ads</option><option>Meta Ads</option></select>
          <select className="h-9 px-3 text-sm border border-border rounded-md bg-background"><option>Todos os status</option><option>Novo</option><option>Qualificado</option></select>
          <select className="h-9 px-3 text-sm border border-border rounded-md bg-background"><option>Todos vendedores</option></select>
          <button className="h-9 px-3 inline-flex items-center gap-2 text-sm border border-border rounded-md hover:bg-muted"><Filter className="h-4 w-4" /> Mais filtros</button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {[
          { l: "Novos hoje", v: "47", c: "info" },
          { l: "Em atendimento", v: "312", c: "warning" },
          { l: "Qualificados (7d)", v: "186", c: "success" },
          { l: "Sem retorno > 48h", v: "23", c: "danger" },
        ].map((s) => (
          <div key={s.l} className="card-elevated p-4">
            <div className="text-xs text-muted-foreground">{s.l}</div>
            <div className="flex items-center justify-between mt-1">
              <div className="text-xl font-black text-foreground">{s.v}</div>
              <StatusBadge tone={s.c as any}>•</StatusBadge>
            </div>
          </div>
        ))}
      </div>

      <div className="card-elevated overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr className="text-left text-xs font-semibold text-muted-foreground uppercase">
              <th className="px-4 py-3"><input type="checkbox" /></th>
              <th className="px-4 py-3">Empresa</th>
              <th className="px-4 py-3">Contato</th>
              <th className="px-4 py-3">Telefone</th>
              <th className="px-4 py-3">Cidade</th>
              <th className="px-4 py-3">Canal</th>
              <th className="px-4 py-3">Entrada</th>
              <th className="px-4 py-3">Responsável</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {leadsTabela.map((l, i) => (
              <tr key={i} className="border-t border-border hover:bg-muted/30 transition-colors">
                <td className="px-4 py-3"><input type="checkbox" /></td>
                <td className="px-4 py-3 font-semibold text-foreground">{l.empresa}</td>
                <td className="px-4 py-3 text-foreground">{l.nome}</td>
                <td className="px-4 py-3 text-muted-foreground">{l.tel}</td>
                <td className="px-4 py-3 text-muted-foreground">{l.cidade}</td>
                <td className="px-4 py-3"><StatusBadge tone="info">{l.canal}</StatusBadge></td>
                <td className="px-4 py-3 text-muted-foreground">{l.data}</td>
                <td className="px-4 py-3 text-foreground">{l.resp}</td>
                <td className="px-4 py-3"><StatusBadge tone={tone(l.status)}>{l.status}</StatusBadge></td>
                <td className="px-4 py-3"><button className="h-7 w-7 grid place-items-center rounded hover:bg-muted"><MoreHorizontal className="h-4 w-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="px-4 py-3 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
          <div>Mostrando 1–8 de 1.284 leads</div>
          <div className="flex gap-2">
            <button className="px-2 py-1 border border-border rounded">Anterior</button>
            <button className="px-2 py-1 bg-primary text-primary-foreground rounded">1</button>
            <button className="px-2 py-1 border border-border rounded">2</button>
            <button className="px-2 py-1 border border-border rounded">3</button>
            <button className="px-2 py-1 border border-border rounded">Próximo</button>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
