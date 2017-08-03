import { bookshelf } from '../bookshelf';

const Room = bookshelf.Model.extend({
  tableName: 'Media',
  hasTimestamps: true,
  room: function() {
  	return this.belongsTo(Room);
  }
});

export default Room ;