import { Component, OnInit, OnDestroy } from '@angular/core';

import { BibliothequeService } from '../../services/bibliotheque.service';
import { ModalController, MenuController } from 'ionic-angular';
import { LendCdPage } from '../lend-cd/lend-cd';
import { Document } from '../../models/document';
import { Subscription } from 'rxjs';

@Component({
  selector: 'page-cd-list',
  templateUrl: 'cd-list.html',
})
export class CdListPage implements OnInit, OnDestroy{

  cdsList: Document[];
  cdsSubscription: Subscription

  constructor(private modalCtrl: ModalController,
              private bibliothequeService: BibliothequeService,
              private menuCtrl: MenuController) {
  }

  ngOnInit(){
    this.cdsSubscription = this.bibliothequeService.cds$.subscribe(
      (cds: Document[])=>{
        this.cdsList = cds.slice()
      }
    );
   
    this.bibliothequeService.fetchList();
    this.bibliothequeService.emitCds();
  }

  ionViewWillEnter(){
  
    this.cdsList = this.bibliothequeService.cdsList.slice();
  }
   
  onLoadCd(index: number){
    let modal = this.modalCtrl.create(LendCdPage, {index:index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

  ngOnDestroy(){
    this.cdsSubscription.unsubscribe();
  }
}
