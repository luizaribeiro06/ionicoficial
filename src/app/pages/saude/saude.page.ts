import { Component} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import {Saude} from '../model/Saude';

@Component({
  selector: 'app-saude',
  templateUrl: './saude.page.html',
  styleUrls: ['./saude.page.scss'],
})
export class SaudePage  {
saude: any;
  constructor(public router: Router) {}

  listaSaude: Saude[] = [
    {
      nome: 'Aplicativo Saúde Já é integrado à plataforma e-Cidadão.',
      data: '16/08/2023',
      classificacao: 8,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142574445656023091/IMG_7806.jpg',
      extra: [ 'Saúde', 'e-Cidadão' ],
      pagina: '/saude',
      favorito: false,
      titulo: "Aplicativo Saúde Já é integrado à plataforma e-Cidadão.",
      paragrafo1: "As soluções desenvolvidas pelo Instituto das Cidades Inteligentes (ICI) para a Prefeitura de Curitiba continuam recebendo novidades para facilitar o acesso e a segurança do cidadão aos serviços públicos municipais. Desde a última terça-feira (08), o aplicativo Saúde Já é o mais novo serviço do município a integrar a plataforma e-Cidadão. 'A integração atende a uma determinação municipal de unificar todos os serviços e traz facilidade para o cidadão, que terá apenas um login e senha para acessar o aplicativo Saúde Já e os demais serviços da Prefeitura pelo e-Cidadão', conta a secretária municipal da Saúde de Curitiba, Beatriz Battistella.",
      subtitulo:"Por que foi criado? ", 
      paragrafo2:"O sistema e-Cidadão foi desenvolvido com o objetivo de criar uma base única de dados cadastrais para integrar sistemas e portais vinculados à Prefeitura de Curitiba. Assim, por meio de CPF e senha, cidadãos curitibanos ou não podem utilizar serviços ou acessar informações importantes por meio de variadas plataformas. “Integrar os sistemas e aplicações da Prefeitura que utilizam dados pessoais faz parte da política municipal de transformação digital. Assim, fortalecemos a cidade inteligente que Curitiba é”, afirma o secretário municipal de Administração, Gestão de Pessoal e Tecnologia da Informação, Alexandre Jarschel de Oliveira. Com a integração do aplicativo Saúde Já, o sistema e-Cidadão, que reúne mais de 1,2 milhão de usuários, passa a contar com 37 aplicações disponíveis na ferramenta."
    },
    {
      nome: 'Novas tecnologias na Casa do Idoso',
      data: '15/08/2023',
      classificacao: 9,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142574876134215780/IMG_7807.jpg?width=404&height=468',
      extra: [ 'Saúde', 'Casa do Idoso' ],
      pagina: '/idoso',
      favorito: false,
      titulo: "Customer Experience na saúde: Grupo Vitus lança app para digitalizar as jornadas dos pacientes.",
      paragrafo1: "Especializadas na saúde músculo-esquelética, as clínicas CREB e Orthoberg, no Rio, e COT, em São Paulo, já estão com o aplicativo em funcionamento; ferramenta busca facilitar agendamento online. Segundo um estudo realizado pela Doctor.com nos Estados Unidos, a facilidade para o agendamento das consultas é o segredo para uma avaliação alta na experiência ambulatorial segundo 60% dos pacientes consultados. Esse é o objetivo dos aplicativos “Portal do Paciente” recém-lançados nas clínicas CREB, Orthoberg e COT, do Grupo Vitus: aumentar a interação com os pacientes e melhorar sua experiência durante a jornada de agendamento. Especializadas em Ortopedia, Fisioterapia e Fisiatria no Rio de Janeiro (CREB, com mais de 40 anos de tradição, e Orthoberg) e em São Paulo (COT, Clínica Ortopédica do Tatuapé), as marcas do Grupo Vitus buscam ainda a abertura de novos canais de contato, atração e fidelização dos pacientes com a novidade. Já no viés do negócio, os aplicativos chegam para, além de trazer praticidade para o agendamento online, digitalizar a Jornada dos pacientes, mantendo a humanização dos atendimentos.",
      subtitulo:"Como acessar?", 
      paragrafo2:"Disponíveis nas lojas de aplicativo para Android (IOS em processo), os apps são integrados com as agendas do software de gestão, com informações de preparo dos exames. Neles, os pacientes podem enviar documentos com praticidade, o que irá ajudar a descongestionar os canais de atendimento e oferecer autonomia para os pacientes agendarem suas consultas 24h por dia, 7 dias por semana. Dessa forma, o Grupo Vitus busca escalar sua operação através do digital, melhorar a gestão das agendas e reduzir custos operacionais - já que um paciente digital custa em média 35% menos do que em outras modalidades. “Com uma interface intuitiva e segura, tanto na versão web, quanto na versão móvel para celular, o Portal do Paciente é um excelente estímulo para que os pacientes migrem para o universo digital”, finaliza Rodrigues."
    },
    {
      nome: 'TIM avança na área de saúde digital com app Tutti Saúde.',
      data: '17/08/2023',
      classificacao: 10,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142575405920948254/IMG_7808.jpg',
      extra: [ 'Saúde', 'Homem de Gelo' ],
      pagina: '/tim',
      favorito: false,
      titulo: "TIM avança na área de saúde digital com app Tutti Saúde.",
      paragrafo1: "Após anunciar o acordo com o Grupo Cartão de TODOS, em fevereiro, a TIM Brasil está lançando a primeira oferta de saúde conectada, por meio do aplicativo Tutti Saúde. Inicialmente disponível no Rio de Janeiro e Bahia, usuários dos planos TIM Pré Top (pré-pago) e TIM Black Empresas (pequenas e médias empresas) terão uma consulta de telemedicina por mês e descontos de até 80% em medicamentos. Já aqueles que quiserem uma assistência de saúde ainda mais completa poderão contratar assinaturas com mensalidades a partir de R$ 9,99, disponíveis para toda a base de clientes nesses Estados, incluindo também planos pós-pagos e controle. “Buscamos modelos de negócios que nos unam a empresas referências em seus mercados e, principalmente, agreguem valor real para nossos usuários. Hoje, existem mais de 165 milhões de pessoas no Brasil sem plano de saúde, o que corresponde a aproximadamente 80% da população total do país. Estamos entregando benefícios muito importante para qualquer perfil de usuário com essa parceria”, pontuou Renato Ciuchini, VP de Novos Negócios e Inovação da TIM. O VP de Receitas da operadora, Fabio Avellar, complementa ressaltando o protagonismo da TIM no mercado móvel: “É evidente o poder de inclusão do celular. Os usuários têm, cada vez mais, acesso a serviços essenciais na palma da mão. Queremos aumentar constantemente esse leque com as parcerias que buscamos em diversas áreas.",
      subtitulo:"Como utilizar o aplicativo? ", 
      paragrafo2:"Para utilizar os benefícios exclusivos, clientes dos planos TIM Pré Top e usuários dos planos TIM Black Empresas deverão baixar o app Tutti Saúde e fazer seu cadastro. No pré-pago, uma consulta por telemedicina será liberada mensalmente desde que o cliente faça uma recarga de R$ 15 ou mais. Para o segmento de pequenas e médias empresas, basta que a linha do usuário final esteja ativa no momento de uso dos serviços. Ainda no app, os clientes têm acesso ao cartão virtual Tutti VidaLink, que deverá ser apresentado na rede de farmácia conveniadas para a compra de medicamentos com desconto. A navegação no Tutti Saúde Conectada, incluindo as consultas online, não é descontada do pacote de dados dos planos. As assinaturas, por sua vez, estão disponíveis para clientes de todos os planos, incluindo pós-pagos e controle. Serão quatro ofertas, com valores entre R$ 9,99 e R$ 29,99 mensais, incluindo até quatro beneficiários nos planos família."
    },
    {
      nome: 'CAR-T: Einstein lança aplicativo gratuito para profissionais de saúde.',
      data: '13/08/2023',
      classificacao: 8,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142575779524390963/IMG_7809.jpg?width=710&height=468',
      extra: [ 'Saúde', 'Einstein' ],
      pagina: '/einstein',
      favorito: false,
      titulo: "CAR-T: Einstein lança aplicativo gratuito para profissionais de saúde.",
      paragrafo1: "Todos os dias são feitas novas descobertas na área da medicina – e, por isso, os profissionais da saúde precisam se manter atualizados. Em uma rotina intensa, atualmente, a conectividade com plataformas de educação em saúde facilita o acesso às novidades.",
      subtitulo:"Qual foi o objetivo do aplicativo?", 
      paragrafo2:"Com o propósito de prover conhecimento e atuar como aliado de profissionais da saúde em uma área promissora da hematologia, o Einstein lançou o Cartlog Terapia Celular, aplicativo sobre CAR-T Cell que reúne informações para manejo de pacientes e protocolos com score de monitoramento após infusão, já que as complicações do CAR-T podem ser muito graves se não conduzidas adequadamente. “O ‘Cartlog Terapia Celular’ chega para fomentar um cuidado seguro e de qualidade para pacientes e democratizar informações de extrema relevância a profissionais que atuem ou pretendam atuar na área”, comenta o Coordenador de Hematologia e Transplante de Medula Óssea do Einstein, Nelson Hamerschlak."
    },  
    {
      nome: 'Apple apresenta novo app Diário e levará Saúde redesenhado ao iPad.',
      data: '14/08/2023',
      classificacao: 7,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142576262863392819/IMG_7810.jpg?width=334&height=468',
      extra: [ 'IA', 'apple' ],
      pagina: '/apple',
      favorito: false,
      titulo: "Apple apresenta novo app Diário e levará Saúde redesenhado ao iPad.",
      paragrafo1: "De acordo com a Apple, as sugestões são escolhidas de modo inteligente e tomam como base atividades recentes do usuário — como fotos, pessoas, lugares e até mesmo treinos. Facilitando a criação de textos, o app ainda conta com um sistema de notificações agendadas para ajudar o usuário a criar o hábito de escrever. Protegido por criptografia de ponta a ponta, o Diário possui mecanismos de bloqueio — provavelmente, semelhante ao presente no app Notas —, o que possibilitará que apenas você tenha acesso aos seus textos, caso assim prefira. A Apple também disponibilizou a nova API1 Sugestões para Escrever no Diário para que desenvolvedores de terceiros integrem seus apps ao novo software e enviem sugestões de conteúdo para o Diário.",
      subtitulo:"Melhore seus hábitos de Saúde também no iPad.", 
      paragrafo2:"Um dos apps já tradicionais do iPhone que não havia sido portado para o iPad (alô, Calculadora…), o Saúde dará aos usuários do tablet da Maçã uma nova forma de ver seus dados de saúde com ricos detalhes. Ele foi completamente otimizado para a tela maior do iPad e trouxe algumas novidades em termo de interface, como um novo visual para a aba Resumo — que é onde ficam os Favoritos, as Tendências e os Destaques. Estão no app Saúde para iPad recursos já conhecidos dos usuários do iPhones, como o gerenciamento de medicamentos, o acompanhamento de ciclo, registro de emoções e humor, prontuários de atendimento, etc. Com a chegada do app ao iPadOS, o HealthKit agora também ficará disponível para desenvolvedores do sistema operacional — o que significa que apps/acessórios de terceiros logo poderão se integrar ao Saúde no iPad."
    }
    
  ];


  exibirSaude(saude: Saude){
    const navigationExtras: NavigationExtras = {state:{paramSaude:saude}};
    this.router.navigate(['saude-detalhe'], navigationExtras); 
  }

}

