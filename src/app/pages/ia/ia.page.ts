import {Component} from '@angular/core';
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
      nome: 'Tinder da pecuária: aplicativo ajuda o produtor dar match em bovinos.',
      data: '10/08/2023',
      classificacao: 8,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142573933942554764/IMG_7805.jpg',
      extra: [ 'IA', 'Tinder animal' ],
      pagina: '/robos',
      favorito: false,
      titulo: "Tinder da pecuária: aplicativo ajuda o produtor dar match em bovinos.",
      paragrafo1: "A Embrapa e a Associação Nacional de Criadores Herd-Book Collares (ANC) desenvolveram uma ferramenta informatizada para ajudar o pecuarista a selecionar os cruzamentos entre os touros reprodutores e as vacas matrizes, de forma a definir o melhor acasalamento para gerar progênies com características específicas desejadas pelo pecuarista. A tecnologia vai ser lançada durante a 46ª edição da Expointer, em Esteio (RS), de 26 de agosto a 3 de setembro. O aplicativo permitirá que o criador selecione suas matrizes com base em informações das avaliações genéticas atualizadas, inclusive aprimoradas pela genômica quando for o caso, e escolha possíveis reprodutores para a cruza, tanto dentro de seu rebanho quanto entre touros de outros pecuaristas ou de centrais de inseminação. Assim, o produtor poderá visualizar quais resultados os cruzamentos irão gerar em relação a cada uma das DEPs (diferença esperada na progênie) disponíveis pelo programa de melhoramento genético da ANC (Programa de Melhoramento de Bovinos de Carne, Promebo).",
      subtitulo:"Como funciona a calculadora?", 
      paragrafo2:"“A Calculadora permite que o criador selecione as matrizes que ele quer cruzar com os reprodutores, tanto dele como de outros que tenham sêmen disponível para inseminação artificial. Assim, será possível prever qual vai ser o resultado de cada um dos touros que ele escolher, com as vacas que ele tem. Com isso, o criador vai saber o desempenho esperado nos filhos desse acasalamento e, comparando cada um dos acasalamentos, ele pode escolher qual o mais adequado”, explica Fernando Cardoso, chefe-geral da Embrapa PecuáriaSul. Conforme Cardoso, a Calculadora também permite prever e evitar resultados negativos nos acasalamentos. “O pecuarista pode escolher características para evitar que os animais tenham um desempenho desfavorável. Por exemplo, um animal com peso ao nascer muito alto, que pode dar problema de parto, um animal que tenha o umbigo ou o prepúcio do macho muito comprido, e pode dar lesão, a questão da ausência de pigmentação ocular para as raças Hereford e Braford, etc. Então ele pode evitar um desempenho ruim em características importantes, o que chamamos de caracterizar o nível de problema esperado e as chances de descarte involuntário dos animais que serão gerados. Assim, conseguimos minimizar o nível de problema e maximizar os índices e o valor genético dos animais”, destaca Cardoso."
    },
    {
      nome: 'Aria, a inteligência artificial nativa do navegador Opera, chega para iOS',
      data: '14/08/2023',
      classificacao: 9,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142572162897682522/IMG_7802.webp?width=750&height=468',
      extra: [ 'IA', 'Opera' ],
      pagina: '/aria',
      favorito: false,
      titulo: "Divulgação do App",
      paragrafo1: "A Opera divulgou, nesta quarta-feira (16), que a inteligência artificial Aria chegou para todos os usuários do navegador Opera no iOS. A IA é uma parceria entre a Opera e a OpenAI e oferece serviços de IA generativa gratuitamente aos usuários. De acordo com a empresa, o serviço é aprimorado pela arquitetura Composer, que concede aos usuários acesso a resultados da web em tempo real. Segundo Lin Son, a co-CEO da Opera, a Aria já ultrapassou a marca de 1 milhão de usuários. “Estamos testemunhando um entusiasmo dos usuários pela ferramenta de IA, especialmente a Aria. Como resultado, estamos felizes em estender a ferramenta de IA da Opera aos nossos usuários do iOS“. Com a chegada da ferramenta aos dispositivos iOS, a empresa afirma ser a primeira companhia a oferece IA generativa gratuitamente aos usuários em suas principais plataformas. ",
      subtitulo:"Navegador rápido e seguro para iOS", 
      paragrafo2:"O navegador Opera para iOS oferece aos usuários navegação de qualidade com foco em segurança. O browser possui bloqueador de anúncios integrado, além da ferramenta Prevenção Inteligente de Rastreamento da Apple, que bloqueia cookies de rastreamento de terceiros e diálogos de cookies. Usuários interessados em navegar com o Opera e utilizar a inteligência artificial Aria, nos dispositivos iOS, podem acessar este link e baixar o navegador diretamente no seu dispositivo. Para utilizar a IA no browser basta acessar o aplicativo, logar na sua conta Opera e pronto! Você já estará apto a desfrutar das facilidades promovidas pela IA da Opera no iOS."
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
      nome: 'Remini',
      data: '13/08/2023',
      classificacao: 8,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142572553576128572/IMG_7803.jpg',
      extra: [ 'IA', 'Remini' ],
      pagina: '/remini',
      favorito: false,
      titulo: "Remini: fotos de bebês criadas por inteligência artificial ",
      paragrafo1: "Imagens que simulam como você ficaria grávida ou como seria seu filho ou filha têm viralizado nas redes sociais. Os registros são criados no aplicativo Remini que, usando inteligência artificial (IA), consegue gerar diversas situações quando a pessoa envia os seus registros fotográficos originais. A ferramenta também vem sendo testada por alguns famosos, como Viih Tube, Pequena Lo e Virginia Fonseca. Disponível para Android e iPhone (iOS), para usar esse recurso dentro do app é preciso desembolsar R$ 50,90 semanais (versão Pro). Mas o Remini permite testar o recurso por até três dias sem pagar nada. Além das opções que estão 'trendando', a IA pode gerar você de noiva, se formando na universidade, de uniforme policial, modelando em uma grande avenida, com um corpo musculoso e mais.",
      subtitulo:"Como criar fotos que simulam gravidez ou bebês", 
      paragrafo2:"Antes de usar o app, vale ressaltar que nem todos os resultados são precisos. Por exemplo, no teste do g1 a mulher apareceu com três braços. Falhas também costumam aparecer nos dedos e nos dentes. Veja como criar: 1 - Após baixar o Remini no seu celular, toque na opção 'Fotos AI' na parte inferior do app; 2 - Escolha entre 8 e 12 fotos suas. O Remini considera imagens boas: 'selfies próximas, mesma pessoa, variedade de planos de fundo, expressões e ângulos de rosto'; 3 - Toque em 'Enviar suas selfies' e escolha 'Biblioteca de fotos' ou 'Câmera' (para fazer novas selfies); 4 - Após enviar as fotos, toque em 'Continuar' e escolha seu gênero; 5 - Depois, escolha um modelo (bebê, grávida ou outro) e, então, toque em 'Use esta imagem modelo'; 6 - Caso não queira assinar o app, toque no botão de degustação: 'Ainda não tem certeza? Ativar o teste grátis' e 'Continuar'; 7 - Depois, é só aguardar o app criar a foto"
    },  
    {
      nome: 'Google utiliza inteligência artificial para resumir textos e reportagens. ',
      data: '12/08/2023',
      classificacao: 7,
      foto: 'https://media.discordapp.net/attachments/1135650904985579521/1142573563870724177/IMG_7804.jpg?width=831&height=467',
      extra: [ 'IA', 'Resumo' ],
      pagina: '/resumo',
      favorito: false,
      titulo: "Google utiliza inteligência artificial para resumir textos e reportagens. ",
      paragrafo1: "O Google agora passa a resumir textos extensos e reportagens por meio de IA para disponibilizar aos leitores. A inteligência analisa o texto e consegue selecionar as partes de maior relevância, entregando um breve resumo ao usuário. A inovação faz parte do Search Generative Experience (SGE), o braço de ferramentas que incluem inteligência artificial do Google, que inclui também o Bard, IA generativa da empresa. A ferramenta da vez foi chamada de “SGE while browsing” (ou “SGE durante a navegação”, em tradução livre). A ferramenta ainda inclui uma opção generativa nos resumos, dando opções de perguntas que são respondidas ao longo dos textos, dando como opção “Qual a distância da Rota 66?”, em um texto que fala sobre a rodovia, como exemplo. A ferramenta já está em fase de testes no aplicativo do Google em dispositivos móveis, e deve chegar nos próximos dias ao Chrome.",
      subtitulo:"Além de resumir, Google inclui cada vez mais IA em seus processos", 
      paragrafo2:"Em maio deste ano, o Google aproveitou seu evento anual para mostrar que o foco da empresa realmente está na inclusão de inteligência artificial em seus processos. Sendo utilizada já para criar textos, editar fotos e até com a criação da sua própria IA generativa, o Bard, que já está disponível em português no Brasil."
    }
    
  ];


  exibirIa(ia: IIa){
    const navigationExtras: NavigationExtras = {state:{paramIa:ia}};
    this.router.navigate(['ia-detalhe'], navigationExtras); 
  }

}

