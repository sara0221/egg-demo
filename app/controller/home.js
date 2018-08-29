'use strict';

const Controller = require('egg').Controller;

// 严选首页同步mock数据
const indexMock = require('../mock/yx/index.js')

class HomeController extends Controller {
  async index() {
    await this.ctx.render('yx/index.tpl', indexMock);
  }
}

module.exports = HomeController;