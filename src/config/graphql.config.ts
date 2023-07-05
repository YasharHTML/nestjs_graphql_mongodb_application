import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

export const GraphQlConfig: () => ApolloDriverConfig = () => ({
  driver: ApolloDriver,
  autoSchemaFile: join(__dirname, '/src/schema.graphql'),
  playground: true,
});
