import { Component, OnDestroy, OnInit } from '@angular/core';
import { BibliothequeService } from '../../services/bibliotheque.service';
import { ModalController, MenuController } from 'ionic-angular';
import { LendBookPage } from '../lend-book/lend-book';
import { Document } from '../../models/document';
import { Subscription } from 'rxjs';


@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage implements OnInit, OnDestroy {
 

  booksList: Document[];
  booksSubscription: Subscription;

  constructor(private modalCtrl: ModalController,
              private bibliothequeService: BibliothequeService,
              private menuCtrl: MenuController) {
  }

  ngOnInit(){
    this.booksSubscription = this.bibliothequeService.books$.subscribe(
      (books: Document[])=>{
        this.booksList = books.slice();
      }
    );
    
    this.bibliothequeService.fetchList();
    this.bibliothequeService.emitBooks();
    if (this.booksList.length>1){
      this.bibliothequeService.notEmpty=true;
    }
  }

  ionViewWillEnter(){
    this.booksList = this.bibliothequeService.booksList.slice();
  }

  onLoadBook(index: number){
    let modal = this.modalCtrl.create(LendBookPage, {index:index});
    modal.present();
  }

  onToggleMenu(){
    this.menuCtrl.open();
  }

  ngOnDestroy(){
    this.booksSubscription.unsubscribe();
  }
}
