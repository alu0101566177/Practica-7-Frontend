import type { ApiSpecie, Specie } from './types.ts';

const threatMap = {
  LC: { level: 'safe', label: 'Preocupación menor' },
  VU: { level: 'vulnerable', label: 'Vulnerable' },
  EN: { level: 'threated', label: 'En peligro' },
} as const;

export function specieAdapter(specie: ApiSpecie): Specie {
  const threat = threatMap[specie.amenaza] ?? threatMap.LC;

  return {
    id: specie.id,
    icon: specie.icono,
    name: specie.nombre,
    scientificName: specie.cientifico,
    locations: specie.islas.map(isla => isla.nombre),
    threat: threat.level,
    threatLabel: threat.label,
    type: specie.tipo,
    description: specie.descripcion,
    habitat: specie.habitat,
    height: specie.tamano,
  };
}
