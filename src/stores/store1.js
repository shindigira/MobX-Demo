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
  @action
  toggleComplete = itemID => {
    const temp = this.list.find(item => item.id === itemID);
    temp.complete = !temp.complete;
  };
  clearComplete = () => {
    this.list = this.list.filter(item => !item.complete);
  };
}

export default new store1();
