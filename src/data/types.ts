export type Specie = {
  id: string;
  icon: string;
  name: string;
  scientificName: string;
  locations: string[];
  threat: 'threated' | 'vulnerable' | 'safe';
  threatLabel: string;
  type: string;
  description: string;
  habitat: string;
  height: string;
};

export type SpecieSummary = Omit<Specie, 'description' | 'habitat' | 'height'>;

export type ApiSpecie = {
  id: string;
  nombre: string;
  cientifico: string;
  icono: string;
  tipo: string;
  amenaza: 'EN' | 'VU' | 'LC';
  habitat: string;
  tamano: string;
  descripcion: string;
  islas: { id: string; nombre: string }[];
};
