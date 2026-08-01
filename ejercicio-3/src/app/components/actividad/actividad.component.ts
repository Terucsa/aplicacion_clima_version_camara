import { Component, Input, OnInit } from '@angular/core';
import { IonBadge, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Actividad } from '../../models/actividad.model';

@Component({
  selector: 'app-actividad',
  templateUrl: './actividad.component.html',
  styleUrls: ['./actividad.component.scss'],
  imports: [IonBadge, IonItem, IonLabel],
})
export class ActividadComponent  implements OnInit {
  @Input({ required: true})
  actividad!: Actividad;

  ngOnInit() { console.log('ActividadComponent cargado') }
}
