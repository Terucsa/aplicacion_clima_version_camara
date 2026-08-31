import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonContent, IonHeader, IonItem, IonLabel, IonList, IonSelect, IonSelectOption, IonTextarea, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import {RegistroClimaModel} from "../../model/registro-cima.model";
import {RegistroClimaService} from "../../services/registro-clima-service";

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
  constructor(private registroClimaService: RegistroClimaService,) { }
  ngOnInit() {
  }
  onTipoClima(event: any) {
    this.tipoClima = event.target.value;
  }
  onComentario(event: any) {
    this.comentarioClima = event.target.value;
  }
  async onAgregarFoto(){
    try {
    // 1. Intentamos abrir la cámara y esperamos la foto 📷
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });

    if (image.webPath) {
      this.foto = image.webPath;
    }

    this.foto = "Solo para mandar un registro"
  } catch (error) {
    console.log('El usuario canceló la foto o hubo un error:', error);
  }
  }
  onEnviarInfo(){
    const nuevoClima: RegistroClimaModel = {
      id: 1232123,
      comentario: this.comentarioClima,
      tipoClima: this.tipoClima,
      foto: this.foto
    };

    let respuesta = this.registroClimaService.insertClima(nuevoClima);
    console.log(respuesta)
  }
}
