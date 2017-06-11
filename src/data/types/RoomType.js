
import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as StringType,
  GraphQLNonNull as NonNull,
  GraphQLInt as IntegerType,
  GraphQLFloat as FloatType,
  GraphQLBoolean as BooleanType,
} from 'graphql';


import { GraphQLJSON as JSONType } from 'graphql-type-json';

const RoomType = new ObjectType({
  name: 'Room',
  fields: {
    id: { type: new NonNull(IntegerType) },
    host: { type: new NonNull(IntegerType) },
    headline: { type: new NonNull(StringType) },
    address1: { type: new NonNull(StringType) },
    address2: { type: StringType },
    city: { type: new NonNull(StringType) },
    state: { type: new NonNull(StringType) },
    zipcode: { type: new NonNull(StringType) },
    country: { type: new NonNull(StringType) },
    reviewsNumber: { type: IntegerType },
    reviewsAverage: { type: FloatType },
    roomType: { type: new NonNull(StringType) },
    propertyType: { type: new NonNull(StringType) },
    checkInStart: { type: new NonNull(StringType) },
    checkInEnd: { type: new NonNull(StringType) },
    checkOutStart: { type: new NonNull(StringType) },
    checkOutEnd: { type: new NonNull(StringType) },
    bedrooms: { type: new NonNull(IntegerType) },
    guestsIncluded: { type: new NonNull(IntegerType) },
    guestsMax: { type: new NonNull(IntegerType) },
    beds: { type: new NonNull(IntegerType) },
    bathrooms: { type: new NonNull(FloatType) },
    priceWeeknight: { type: new NonNull(IntegerType) },
    priceWeekend: { type: IntegerType },
    priceWeek: { type: IntegerType },
    priceSpecial: { type: StringType },
    isInstantBookable: { type: new NonNull(BooleanType) },
    images: { type: new NonNull(StringType) },
    description: { type: new NonNull(StringType) },
  },
});

export default RoomType;