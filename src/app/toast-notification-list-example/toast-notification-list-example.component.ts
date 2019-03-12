import {
  Component,
  OnInit,
  ViewEncapsulation
} from '@angular/core';

import { Notification, NotificationEvent, NotificationType, NotificationService } from 'patternfly-ng/notification';
import { Action } from 'patternfly-ng/action';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-toast-notification-list-example',
  templateUrl: './toast-notification-list-example.component.html'
})
export class ToastNotificationListExampleComponent implements OnInit {
  actionText = '';
  header = 'Default Header.';
  isPersistent = false;
  message = 'Default Message.';
  moreActions: Action[];
  moreActionsDefault: Action[];
  notifications: Notification[];
  primaryAction: Action;
  showClose = false;
  showMoreActions = false;
  type: string;
  types: string[];
  typeMap: any;

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    this.notifications = this.notificationService.getNotifications();

    this.typeMap = {
      info: NotificationType.INFO,
      success: NotificationType.SUCCESS,
      warning: NotificationType.WARNING,
      danger: NotificationType.DANGER
    };
    this.types = Object.keys(this.typeMap);
    this.type = this.types[0];

    this.primaryAction = {
      id: 'action1',
      name: '', // left empty for input
      title: 'Perform an action'
    } as Action;

    this.moreActionsDefault = [{
      id: 'moreActions1',
      name: 'Action',
      title: 'Perform an action'
    }, {
      id: 'moreActions2',
      name: 'Another Action',
      title: 'Do something else'
    }, {
      disabled: true,
      id: 'moreActions3',
      name: 'Disabled Action',
      title: 'Unavailable action'
    }, {
      id: 'moreActions4',
      name: 'Something Else',
      title: 'Do something special'
    }, {
      id: 'moreActions5',
      separator: true
    }, {
      id: 'moreActions6',
      name: 'Grouped Action 1',
      title: 'Do something'
    }, {
      id: 'moreActions7',
      name: 'Grouped Action 2',
      title: 'Do something similar'
    }] as Action[];
  }

  ngDoCheck(): void {
    if (this.showMoreActions === true) {
      this.moreActions = this.moreActionsDefault;
    } else {
      this.moreActions = undefined;
    }
  }

  // Action functions

  handleAction($event: NotificationEvent): void {
    // Get the Action we provided and output its name
    this.actionText = $event.action.title + '\n' + this.actionText;
  }

  handleClose($event: NotificationEvent): void {
    this.actionText = 'Close' + '\n' + this.actionText;
    this.notificationService.remove($event.notification);
  }

  handleType(item: string): void {
    this.type = item;
  }

  handleViewingChange($event: NotificationEvent): void {
    this.notificationService.setViewing($event.notification, $event.isViewing);
  }

  notify(): void {
    this.notificationService.message(
      this.typeMap[this.type],
      this.header,
      this.message,
      this.isPersistent,
      this.primaryAction,
      this.moreActions);
  }
}