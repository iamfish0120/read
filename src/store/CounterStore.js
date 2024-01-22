import { observable, action } from 'mobx';

const counterStore = observable({
  count: 0,
  increment: action(() => {
    this.count++;
  }),
  decrement: action(() => {
    this.count--;
  }),
});

export default counterStore;