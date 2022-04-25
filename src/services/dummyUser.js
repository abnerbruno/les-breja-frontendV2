export const dummyUser = {
  id: 1,
  nomeCompleto: "Bruno Abner Silva Santos - Mock",
  cpf: "47798740848",
  classificacao: "Rank B",
  email: "brunoAbner@gmail.com",
  senha: "12345",
  telefone: "97123-0887",
  dataNascimento: "02-08-1999",
  genero: "Masculino",
  status: "Ativo",

  enderecos: [
    {
      id: 1,
      longadouro: "Rua Salvador Rugiero",
      tipoLongadouro: "Residencia",
      tipoResidencia: "Residencia",
      numero: "19",
      bairro: "Vila Maluf",
      cidade: "Suzano",
      estado: "Sao Paulo",
      cep: "08685-060",
      pais: "Brasil",
      descricao: "Endereco 01",
    },
  ],
  cartoes: [
    {
      id: 1,
      numeroCartao: "1234567",
      codigoSeguranca: "1234",
      tipoConta: "Poupanca",
      bandeira: "Visa",
      descricao: "cartao Principal",
      nomeNoCartao: "null",
      validade: "null",
    },
  ],
  pedidos: [
    {
      id: 1,
      totalItens: 2,
      valorTotal: 130.92,
      frete: 50.0,
      status: "aguardando pagamento",
      dataCadastro: "2022-04-12",
      itemsDoPedido: [
        {
          id: 1,
          produto: {
            id: "1",
            quantidade: "10",
            valorDeVenda: "60.00",
            margemDeLucro: "8.00",
            nome: "Buffalo - Striploin 500ml",
            status: "Ativo",
            nomeFornecedor: "Três Lobos",
            descricao:
              "As cervejas artesanais são elaboradas por meio de um processo mais\ncuidadoso com foco em qualidade",
            dataCadastro: "2022-04-12",
            photo: "/img/11.jpg",
            categorias: [
              {
                id: "1",
                nome: "Artesanal",
                descricao: "Feita a Mão",
              },
            ],
          },
          quantidade: 1,
        },
      ],

      envio: {
        id: 1,
        longadouro: "Rua Salvador Rugiero",
        tipoLongadouro: "Residencia",
        tipoResidencia: "Residencia",
        numero: "19",
        bairro: "Vila Maluf",
        cidade: "Suzano",
        estado: "Sao Paulo",
        cep: "08685-060",
        pais: "Brasil",
        frete: 50.0,
        status: "Em Processo de Aprovação",
        dataCriacao: "2022-04-24",
      },

      pagamentos: [
        {
          id: 4,
          valorTotal: 221.64,
          formaPagamento: {
            id: 3,
            valor: 500.0,
            nomeNoCartao: "Bruno Abner",
            numeroCartao: "7654321",
            validade: "2022-04-24T00:00:00.000+00:00",
            codigoSeguranca: "4321",
            tipoConta: "Poupanca",
            bandeira: "Master Card",
            descricao: null,
          },
        },
      ],
    },
  ],
  cupoms: [],
  trocas: [],
};
