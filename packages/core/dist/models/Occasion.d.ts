export type TransmissionType = "automatic" | "manual";
export type ConditionType = "new" | "used" | "demo";
export interface OccasionImage {
    url: string;
    caption?: string;
}
export interface Occasion {
    id: string;
    make: string;
    model: string;
    year: number;
    askingPrice: number;
    mileage: number;
    colour: string;
    transmission: TransmissionType;
    condition: ConditionType;
    features: string[];
    images: OccasionImage[];
    description?: string;
    available: boolean;
}
//# sourceMappingURL=Occasion.d.ts.map
