import { PhoneType } from './enum/phonetype';

export class Phone{
  constructor(
    public number:string,
    public type:PhoneType
  ){}
}
