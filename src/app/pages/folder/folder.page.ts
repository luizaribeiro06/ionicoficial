import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import {IIa} from '../model/IIa';


@Component({
  selector: 'app-folder',
  templateUrl: 'folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonicModule]
})

export class FolderPage implements OnInit {
  ia:any;
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    }

  constructor(
    private router: Router 
  ) { }

    exibirIa(ia: IIa){
    const navigationExtras: NavigationExtras = {state:{paramIa:ia}};
    this.router.navigate(['ia-detalhe'], navigationExtras); 
  }
}
