import { Component } from '@angular/core';
import {
  DxButtonModule,
  DxFormModule,
  DxTabsModule,
  DxTextBoxModule,
} from 'devextreme-angular';
import notify from 'devextreme/ui/notify';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-campaign',
  standalone: true,
  imports: [
    DxButtonModule,
    DxTabsModule,
    DxTextBoxModule,
    DxFormModule,
  ],
  templateUrl: './campaign.component.html',
  styleUrl: './campaign.component.css'
})

export class CampaignComponent {

  selectedTab: number = 0;

  tabs = [
    { text: 'Iniciar sesión' },
    { text: 'Nueva campaña' }
  ];

  loginData = {
    username: '',
    password: ''
  };

  campaignData = {
    name: '',
    password: '',
    confirmPassword: ''
  };

  loading: boolean = false;

  constructor(
    private ds: DataService,
  ) { }

  ngOnInit(): void {
  }

  login(): void {
    if (!this.loginData.username || !this.loginData.password) {
      notify('Debe ingresar usuario y contraseña.', 'warning', 3000);
      return;
    }

    this.loading = true;
    this.ds.getLogin(this.loginData).subscribe(
      (loginData) => {
        console.log(loginData);

        sessionStorage.setItem('idCampaign', loginData.idCampaign);
        sessionStorage.setItem('campaignName', loginData.campaignName);

        this.ds.campaignID = loginData.idCampaign;
        this.ds.campaignName = loginData.campaignName;

        console.log(this.ds)

        this.loading = false;
        notify('Bienvenido', 'success', 3000);
      }
      ,
      (error) => {
        this.loading = false;
        notify('Error al ingresar.', 'error', 3000);
      }
    )
  }

  createCampaign(): void {

    if (!this.campaignData.name) {
      notify("Ingrese un nombre.", "warning", 3000);
      return;
    }

    if (!this.campaignData.password) {
      notify("Ingrese una contraseña.", "warning", 3000);
      return;
    }

    if (this.campaignData.password !== this.campaignData.confirmPassword) {
      notify("Las contraseñas no coinciden.", "error", 3000);
      return;
    }

    console.log(this.campaignData);
    // Llamar al servicio

    this.ds.createCampaign(this.campaignData.name, this.campaignData.password).subscribe(
      (res) => {
        console.log(res);
        this.loading = false;
        notify('Campaña creada', 'success', 3000);
      }
      ,
      (error) => {
        this.loading = false;
        notify('Error al crear campaña.', 'error', 3000);
      }
    )
  }

}
