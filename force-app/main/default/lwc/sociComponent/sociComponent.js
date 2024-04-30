import { api, LightningElement } from 'lwc';

export default class IFrame extends LightningElement {
  @api height = '500px';
  @api sandbox = '';
  @api header = 'SOCi Co-Marketing Cloud';
  @api url = 'https://app.meetsoci.com/admin/account';
  @api accountid = '';
  @api productlink = '';
  @api apikey = '';
  @api width = '100%';
 
  get fullUrl() {
    return `${this.url}/${this.accountid}/${this.productlink}?api_key=${this.apikey}#header_disabled`;
  }

  renderedCallback() {
    if (this.sandbox) {
      const element = this.template.querySelector('iframe');
      element.sandbox = this.sandbox;
    }
  }
}
