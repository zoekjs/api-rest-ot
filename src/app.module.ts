require('dotenv').config();
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule } from './clients/clients.module';
import { WorkOrderModule } from './work-order/work-order.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkOrderDetailModule } from './work-order-detail/work-order-detail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_SERVER_HOST,
      port: 3306,
      username: process.env.DB_SERVER_USERNAME,
      password: process.env.DB_SERVER_PASSWORD,
      database: process.env.DB_SERVER_DATABASE,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: false,
      retryDelay: 3000,
      retryAttempts: 10
    }),
    ClientsModule, WorkOrderModule, WorkOrderDetailModule],
  controllers: [AppController,],
  providers: [AppService],
})
export class AppModule { }
