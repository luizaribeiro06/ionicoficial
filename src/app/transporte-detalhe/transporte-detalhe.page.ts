import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transporte-detalhe',
  templateUrl: './transporte-detalhe.page.html',
  styleUrls: ['./transporte-detalhe.page.scss'],
})
export class TransporteDetalhePage implements OnInit {
  transporte:any;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state) {
        this.transporte = getNav.extras.state['paramTransporte'];
      }
    });
  }}
