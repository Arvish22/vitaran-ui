import { ProductCategory } from './product-category';

export class Store {

	public id : number;
	public name : string;
	public address : any;
    public productsCategories : ProductCategory[];
    
    constructor(options: Partial<Store>) {
        Object.assign(this, options);
    }
}
