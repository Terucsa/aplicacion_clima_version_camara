import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-clima',
  templateUrl: './registro-clima.page.html',
  styleUrls: ['./registro-clima.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule,
    FormsModule, IonItem, IonList, IonSelect, IonSelectOption, IonLabel, IonTextarea,
    IonButton]
})
export class RegistroClimaPage implements OnInit {
  comentarioClima: string = "";
  tipoClima: string = "";
  foto: string = "";
  constructor() { }
  ngOnInit() {
  }
  onTipoClima(event: any) {
    this.tipoClima = event.target.value;
  }
  onComentario(event: any) {
    this.comentarioClima = event.target.value;
  }
  onAgregarFoto(){
    this.foto = "Dentro de la foto";
  }
  onEnviarInfo(){
    console.log("Dentro de enviar informacion");
  }
}
