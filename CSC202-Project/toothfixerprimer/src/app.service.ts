import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): any[] {
    return []; // Return an empty array
  }
}