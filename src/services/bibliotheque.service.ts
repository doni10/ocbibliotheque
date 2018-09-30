import { Subject } from "rxjs/Subject";
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Document } from "../models/document";
import { Injectable } from "@angular/core";
import { Storage } from '@ionic/storage';

@Injectable()
export class BibliothequeService{

    books$ = new Subject<Document[]>();
    cds$ = new Subject<Document[]>();
    
    booksList: Document[] = [];
    cdsList: Document[] = [];
     
    documentsList = [this.booksList,this.cdsList];
    notEmpty:boolean; 

    constructor(private storage: Storage){}

    emitBooks(){
        this.books$.next(this.documentsList[0].slice());
    }
    emitCds(){
        this.cds$.next(this.documentsList[1].slice());
    }

    
    saveData(){
        return new Promise((resolve, reject) =>{
         
            firebase.database().ref('documents').set(this.documentsList).then(
                (data: DataSnapshot) => {
                    resolve(data);
                },
                (error)=>{
                    reject(error);
                }
            );
          
        });
    }


    retrieveData(){
        return new Promise((resolve , reject)=>{
            firebase.database().ref('documents').once('value').then(
                (data: DataSnapshot)=>{
                    this.documentsList = data.val();
                    this.booksList = this.documentsList[0];
                    this.cdsList = this.documentsList[1];
                    this.emitCds();
                    this.emitBooks();
                    resolve('Données récupérées avec succès !');
                }, (error)=>{
                    reject(error);
                }
            );
        });
    }

    saveList(){
        this.storage.set('documents',this.documentsList);
    }

    fetchList(){
        this.storage.get('documents').then(
            (list)=>{
                if(list && list.length){
                    this.documentsList=list.slice();
                    this.booksList=list[0].slice();
                    this.cdsList=list[1].slice();
                }
                this.emitBooks();
                this.emitCds();
            }
        );
    }
}