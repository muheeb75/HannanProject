import { LightningElement } from 'lwc';

export default class Marketing extends LightningElement {

    showPopUp=false;
    handlStart(){
        this.showPopUp=true;
    }


    handleSend(){
        console.log('Sent..');
    }

    handlePopUpCancel(){
        this.showPopUp=false;
    }
}