import { Component} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router'
import {IIa} from '../model/IIa';

@Component({
  selector: 'app-ia',
  templateUrl: './ia.page.html',
  styleUrls: ['./ia.page.scss'],
})
export class IaPage  {
ia: any;
  constructor(public router: Router) {}

  listaIa: IIa[] = [
    {
      nome: 'Robôs',
      data: '10/08/2023',
      classificacao: 8,
      foto: 'https://www.techenet.com/wp-content/uploads/2023/08/Samsung-Inteligencia-artificial.jpg',
      extra: [ 'IA', 'Samsung' ],
      pagina: '/robos',
      favorito: false,
      titulo: "Samsung prepara revelação de robôs com capacidades de olfato e paladar",
      paragrafo1: "No próximo Tech Day da Samsung, agendado para outubro, a empresa sul-coreana planeia surpreender a todos com uma revelação que ninguém esperava. Eles avançaram muito nos seus processadores, e parece que agora estamos a falar de robôs com capacidades humanas. E não estamos a falar de qualquer capacidade, mas dos sentidos de olfato e paladar!",
      subtitulo:"Inovação no campo dos semicondutores", 
      paragrafo2:"A Samsung, já reconhecida mundialmente pelos seus smartphones, também é uma líder na produção de ecrãs e processadores. Com as recentes informações que vieram à tona, soubemos que a empresa conseguiu integrar sensores de cheiro e paladar nos seus processadores. Portanto, no Tech Day, teremos a oportunidade de ver robôs humanóides equipados com esses inovadores semicondutores. Não está claro se vamos ver esses robôs em ação, mas esperamos ver pelo menos algumas imagens ou vídeos destes humanóides exibindo essas novas capacidades."
    },
    {
      nome: 'Dispositivo reconhece sons',
      data: '14/08/2023',
      classificacao: 9,
      foto: 'https://s2-g1.glbimg.com/O0zs6GEAQC3WXzaOlYo_i3i86hg=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/K/3/fEcAm1Q7WwyFI7dmxkJA/jhoje-limpo-20230814-1315-frame-78786.jpeg',
      extra: [ 'IA', 'Curupira' ],
      pagina: '/curupira',
      favorito: false,
      titulo: "Curupira: dispositivo utiliza inteligência artificial para reconhecer sons que representam ameaça à floresta",
      paragrafo1: "A floresta amazônica vai ganhar um novo guardião: o Curupira. O aparelho já está em teste piloto na floresta da Universidade Estadual do Amazonas, em Manaus, onde a ideia nasceu. O dispositivo que ganhou o nome do ser mítico do folclore brasileiro conhecido por ser o guardião da floresta foi treinado para identificar sons anômalos, atípicos que identificam o perigo na floresta, como o som de motosserras, e notificar os gerenciadores para tomar medidas cabíveis.",
      subtitulo:"Segunda fase", 
      paragrafo2:"A segunda fase do projeto pretende expandir as capacidades do Curupira para identificar fumaça e vibrações, ampliando os parâmetros de alerta para atender queimadas e outros tipos de situações."
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
      nome: 'Deep Voice',
      data: '13/08/2023',
      classificacao: 8,
      foto: 'https://tm.ibxk.com.br/2023/08/01/01113717947178.jpeg?ims=1120x420',
      extra: [ 'IA', 'Voz' ],
      pagina: '/deepvoice',
      favorito: false,
      titulo: "IA que cria voz: como funciona a inteligência artificial da Deep Voice?",
      paragrafo1: "A inteligência artificial (IA) continua a nos surpreender com sua evolução e uma das áreas em que tem demonstrado um progresso surpreendente é a criação de voz! Uma das técnicas mais empolgantes é conhecida como Deep Voice, que permite à IA gerar vozes humanas extremamente realistas. Junto com a empolgação, a IA que cria voz também traz à tona diversas perguntas nas mentes das pessoas: Como gerar voz por inteligência artificial? Qual a melhor IA de voz? Há limites éticos para clonar a voz de alguém com IA? Se a curiosidade criou raízes por aí, venha conferir as respostas que encontramos sobre o incrível mundo do Deep Voice e demais tecnologias que estão revolucionando a forma como interagimos em sociedade!",
      subtitulo:"O que é Deep Voice?", 
      paragrafo2:"O Deep Voice é um modelo de aprendizado de máquina que simula a fala humana, usando rede neural com três ou mais camadas, para converter texto em fala ou transformar uma voz existente em uma nova voz com características diferentes, como timbre, entonação e velocidade. A base desse sistema é chamada de Deep Learning, um subconjunto do aprendizado de máquina que visa simular o comportamento do cérebro humano conforme descrito pelo International Business Machines Corporation (IBM). Essa tecnologia está presente em diversos produtos e serviços do nosso cotidiano, como assistentes digitais, controles remotos ativados por voz e detecção de fraudes em cartões de crédito, além de estar sendo aplicada em tecnologias emergentes como carros autônomos."
    },  
    {
      nome: 'Inteligência Artificial na moda',
      data: '14/08/2023',
      classificacao: 7,
      foto: 'https://revistaforum.com.br/u/fotografias/m/2023/8/14/f425x239-109843_124371_5050.png',
      extra: [ 'IA', 'Roupa' ],
      pagina: '/roupa',
      favorito: false,
      titulo: "Inteligência Artificial ajuda a descobrir se roupa serve: basta enviar uma foto",
      paragrafo1: "Já pensou verificar como uma camisa vendida online fica nas medidas exatas do seu corpo? E poder combiná-la com o que você tem no guarda-roupa? Essa é uma das aplicações comerciais da inteligência artificial generativa que já está em uso no Brasil, e vai além da geração de textos descritivos de produtos, imagens ou atendimento ao cliente.Outro exemplo que está sendo implementado esta semana no país é o uso de IA generativa no ensino a distância, auxiliando os professores na preparação e avaliação dos alunos em debates em salas de aula na internet. Nos bastidores dos negócios, a IA está avançando na identificação de informações específicas em contratos e análise de perfis. A IA que vem sendo utilizada para a provação de vestuário online é a Doris, IA generativa criada pela empresa brasileira Doris.mobi. Seu foco é no comércio eletrônico de vestuário, ela foi colocada para uso nas lojas online das marcas de moda masculina Zapalla e Reserva recentemente.",
      subtitulo:"Como funciona?", 
      paragrafo2:"Ao enviar uma foto de corpo inteiro de frente e de lado pelo aplicativo Zapalla, em apenas oito segundos o cliente pode se visualizar usando a roupa escolhida na tela. “Quando o cliente envia a foto, a IA generativa extrai todas as medidas do corpo, levando em consideração que pessoas com o mesmo peso, altura e idade podem ter formas diferentes”, explica Lucas Santos, diretor de tecnologia da Doris.Mobi. “O nível de acurácia é de mais de 98%, evitando surpresas no caimento da roupa, o que torna a ferramenta mais assertiva em relação às  opções que estão no mercado”. A Doris é capaz de gerar o tom de pele e partes do corpo do cliente que não estavam visíveis na foto original. Com isso, a pessoa consegue ver como ficaria com peças que mostram mais o corpo, como uma regata ou uma bermuda, mesmo que tenha enviado a foto usando uma calça até os pés.Nas palavras de Santos, “o modelo de e-commerce é muito antigo e alguém precisava redesenhar o processo de venda pela internet”. Ele é líder de uma equipe de 12 desenvolvedores que se dedicaram um ano e quatro meses para construir a arquitetura computacional da Doris “do zero”. Ele esclarece que a IA generativa foi treinada com milhões de peças diferentes para aprender as características centrais de cada peça e aquelas que não são importantes ao vestir cada pessoa no ambiente digital. Desde que a gigante do varejo online Amazon estreou, em meados dos anos 1990, essa nova ferramenta marca uma mudança importante em um setor que teve pouca inovação, segundo a avaliação de André Nowill, sócio-diretor da Pimenta Full, gestora de sites de venda on-line que tem a Zapalla entre seus clientes. Conforme o executivo da Doris.mobi, até agora, a Doris ajudou a aumentar a taxa de conversão de vendas online de 9% para 12% para os comerciantes que estão utilizando a ferramenta. Após as marcas masculinas, a empresa está negociando contratos com marcas de moda feminina, que possuem um catálogo mais amplo."
    },
    {
      nome: 'Deep Voice',
      data: '13/08/2023',
      classificacao: 8,
      foto: '',
      extra: [ 'IA', 'Voz' ],
      pagina: '/deepvoice',
      favorito: false,
      titulo: "",
      paragrafo1: "",
      subtitulo:"", 
      paragrafo2:""
    },  
    
  ];


  exibirIa(ia: IIa){
    const navigationExtras: NavigationExtras = {state:{paramIa:ia}};
    this.router.navigate(['ia-detalhe'], navigationExtras); 
  }

}

