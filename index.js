export default function () {
  process.stdout.write(String.fromCharCode(27) + "]0;" + this.options.head.title + String.fromCharCode(7))
}