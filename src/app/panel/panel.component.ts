import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.css'
})
export class PanelComponent {


  ver() {
    alert("Ver info");
  }
  editar() {
    alert("Editar info");
  }

}

