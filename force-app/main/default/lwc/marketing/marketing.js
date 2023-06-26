import { LightningElement } from 'lwc';
import sendEmail from '@salesforce/apex/EmailSender.sendEmail';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Marketing extends LightningElement {

    showPopUp=false;
    email;
    templateId = '00X5i000000luS6EAI';
    targetObjectId = '00Q5i00000IxOxGEAV';
    handlStart(){
        this.showPopUp=true;
    }

    handleEmailChange(event) {
        this.email = event.target.value;
    }

    handleSend(){
        console.log('Sent.. to'+this.email);
        sendEmail({ recipient: this.email, templateId: this.templateId, targetObjectId: this.targetObjectId })
            .then(result => {
                // Email sent successfully
                    const event = new ShowToastEvent({
                        title: 'Success',
                        message: 'Email sent successfully',
                        variant: 'success',
                        mode: 'dismissable'
                    });
                    this.dispatchEvent(event); 
            })
            .catch(error => {
                // Handle email sending failure 
                // Handle email sending failure 
                const event = new ShowToastEvent({
                    title: 'Error',
                    message: 'Some thing went wrong - '+error,
                    variant: 'error',
                    mode: 'dismissable'
                });
                this.dispatchEvent(event);
            });
    }

    handlePopUpCancel(){
        this.showPopUp=false;
    }
}