import {Comment} from '../models/comment';
import {DefaultAdapter} from '../lib/adapters/default.adapter';

export class CommentAdapter extends DefaultAdapter<Comment> {
  constructor() {
    super({
      dates: ['created_at', 'updated_at', 'deleted_at']
    });
  }
}
