import { Region } from 'types/types';
import { dataFilter, dataFind, fetchData } from 'utils/utils';

export async function regions(): Promise<Region[]> {
  return fetchData<Region>('region');
}

export async function regionByCode(code: string): Promise<Region | undefined> {
  const data = await fetchData<Region>('region');
  return dataFind(data, 'REGION_PCODE', code);
}

export async function regionsByName(name: string): Promise<Region[]> {
  const data = await fetchData<Region>('region');
  return dataFilter(data, 'REGION_NAME', name);
}