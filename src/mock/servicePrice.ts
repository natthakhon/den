import {ServicePrice} from '../vm/servicePrice'

export class ServicePriceMock{
  constructor(){}

  getServicePrice():ServicePrice{
    return new ServicePrice("Model 1"
        ,"Category 1"
        ,[0,0,100,200,300,400]
        ,[]
        ,[]
        ,[0,0,123,456,789]
        ,[false,false,false,false,false]
        ,[]
        ,false
        ,1000
        ,0
        ,false
        ,2000
        ,0
        ,false
        ,0
        ,0
        ,0
        ,0
        )
  }
}
