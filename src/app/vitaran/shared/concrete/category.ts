import { Product } from './product';
import { Store } from './store';

export class Category {

    public id: number;
    public type: string;

    constructor(options: Partial<Category>) {
        Object.assign(this, options);
    }
}
