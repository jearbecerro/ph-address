import { CityMun } from 'types/types';
import { dataFilter, dataFind, fetchData } from 'utils/utils';


// City/Municipality
export async function cities(provincePCode: string): Promise<CityMun[]> {
  const data = await fetchData<CityMun>('city');
  return dataFilter(data, 'PROVINCE_PCODE', provincePCode);
}

export async function cityByCode(code: string): Promise<CityMun | undefined> {
  const data = await fetchData<CityMun>('city');
  return dataFind(data, 'CITY_PCODE', code);
}

export async function cityByName(name: string): Promise<CityMun[]> {
  const data = await fetchData<CityMun>('city');
  return dataFilter(data, 'CITY_NAME', name);
}