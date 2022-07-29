
export interface Product{

    product:{
        id: number;
        prodVolume: number;
        prodVolumeUnit: string;
        prodTitle: string;
    }
    pickNPay:{
        price: number;
        url: string;
    }
    woolworths:{
        price: number;
        url: string;
    }
    
}

export interface APIResponse<T>{
    results: Array<T>;
}