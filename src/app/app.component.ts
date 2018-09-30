import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { SettingsPage } from '../pages/settings/settings';
import { AuthPage } from '../pages/auth/auth';

import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp  {

  tabsPage:any = TabsPage;
  settingsPage:any = SettingsPage;
  authPage:any = AuthPage;
  isAuth : boolean ;
  @ViewChild('content') content: NavController;

  constructor(platform: Platform, 
              statusBar: StatusBar, 
              splashScreen: SplashScreen,
              private menuCtrl: MenuController) {
    platform.ready().then(() => {
      
      statusBar.styleDefault();
      splashScreen.hide();
      let config = {
        apiKey: "AIzaSyBnDDLPJd7V9Ij-UMdwys0Sjyx-22jX9yQ",
        authDomain: "bibliotheque-00003.firebaseapp.com",
        databaseURL: "https://bibliotheque-00003.firebaseio.com",
        projectId: "bibliotheque-00003",
        storageBucket: "bibliotheque-00003.appspot.com",
        messagingSenderId: "662594419108"
      };
      firebase.initializeApp(config);
      firebase.auth().onAuthStateChanged(
        (user) => {
          if (user) {
            this.isAuth =true;
            this.content.setRoot(TabsPage);
          }else{
            this.isAuth = false;
            this.content.setRoot(AuthPage, {mode: 'connect'})
          }
        }
      );
    });
  }

  onNavigate(page: any, data?: {}){
    this.content.setRoot(page, data ? data : null);
    this.menuCtrl.close();
  }

  onDisconnect(){
    firebase.auth().signOut();
    this.menuCtrl.close;
  }
}

