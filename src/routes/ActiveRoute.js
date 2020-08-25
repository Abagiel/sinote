export class ActiveRoute {
  static get path() {
    return window.location.hash.slice(1)
  }

  static get param() {
    return 'note:' + ActiveRoute.path.split('/')[1]
  }

  static to(path) {
    window.location.hash = path
  }
}
