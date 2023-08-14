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

    }
  ];


  exibirIa(ia: IIa){
    const navigationExtras: NavigationExtras = {state:{paramIa:ia}};
    this.router.navigate(['ia-detalhe'], navigationExtras); 
  }

}

