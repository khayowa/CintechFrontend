export interface Product{
    id: number;
    prodTitle: string;
    price: number;
    store: string;
    url: string;
}

export interface APIResponse<T>{
    results: Array<T>;
}