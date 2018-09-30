import { Component, OnInit } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { BibliothequeService } from '../../services/bibliotheque.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Document } from '../../models/document';


@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage implements OnInit {
  
  index: number;
  book: Document;
  lendForm: FormGroup;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public bibliothequeService: BibliothequeService,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(){
    this.initForm();
    this.index = this.navParams.get('index');
    this.book = this.bibliothequeService.booksList[this.index];
    
  }

  initForm(){
    this.lendForm=this.formBuilder.group({
      nomEmprunteur: ['',Validators.required]
    });
  }

  dismissModal(){
    this.viewCtrl.dismiss();
  }

  onLendBook(){ 
    if(this.book.nomEmprunteur= this.lendForm.get('nomEmprunteur').value){
      this.book.isLend = !this.book.isLend;  
    }
    
  }

  onReturnBook(){
    this.book.nomEmprunteur = '';
    this.book.isLend = !this.book.isLend; 
  }

  onValidate(){
    this.bibliothequeService.saveList();
    this.bibliothequeService.emitBooks();
    this.dismissModal();
  }
}
