import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SocioModule } from './socio/socio.module';
import { ImageModule } from './image/image.module';
import { SocioController } from './socio/socio.controller';
import { ImageController } from './image/image.controller';
import { PagoModule } from './pago/pago.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/spartagym'),
    SocioModule,
    ImageModule,
    PagoModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
