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
