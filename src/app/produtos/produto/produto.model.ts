import {LinhaModel} from './linha.model';

export interface ProdutoModel {
  id: string
  name: string
  category: string
  imagePath: string
  about: string
  linha: LinhaModel[]
}
