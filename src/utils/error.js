export class FSError extends Error {
  constructor(args) {
    super(args);
    this.name = "FS operation failed";
  }
}
