import { bookshelf } from '../bookshelf';

const Room = bookshelf.Model.extend({
  tableName: 'Room',
  hasTimestamps: true,
  media: function(){
    return this.hasMany(Media);
  }
});

export default Room ;


