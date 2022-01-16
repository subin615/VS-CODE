import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
// import {} from './users/entity/users.entity'

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: './config.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `mongodb://${process.env.mongoIP}:27017/${process.env.mongoDBName}`,
      database: process.env.mongoDBName,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      useNewUrlParser: true,
      useUnifiedTopology: true,
      synchronize: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
