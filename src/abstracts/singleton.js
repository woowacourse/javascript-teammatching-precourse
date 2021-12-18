class Singleton {
  static instance = null;

  constructor() {
    if (this.constructor.instance) {
      return this.constructor.instance;
    }
    this.constructor.instance = this;
  }
}

export default Singleton;
