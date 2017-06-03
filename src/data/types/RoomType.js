
import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntegerType,
} from 'graphql';

const RoomType = new ObjectType({
  name: 'Room',
  fields: {
    id: { type: new NonNull(IntegerType) },
    host: { type: new NonNull(StringType) },
    location: { type: new NonNull(StringType) },
    listing: { type: new NonNull(StringType) },
    reviews: { type: new NonNull(StringType) },
  },
});

export default RoomType;