import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';

@Module({
  imports: [PetsModule],
})
export class AppModule {}
