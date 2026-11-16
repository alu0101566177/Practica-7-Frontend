import type { ApiSpecie } from './types.ts';

const API_URL = import.meta.env.GRAPHQL_URL ?? 'http://localhost:4000/graphql';

const SPECIE_FIELDS = `
  id nombre cientifico icono tipo amenaza habitat tamano descripcion
  islas { id nombre }
`;

async function query<T>(
  document: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: document, variables }),
  });

  if (!response.ok) {
    throw new Error(`La API respondió con HTTP ${response.status}`);
  }

  const { data, errors } = (await response.json()) as {
    data?: T;
    errors?: { message: string }[];
  };

  if (errors?.length || !data) {
    throw new Error(errors?.map(e => e.message).join(', ') ?? 'Respuesta vacía');
  }

  return data;
}

export async function getSpecies(): Promise<ApiSpecie[]> {
  const data = await query<{ especies: ApiSpecie[] }>(
    `{ especies { ${SPECIE_FIELDS} } }`,
  );
  return data.especies;
}

export async function getSpecie(id: string): Promise<ApiSpecie | null> {
  const data = await query<{ especie: ApiSpecie | null }>(
    `query ($id: ID!) { especie(id: $id) { ${SPECIE_FIELDS} } }`,
    { id },
  );
  return data.especie;
}
