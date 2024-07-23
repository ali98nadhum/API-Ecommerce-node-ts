export type Tproduct = {
    name: String;
    description: string;
    price: number;
    category: string;
    tags: string[];
    variants: Tvariant[];
    inventory: Tinventory;
}

export type Tvariant = {
    type: string;
    value: string;
}

export type Tinventory = {
    quantity: number;
    inStock: boolean;
}