import { useQuery } from '@tanstack/react-query';
import { fetchCategories } from '../services/fetch';

const useCategoriesQuery = () => {
    return useQuery({
        // queryFn: () => fetchCategories(),
        queryFn: fetchCategories,
        queryKey: ['categories'],
        staleTime: 1000 * 5,
    });
};

export { useCategoriesQuery };