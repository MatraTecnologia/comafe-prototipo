"use client";

import type { Metadata } from "next";
import { AppShell, StatusBadge } from "@/components/layout/AppShell";
import { funilEtapas, funilCards } from "@/lib/mock";
import { useState } from "react";
import { Plus, Filter, X, Phone, Mail, Building2, Calendar, FileText, Package, MessageSquare, Paperclip } from "lucide-react";

function CRM() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <AppShell
      title="CRM Comercial"
      subtitle="Funil de vendas · Distribuição Diesel"
      actions={
        <>
          <button className="h-9 px-3 inline-flex items-center gap-2 text-sm border border-border rounded-md hover:bg-muted">
            <Filter className="h-4 w-4" /> Filtros
          </button>
          <button className="h-9 px-3 inline-flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:opacity-90">
            <Plus className="h-4 w-4" /> Nova oportunidade
          </button>
        </>
      }
    >
      <div className="flex gap-4 overflow-x-auto pb-4 -mx-2 px-2">
        {funilEtapas.map((etapa) => {
          const cards = funilCards[etapa.id] ?? [];
          const total = cards.reduce((s, c) => s + parseInt(c.valor.replace(/\D/g, "")), 0);
          return (
            <div key={etapa.id} className="w-[300px] shrink-0">
              <div className="flex items-center justify-between mb-3 px-1">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full" style={{ background: etapa.cor }} />
                  <span className="text-sm font-bold text-foreground">{etapa.titulo}</span>
                  <span className="text-xs text-muted-foreground">({cards.length})</span>
                </div>
              </div>
              <div className="text-[11px] text-muted-foreground mb-2 px-1">R$ {(total / 1000).toLocaleString("pt-BR", { maximumFractionDigits: 1 })}k em pipeline</div>
              <div className="space-y-2.5">
                {cards.map((c, i) => (
                  <button key={i} onClick={() => setSelected({ ...c, etapa: etapa.titulo })} className="text-left w-full card-elevated p-3 hover:border-accent/40 transition-all hover:-translate-y-0.5">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="text-sm font-semibold text-foreground truncate">{c.empresa}</div>
                        <div className="text-[11px] text-muted-foreground truncate">{c.contato}</div>
                      </div>
                      <StatusBadge tone="info">{c.origem}</StatusBadge>
                    </div>
                    <div className="mt-2.5 text-base font-black text-primary">{c.valor}</div>
                    <div className="text-[11px] text-muted-foreground mt-0.5 truncate">{c.produtos}</div>
                    <div className="flex items-center justify-between mt-3 pt-2 border-t border-border">
                      <span className="text-[11px] text-muted-foreground">{c.resp}</span>
                      <span className="text-[11px] text-muted-foreground">{c.ultima}</span>
                    </div>
                  </button>
                ))}
                <button className="w-full text-xs text-muted-foreground py-2 border border-dashed border-border rounded-md hover:border-accent/50 hover:text-accent transition-colors">
                  + Adicionar card
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {selected && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-end" onClick={() => setSelected(null)}>
          <div className="w-full max-w-md bg-card h-full overflow-y-auto shadow-2xl animate-in slide-in-from-right" onClick={(e) => e.stopPropagation()}>
            <div className="p-5 border-b border-border flex items-start justify-between gap-3">
              <div className="min-w-0">
                <StatusBadge tone="info">{selected.etapa}</StatusBadge>
                <h2 className="text-lg font-bold text-foreground mt-2 truncate">{selected.empresa}</h2>
                <p className="text-sm text-muted-foreground truncate">{selected.contato}</p>
              </div>
              <button onClick={() => setSelected(null)} className="h-8 w-8 grid place-items-center rounded-md hover:bg-muted shrink-0"><X className="h-4 w-4" /></button>
            </div>
            <div className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-muted">
                  <div className="text-[10px] text-muted-foreground uppercase">Valor estimado</div>
                  <div className="text-lg font-black text-primary">{selected.valor}</div>
                </div>
                <div className="p-3 rounded-lg bg-muted">
                  <div className="text-[10px] text-muted-foreground uppercase">Responsável</div>
                  <div className="text-sm font-bold text-foreground mt-1">{selected.resp}</div>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-foreground"><Building2 className="h-4 w-4 text-muted-foreground" /> CNPJ 12.345.678/0001-90</div>
                <div className="flex items-center gap-2 text-foreground"><Phone className="h-4 w-4 text-muted-foreground" /> (11) 98421-3344</div>
                <div className="flex items-center gap-2 text-foreground"><Mail className="h-4 w-4 text-muted-foreground" /> contato@empresa.com.br</div>
              </div>

              <div className="flex gap-1 border-b border-border">
                {["Histórico", "Tarefas", "Propostas", "Produtos", "Arquivos"].map((t, i) => (
                  <button key={t} className={`px-3 py-2 text-xs font-medium border-b-2 ${i === 0 ? "border-accent text-accent" : "border-transparent text-muted-foreground"}`}>{t}</button>
                ))}
              </div>

              <div className="space-y-3">
                {[
                  { ico: MessageSquare, txt: "Cliente solicitou orçamento para 3 bombas injetoras + 12 bicos", time: "há 2h", user: selected.resp },
                  { ico: Calendar, txt: "Reunião agendada para 14/06 às 14h via Google Meet", time: "ontem", user: selected.resp },
                  { ico: FileText, txt: "Proposta comercial #ORC-1842 enviada por e-mail", time: "ontem", user: selected.resp },
                  { ico: Phone, txt: "Ligação de 14min — qualificação de necessidades", time: "há 2 dias", user: selected.resp },
                  { ico: Package, txt: "Lead vinculado a campanha 'Diesel Heavy Duty - Search'", time: "há 3 dias", user: "Sistema" },
                ].map((h, i) => {
                  const Ico = h.ico;
                  return (
                    <div key={i} className="flex gap-3">
                      <div className="h-8 w-8 shrink-0 rounded-full bg-primary/5 text-primary grid place-items-center"><Ico className="h-4 w-4" /></div>
                      <div className="min-w-0 flex-1">
                        <div className="text-sm text-foreground">{h.txt}</div>
                        <div className="text-[11px] text-muted-foreground mt-0.5">{h.user} · {h.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-border">
                <div className="text-xs font-semibold text-foreground mb-2">Adicionar nota</div>
                <textarea className="w-full text-sm border border-border rounded-md p-2 min-h-[80px] bg-background" placeholder="Escreva uma observação..." />
                <div className="flex items-center justify-between mt-2">
                  <button className="text-xs text-muted-foreground inline-flex items-center gap-1"><Paperclip className="h-3 w-3" /> Anexar</button>
                  <button className="h-8 px-3 text-xs font-medium bg-primary text-primary-foreground rounded-md">Salvar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AppShell>
  );
}

export default CRM;
