import { Component } from '@angular/core';
import { MenuController, ToastController, LoadingController } from 'ionic-angular';
import { BibliothequeService } from '../../services/bibliotheque.service';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  notEmpty : boolean;
  
  constructor(private menuCtrl: MenuController,
              private bibliothequeService: BibliothequeService,
              private toastCtrl: ToastController,
              private loadingCtrl: LoadingController){

    this.notEmpty = this.bibliothequeService.notEmpty;
              
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }
  

  onSend(){
    let loader = this.loadingCtrl.create({
      content: 'Sauvegarde en cours ...'
    });
    loader.present();
    this.bibliothequeService.saveData().then(
      ()=>{
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données sauvegardées !',
          duration: 3000,
          position: 'bottom'
        }).present();
      },
      (error)=>{
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();
      }
    )
    
  }

  onReceive(){
    let loader = this.loadingCtrl.create({
      content: 'Récupération en cours ...'
    });
    loader.present();
    this.bibliothequeService.retrieveData().then(
      ()=>{
        this.bibliothequeService.saveList();
        loader.dismiss();
        this.toastCtrl.create({
          message: 'Données récupérées !',
          duration: 3000,
          position:'bottom'
        }).present();
      },
      (error)=>{
        loader.dismiss();
        this.toastCtrl.create({
          message: error,
          duration: 3000,
          position: 'bottom'
        }).present();  
      }
    );
   
  }
}
