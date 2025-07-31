# @jear-dev/ph-address

A TypeScript utility for extracting detailed Philippine address information — including **barangay**, **city/municipality**, **province**, **region**, and **ZIP/postal code** — from a full address using the Google Maps Geocoding API.

---

## ✨ Features

- Parses and extracts:
  - ZIP / postal code  
  - Barangay  
  - City / Municipality  
  - Province  
  - Region  
- Designed specifically for **Philippine** address structures
- Based on the official **Google Maps Geocoding API**
- Fully typed with TypeScript
- Lightweight and easy to integrate

---

## 📦 Installation

```bash
npm install @jear-dev/ph-address
```

🌐 Based on NAMRIA PH Data
This library is guided by the official Philippine administrative boundaries provided by the National Mapping and Resource Information Authority (NAMRIA).

You can access the official dataset here:
🔗 https://data.humdata.org/dataset/cod-ab-phl

🧪 Usage
1️⃣ Regions
```ts
import { regions, regionByCode, regionsByName } from '@jear-dev/ph-address';

// Get all regions
const allRegions = await regions();

// Get region by code
const region = await regionByCode('PH01');

// Find regions by name
const namedRegions = await regionsByName('Region I (Ilocos Region)');
```
2️⃣ Provinces
```ts
import { provinces, provinceByCode, provinceByName } from '@jear-dev/ph-address';

// Get provinces by region code
const provinceList = await provinces('PH01');

// Get a province by code
const province = await provinceByCode('PH01028');

// Find province by name
const provinceByNameResult = await provinceByName('Ilocos Norte');
```
3️⃣ Cities / Municipalities
```ts
import { cities, cityByCode, cityByName } from '@jear-dev/ph-address';

// Get cities by province code
const cityList = await cities('PH01028');

// Get city by code
const city = await cityByCode('PH0102801');

// Find cities by name
const cityMatches = await cityByName('Adams');
```
4️⃣ Barangays
```ts
import { barangays, barangayByCode, barangayByName } from '@jear-dev/ph-address';

// Get barangays by city/municipality code
const brgyList = await barangays('PH0102801');

// Get barangay by code
const brgy = await barangayByCode('PH0102801001');

// Find barangays by name
const brgyMatches = await barangayByName('Adams (Pob.)');
```
5️⃣ ZIP Code from Address
```ts
import { getZipCodeFromAddress } from '@jear-dev/ph-address';

const zip = await getZipCodeFromAddress(
  'Adams, Ilocos Norte, Philippines',
  'YOUR_GOOGLE_MAPS_API_KEY'
);

console.log(zip); // Example: "2922"
```
🧾 Types
```ts
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
  CITY_MUN_NAME: string;
  CITY_MUN_PCODE: string;
  CITY_MUN_REF: string;
  CITY_MUN_ALTNAME: string;
  PROVINCE_NAME: string;
  PROVINCE_PCODE: string;
  REGION_NAME: string;
  REGION_PCODE: string;
}

export interface Barangay {
  BRGY_NAME: string;
  BRGY_PCODE: string;
  BRGY_REF: string;
  CITY_MUN_NAME: string;
  CITY_MUN_PCODE: string;
  PROVINCE_NAME: string;
  PROVINCE_PCODE: string;
  REGION_NAME: string;
  REGION_PCODE: string;
}
```
📄 License
MIT License © 2025 @jear-dev

