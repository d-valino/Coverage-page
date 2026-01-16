import { ref, computed, type Ref } from 'vue'
import type { NormalizedData } from '../utils/types';

export function useCoverageFilters(data: Ref<NormalizedData[]>) {
	const categoryFilter = ref<string>('all');
	const statusFilter = ref<'all' | 'working' | 'coming-soon'>('all');

	const filteredData = computed(() => {
		return data.value.filter(row => {

			if (categoryFilter.value !== 'all'
				&& row.category.toLowerCase().replace(' ', '-') !== categoryFilter.value)
				return false;

			if (statusFilter.value !== 'all'
				&& row.status.toLowerCase().replace(' ', '-') !== statusFilter.value)
				return false;
			
			return true;
		})
	})

	return {statusFilter, categoryFilter, filteredData};
}
