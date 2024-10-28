import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection | undefined;

  constructor() { }

  startConnection(): void {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:5114/createevent')
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('SignalR Connection started'))
      .catch(err => console.log('Error while starting SignalR connection: ' + err));
  }

  listenForEventNotifications(callback: (message: string) => void): void {
    this.hubConnection?.on('ReceiveEventNotification', (message: string) => {
      callback(message);
    });
  }
}
