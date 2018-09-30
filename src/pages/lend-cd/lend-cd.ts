import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { BibliothequeService } from '../../services/bibliotheque.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Document } from '../../models/document';


@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: Document;
  lendForm:FormGroup;
  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public bibliothequeService: BibliothequeService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(){
    this.initForm();
    this.index = this.navParams.get('index');
    this.cd = this.bibliothequeService.cdsList[this.index];
  }

  initForm(){
    this.lendForm=this.formBuilder.group({
      nomEmprunteur: ['',Validators.required]
    });
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onLendCd(){
    if(this.cd.nomEmprunteur = this.lendForm.get('nomEmprunteur').value){
      this.cd.isLend = !this.cd.isLend;
    }
    
  }

  onReturnCd(){
    this.cd.nomEmprunteur = '';
    this.cd.isLend = !this.cd.isLend;
  }

  onValidate(){
    this.bibliothequeService.saveList();
    this.bibliothequeService.emitCds();
    this.dismissModal();
  }
}
