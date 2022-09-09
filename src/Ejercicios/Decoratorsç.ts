function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }

  @reportableClassDecorator
  class miSuperClase {
    public myproperty : string = 'abcde';
    
    imprimir () {
        console.log(this.myproperty);
    }
  }

  console.log(miSuperClase);
  const myclase = new miSuperClase();
  console.log(myclase.myproperty);