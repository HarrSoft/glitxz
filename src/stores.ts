import { writable, type Writable } from 'svelte/store';
import type { ProductZ } from '$z';

export const products: Writable<Array<ProductZ>> = writable([]);
export const productDetails: Writable<ProductZ> = writable();
