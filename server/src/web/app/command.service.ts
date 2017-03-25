import { Injectable } from '@angular/core';
import { RestService, SocketService } from './feathers.service.js';

@Injectable()
export class CommandService {
  private _socket;
  private _rest;

  constructor(
    private _socketService: SocketService,
    private _restService: RestService
  ) {
    // Let's get both the socket.io and REST feathers services for commands!
    this._rest = _restService.getService('commands');
    this._socket = _socketService.getService('commands');
  }

  getAll() {
    return this._rest.find().then(data => data.data);
  }
}