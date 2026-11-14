/* ============================================================
   MELODIA · Mel e Própolis — configurações da loja
   Edite só este arquivo para mudar WhatsApp, preços e produtos.
   ============================================================ */

const LOJA = {
  nome: "Melodia Meliprodutos do Cerrado",

  // Número do WhatsApp que recebe os pedidos:
  // 55 + DDD + número, só algarismos. Exemplo: "5567999998888"
  whatsapp: "5562999344957",

  // Como o número aparece escrito no site
  whatsappExibicao: "(62) 99934-4957",

  // Texto sobre a entrega, mostrado no site
  entrega: "Entrega ou retirada combinada pelo WhatsApp.",

  // Rodapé (deixe "" para não mostrar)
  cnpj: "66.579.732/0001-96",
  instagram: "https://instagram.com/melodia.meliprodutos",

  // Formas de pagamento aceitas (aparecem na escolha do pedido)
  pagamentos: ["Pix", "Cartão na entrega", "Dinheiro"]
};

/* Para incluir um produto novo, copie um bloco { ... }, cole no fim
   da lista e troque os dados. Coloque a foto na pasta "img". */
const PRODUTOS = [
  {
    id: "mel-280",
    nome: "Mel 280 g",
    preco: 21.90,
    precoAntigo: 24.80,
    foto: "img/mel-280.jpg",
    fundo: "foto",
    selo: "Prático",
    categoria: "mel",
    descricao: "Mel de abelhas Apis na bisnaga de 280 g. Praticidade sempre à mão.",
    detalhes: "Bisnaga com tampa dosadora que evita desperdícios. Consuma misturado em água para melhor aproveitamento de seus benefícios nutricionais. Use também para adoçar chás, frutas, iogurtes e as receitas de sua preferência."
  },
  {
    id: "mel-500",
    nome: "Mel 500 g",
    preco: 34.80,
    precoAntigo: 38.70,
    foto: "img/mel-500.jpg",
    fundo: "foto",
    selo: "Mais vendido",
    categoria: "mel",
    descricao: "Mel de abelhas Apis na bisnaga de 500 g. Tamanho ideal para uma pequena família.",
    detalhes: "Bisnaga com tampa dosadora que evita desperdícios. Consuma misturado em água para melhor aproveitamento de seus benefícios nutricionais. Use também para adoçar chás, frutas, iogurtes e as receitas de sua preferência."
  },
  {
    id: "mel-1kg",
    nome: "Mel 1 kg",
    preco: 64.80,
    precoAntigo: 69.90,
    foto: "img/mel-1kg.jpg",
    fundo: "foto",
    selo: "Melhor custo-benefício",
    categoria: "mel",
    descricao: "Mel de abelhas Apis na bisnaga de 1 kg. Ideal para quem consome mel diariamente.",
    detalhes: "Bisnaga com tampa dosadora que evita desperdícios. Consuma misturado em água para melhor aproveitamento de seus benefícios nutricionais. Use também para adoçar chás, frutas, iogurtes e as receitas de sua preferência."
  },
  {
    id: "propolis-30",
    nome: "Própolis Verde Orgânica 20% · 30 ml",
    preco: 50.00,
    foto: "img/propolis.jpg",
    fundo: "foto",
    selo: "Imunidade",
    categoria: "propolis",
    aviso: "Extrato alcoólico concentrado a 20%",
    descricao: "Extrato alcoólico de própolis verde, concentrado a 20%. Protege sua saúde.",
    detalhes: "Complemento alimentar rico em compostos bioativos naturais. Sugestão de uso adulto: diluir de 15 a 20 gotas em água. Acrescente 1 colher de sopa de mel para potencializar sua ação. Consuma diariamente. Para melhor absorção pelo organismo, utilizar 40 minutos antes ou depois de se alimentar."
  }
];
