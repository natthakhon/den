import {ServicePrice} from '../vm/servicePrice'

export class ServicePriceMock{
  constructor(){}

  getServicePrice():ServicePrice{
    return new ServicePrice("Model 1"
        ,"Category 1"
        ,[0,0,100,200,300]
        ,[false,false,false,false,false]
        ,[0,0,123,456,789,1000]
        ,[false,false,false,false,false]
        ,false
        ,false
        ,false
        )
  }
}
