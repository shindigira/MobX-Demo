import { observable, computed, action } from "mobx";

class store1 {
  @observable list = ["Bob", "Marley", "Shopping"];
  @observable filter = "";
  // createItem = item => {};
  // clearComplete = () => {};
}

export default new store1();
