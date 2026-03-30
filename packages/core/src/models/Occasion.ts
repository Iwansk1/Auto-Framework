export type TransmissionType = "automatic" | "manual";
export type ConditionType = "new" | "used" | "demo";

export interface OccasionImage {
    url: string;
    caption?: string;
}

export interface Occasion {
    id: string;
    // Vehicle info - free text so no catalogue dependency needed
    make: string;
    model: string;
    year: number;
    // Pricing & details
    askingPrice: number; // EURO
    mileage: number; // KM
    color: string;
    transmission: TransmissionType;
    condition: ConditionType;
    // Flexible free text features
    features: string[];
    images: OccasionImage[];
    description?: string;
    available: boolean;
}
