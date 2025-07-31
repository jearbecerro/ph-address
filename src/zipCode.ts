import axios from 'axios';
import { GOOGLE_API } from 'utils/constant';

export async function getZipCodeFromAddress(address: string, apiKey: string): Promise<string | undefined> {
    const encodedAddress = encodeURIComponent(address);
    const url = `${GOOGLE_API}address=${encodedAddress}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        const result = response.data?.results?.[0];

        if (!result) return undefined;

        const postalComponent = result.address_components.find((component: { types: string[]; long_name: string }) =>
            component.types.includes('postal_code')
        );

        return postalComponent?.long_name;
    } catch (error: any) {
        console.error('Error getting ZIP code:', error?.message ?? error);
        return undefined;
    }
}
