import { Component, OnInit } from '@angular/core';
import {ProdutoModel} from './produto/produto.model';
import {ProdutosService} from './produtos.service';

@Component({
  selector: 'gal-produtos',
  templateUrl: './produtos.component.html',
})
export class ProdutosComponent implements OnInit {

  produtos: ProdutoModel[]

  constructor(private produtosService: ProdutosService) { }

  ngOnInit() {
    this.produtos = this.produtosService.getProdutos()
  }

}
