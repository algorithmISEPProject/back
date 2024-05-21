import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { UserModule } from './user/user.module';
import { PostsModule } from './posts/posts.module';
import { EventsModule } from './events/events.module';
import { GroupsModule } from './groups/groups.module';
import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { Neo4jModule } from 'nest-neo4j';
import { ConfigModule, ConfigService } from '@nestjs/config';

export type Neo4jScheme =
  | 'neo4j'
  | 'neo4j+s'
  | 'neo4j+scc'
  | 'bolt'
  | 'bolt+s'
  | 'bolt+scc';

export interface Neo4jConfig {
  scheme: Neo4jScheme;
  host: string;
  port: number | string;
  username: string;
  password: string;
  database?: string;
}

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    Neo4jModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService): Neo4jConfig => ({
        scheme: 'neo4j+s',
        host: 'da53ed6c.databases.neo4j.io',
        port: '7687',
        username: 'neo4j',
        password: 'YfmMlsJqsmS_DZlCDjFRm0tz4eyUaRy3LR8FoowPfUs',
        database: 'neo4j',
      }),
    }),
    UserModule,
    PostsModule,
    EventsModule,
    GroupsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
