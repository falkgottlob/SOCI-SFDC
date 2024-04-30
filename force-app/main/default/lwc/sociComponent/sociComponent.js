import { api, wire, LightningElement } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import SOCI_REVIEW_ID from '@salesforce/schema/Case.SociReviewID__c';

export default class IFrame extends LightningElement {
  @api height = '500px';
  @api sandbox = '';
  @api header = 'SOCi Co-Marketing Cloud';
  @api url = 'https://app.meetsoci.com/admin/account';
  @api accountid = '';
  @api productlink = '';
  @api apikey = '';
  @api width = '100%';

  @api recordId; // This should be provided by the parent component or record page

    @wire(getRecord, { recordId: '$recordId', fields: [CUSTOM_FIELD] })
    caseRecord;

    get customField() {
        return this.caseRecord.data ? getFieldValue(this.caseRecord.data, CUSTOM_FIELD) : '';
    }
 
  get fullUrl() {
    return `${this.url}/${this.accountid}/${this.productlink}?api_key=${this.apikey}#header_disabled`;
  }
  get customFieldValue() {
    if (this.caseRecord.error) {
        // Handle error appropriately
        console.error('Error fetching case:', this.caseRecord.error);
        return undefined;
    } else if (this.caseRecord.data) {
        return getFieldValue(this.caseRecord.data, CUSTOM_FIELD);
    }
    return undefined;
}

  renderedCallback() {
    if (this.sandbox) {
      const element = this.template.querySelector('iframe');
      element.sandbox = this.sandbox;
    }
  }
}
