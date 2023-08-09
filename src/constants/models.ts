
class listItem {
  id: number;
  text: string;
  order: number;

  constructor(text: string, order: number) {
    this.text = text;
    this.id = new Date().getMilliseconds();
    this.order = order;
  }
}

export default listItem;
