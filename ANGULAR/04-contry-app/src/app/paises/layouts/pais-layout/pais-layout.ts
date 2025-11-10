import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from "../../components/menu/menu";

@Component({
  selector: 'app-pais-layout',
  imports: [RouterOutlet, Menu],
  templateUrl: './pais-layout.html',
})
export class PaisLayout {

}
