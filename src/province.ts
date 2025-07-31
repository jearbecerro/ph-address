import { Province } from 'types/types';
import { dataFilter, dataFind, fetchData } from 'utils/utils';

// Province
export async function provinces(regionPCode: string): Promise<Province[]> {
  const data = await fetchData<Province>('province');
  return dataFilter(data, 'REGION_PCODE', regionPCode);
}

export async function provinceByName(name: string): Promise<Province | undefined> {
  const data = await fetchData<Province>('province');
  return dataFind(data, 'PROVINCE_NAME', name);
}

export async function provinceByCode(code: string): Promise<Province | undefined> {
  const data = await fetchData<Province>('province');
  return dataFind(data, 'PROVINCE_PCODE', code);
}