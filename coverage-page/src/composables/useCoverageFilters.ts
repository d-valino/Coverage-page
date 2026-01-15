import { ref, computed, type Ref } from 'vue'
import type { NormalizedData } from '../utils/types';

export function useCoverageFilters(data: Ref<NormalizedData[]>) {
	const activeFilter = ref<string>('all');
	
	const filteredData = computed(() => {
		if (activeFilter.value === 'all')
			return data.value;
		return data.value.filter(row => row.category.toLowerCase().replace(' ', '-') === activeFilter.value)
	})

	return {activeFilter, filteredData};
}
