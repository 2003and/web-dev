import { Product } from '../types/product'
import { News } from '@/types/news'
import { Brand } from '@/types/brand'
import { Category } from '@/types/category'

const BASE = 'http://localhost:7777/api'

export async function fetchProduct(): Promise<Product[]> {
    const res = await fetch(`${BASE}/product`)
    if (!res.ok) throw new Error('Product loading error')
    return res.json()
}

export async function fetchCategories(): Promise<Category[]> {
    const res = await fetch(`${BASE}/category`)
    if (!res.ok) throw new Error('Category loading error')
    return res.json()
}

export async function fetchNews(): Promise<News[]> {
    const res = await fetch(`${BASE}/news`)
    if (!res.ok) throw new Error('News loading error')
    return res.json()
}

export async function fetchBrand(): Promise<Brand[]> {
    const res = await fetch(`${BASE}/brand`)
    if (!res.ok) throw new Error('Brand loading error')
    return res.json()
}