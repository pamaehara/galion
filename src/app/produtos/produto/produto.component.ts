import { Component, OnInit, Input } from '@angular/core';

import {ProdutoModel} from './produto.model';

@Component({
  selector: 'gal-produto',
  templateUrl: './produto.component.html',
})
export class ProdutoComponent implements OnInit {

  @Input() produtoModel: ProdutoModel

  constructor() { }

  ngOnInit() {
  }

}
