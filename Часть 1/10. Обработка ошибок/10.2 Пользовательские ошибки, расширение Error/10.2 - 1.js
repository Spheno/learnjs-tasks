class FormatError extends SyntaxError {
  constructor(message) {
    super(message);
    this.name = "FormatError";
    this.stack = (new Error()).stack;
  }
}