import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';


@Component({
  selector: 'app-folder',
  templateUrl: 'folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonicModule]
})

export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
  }
}