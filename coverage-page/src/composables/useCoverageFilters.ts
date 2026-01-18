import { ref, computed, type Ref, onMounted, watch } from 'vue'
import type { Category, NormalizedData } from '../utils/types';


export function useCoverageFilters(data: Ref<NormalizedData[]>, dataCategories: Ref<Category[]>) {
	const categoryFilter = ref<string>('all');
	const statusFilter = ref<'all' | 'working' | 'coming-soon'>('all');
	const searchInput = ref('');

	const validCategoryValues = computed(() => [
		'all',
		...dataCategories.value.map(c => c.value)
	])

	onMounted(() => {
		const params = new URLSearchParams(window.location.search)

		const categoryParam = params.get('category')
		if (categoryParam && validCategoryValues.value.includes(categoryParam))
			categoryFilter.value = categoryParam;
		else
			categoryFilter.value = 'all';

		const status = params.get('status')
		if (status && ['all', 'working', 'coming-soon'].includes(status.toLowerCase()))
			statusFilter.value = status as ('all' | 'working' | 'coming-soon');
		else
			statusFilter.value = 'all';

		searchInput.value  = (params.get('search')) ? params.get('search')! : '';
	})

	const filteredData = computed(() => {
		return data.value.filter(row => {

			if (categoryFilter.value !== 'all'
				&& row.category.toLowerCase().replace(' ', '-') !== categoryFilter.value)
				return false;

			if (statusFilter.value !== 'all'
				&& row.status.toLowerCase().replace(' ', '-') !== statusFilter.value)
				return false;

			if (searchInput.value.trim().length
				&& !row.name.toLowerCase().startsWith(searchInput.value.trim().toLocaleLowerCase()))
				return false;

			return true;
		})
	})

	watch(
	() => dataCategories.value,
	() => {
		const params = new URLSearchParams(window.location.search)
		const categoryParam = params.get('category')

		if (categoryParam && validCategoryValues.value.includes(categoryParam)) {
			categoryFilter.value = categoryParam
		}
	},
	{ immediate: true }
)

	return {searchInput, statusFilter, categoryFilter, filteredData};
}
