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
lenguajesProgramacion= [{lenguaje:'C++'}, {lenguaje:'Java'}, {lenguaje:'JS'},{lenguaje:'Python'}];
selectecLenguaje: string= "";
cMas:boolean=false;
java:boolean=false;
js:boolean=false;
python:boolean=false;

mostrainfo3():void{
  this.mensaje3= this.selectedGenero+this.selectedNacionalidad+this.selectecLenguaje;
  }

}
