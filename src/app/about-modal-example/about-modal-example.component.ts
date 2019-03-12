import {
  Component,
  OnInit,
  TemplateRef,
  ViewEncapsulation
} from '@angular/core';

import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/modal-options.class'; // BS 1.8.0
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service'; // BS 2.0.0-beta
import { AboutModalConfig, AboutModalEvent } from 'patternfly-ng/modal';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-about-modal-example',
  templateUrl: './about-modal-example.component.html'
})
export class AboutModalExampleComponent implements OnInit {
  aboutConfig: AboutModalConfig;
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService) {
  }

  ngOnInit(): void {
    this.aboutConfig = {
      additionalInfo: 'Donec consequat dignissim neque, sed suscipit quam egestas in. Fusce bibendum ' +
        'laoreet lectus commodo interdum. Vestibulum odio ipsum, tristique et ante vel, iaculis placerat nulla. ' +
        'Suspendisse iaculis urna feugiat lorem semper, ut iaculis risus tempus.',
      copyright: 'Trademark and Copyright Information',
      logoImageAlt: 'Patternfly Symbol',
      logoImageSrc: '//www.patternfly.org/assets/img/logo-alt.svg',
      title: 'Product Title',
      productInfo: [
        { name: 'Version', value: '1.0.0.0.20160819142038_51be77c' },
        { name: 'Server Name', value: 'Localhost' },
        { name: 'User Name', value: 'admin' },
        { name: 'User Role', value: 'Administrator' }]
    } as AboutModalConfig;
  }

  openModal(template: any): void {
    this.modalRef = this.modalService.show(template);
  }

  closeModal($event: AboutModalEvent): void {
    this.modalRef.hide();
  }
}
