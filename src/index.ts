import Post from './Post/post'
import Notifier from './Notifier/Notifier'

const newPost = new Post('Testado e aprovado, dependecy injection', new Notifier())
newPost.publicar()