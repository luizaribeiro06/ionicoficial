import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaudeDetalhePageRoutingModule } from './saude-detalhe-routing.module';

import { SaudeDetalhePage } from './saude-detalhe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaudeDetalhePageRoutingModule
  ],
  declarations: [SaudeDetalhePage]
})
export class SaudeDetalhePageModule {}
