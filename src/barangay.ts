
import { Barangay } from 'types/types';
import { dataFilter, dataFind, fetchData } from 'utils/utils';


export async function barangays(cityMunPCode: string): Promise<Barangay[]> {
  const data = await fetchData<Barangay>('barangay');
  return dataFilter(data, 'CITY_PCODE', cityMunPCode);
}

export async function barangayByCode(code: string): Promise<Barangay | undefined> {
  const data = await fetchData<Barangay>('barangay');
  return dataFind(data, 'BRGY_PCODE', code);
}

export async function barangayByName(name: string): Promise<Barangay[]> {
  const data = await fetchData<Barangay>('barangay');
  return dataFilter(data, 'BRGY_NAME', name);
}
