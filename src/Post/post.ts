interface INotifier {
  notify(): void
}

export default class Post {
  constructor(public post: string, private notifier: INotifier) {
    console.log('-> Novo post:', post)
  }

  publicar() {
    console.log('-> Publicando post')
    this.notifier.notify()
  }
}