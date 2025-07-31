import axios from 'axios';
import { BASE_URL } from './constant';

export async function fetchData<T>(filename: string): Promise<T[]> {
  const { data } = await axios.get<T[]>(`${BASE_URL}/${filename}.json`);
  return data;
}

export function dataFind<T>(data: T[], key: keyof T, value: string): T | undefined {
  return data.find(item => item[key] === value);
}

export function dataFilter<T>(data: T[], key: keyof T, value: string): T[] {
  return data.filter(item => item[key] === value);
}
