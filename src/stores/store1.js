import { observable, computed, action } from "mobx";

class store1 {
  @observable list = ["Bob", "Marley", "Shopping"];
  @observable filter = "";
  @computed
  get filteredList() {
    const matchesFilter = new RegExp(this.filter, "i");
    return this.list.filter(item => !this.filter || matchesFilter.test(item));
  }
  // createItem = item => {};
  // clearComplete = () => {};
}

export default new store1();
