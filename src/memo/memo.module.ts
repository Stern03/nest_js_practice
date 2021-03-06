import { Module } from '@nestjs/common';
import { MemoController } from './memo.controller';
import { MemoService } from './memo.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Memo } from 'src/entities/memo.entity';

@Module({
  controllers: [MemoController],
  imports: [TypeOrmModule.forFeature([Memo])],
  providers: [MemoService]
})
export class MemoModule { }
