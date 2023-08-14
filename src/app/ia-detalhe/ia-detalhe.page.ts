import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ia-detalhe',
  templateUrl: './ia-detalhe.page.html',
  styleUrls: ['./ia-detalhe.page.scss'],
})
export class IaDetalhePage implements OnInit {
  ia:any;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state) {
        this.ia = getNav.extras.state['paramIa'];
      }
    });
  }

}