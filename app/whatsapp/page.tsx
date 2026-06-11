"use client";

import { AppShell, StatusBadge } from "@/components/layout/AppShell";
import { conversasWhats, mensagens } from "@/lib/mock";
import { Search, Send, Paperclip, Smile, Phone, Video, MoreVertical, Tag, Building2, MapPin, User } from "lucide-react";
import { useState } from "react";

export default function Whats() {
  const [active, setActive] = useState(0);
  const conv = conversasWhats[active];
  return (
    <AppShell title="Atendimento WhatsApp" subtitle="Omnichannel · 7 conversas ativas · Distribuição automática">
      <div className="card-elevated overflow-hidden h-[calc(100vh-180px)] flex">
        <div className="w-80 border-r border-border flex flex-col">
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input className="w-full h-9 pl-9 pr-3 text-sm border border-border rounded-md bg-background" placeholder="Buscar conversa..." />
            </div>
            <div className="flex gap-1 mt-2">
              {["Todas", "Não lidas", "Minhas", "Sem responsável"].map((t, i) => (
                <button key={t} className={`px-2.5 py-1 text-[11px] rounded-md ${i === 0 ? "bg-primary text-primary-foreground" : "bg-muted text-foreground/70"}`}>{t}</button>
              ))}
            </div>
          </div>
          <div className="flex-1 overflow-y-auto">
            {conversasWhats.map((c, i) => (
              <button key={i} onClick={() => setActive(i)} className={`w-full text-left p-3 border-b border-border hover:bg-muted/40 transition-colors ${i === active ? "bg-muted/60" : ""}`}>
                <div className="flex items-start gap-3">
                  <div className="relative shrink-0">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-white text-xs font-bold">{c.nome.split(" ").map((n) => n[0]).join("").slice(0, 2)}</div>
                    {c.online && <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-[color:var(--success)] border-2 border-card" />}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="font-semibold text-sm text-foreground truncate">{c.nome}</div>
                      <div className="text-[10px] text-muted-foreground shrink-0">{c.hora}</div>
                    </div>
                    <div className="text-[11px] text-muted-foreground truncate">{c.empresa}</div>
                    <div className="flex items-center justify-between gap-2 mt-1">
                      <div className="text-xs text-muted-foreground truncate">{c.ultima}</div>
                      {c.unread > 0 && <span className="shrink-0 h-4 min-w-4 px-1 grid place-items-center text-[10px] font-bold rounded-full bg-[color:var(--success)] text-white">{c.unread}</span>}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col min-w-0">
          <div className="px-5 py-3 border-b border-border flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-white text-xs font-bold">{conv.nome.split(" ").map((n) => n[0]).join("").slice(0, 2)}</div>
            <div className="min-w-0 flex-1">
              <div className="font-bold text-foreground truncate">{conv.nome}</div>
              <div className="text-[11px] text-[color:var(--success)]">online · respondendo geralmente em 5min</div>
            </div>
            <button className="h-9 w-9 grid place-items-center rounded-md hover:bg-muted"><Phone className="h-4 w-4" /></button>
            <button className="h-9 w-9 grid place-items-center rounded-md hover:bg-muted"><Video className="h-4 w-4" /></button>
            <button className="h-9 w-9 grid place-items-center rounded-md hover:bg-muted"><MoreVertical className="h-4 w-4" /></button>
          </div>

          <div className="flex-1 overflow-y-auto p-5 space-y-3 bg-[color:var(--muted)]/40">
            {mensagens.map((m, i) => (
              <div key={i} className={`flex ${m.me ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-[70%] px-3.5 py-2 rounded-2xl text-sm ${m.me ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border rounded-bl-sm"}`}>
                  <div>{m.text}</div>
                  <div className={`text-[10px] mt-0.5 ${m.me ? "text-white/60" : "text-muted-foreground"}`}>{m.hora}</div>
                </div>
              </div>
            ))}
            <div className="flex justify-center"><div className="text-[11px] text-muted-foreground bg-muted px-3 py-1 rounded-full">Nota interna: Cliente é frotista, alta prioridade — Rafael A.</div></div>
          </div>

          <div className="border-t border-border p-3 flex items-center gap-2">
            <button className="h-9 w-9 grid place-items-center rounded-md hover:bg-muted"><Paperclip className="h-4 w-4" /></button>
            <button className="h-9 w-9 grid place-items-center rounded-md hover:bg-muted"><Smile className="h-4 w-4" /></button>
            <input className="flex-1 h-10 px-3 text-sm border border-border rounded-md bg-background" placeholder="Digite uma mensagem..." />
            <button className="h-10 px-4 inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-md text-sm font-medium"><Send className="h-4 w-4" /> Enviar</button>
          </div>
        </div>

        <div className="w-72 border-l border-border overflow-y-auto p-4 space-y-4 hidden xl:block">
          <div className="text-center">
            <div className="h-16 w-16 mx-auto rounded-full bg-gradient-to-br from-primary to-accent grid place-items-center text-white font-bold text-lg">{conv.nome.split(" ").map((n) => n[0]).join("").slice(0, 2)}</div>
            <div className="mt-2 font-bold text-foreground">{conv.nome}</div>
            <div className="text-xs text-muted-foreground">{conv.empresa}</div>
            <div className="flex gap-1 justify-center mt-2"><StatusBadge tone="success">VIP</StatusBadge><StatusBadge tone="info">Frotista</StatusBadge></div>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-foreground"><Building2 className="h-4 w-4 text-muted-foreground" /> CNPJ 12.345.678/0001-90</div>
            <div className="flex items-center gap-2 text-foreground"><MapPin className="h-4 w-4 text-muted-foreground" /> Campinas/SP</div>
            <div className="flex items-center gap-2 text-foreground"><User className="h-4 w-4 text-muted-foreground" /> Resp.: Rafael Andrade</div>
            <div className="flex items-center gap-2 text-foreground"><Tag className="h-4 w-4 text-muted-foreground" /> Origem: Google Ads</div>
          </div>
          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">Histórico CRM</div>
            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-muted"><div className="font-semibold text-foreground">PED-9802 · R$ 18.400</div><div className="text-muted-foreground">Entregue · Mai/2025</div></div>
              <div className="p-2 rounded bg-muted"><div className="font-semibold text-foreground">PED-9711 · R$ 24.100</div><div className="text-muted-foreground">Entregue · Abr/2025</div></div>
              <div className="p-2 rounded bg-muted"><div className="font-semibold text-foreground">ORC-1842 · R$ 24.800</div><div className="text-muted-foreground">Em negociação</div></div>
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-muted-foreground uppercase mb-2">LTV</div>
            <div className="text-2xl font-black text-primary">R$ 184.220</div>
            <div className="text-[11px] text-muted-foreground">12 pedidos · cliente há 2 anos</div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
