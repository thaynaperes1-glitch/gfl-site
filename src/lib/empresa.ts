export const empresa = {
  nome: 'GFL Service & Repair',
  razaoSocial: 'GFL Service & Repair Ltda',
  cnpj: '52.312.712/0001-40',
  endereco: {
    rua: 'Av. Feira de Santana',
    numero: '248',
    bairro: 'Jardim Vale do Sol',
    cidade: 'São José dos Campos',
    uf: 'SP',
    cep: '12238-000',
    completo: 'Av. Feira de Santana, 248 - Jardim Vale do Sol, São José dos Campos / SP, 12238-000'
  },
  contato: {
    telefone: '(12) 3933-4110',
    telefoneRaw: '+551239334110',
    whatsapp: '+55 12 98179-6079',
    whatsappRaw: '5512981796079',
    email: 'sac@gflrefrigeracao.com.br'
  },
  horario: {
    seg_sex: '08h às 17h',
    sab: '08h às 12h',
    completo: 'Seg-Sex 08h-17h, Sáb 08h-12h'
  },
  certificacoes: [
    'Centro de Serviços Autorizado Midea Blue Service',
    'Centro de Serviços Autorizado Carrier'
  ],
  areas: [
    'São José dos Campos',
    'Jacareí',
    'Taubaté',
    'Caçapava',
    'Pindamonhangaba',
    'Guaratinguetá',
    'Aparecida',
    'Caraguatatuba'
  ],
  regioes: [
    {
      nome: 'Vale do Paraíba',
      cidades: [
        'São José dos Campos',
        'Jacareí',
        'Taubaté',
        'Caçapava',
        'Pindamonhangaba',
        'Guaratinguetá',
        'Aparecida',
        'Caraguatatuba',
        'Ubatuba',
        'São Sebastião',
        'Ilhabela',
        'Cruzeiro',
        'Lorena',
        'Cachoeira Paulista',
        'Tremembé',
        'Roseira'
      ]
    },
    {
      nome: 'Região de Campinas',
      cidades: [
        'Campinas',
        'Itatiba',
        'Paulínia',
        'Sumaré',
        'Hortolândia',
        'Americana',
        'Santa Bárbara d\'Oeste',
        'Mogi Guaçu',
        'Mogi Mirim',
        'Águas de Lindóia',
        'Amparo',
        'Socorro',
        'Limeira',
        'Holambra',
        'Cosmópolis'
      ]
    }
  ],
  social: {
    google: 'https://g.page/r/...',
    instagram: 'https://instagram.com/gfl_service',
    facebook: 'https://facebook.com/gflrefrigeracao'
  },
  google: {
    rating: 4.7,
    reviewCount: 189
  },
  geo: {
    latitude: -23.255396550336005,
    longitude: -45.91516828873293
  }
};

export function whatsappLink(mensagem: string = 'Olá, vim pelo site da GFL e gostaria de mais informações.'): string {
  const encoded = encodeURIComponent(mensagem);
  return `https://wa.me/${empresa.contato.whatsappRaw}?text=${encoded}`;
}
