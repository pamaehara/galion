import {Routes} from '@angular/router'

import {HomeComponent} from './home/home.component';
import {SobreComponent} from './sobre/sobre.component';
import {ProdutosComponent} from './produtos/produtos.component';
import {FaleconoscoComponent} from './faleconosco/faleconosco.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre', component: SobreComponent},
  {path: 'produtos', component: ProdutosComponent},
  {path: 'faleconosco', component: FaleconoscoComponent}
]
