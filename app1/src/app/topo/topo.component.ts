import { Component } from '@angular/core'

// decorator para definir o componente
@Component({
    selector: 'app-topo', // tag do componente
    // selector: ['app-topo'] // outra forma de definir a tag para usar como classe ou atributo
    templateUrl: './topo.component.html', // template html do componente
    // template: '<p>Um paragrafo</p>' // tambem é possivel utilizar um template inline
    styleUrls: ['./topo.component.css']
})
export class TopoComponent {

}
