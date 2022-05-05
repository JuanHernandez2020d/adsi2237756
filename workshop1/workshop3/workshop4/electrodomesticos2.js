class Electrodomestico {
  constructor(PrecioBase, Peso, Color, ConsumoDeEnergia) {
    this.PrecioBase = PrecioBase;
    this.Peso = Peso;
    this.Color = Color;
    this.ConsumoDeEnergia = ConsumoDeEnergia;
  }
}
datosElectrodomestico();
{
  return (
    "PrecioBase" +
    this.PrecioBase +
    "Peso" +
    this.Peso +
    "Color" +
    this.Color +
    "ConsumoDeEnergia" +
    this.ConsumoDeEnergia
  );
}

class lavadora extends Electrodomestico {
  constructor(PrecioBase, Peso, Color, ConsumoDeEnergia, carga) {
    super(PrecioBase, Peso, Color, ConsumoDeEnergia);
    this.carga = 5;
  }
  datosLavadora() {
    console.log(
      "datos lavadora:" + super.datosElectrodomestico + "carga" + this.carga
    );
  }
}
class lavadora extends Electrodomestico {
  constructor(PrecioBase, Peso, Color, ConsumoDeEnergia, carga) {
    super(PrecioBase, Peso, Color, ConsumoDeEnergia);
    this.carga = 5;
  }
  datosLavadora() {
    console.log(
      "datos lavadora:" + super.datosElectrodomestico + "carga" + this.carga
    );
  }
}
class lavadora extends Electrodomestico {
  constructor(PrecioBase, Peso, Color, ConsumoDeEnergia, carga) {
    super(PrecioBase, Peso, Color, ConsumoDeEnergia);
    this.carga = 5;
  }
  datosLavadora() {
    console.log(
      "datos lavadora:" + super.datosElectrodomestico + "carga" + this.carga
    );
  }
}
class lavadora extends Electrodomestico {
  constructor(PrecioBase, Peso, Color, ConsumoDeEnergia, carga) {
    super(PrecioBase, Peso, Color, ConsumoDeEnergia);
    this.carga = 5;
  }
  datosLavadora() {
    console.log(
      "datos lavadora:" + super.datosElectrodomestico + "carga" + this.carga
    );
  }
}
class lavadora extends Electrodomestico {
  constructor(PrecioBase, Peso, Color, ConsumoDeEnergia, carga) {
    super(PrecioBase, Peso, Color, ConsumoDeEnergia);
    this.carga = 5;
  }
  datosLavadora() {
    console.log(
      "datos lavadora:" + super.datosElectrodomestico + "carga" + this.carga
    );
  }
}
objetoTelevisor1 = new Electrodomestico(100, 7, "negro", 110);
console.log("datos televisor", objetoTelevisor1.datosElectrodomestico());
objetoTelevisor2 = new Electrodomestico(110, 10, "gris oscuro", 110);
console.log("datos televisor", objetoTelevisor1.datosElectrodomestico());
objetoTelevisor3 = new Electrodomestico(100, 5, "blanco", 110);
console.log("datos televisor", objetoTelevisor1.datosElectrodomestico());
objetoTelevisor4 = new Electrodomestico(130, 12, "gris", 110);
console.log("datos televisor", objetoTelevisor1.datosElectrodomestico());
objetoTelevisor5 = new Electrodomestico(150, 8, "negro", 110);
console.log("datos televisor", objetoTelevisor1.datosElectrodomestico());
