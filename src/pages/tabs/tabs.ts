import { Component, OnInit } from '@angular/core';

import { BookListPage } from '../book-list/book-list';
import { CdListPage } from '../cd-list/cd-list';
import { BibliothequeService } from '../../services/bibliotheque.service';


@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage implements OnInit{
  bookListPage = BookListPage;
  cdListPage = CdListPage;

  constructor(private bibliothequeService: BibliothequeService){}

  ngOnInit(){
      this.bibliothequeService.fetchList();
  }
 
}
