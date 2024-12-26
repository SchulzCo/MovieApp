import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'

  })
  export class MovieService {
    private apiUrl = 'https://api.example.com/movies';  // Cambia esta URL por la real
    private episodesUrl = 'https://www.omdbapi.com/?apikey=2ff6c6e4&t=From&Season=1';  // URL para obtener episodios
  
    constructor(private http: HttpClient) {} // Asegúrate de inyectar HttpClient aquí
  
    getMovies(): Observable<any> {
      return this.http.get<any>(this.apiUrl);
    }
  
    getEpisodes(): Observable<any> { // Agregar este método
      return this.http.get<any>(this.episodesUrl);
    }
  }
  





/*

export class MovieService {
  private movies = [
    { title: 'El padrino', year: 1972, description: 'Don Vito Corleone es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York en los años 40. El hombre tiene cuatro hijos: Connie, Sonny, Fredo y Michael, que no quiere saber nada de los negocios sucios de su padre. Cuando otro capo, Sollozzo, intenta asesinar a Corleone, empieza una cruenta lucha entre los distintos clanes.', image: './assets/el padrino.jpeg' },

    { title: 'El padrino II ', year: 1974, description: 'Tras la muerte de Don Vito Corleone, su hijo Michael es elegido para liderar los negocios familiares. El nuevo cabeza de familia debe lidiar con un panorama cambiante de amistades y enemistades, al tener que negociar con la mafia judía y perder el apoyo de Frankie. Al mismo tiempo, Michael escapa por los pelos de un atentado. Simultáneamente, se recuerda el ascenso y los orígenes de Don Vito en Sicilia y como inmigranten Nueva York.', image: './assets/el padrino 2.jpeg' },

    { title: 'El señor de los anillos: El retorno del rey', year: 2003, description: 'La batalla por la Tierra Media ha empezado. Las fuerzas de Saruman han sido destruidas y por primera vez parece que hay una pequeña esperanza. Sin embargo, el poder de Sauron crece y su interés se centra en Gondor, el último reducto de los hombres, cuyo heredero es Aragorn. Mientras, Frodo y Sam, guiados por Gollum, siguen su peligrosa misión a través de Mordor para destruir el anillo.', image: './assets/el retorno del rey.jpeg' },

    { title: 'El señor de los anillos: La comunidad del anillo', year: 2001, description: 'En la Tierra Media, el Señor Oscuro Sauron forjó los Grandes Anillos del Poder y creó uno con el poder de esclavizar a toda la Tierra Media. Frodo Bolsón es un hobbit al que su tío Bilbo hace portador del poderoso Anillo Único con la misión de destruirlo. Acompañado de sus amigos, Frodo emprende un viaje hacia Mordor, el único lugar donde el anillo puede ser destruido. Sin embargo, Sauron ordena la persecución del grupo para recuperar el anillo y acabar con la Tierra Media.', image: './assets/la comunidad del anillo.jpeg' },
    { title: 'Forrest Gump', year: 1994, description: 'Sentado en un banco en Savannah, Georgia, Forrest Gump espera al autobús. Mientras éste tarda en llegar, el joven cuenta su vida a las personas que se sientan a esperar con él. Aunque sufre un pequeño retraso mental, esto no le impide hacer cosas maravillosas. Sin entender del todo lo que sucede a su alrededor, Forrest toma partido en los eventos más importantes de la historia de los Estados Unidos.', image: './assets/Forrest Gump.jpeg' },
    { title: 'El club de la pelea', year: 1999, description: 'Un empleado de oficina insomne, harto de su vida, se cruza con un vendedor peculiar. Ambos crean un club de lucha clandestino como forma de terapia y, poco a poco, la organización crece y sus objetivos toman otro rumbo' },
    { title: 'El origen ', year: 2010, description: 'Dom Cobb es un ladrón con una extraña habilidad para entrar a los sueños de la gente y robarles los secretos de sus subconscientes. Su habilidad lo ha vuelto muy popular en el mundo del espionaje corporativo, pero ha tenido un gran costo en la gente que ama. Cobb obtiene la oportunidad de redimirse cuando recibe una tarea imposible: plantar una idea en la mente de una persona. Si tiene éxito, será el crimen perfecto, pero un enemigo se anticipa a sus movimientos.', image: './assets/Origen.jpeg' },
    { title: 'Star Wars: Episodio V - El imperio contraataca', year: 2002, description: 'Son tiempos adversos para la rebelión. Aunque la Estrella de la Muerte ha sido destruida, las tropas imperiales han hecho salir a las fuerzas rebeldes de sus bases ocultas y los persiguen a través de la galaxia. Tras escapar de la terrible Flota Imperial, un grupo de guerreros de la libertad, encabezados por Luke Skywalker, ha establecido una nueva base secreta en el remonto mundo helado de Hoth.', image: './assets/el imperio contraataca.jpg' }]

  getMovies() {
    return this.movies;
  }
}
*/