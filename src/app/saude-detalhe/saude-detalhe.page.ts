import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saude-detalhe',
  templateUrl: './saude-detalhe.page.html',
  styleUrls: ['./saude-detalhe.page.scss'],
})
export class SaudeDetalhePage implements OnInit {
  saude:any;
  
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const getNav = this.router.getCurrentNavigation();
      if (getNav?.extras.state) {
        this.saude = getNav.extras.state['paramSaude'];
      }
    });
  }}
