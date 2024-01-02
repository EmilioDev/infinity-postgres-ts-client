import { Module } from '@nestjs/common';
import { BasicJwtStrategy } from './strategies';
import { JwtModule } from '@nestjs/jwt';

@Module({
    providers: [BasicJwtStrategy],
    imports: [JwtModule.register({})]
})
export class JwtManagerModule {
    //
}
