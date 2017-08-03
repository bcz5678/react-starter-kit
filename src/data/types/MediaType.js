
import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntegerType,
} from 'graphql';

const MediaType = new ObjectType({
  name: 'Media',
  fields: {
    id: { type: new NonNull(IntegerType) },
    type: { type: new NonNull(StringType) },
    filename: { type: new NonNull(StringType) },
    caption: { type: StringType },
    description: { type: StringType },
  },
});

export default MediaType;