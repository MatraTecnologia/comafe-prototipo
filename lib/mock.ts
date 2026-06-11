export const kpis = {
  faturamento: "R$ 4.872.310",
  faturamentoDelta: "+12,4%",
  meta: 78,
  metaValor: "R$ 4,8M / R$ 6,2M",
  roi: "4,7x",
  roiDelta: "+0,8x",
  leads: 1284,
  leadsDelta: "+18%",
  oportunidades: 312,
  conversao: "26,4%",
  ticketMedio: "R$ 8.430",
  tempoAtendimento: "1h 42min",
};

export const faturamentoMensal = [
  { mes: "Jan", valor: 3120000, meta: 3500000 },
  { mes: "Fev", valor: 3380000, meta: 3700000 },
  { mes: "Mar", valor: 3950000, meta: 4000000 },
  { mes: "Abr", valor: 4210000, meta: 4200000 },
  { mes: "Mai", valor: 4480000, meta: 4500000 },
  { mes: "Jun", valor: 4720000, meta: 4800000 },
  { mes: "Jul", valor: 4872000, meta: 5000000 },
];

export const leadsPorCanal = [
  { canal: "Google Ads", leads: 412, color: "var(--color-chart-1)" },
  { canal: "Meta Ads", leads: 286, color: "var(--color-chart-2)" },
  { canal: "Orgânico", leads: 198, color: "var(--color-chart-3)" },
  { canal: "WhatsApp", leads: 244, color: "var(--color-chart-4)" },
  { canal: "Indicações", leads: 144, color: "var(--color-chart-5)" },
];

export const vendedores = [
  { nome: "Rafael Andrade", regional: "SP Capital", vendas: 184, ticket: 9120, conversao: 32, ligacoes: 412, reunioes: 58, orcamentos: 92, meta: 95, receita: 1678080, avatar: "RA" },
  { nome: "Juliana Marques", regional: "Interior SP", vendas: 162, ticket: 8740, conversao: 29, ligacoes: 378, reunioes: 51, orcamentos: 88, meta: 88, receita: 1415880, avatar: "JM" },
  { nome: "Carlos Mendonça", regional: "Sul", vendas: 148, ticket: 8210, conversao: 27, ligacoes: 342, reunioes: 47, orcamentos: 81, meta: 82, receita: 1215080, avatar: "CM" },
  { nome: "Patrícia Souza", regional: "MG/ES", vendas: 134, ticket: 7980, conversao: 25, ligacoes: 318, reunioes: 44, orcamentos: 76, meta: 74, receita: 1069320, avatar: "PS" },
  { nome: "Eduardo Lima", regional: "Centro-Oeste", vendas: 121, ticket: 7610, conversao: 23, ligacoes: 286, reunioes: 39, orcamentos: 68, meta: 67, receita: 920810, avatar: "EL" },
  { nome: "Fernanda Costa", regional: "Nordeste", vendas: 108, ticket: 7340, conversao: 21, ligacoes: 261, reunioes: 36, orcamentos: 61, meta: 60, receita: 792720, avatar: "FC" },
];

export const campanhas = [
  { nome: "Diesel Heavy Duty - Search", canal: "Google Ads", invest: 38500, leads: 412, vendas: 84, receita: 712400, roi: 18.5 },
  { nome: "Bombas Injetoras - Display", canal: "Google Ads", invest: 22400, leads: 198, vendas: 41, receita: 348600, roi: 15.6 },
  { nome: "Caminhoneiro Autônomo", canal: "Meta Ads", invest: 28600, leads: 286, vendas: 58, receita: 492800, roi: 17.2 },
  { nome: "Frotistas Premium", canal: "Meta Ads", invest: 18900, leads: 144, vendas: 32, receita: 281600, roi: 14.9 },
  { nome: "Linha Bosch - Remarketing", canal: "Google Ads", invest: 12200, leads: 96, vendas: 24, receita: 196800, roi: 16.1 },
];

export const leadsTabela = [
  { empresa: "Transportadora Andorinha", nome: "Marcos Oliveira", tel: "(11) 98421-3344", cidade: "Campinas/SP", canal: "Google Ads", data: "12/06", resp: "Rafael Andrade", status: "Em atendimento" },
  { empresa: "Frota Caminhões RS", nome: "Beatriz Lopes", tel: "(51) 99812-4521", cidade: "Porto Alegre/RS", canal: "Meta Ads", data: "12/06", resp: "Carlos Mendonça", status: "Novo" },
  { empresa: "Diesel Express MG", nome: "Anderson Pires", tel: "(31) 99745-1188", cidade: "Belo Horizonte/MG", canal: "Indicação", data: "11/06", resp: "Patrícia Souza", status: "Qualificado" },
  { empresa: "Rodopeças Norte", nome: "Lucas Ferreira", tel: "(92) 98112-2233", cidade: "Manaus/AM", canal: "WhatsApp", data: "11/06", resp: "Fernanda Costa", status: "Em atendimento" },
  { empresa: "Mecânica Diesel Sul", nome: "Ricardo Almeida", tel: "(48) 99834-7711", cidade: "Florianópolis/SC", canal: "Orgânico", data: "10/06", resp: "Carlos Mendonça", status: "Proposta enviada" },
  { empresa: "Posto Estrada Real", nome: "Camila Vieira", tel: "(31) 98421-9988", cidade: "Juiz de Fora/MG", canal: "Google Ads", data: "10/06", resp: "Patrícia Souza", status: "Qualificado" },
  { empresa: "Auto Diesel Premium", nome: "Daniel Ribeiro", tel: "(11) 97712-4456", cidade: "São Paulo/SP", canal: "Google Ads", data: "09/06", resp: "Rafael Andrade", status: "Proposta enviada" },
  { empresa: "Frota AgroSP", nome: "Henrique Tavares", tel: "(16) 99812-3322", cidade: "Ribeirão Preto/SP", canal: "Indicação", data: "09/06", resp: "Juliana Marques", status: "Novo" },
];

export const funilEtapas = [
  { id: "lead", titulo: "Lead recebido", cor: "var(--color-chart-2)" },
  { id: "contato", titulo: "Primeiro contato", cor: "var(--color-chart-4)" },
  { id: "orcamento", titulo: "Orçamento enviado", cor: "var(--color-chart-1)" },
  { id: "negociacao", titulo: "Negociação", cor: "var(--color-warning)" },
  { id: "fechamento", titulo: "Fechamento", cor: "var(--color-success)" },
  { id: "posvenda", titulo: "Pós-venda", cor: "var(--color-info)" },
];

export const funilCards: Record<string, Array<{empresa: string; contato: string; origem: string; valor: string; resp: string; ultima: string; produtos: string}>> = {
  lead: [
    { empresa: "Transportadora Andorinha", contato: "Marcos Oliveira", origem: "Google Ads", valor: "R$ 24.800", resp: "Rafael A.", ultima: "há 2h", produtos: "Bombas injetoras, bicos" },
    { empresa: "Frota Caminhões RS", contato: "Beatriz Lopes", origem: "Meta Ads", valor: "R$ 18.200", resp: "Carlos M.", ultima: "há 4h", produtos: "Turbinas, intercoolers" },
    { empresa: "Rodopeças Norte", contato: "Lucas Ferreira", origem: "WhatsApp", valor: "R$ 32.100", resp: "Fernanda C.", ultima: "há 6h", produtos: "Kit injeção Bosch" },
  ],
  contato: [
    { empresa: "Diesel Express MG", contato: "Anderson Pires", origem: "Indicação", valor: "R$ 48.500", resp: "Patrícia S.", ultima: "ontem", produtos: "Linha Cummins ISX" },
    { empresa: "Posto Estrada Real", contato: "Camila Vieira", origem: "Google Ads", valor: "R$ 12.400", resp: "Patrícia S.", ultima: "ontem", produtos: "Filtros, lubrificantes" },
  ],
  orcamento: [
    { empresa: "Mecânica Diesel Sul", contato: "Ricardo Almeida", origem: "Orgânico", valor: "R$ 64.300", resp: "Carlos M.", ultima: "há 2 dias", produtos: "Bombas VE, reparos" },
    { empresa: "Auto Diesel Premium", contato: "Daniel Ribeiro", origem: "Google Ads", valor: "R$ 41.700", resp: "Rafael A.", ultima: "há 1 dia", produtos: "Common Rail completo" },
    { empresa: "Frota AgroSP", contato: "Henrique Tavares", origem: "Indicação", valor: "R$ 88.200", resp: "Juliana M.", ultima: "há 3h", produtos: "Linha agrícola MWM" },
  ],
  negociacao: [
    { empresa: "Logística Trans-Brasil", contato: "Sérgio Nunes", origem: "Google Ads", valor: "R$ 142.500", resp: "Rafael A.", ultima: "há 5h", produtos: "Contrato anual frota" },
    { empresa: "Transportes Vale Verde", contato: "Mariana Castro", origem: "Meta Ads", valor: "R$ 76.800", resp: "Juliana M.", ultima: "ontem", produtos: "Bombas + bicos linha pesada" },
  ],
  fechamento: [
    { empresa: "Frota Bertin Cargas", contato: "Paulo Vasconcelos", origem: "Indicação", valor: "R$ 218.400", resp: "Rafael A.", ultima: "há 1h", produtos: "Kit revisão 50 caminhões" },
    { empresa: "Diesel Master MG", contato: "Renata Borges", origem: "Google Ads", valor: "R$ 94.200", resp: "Patrícia S.", ultima: "há 3h", produtos: "Linha Scania completa" },
  ],
  posvenda: [
    { empresa: "Transportadora Estrela", contato: "Felipe Moreira", origem: "WhatsApp", valor: "R$ 56.300", resp: "Fernanda C.", ultima: "há 2 dias", produtos: "Garantia + reposição" },
  ],
};

export const orcamentos = [
  { num: "ORC-2025-1842", cliente: "Logística Trans-Brasil", valor: "R$ 142.500", resp: "Rafael Andrade", status: "Negociação", data: "12/06" },
  { num: "ORC-2025-1841", cliente: "Frota Bertin Cargas", valor: "R$ 218.400", resp: "Rafael Andrade", status: "Aprovado", data: "12/06" },
  { num: "ORC-2025-1840", cliente: "Diesel Master MG", valor: "R$ 94.200", resp: "Patrícia Souza", status: "Aprovado", data: "11/06" },
  { num: "ORC-2025-1839", cliente: "Mecânica Diesel Sul", valor: "R$ 64.300", resp: "Carlos Mendonça", status: "Enviado", data: "11/06" },
  { num: "ORC-2025-1838", cliente: "Auto Diesel Premium", valor: "R$ 41.700", resp: "Rafael Andrade", status: "Enviado", data: "10/06" },
  { num: "ORC-2025-1837", cliente: "Frota AgroSP", valor: "R$ 88.200", resp: "Juliana Marques", status: "Negociação", data: "10/06" },
  { num: "ORC-2025-1836", cliente: "Transportes Vale Verde", valor: "R$ 76.800", resp: "Juliana Marques", status: "Pedido", data: "09/06" },
  { num: "ORC-2025-1835", cliente: "Rodopeças Norte", valor: "R$ 32.100", resp: "Fernanda Costa", status: "Rascunho", data: "09/06" },
];

export const pedidos = [
  { num: "PED-9821", cliente: "Frota Bertin Cargas", valor: "R$ 218.400", status: "Separação", data: "12/06" },
  { num: "PED-9820", cliente: "Diesel Master MG", valor: "R$ 94.200", status: "Faturamento", data: "12/06" },
  { num: "PED-9819", cliente: "Transportes Vale Verde", valor: "R$ 76.800", status: "Enviado", data: "11/06" },
  { num: "PED-9818", cliente: "Logística Trans-Brasil", valor: "R$ 142.500", status: "Enviado", data: "11/06" },
  { num: "PED-9817", cliente: "Transportadora Estrela", valor: "R$ 56.300", status: "Entregue", data: "10/06" },
  { num: "PED-9816", cliente: "Mecânica Pesada Norte", valor: "R$ 38.900", status: "Entregue", data: "10/06" },
  { num: "PED-9815", cliente: "Frota Agrícola Cerrado", valor: "R$ 112.700", status: "Faturamento", data: "09/06" },
];

export const conversasWhats = [
  { nome: "Marcos Oliveira", empresa: "Transp. Andorinha", ultima: "Bom dia! Vocês têm bomba injetora Bosch p/ Scania R450?", hora: "09:42", unread: 2, online: true },
  { nome: "Beatriz Lopes", empresa: "Frota Caminhões RS", ultima: "Preciso de orçamento urgente para 8 turbinas...", hora: "09:18", unread: 1, online: true },
  { nome: "Anderson Pires", empresa: "Diesel Express MG", ultima: "Obrigado! Vou conversar com a equipe e retorno", hora: "08:55", unread: 0, online: false },
  { nome: "Lucas Ferreira", empresa: "Rodopeças Norte", ultima: "Foto do bico injetor anexada", hora: "08:30", unread: 3, online: true },
  { nome: "Camila Vieira", empresa: "Posto Estrada Real", ultima: "Combinado, aguardo a nota fiscal", hora: "ontem", unread: 0, online: false },
  { nome: "Daniel Ribeiro", empresa: "Auto Diesel Premium", ultima: "Vocês entregam em São Paulo capital amanhã?", hora: "ontem", unread: 0, online: false },
  { nome: "Henrique Tavares", empresa: "Frota AgroSP", ultima: "Perfeito, pode emitir o pedido", hora: "ontem", unread: 0, online: true },
];

export const mensagens = [
  { from: "Marcos Oliveira", text: "Bom dia! Vocês têm bomba injetora Bosch p/ Scania R450 ano 2019?", hora: "09:38", me: false },
  { from: "Você", text: "Bom dia Marcos! Temos sim, bomba Bosch PE 0445020XXX em estoque. Quantas unidades?", hora: "09:40", me: true },
  { from: "Marcos Oliveira", text: "Preciso de 3 unidades + 12 bicos injetores", hora: "09:41", me: false },
  { from: "Marcos Oliveira", text: "Consegue me passar valor com frete pra Campinas?", hora: "09:42", me: false },
  { from: "Você", text: "Claro! Vou montar o orçamento agora e te envio em 10 min. Pagamento à vista ou faturado?", hora: "09:43", me: true },
];

export const evolucaoVendas = Array.from({ length: 12 }, (_, i) => ({
  semana: `S${i + 1}`,
  vendas: 280 + Math.round(Math.sin(i / 2) * 60 + i * 12),
}));
