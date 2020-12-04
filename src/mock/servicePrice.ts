import {ServicePrice} from '../vm/servicePrice'

export class ServicePriceMock{
  constructor(){}

  getServicePrice():ServicePrice{
    return new ServicePrice("Model 1"
        ,"Category 1"
        ,[1000,0,100,200,300,4000]
        ,[]
        ,[0,0,123,456,7890]
        ,[]
        ,false
        ,1000
        ,0
        ,false
        ,2000
        ,0
        ,true
        ,0
        ,0
        ,0
        ,0
        ,true
        ,""
        )
  }
}
