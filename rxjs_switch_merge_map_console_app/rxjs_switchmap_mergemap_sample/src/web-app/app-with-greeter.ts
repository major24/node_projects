import * as express from 'express';

import {Greeter}  from '../greeter/greeter';


class App {
  public express

  constructor () {
    this.express = express()
    this.mountRoutes()
  }

  docall() {
    let g = new Greeter();
    // console.log(g);
    let x = g.greet('Major');
    return x;
  }

  private mountRoutes (): void {
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        message: 'Hello World2! ' + this.docall()
      })
    })
    this.express.use('/', router)
  }
}

export default new App().express