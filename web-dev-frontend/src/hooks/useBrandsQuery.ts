import { useQuery } from '@tanstack/react-query';
import { fetchBrand } from '../services/fetch';

const useBrandsQuery = () => {
    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchBrand,
        queryKey: ['brands'],
        staleTime: 1000 * 5,
    });
};

export { useBrandsQuery };