import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaudeDetalhePage } from './saude-detalhe.page';

const routes: Routes = [
  {
    path: '',
    component: SaudeDetalhePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaudeDetalhePageRoutingModule {}
