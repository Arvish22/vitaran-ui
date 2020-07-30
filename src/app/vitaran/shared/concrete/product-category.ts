import { Product } from './product';

export class ProductCategory {

    public id: number;
    public type: string;

    constructor(options: Partial<ProductCategory>) {
        Object.assign(this, options);
    }
}
