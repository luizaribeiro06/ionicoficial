import { Component} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import {Transporte} from '../model/Transporte';

@Component({
  selector: 'app-transporte',
  templateUrl: './transporte.page.html',
  styleUrls: ['./transporte.page.scss'],
})
export class TransportePage  {
transporte: any;
  constructor(public router: Router) {}

  listaTransporte: Transporte[] = [
    {
      nome: 'Novo aplicativo de transporte é lançado em BH para concorrer com Uber e 99.',
      data: '10/08/2023',
      classificacao: 8,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142631915015385170/IMG_7811-1.png',
      extra: [ 'IA', 'RepMov' ],
      pagina: '/Repmov',
      favorito: false,
      titulo: "Novo aplicativo de transporte é lançado em BH para concorrer com Uber e 99.",
      paragrafo1: "RepMov nasce com a promessa de ser mais atraente para motoristas, ao aplicar um desconto fixo de R$ 0,97 por corrida. Um novo aplicativo de transporte urbano está disponível em Belo Horizonte e Região Metropolitana. A promessa do RepMov, lançado na última semana, é ser mais atraente para os motoristas, ao aplicar um desconto fixo de R$ 0,97 por corrida. Atualmente, uma das principais queixas dos profissionais é que as plataformas mais populares não são transparentes em relação às taxas aplicadas, que costumam variar bastante. Para testes, a reportagem de O Tempo baixou o aplicativo, disponível para celulares Android, e encontrou um carro disponível em menos de um minuto. Há quatro modalidades do serviço, com diferentes preços: Rep 97, o mais barato, Premium, de valor  intermediário, Elite, o mais caro e confortável, além do Rosa, exclusivo para o público feminino. É possível agendar corridas ou pedir por meio da leitura de um QRCode, caso o carro esteja estacionado próximo a você. O pagamento pode ser feito por cartão, dinheiro, pix ou voucher. Pelos testes, deu para perceber que cancelar a corrida não é algo intuitivo no aplicativo.",
      subtitulo:"Já está funcionando?", 
      paragrafo2:"Segundo informações divulgadas pela marca no Instagram, é possível cadastrar até três motoristas por veículo, sendo que cada um deles terá acesso a um login e senha, que oferecerá informações individualizadas sobre os ganhos. O aplicativo está em sua versão beta e deve passar por ajustes, segundo a plataforma. Informações em https://bio.site/repmov. Ainda de acordo com a empresa, a plataforma conta com atendimento 24 horas através dos nossos canais de comunicação (whatsapp, instagram, e-mail, site) e aguarda feedback dos parceiros. 'Reconhecemos as melhorias que precisam ser efetuadas na versão que está disponível, e ressaltamos que as alterações necessárias serão realizadas para entregarmos um trabalho de muita excelência aos nossos clientes no geral, em nossa versão finalizada. Vamos continuar estudando o mercado e aprimorando nosso trabalho para oferecermos condições dignas e favoráveis de trabalho e uma assistência humanizada', disse a empresa."
    },
    {
      nome: 'Prefeitura de São Paulo lança aplicativo para transporte individual de passageiros.',
      data: '14/08/2023',
      classificacao: 9,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142632574192205925/IMG_7813.png?width=831&height=467',
      extra: [ 'IA', 'Prefeitura' ],
      pagina: '/prefeitura',
      favorito: false,
      titulo: "Prefeitura de São Paulo lança aplicativo para transporte individual de passageiros.",
      paragrafo1: "A Prefeitura de São Paulo, por meio da Secretaria Municipal de Mobilidade e Trânsito (SMT), anunciou o lançamento, na última quinta-feira (09/03), do MobizapSP, um aplicativo próprio para transporte individual de passageiros para concorrer com empresas como Uber e 99. O app de mobilidade urbana ainda não está rodando, pois está em fase de cadastro dos profissionais na plataforma. Após esse processo, o próximo passo será liberar o acesso para a população, que poderá baixar o aplicativo por meio dos sistemas operacionais Android e iOS.",
      subtitulo:"Tarifa fixa", 
      paragrafo2:"Um diferencial importante é que o MobizapSP não terá tarifa dinâmica, o que, segundo a prefeitura, pode tornar os preços mais baratos que os aplicativos privados durante horários de pico. Isso porque não haverá cobrança da chamada tarifa dinâmica. Já em relação aos motoristas, o órgão informou que a taxa de administração cobrada para operar a plataforma é fica, no valor de 10,95%, sendo que o motorista recebe 89,05% do valor pago pelo passageiro. A prefeitura não divulgou, ainda, os valores pagos por km rodado. A criação do appp é uma resposta da gestão pública da capital paulista em relação à regulamentação das empresas do transporte por aplicativo e de entregas, que está em discussão desde o ano passado."
    },
    {
      nome: 'Figurinha criada a partir de IA',
      data: '15/08/2023',
      classificacao: 7,
      foto: 'https://www.mundoconectado.com.br/wp-content/plugins/seox-image-magick/imagick_convert.php?width=910&height=568&format=webp&quality=91&imagick=uploads.mundoconectado.com.br/2023/08/15101926/WhatsAppBeta-Gerar-figurinhas-com-IA--912x569.jpg',
      extra: [ 'IA', 'Figurinha' ],
      pagina: '/ia',
      favorito: false,
      titulo: "WhatsApp: versão beta usa inteligência artificial para criar figurinhas",
      paragrafo1: "Nos últimos anos, poucos recursos agradaram tanto os usuários do WhatsApp como as figurinhas. Por causa disso a Meta quer ampliar ainda mais essa funcionalidade com um novo gerador de figurinhas, que permitirá que o usuário descreva para uma inteligência artificial uma imagem que ele quer enviar e crie automaticamente um sticker.",
      subtitulo:"Criar figurinhas com IA no WhatsApp", 
      paragrafo2:"Como apontado pelo WaBetaInfo, essa novidade começou a ser testada na última atualização do WhatsApp beta para Android. O recurso funcionará através de um novo atalho de ‘Criar’ aba de figurinhas. Quando o usuário selecionar a opção de criar um novo adesivo, o WhatsApp abrirá uma nova página onde o usuário irá descrever a figurinha que quer fazer e o app irá gerar uma com inteligência artificial: Para a criação da imagem a IA irá utilizar uma plataforma desenvolvida pela Meta, que promete contar com recursos para garantir a segurança e privacidade para o usuário do WhatsApp. A funcionalidade não irá gerar imagens com visual livre, as figurinhas serão geradas com o mesmo estilo gráfico, o que será facilmente reconhecido por quem está recebendo. Caso o usuário considere um sticker ofensivo, ele poderá denunciar a arte."
    },
    {
      nome: 'Novo aplicativo de transporte começa a operar em Foz do Iguaçu.',
      data: '13/08/2023',
      classificacao: 8,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142578381561540730/IMG_7814.jpg',
      extra: [ 'IA', 'Voz' ],
      pagina: '/guri',
      favorito: false,
      titulo: "Novo aplicativo de transporte começa a operar em Foz do Iguaçu.",
      paragrafo1: "O GURI é o novo aplicativo (app) de transporte e mobilidade urbana a operar em Foz do Iguaçu a partir desta quarta-feira, 24. A plataforma anunciou uma central local para administrar os serviços e incentivo a motoristas que se cadastrarem. O nome, Guri Tri, faz referência a usuário, motorista e plataforma, que devem manter equilíbrio para a eficiência da atividade. O app atua em 40 cidades na Região Sul do Brasil e reúne mais de 150 mil usuários, conforme a assessoria. Para os primeiros motoristas interessados na parceria, o GURI oferece taxa zero de repasse por tempo determinado. Os descontos serão progressivos e limitados a 20%, o que é considerado pelo aplicativo muito abaixo dos valores praticados, que chegam a 40%.",
      subtitulo:"Qual foi a ideia do app?", 
      paragrafo2:"A proposta do app é facilitar o acesso local e manter comunicação mais próxima para a melhoria contínua do serviço. Esse horizonte visa a evitar atrasos, cancelamentos, valores altos para o usuário e repasses baixos aos motoristas – motivos de reclamação da comunidade. O empreendedor Márcio Ferreira Bortolini afirma que decidiu apostar na plataforma a partir de sua experiência de usuário dos aplicativos de transporte. Ex-atleta, ele conta que viajou muito e pôde observar pontos favoráveis e negativos. “Resolvi colocar em prática, junto com familiares, essa ideia de empreender na tecnologia, de modo a melhorar o dia a dia das pessoas em Foz do Iguaçu”, explica. “Com uma central local para administrar os serviços oferecidos aqui”, pontua o ex-competidor e hoje instrutor de motovelocidade. O lançamento do GURI acontece nesta terça-feira, 23, às 19h, na ACIFI. Estão convidados para participar da solenidade motoristas de aplicativo e profissionais da imprensa, de acordo com a assessoria do aplicativo de mobilidade."
    }
    
  ];


  exibirTransporte(transporte: Transporte){
    const navigationExtras: NavigationExtras = {state:{paramTransporte:transporte}};
    this.router.navigate(['transporte-detalhe'], navigationExtras); 
  }

}

