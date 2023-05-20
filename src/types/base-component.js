class BaseComponent {
  constructor({ name, el }) {
    this.name = name
    this.el = el
  }

  get name() {
    return this.name
  }

  set name(name) {
    this.name = name
  }
}

export default BaseComponent
