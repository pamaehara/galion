import {ProdutoModel} from './produto/produto.model';

export class ProdutosService {
  constructor(){}

  produtos: ProdutoModel[] = [
    {
      id: "rol-fixos-esferas",
      name: "Rolamentos Fixos de Esferas",
      category: "Fixo",
      imagePath: "assets/img/produtos/rol-fixos-esferas.jpg",
      about: `Deviso á sua versatilidade, o Rolamento Fixo de Esferas de uma carreira é o tipo mais comum dentre todos os tipos de rolamentos. 
      Os Rolamentos Fixos de esferas estão disponíveis em uma ampla variedade de séries definidas pelas normas dimensionais Iso e JIS. 
      Os Rolamentos Fixos de ESferas, são fabricados dentro das normas de precisão (ISO grau 0 e ABEC grau 1), como também em graus superiores de precisão.`,
      linha: []
    },
    {
      id: "rol-rolos-cilindricos",
      name: "Rolamentos de Rolos Cilíndros",
      category: "Fixo",
      imagePath: "assets/img/produtos/rol-rolos-cilindricos.jpg",
      about: `Os rolamentos de Rolos Cilíndricos, estão disponíveis em 10 execuções diferentes, como mostrado na Figura 1. 
      As execuções N, NU, NN, e NNU, não suportarão carga axial. Estas execuções devem ser usadas como rolamentos de lado móvel. 
      As execuções NF, NJ, NUH, são projetadas com capacidade de recebimento de carga axial em um sentido. 
      As execuções NUH, é basicamente um rolamento NU com o acréscimo de um anel guia (um anel "L").`,
      linha: []
    },
    {
      id: "rol-rolos-conicos",
      name: "Rolamentos de Rolos Cônicos",
      category: "CapaCone",
      imagePath: "assets/img/produtos/rol-rolos-conicos.jpg",
      about: `Intercambiabilidade Rolamentos identificados como E... (prefixo E e sufixo J), obedecem aos padrões ISO nas dimensões de sub-conjuntos. 
      As capas e os cones desses rolamentos, são intercambiáveis universalmente. Série com Dimensões em Polegadas. Rolamentos de Rolos Cônicos da série em polegadas, 
      conforme as normas ABMA(ANSI).`,
      linha: []
    },
    {
      id: "rol-axiais-esfera",
      name: "Rolamentos Axiais de Esfera",
      category: "CapaCone",
      imagePath: "assets/img/produtos/rol-axiais-esfera.jpg",
      about: `Os Rolamentos Axiais de Esferas são fabricados como rolamentos de escora simples ou de escora dupla. 
      Os Rolamentos Axiais de Esferas de Escora Simples, podem receber uma carga axial apenas em um sentido. Enquanto os Rolamentos Axiais de Esferas de Escora Dupla, 
      podem receber carga axial em ambos os sentidos. Os tipos de Rolamentos Axiais de Esferas, não podem receber carga radial. 
      Os Rolamentos Axiais de Esferas estão disponíveis com anel externo de assento esférico alinhante, para formar conjunto com um alojamento que tenha uma superfície esférica. 
      Também estão disponíveis discos de assento alinhante, com uma superfície esférica de alinhamento, para facilitar projeto e montagem sobre uma superfície plana de assentamento. 
      Os rolamentos com gaiola de poliamida, são indicados com sufixo G no código de identificação do rolamento.`,
      linha: []
    },
    {
      id: "rol-autocompensadores-rolos",
      name: "Rolamentos Autocompensadores de Rolos",
      category: "Fixo",
      imagePath: "assets/img/produtos/rol-autocompensadores-rolos.jpg",
      about: `Os Rolamentos Autocompensadores de Rolos, são particularmente apropriados para aplicações, onde possa surgir desalinhamento, em conseqüência de flexão de eixo. 
      Os Rolamentos Autocompensadores de Rolos, são fabricados dentro de uma série de execuções e de materiais, dependendo do tipo de aplicação e porte do rolamento. 
      Ver tabela 1 para formatos de rolos, anéis guia e gaiolas para Rolamentos Autocompensadores de Rolos. Estes Rolamentos podem receber cargas radiais e axiais.`,
      linha: []
    },
    {
      id: "rol-axiais-autocompensadora-rolos",
      name: "Rolamentos Axiais Autocompensadores de Rolos",
      category: "Fixo",
      imagePath: "assets/img/produtos/rol-axiais-autocompensadora-rolos.png",
      about: `Este tipo de rolamento tem a capa dsfde de se auto alinhar, absorvendo possíveis desalinhamentos no eixo. 
      Os rolamentos axiais autocompensadores de rolos são de construção separável e devido a dificuldade de lubrificáção de seus componentes internos recomenda-se sempre a utilização de óleo.`,
      linha: []
    },
    {
      id: "rol-esferas-angular",
      name: "Rolamentos de Esferas de Contato Angular",
      category: "Fixo",
      imagePath: "assets/img/produtos/rol-esferas-angular.jpg",
      about: `Os Rolamentos de Esferas de Contato Angular podem suportar cargas combinadas, de ação simultânea das cargas radial e axial, porque têm um ângulo de contato (a). 
      O ângulo de contato é definido como o ângulo entre a linha que liga os pontos de contato da esfera com as pistas em um plano radial.`,
      linha: []
    },
    {
      id: "rol-autocompensadores-esferas",
      name: "Rolamentos Autocompensadores de Esferas",
      category: "Fixo",
      imagePath: "assets/img/produtos/rol-autocompensadores-esferas.jpg",
      about: `Os Rolamentos Autocompensadores de Esferas são particularmente apropriados para aplicações onde ocorrem desalinhamentos devidos a erros na montagem, ou flexões do eixo.`,
      linha: []
    }
  ]

  getProdutos(): ProdutoModel[] {
    return this.produtos
  }
}
