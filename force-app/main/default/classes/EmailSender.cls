public class EmailSender {
    @AuraEnabled
    public static void sendEmail(String recipient, String templateId, String targetObjectId) {
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        System.debug('recipient=>'+recipient);
        email.setToAddresses(new String [] {recipient});
        email.setTemplateId(templateId);
        email.setTargetObjectId(targetObjectId);
        /*email.setTemplateOptions(new Messaging.EmailTemplateOptions());
        email.getTemplateOptions().setTreatTargetObjectAsRecipient(false);
        email.getTemplateOptions().setUseSignature(false);*/
        email.setSaveAsActivity(false);
        
        Messaging.SendEmailResult[] results = Messaging.sendEmail(new Messaging.SingleEmailMessage[]{email});
        
        if (results[0].isSuccess()) {
            // Email sent successfully
        } else {
            // Handle email sending failure
            String errorMessage = results[0].getErrors()[0].getMessage();
        }
    }
}
