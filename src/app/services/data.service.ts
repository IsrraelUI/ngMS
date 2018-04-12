import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
  public accounts = [{
    prefix: 'AAA',
    id: '0029',
    dif: -0.07,
    val: 31435.87,
    cash: 3916334.42
  }, {
    prefix: 'IRA',
    id: '0146',
    dif: 0.03,
    val: 7430.83,
    cash: 1584302.39
  }, {
    prefix: 'AAA',
    id: '1812',
    dif: 0.21,
    val: 38881.63,
    cash: 201926.10
  }, {
    prefix: 'REG',
    id: '2019',
    dif: 0,
    val: 0,
    cash: 13465679.34
  }, {
    prefix: 'AAA',
    id: '3810',
    dif: 0.07,
    val: 8916.69,
    cash: 10050054.07
  }, {
    prefix: 'IRA',
    id: '5200',
    dif: -0.08,
    val: 8916.69,
    cash: 5763.36
  }];
}
