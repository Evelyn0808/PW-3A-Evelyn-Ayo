import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers';
import { ConfigModule } from '../config/config.module';

@Module({
  imports: [ConfigModule],
  providers: [...databaseProvider],
  exports: [...databaseProvider],
})
export class DatabaseModule {}