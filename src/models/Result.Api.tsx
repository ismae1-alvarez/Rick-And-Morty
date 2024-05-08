export interface ApiRickAndMorty {
  id:        number;
  name:      string;
  type:      string;
  dimension: string;
  residents: string[];
  url:       string;
  created:   Date;
  results : Character[]
}

export interface Result {
  id:       number;
  name:     string;
  status:   string;
  species:  string;
  type:     string;
  gender:   string;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export interface Location {
  name: string;
  url:  string;
}



export interface Character {
  results: Result[];
}

// export interface Info {
//   count: number;
//   pages: number;
//   next:  string;
//   prev:  string;
// }

// export interface Result {
//   id:       number;
//   name:     string;
//   species:  string;
//   type:     string;
//   origin:   Location;
//   location: Location;
//   image:    string;
//   episode:  string[];
//   url:      string;
//   created:  Date;
// }

// export enum Gender {
//   Female = "Female",
//   Male = "Male",
//   Unknown = "unknown",
// }

// export interface Location {
//   name: string;
//   url:  string;
// }

// export enum Status {
//   Alive = "Alive",
//   Dead = "Dead",
//   Unknown = "unknown",
// }
