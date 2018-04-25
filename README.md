# chatbot-vue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## Testing

> Você pode adicionar mensagens no arquivo <a href="https://github.com/fabioxd20/ga-solutions-bvchat-view/blob/development/src/config/config.js">configs.js</a> no atributo 'props'
> Como funciona:
``` bash
    {
        id: '1',
        message: 'Exemplo de mensagem',
        next: '2'
    },
    {
        id: '2',
        message: 'Exemplo de mensagem',
        next: null
    },
```

``` bash
> id: ID da mensagem. Usado para identificar as pensagens.
> message: A mensagem que deseja exibir.
> next: Campo indicando a próxima mensagem. null para ser a última menssagem.
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
