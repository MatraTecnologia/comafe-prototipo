import type { Metadata } from "next";
import { AppShell } from "@/components/layout/AppShell";
import { Building2, Users, Bell, Shield, Plug, Palette } from "lucide-react";

export const metadata: Metadata = { title: "Configurações — COMAFE" };

export default function Cfg() {
  const items = [
    { ico: Building2, t: "Dados da empresa", d: "CNPJ, endereço, marca COMAFE" },
    { ico: Users, t: "Equipe & permissões", d: "Vendedores, gestores, perfis de acesso" },
    { ico: Plug, t: "Integrações", d: "Omie, RD Station, Google Ads, Meta Ads, WhatsApp Business" },
    { ico: Bell, t: "Notificações", d: "Alertas de leads, metas, follow-ups" },
    { ico: Shield, t: "Segurança & LGPD", d: "2FA, logs de auditoria, anonimização" },
    { ico: Palette, t: "Aparência", d: "Tema, cores, layout do operador" },
  ];
  return (
    <AppShell title="Configurações" subtitle="Central de configurações da plataforma">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((i) => {
          const I = i.ico;
          return (
            <button key={i.t} className="card-elevated p-5 text-left hover:border-accent/40 transition-all hover:-translate-y-0.5">
              <div className="h-10 w-10 grid place-items-center rounded-lg bg-primary/5 text-primary mb-3"><I className="h-5 w-5" /></div>
              <div className="font-bold text-foreground">{i.t}</div>
              <div className="text-xs text-muted-foreground mt-1">{i.d}</div>
            </button>
          );
        })}
      </div>

      <div className="card-elevated p-6 mt-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h3 className="font-bold text-foreground">Migração RD Station</h3>
            <p className="text-sm text-muted-foreground">Importe leads, automações e funis. Substituição completa em até 30 dias.</p>
          </div>
          <button className="h-10 px-4 text-sm font-medium bg-primary text-primary-foreground rounded-md">Iniciar migração</button>
        </div>
      </div>
    </AppShell>
  );
}
