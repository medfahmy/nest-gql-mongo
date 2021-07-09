import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { GraphQLModule } from "@nestjs/graphql";
import { UserModule } from "./user/user.module";
import { MongooseModule } from "@nestjs/mongoose";

import mongoURI from "mongoURI";

@Module({
  imports: [
    UserModule,
    GraphQLModule.forRoot({
      autoSchemaFile: "schema.gql",
    }),
    MongooseModule.forRoot(mongoURI),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
