import { observable, computed, action } from "mobx";

class Item {
  @observable value;
  @observable id;
  @observable complete;

  constructor(value) {
    this.value = value;
    this.id = Date.now();
    this.complete = false;
  }
}

class store1 {
  @observable list = [];
  @observable filter = "";
  @computed
  get filteredList() {
    const matchesFilter = new RegExp(this.filter, "i");
    return this.list.filter(
      item => !this.filter || matchesFilter.test(item.value)
    );
  }
  @action
  setFilter = e => {
    this.filter = e.target.value;
  };
  @action
  createItem = item => {
    this.list.push(new Item(item));
  };
  // clearComplete = () => {};
}

export default new store1();
