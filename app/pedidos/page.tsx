import type { Metadata } from "next";
import { AppShell, StatusBadge } from "@/components/layout/AppShell";
import { pedidos } from "@/lib/mock";
import { Package, Truck, CheckCircle2, FileCheck } from "lucide-react";

export const metadata: Metadata = { title: "Pedidos — COMAFE" };

const tone = (s: string): "success" | "info" | "warning" | "default" =>
  s === "Entregue" ? "success" : s === "Enviado" ? "info" : s === "Faturamento" ? "warning" : "default";

export default function Pedidos() {
  const counts = {
    Separação: pedidos.filter((p) => p.status === "Separação").length,
    Faturamento: pedidos.filter((p) => p.status === "Faturamento").length,
    Enviado: pedidos.filter((p) => p.status === "Enviado").length,
    Entregue: pedidos.filter((p) => p.status === "Entregue").length,
  };

  return (
    <AppShell title="Pedidos" subtitle="Painel operacional logístico · Distribuição linha diesel">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
        {[
          { l: "Separação", v: counts.Separação, i: Package, c: "text-muted-foreground" },
          { l: "Faturamento", v: counts.Faturamento, i: FileCheck, c: "text-[color:var(--warning-foreground)]" },
          { l: "Enviado", v: counts.Enviado, i: Truck, c: "text-[color:var(--info)]" },
          { l: "Entregue", v: counts.Entregue, i: CheckCircle2, c: "text-[color:var(--success)]" },
        ].map((s) => {
          const I = s.i;
          return (
            <div key={s.l} className="card-elevated p-5">
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground uppercase">{s.l}</div>
                <I className={`h-5 w-5 ${s.c}`} />
              </div>
              <div className="text-3xl font-black mt-1 text-foreground">{s.v}</div>
              <div className="text-[11px] text-muted-foreground mt-1">pedidos ativos</div>
            </div>
          );
        })}
      </div>

      <div className="card-elevated overflow-hidden">
        <div className="px-5 py-4 border-b border-border flex items-center justify-between">
          <h3 className="font-bold text-foreground">Pedidos recentes</h3>
          <div className="flex gap-2">
            <select className="h-8 px-2 text-xs border border-border rounded bg-background"><option>Todos status</option></select>
            <select className="h-8 px-2 text-xs border border-border rounded bg-background"><option>Últimos 7 dias</option></select>
          </div>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-muted/40 text-xs uppercase text-muted-foreground">
            <tr className="text-left">
              <th className="px-4 py-3">Pedido</th><th className="px-4 py-3">Cliente</th><th className="px-4 py-3">Valor</th>
              <th className="px-4 py-3">Data</th><th className="px-4 py-3">Status</th><th className="px-4 py-3">Progresso</th>
            </tr>
          </thead>
          <tbody>
            {pedidos.map((p) => {
              const stage = ["Separação", "Faturamento", "Enviado", "Entregue"].indexOf(p.status);
              return (
                <tr key={p.num} className="border-t border-border hover:bg-muted/30">
                  <td className="px-4 py-3 font-mono text-xs font-semibold text-foreground">{p.num}</td>
                  <td className="px-4 py-3 font-semibold text-foreground">{p.cliente}</td>
                  <td className="px-4 py-3 font-bold text-primary">{p.valor}</td>
                  <td className="px-4 py-3 text-muted-foreground">{p.data}</td>
                  <td className="px-4 py-3"><StatusBadge tone={tone(p.status)}>{p.status}</StatusBadge></td>
                  <td className="px-4 py-3 w-48">
                    <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-primary to-accent transition-all" style={{ width: `${((stage + 1) / 4) * 100}%` }} />
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
