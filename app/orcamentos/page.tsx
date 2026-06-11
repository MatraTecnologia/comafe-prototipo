import type { Metadata } from "next";
import { AppShell, StatusBadge } from "@/components/layout/AppShell";
import { orcamentos } from "@/lib/mock";
import { Plus, Search, Download, Eye } from "lucide-react";

export const metadata: Metadata = { title: "Orçamentos — COMAFE" };

const etapas = ["Rascunho", "Enviado", "Negociação", "Aprovado", "Pedido"];
const tone = (s: string): "success" | "warning" | "info" | "default" =>
  s === "Aprovado" || s === "Pedido" ? "success" : s === "Negociação" ? "warning" : s === "Enviado" ? "info" : "default";

export default function Orcs() {
  const totalValor = orcamentos.reduce((s, o) => s + parseInt(o.valor.replace(/\D/g, "")), 0);
  return (
    <AppShell
      title="Orçamentos"
      subtitle={`${orcamentos.length} orçamentos ativos · R$ ${(totalValor / 1000).toFixed(0)}k em pipeline`}
      actions={<button className="h-9 px-3 inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground rounded-md"><Plus className="h-4 w-4" /> Novo orçamento</button>}
    >
      <div className="card-elevated p-5 mb-4">
        <div className="text-sm font-bold text-foreground mb-4">Fluxo do orçamento</div>
        <div className="flex items-center gap-2 overflow-x-auto">
          {etapas.map((e, i) => {
            const count = orcamentos.filter((o) => o.status === e).length;
            return (
              <div key={e} className="flex items-center gap-2 shrink-0">
                <div className={`px-4 py-2.5 rounded-lg border-2 ${i === 3 ? "border-[color:var(--success)] bg-[color:var(--success)]/5" : "border-border bg-card"}`}>
                  <div className="text-xs text-muted-foreground">{e}</div>
                  <div className="text-lg font-black text-foreground">{count}</div>
                </div>
                {i < etapas.length - 1 && <div className="h-0.5 w-8 bg-border" />}
              </div>
            );
          })}
        </div>
      </div>

      <div className="card-elevated p-4 mb-4 flex gap-3 flex-wrap items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input className="w-full h-9 pl-9 pr-3 text-sm border border-border rounded-md bg-background" placeholder="Buscar por número, cliente..." />
        </div>
        <select className="h-9 px-3 text-sm border border-border rounded-md bg-background"><option>Todos status</option></select>
        <select className="h-9 px-3 text-sm border border-border rounded-md bg-background"><option>Todos vendedores</option></select>
        <button className="h-9 px-3 inline-flex items-center gap-2 text-sm border border-border rounded-md"><Download className="h-4 w-4" /> Exportar</button>
      </div>

      <div className="card-elevated overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-xs uppercase text-muted-foreground">
            <tr className="text-left">
              <th className="px-4 py-3">Número</th><th className="px-4 py-3">Cliente</th><th className="px-4 py-3">Valor</th>
              <th className="px-4 py-3">Responsável</th><th className="px-4 py-3">Data</th><th className="px-4 py-3">Status</th><th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {orcamentos.map((o) => (
              <tr key={o.num} className="border-t border-border hover:bg-muted/30">
                <td className="px-4 py-3 font-mono text-xs font-semibold text-foreground">{o.num}</td>
                <td className="px-4 py-3 font-semibold text-foreground">{o.cliente}</td>
                <td className="px-4 py-3 font-bold text-primary">{o.valor}</td>
                <td className="px-4 py-3 text-foreground">{o.resp}</td>
                <td className="px-4 py-3 text-muted-foreground">{o.data}</td>
                <td className="px-4 py-3"><StatusBadge tone={tone(o.status)}>{o.status}</StatusBadge></td>
                <td className="px-4 py-3"><button className="h-7 w-7 grid place-items-center rounded hover:bg-muted"><Eye className="h-4 w-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </AppShell>
  );
}
