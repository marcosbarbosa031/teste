const config = {
  appconf: {
    name: "Bruno Vanderlei ChatBot"
  },
  steps: [
    {
      id: '1',
      message: 'Olá! Meu nome é Bruno, tudo bom?',
      next: '2'
    },
    {
      id: '2',
      message: 'Escolha a opção correspondente ao BANCO que você possui débitos:',
        next: '3'
    },
    {
      id: '3',
      message: ' --Escolha de bancos -- (TODO)',
      next: null
    }
  ]
}

export default config