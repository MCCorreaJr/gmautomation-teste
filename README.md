# gmautomation-teste
Descrição

Este é um projeto de automação de testes utilizando Cypress para execução de testes end-to-end e APIs.
O projeto também conta com o relatório de execução gerado pelo Mochawesome.

# Tecnologias Utilizadas

Cypress - Framework de testes end-to-end.

Mochawesome - Relatório detalhado para os testes.

Mochawesome-Merge - Mescla múltiplos relatórios de execução.

Mochawesome Report Generator - Geração de relatórios em HTML e JSON.

# Configuração e Instalação

1. Clonar o repositório:
   git clone https://github.com/seu-usuario/gmautomation.git
   cd gmautomation

2. Instalar dependências:
   npm install

# Executando os Testes

# Para abrir a interface interativa do Cypress:
    npx cypress open

# Para executar em modo headless:
    npx cypress run

# Geração de Relatório
  Os relatórios são gerados automaticamente na pasta cypress/reports. Para mesclar os relatórios e gerar uma versão consolidada:
  
    npx mochawesome-merge cypress/reports/*.json -o cypress/reports/merged-report.json
    npx mochawesome-report-generator cypress/reports/merged-report.json


# Teste de Carga Jmeter

Foi realizado o teste de carga na API jsonplaceholder.typicode.com/users método POST.
foi utilizado o body abaixo:
{
    "id": 11,
    "name": "Teste USER",
    "username": "UTeste",
    "email": "Testee@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

# Segue resultado do teste:

Rótulo           | #Amostras |   Média  | Min. | Máx.  | Desvio Padrão |  % de Erro   | Vazão     |   KB/s   |   Sent KB/sec |  Média de Bytes
Requisição HTTP  |    1100   |    315   | 136  | 15562 | 588,91        |   0,00%      | 165,5/sec |   235,45 |   129,47      |   1456,6 
