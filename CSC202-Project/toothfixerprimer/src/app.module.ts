import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientmanagementModule } from './patientmanagement/patientmanagement.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'postgres',
      password: 'postgres',
      database: 'toothfixerprimer',
      entities: [
        'dist/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
    PatientmanagementModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
