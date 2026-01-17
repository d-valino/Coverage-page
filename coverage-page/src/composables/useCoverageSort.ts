import { ref, computed, type Ref, onMounted } from 'vue'
import type { NormalizedData } from '../utils/types';

export function useCoverageSort(data: Ref<NormalizedData[]>) {
	const sortDirection = ref< 'asc' | 'desc' >('asc');

	onMounted(() => {
		const params = new URLSearchParams(window.location.search)

		const direction = params.get('sort');
		if (direction && ['asc', 'desc'].includes(direction.toLowerCase()))
			sortDirection.value = params.get('sort') as ('asc' | 'desc');
		else
			sortDirection.value = 'asc';
	})

	const sortedData = computed(() => {
		return [...data.value]
		.map((item, index) => ({item, index}))
		.sort((a, b) => {
			const cmp = a.item.name.localeCompare(b.item.name);
			if (cmp !== 0)
				return ((sortDirection.value === 'asc') ? cmp : -cmp);
			return (a.index - b.index);
		}).map(({ item }) => item);
	})

	return {sortDirection, sortedData};
}
