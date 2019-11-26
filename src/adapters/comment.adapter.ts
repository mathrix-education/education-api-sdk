import {Comment} from '../models/comment';
import {DefaultAdapter} from '@mathrix-education/iridium';

export class CommentAdapter extends DefaultAdapter<Comment> {
  constructor() {
    super({
      dates: ['created_at', 'updated_at', 'deleted_at']
    });
  }
}
