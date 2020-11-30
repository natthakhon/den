import { Category } from 'src/vm/category';
import {Model} from '../vm/model'

export class Models{
  constructor(private cat : Category){}

  getModel(name:string):string{
    if (name == "Model 1"){
      return "Category 1"
    }
    return '';
  }

  getModels():Model[]{
    if (this.cat.name === "Category 1"){
      return [
        { "name": "Model 1", category: "Category 1" },
        { "name": "Model 2", category: "Category 1" },
        { "name": "Model 3", category: "Category 1" }
      ]
    }else if (this.cat.name === "Category 2"){
      return [
        { "name": "Model 4", category: "Category 2" },
        { "name": "Model 6", category: "Category 2" },
        { "name": "Model 7", category: "Category 2" },
        { "name": "Model A", category: "Category 2" },
        { "name": "Model B", category: "Category 2" },
        { "name": "Model C", category: "Category 2" }
      ]
    }else if (this.cat.name === "Category 3"){
      return [
        { "name": "Model 8", category: "Category 3" },
        { "name": "Model 9", category: "Category 3" },
        { "name": "Model 10", category: "Category 3" },
        { "name": "Model D", category: "Category 3" },
        { "name": "Model E", category: "Category 3" },
        { "name": "Model F", category: "Category 3" },
        { "name": "Model G", category: "Category 3" },
        { "name": "Model H", category: "Category 3" },
        { "name": "Model I", category: "Category 3" }
      ]
    }else if (this.cat.name === "Category 4"){
      return [
        { "name": "Model 11", category: "Category 4" },
        { "name": "Model 12", category: "Category 4" },
        { "name": "Model 13", category: "Category 4" },
        { "name": "Model 14", category: "Category 4" },
        { "name": "Model 15", category: "Category 4" },
        { "name": "Model 16", category: "Category 4" },
        { "name": "Model 17", category: "Category 4" },
        { "name": "Model 18", category: "Category 4" },
        { "name": "Model 19", category: "Category 4" },
        { "name": "Model 20", category: "Category 4" },
        { "name": "Model 21", category: "Category 4" },
        { "name": "Model 22", category: "Category 4" }
      ]
    }else if (this.cat.name === "Category 5"){
      return [
        { "name": "Model 11", category: "Category 5" },
        { "name": "Model 12", category: "Category 5" },
        { "name": "Model 13", category: "Category 5" },
        { "name": "Model 14", category: "Category 5" },
        { "name": "Model 15", category: "Category 5" },
        { "name": "Model 16", category: "Category 5" },
        { "name": "Model 17", category: "Category 5" },
        { "name": "Model 18", category: "Category 5" },
        { "name": "Model 19", category: "Category 5" },
        { "name": "Model 20", category: "Category 5" },
        { "name": "Model 21", category: "Category 5" },
        { "name": "Model 22", category: "Category 5" },
        { "name": "Model 11", category: "Category 5" },
        { "name": "Model 12", category: "Category 5" },
        { "name": "Model 13", category: "Category 5" },
        { "name": "Model 14", category: "Category 5" },
        { "name": "Model 15", category: "Category 5" },
        { "name": "Model 16", category: "Category 5" },
        { "name": "Model 17", category: "Category 5" },
        { "name": "Model 18", category: "Category 5" },
        { "name": "Model 19", category: "Category 5" },
        { "name": "Model 20", category: "Category 5" },
        { "name": "Model 21", category: "Category 5" },
        { "name": "Model 22", category: "Category 5" },
        { "name": "Model 11", category: "Category 5" },
        { "name": "Model 12", category: "Category 5" },
        { "name": "Model 13", category: "Category 5" },
        { "name": "Model 14", category: "Category 5" },
        { "name": "Model 15", category: "Category 5" },
        { "name": "Model 16", category: "Category 5" },
        { "name": "Model 17", category: "Category 5" },
        { "name": "Model 18", category: "Category 5" },
        { "name": "Model 19", category: "Category 5" },
        { "name": "Model 20", category: "Category 5" },
        { "name": "Model 21", category: "Category 5" },
        { "name": "Model 22", category: "Category 5" }
      ]
    }

    return [];
  }
}
