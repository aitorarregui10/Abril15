import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-ejercicios-directivas',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ejercicios-directivas.component.html',
  styleUrl: './ejercicios-directivas.component.css'
})
export class EjerciciosDirectivasComponent {

  selectedRam: string="";
  ramSizes: string[] = ['32GB', '16GB', '8GB'];

  selectedProcessor: string="";
  seleccionarProcessor = [{processor:'Corei9N8'}, {processor:'Intel Core i9'}, {processor:'Intel Core i9'}];
  mensaje : string ="";
  
  seleccionTarjeta(event:any){
    if (event.tarjet.checked){
      alert('El usuario seleccionó tarjeta gráfica');
    }else{
      alert('El usuario no seleccionó tarjeta gráfica');
    }
  }
 
  discoDuros=[{disco:'HDD'},{disco:'SSD'}]
  selecteddiscoDuro: any;
  selectDisco(disco: any) {
    this.selecteddiscoDuro = disco;
  }
  fuenteAlimentacion=[{fuente:'600'},{fuente:'500'},{fuente:'50000000'}]
  selectedAlimentacion: string=""; 

  mostrainfo():void{
        this.mensaje= this.selectedRam+this.selecteddiscoDuro+this.selectDisco+this.selectedAlimentacion;
  }

  mensaje2 : string ="";  
  selectedOrigen: string="";
  seleccionarOrigen = [{origen:'Albacete'}, {origen:'Jamaica'}, {origen:'Cuenca'}];
  selectedDestino: string="";
  seleccionarDestino = [{destino:'Albacete'}, {destino:'Jamaica'}, {destino:'Cuenca'}];
  fechaIda: string ="";
  fechaVuelta: string ="";
  numPasajero: number=0;


  mostrainfo2():void{
    this.mensaje2= this.selectedOrigen+this.selectedDestino+this.fechaIda+this.fechaVuelta+this.numPasajero;
}

mensaje3: string ="";
selectedGenero: string= "";
seleccionarGeneros= [{genero:'Hombre'}, {genero:'Mujer'}, {genero:'Otros'}];
selectedNacionalidad: string= "";
seleccionarNacionalidades= [{nacionalidad:'Finlandesa'}, {nacionalidad:'Tailandesa'}, {nacionalidad:'Española'}];
Lenguajes = [
  { id: 1, lenguaje:"C++", selected: false },
  { id: 2, lenguaje:"Java", selected: false },
  { id: 3, lenguaje:"JS", selected: false },
  { id: 4, lenguaje:"Python", selected: false },
];

mostrainfo3(): void {
  const seleccionados: string = this.Lenguajes
    .filter(lenguaje => lenguaje.selected)
    .map(lenguaje => lenguaje.lenguaje)
    .join('\n'); 
  
  alert(this.mensaje3 = 'Género: '+this.selectedGenero + '\n' + 'Nacionalidad: '+this.selectedNacionalidad + '\n'+ 'Lenguajes de programación seleccionados: '+ seleccionados);
}
}
