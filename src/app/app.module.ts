import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {ROUTES} from './app.routes'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { FaleconoscoComponent } from './faleconosco/faleconosco.component';
import { ProdutoComponent } from './produtos/produto/produto.component'
import {ProdutosService} from './produtos/produtos.service';
import { RodapeComponent } from './rodape/rodape.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SobreComponent,
    ProdutosComponent,
    FaleconoscoComponent,
    ProdutoComponent,
    RodapeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [ProdutosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
