import * as feathers from 'feathers/client';
import * as socketio from 'feathers-socketio/client';
import * as io from 'socket.io-client';
import * as hooks from 'feathers-hooks';
import * as rest from 'feathers-rest/client';
import * as authentication from 'feathers-authentication/client';

import { Injectable } from '@angular/core';
const superagent = require('superagent');

const HOST = 'http://localhost:3030'; // base server URL

@Injectable()
export class RestService {
  private _app;
  constructor() {
    this._app = feathers() // Initialize feathers
      .configure(rest(HOST).superagent(superagent)) // Fire up rest
      .configure(hooks()) // Configure feathers-hooks
  }

  getService(name) {
      return this._app.service(name)
  }
}

@Injectable()
export class SocketService {
  public socket;
  private _app;

  constructor() {
    this.socket = io(HOST);
    this._app = feathers()
      .configure(socketio(this.socket))
      .configure(hooks())
  }

  getService(name) {
      return this._app.service(name)
  }
}