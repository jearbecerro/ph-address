export interface Region {
  REGION_NAME: string;
  REGION_ALTNAME: string;
  REGION_PCODE: string;
  NATION_NAME: string;
  NATION_PCODE: string;
}

export interface Province {
  PROVINCE_NAME: string;
  PROVINCE_PCODE: string;
  PROVINCE_ALTNAME: string;
  REGION_NAME: string;
  REGION_PCODE: string;
}

export interface CityMun {
  CITY_NAME: string;
  CITY_PCODE: string;
  CITY_REF: string;
  CITY_ALTNAME: string;
  PROVINCE_NAME: string;
  PROVINCE_PCODE: string;
  REGION_NAME: string;
  REGION_PCODE: string;
}

export interface Barangay {
  BRGY_NAME: string;
  BRGY_PCODE: string;
  BRGY_REF: string;
  CITY_NAME: string;
  CITY_PCODE: string;
  PROVINCE_NAME: string;
  PROVINCE_PCODE: string;
  REGION_NAME: string;
  REGION_PCODE: string;
}
