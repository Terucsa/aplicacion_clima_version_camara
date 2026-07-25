import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.page.html',
  styleUrls: ['./laboratorio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class LaboratorioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
