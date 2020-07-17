import { Product } from './product';

export class ProductCategory {

    public id: number;
    public type: string;
    public products: Product[];

    constructor(options: Partial<ProductCategory>) {
        Object.assign(this, options);
    }
}
