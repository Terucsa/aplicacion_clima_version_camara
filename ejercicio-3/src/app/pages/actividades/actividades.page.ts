import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList } from '@ionic/angular/standalone';
import { ActividadComponent } from '../../components/actividad/actividad.component';
import { Actividad } from '../../models/actividad.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.page.html',
  styleUrls: ['./actividades.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonList, CommonModule, FormsModule, ActividadComponent]
})
export class ActividadesPage implements OnInit {
  actividades: Actividad[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Actividad[]>('/assets/data/actividades.json').subscribe(data => {
      this.actividades = data;
    });
  }
}
