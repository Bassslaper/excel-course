/* eslint-disable linebreak-style */
export class DomListener {
  constructor($root) {
    if (!$root) {
      throw new Error(`No $root provided for DomListener!`);
    }
    this.root = $root;
    console.log('this.root: ', this.root);
  }
}
