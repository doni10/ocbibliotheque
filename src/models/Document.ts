export class  Document{
    title: string;
    description: string[];
    isLend: boolean;
    nomEmprunteur: string;
    constructor(title: string){
        this.title = title;
        this.isLend = false;
    }
}