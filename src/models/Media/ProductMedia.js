export class ProductMediaModel extends Image {
  constructor({ id, src, priority }) {
    super({ id: id, src: src });
    this.priority = priority;
  }
}
