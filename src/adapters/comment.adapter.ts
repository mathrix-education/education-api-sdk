import {Comment} from '../models/comment';
import {DefaultAdapter} from '../lib/adapters/default.adapter';

export class CommentAdapter extends DefaultAdapter<Comment> {
  constructor() {
    super(Comment, ['created_at', 'updated_at', 'delete_at']);
  }
}
