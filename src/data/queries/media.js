import MediaType from '../types/MediaType';
import Media from '../models/Media';
import  { GraphQLInt } from 'graphql';
import graphQLBookshelf from 'graphql-bookshelfjs';

const media = {
  type:MediaType,
  args: {
  	id: { name: 'Id of the media',
          type: GraphQLInt
      },
    room_id: {  name: 'Id of associated room',
                type:  GraphQLInt
      },
  },
  resolve: graphQLBookshelf.resolverFactory(Media)
};

export default media;