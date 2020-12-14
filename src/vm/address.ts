import { AddressType } from './enum/addresstype';

export class Address{
  constructor(
    public address1:string,
    public address2:string,
    public tumbol:string,
    public umpur:string,
    public chungwad:string,
    public zip:number,
    public type:AddressType
  ){}
}
