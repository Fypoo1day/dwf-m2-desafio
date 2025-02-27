import { PelisCollection, Peli } from "./models";

class PelisController {
  peliculas:PelisCollection;
  constructor() {
    this.peliculas = new PelisCollection
  }

  get(options):any{
    if(options.id){
      return this.peliculas.getById(options.id);
    }
    else if(options.search){
      return this.peliculas.search(options.search)
    }
    else if(options[0]=="all"){
      return this.peliculas.getAll();
    }
  }

  add(peli:Peli){
    return this.peliculas.add(peli);
  }

}
export { PelisController };
