import { ref, computed, onMounted } from 'vue';
import type { NormalizedData, RequestData } from '../utils/types';

function normalizeData(requestArray : RequestData[]): NormalizedData[] {
	return requestArray.map((row) => {
		return {id: row.id,
		name: row.title,
		type: row.type,
		category: row.type,
		status: row.status,
		logoURL: row.logo}
	});
}

export function useCoverageData() {
	const data = ref<NormalizedData[]>([]);
	const isLoading = ref(false);
	const error = ref<string | null>(null);

	async function fetchData() {
		isLoading.value = true;
		error.value = null;

		try
		{
			const res = await fetch("https://api.getrollee.com/api/dashboard/v0.1/documentation/datasources", {
				method: 'GET',
			});
			if (!res.ok)
				throw new Error('Failed to fetch data');
			const json = await res.json();
			data.value = normalizeData(json.datasources);
		}
		catch (err)
		{
			error.value = err instanceof Error ? err.message : 'Unknown error';
		}
		finally
		{
			isLoading.value = false;
		}
	}

	onMounted(fetchData);

	const totalPlatforms = computed(() => data.value.length)
	
	const dataCategories = computed(() =>
	{
		const categories = data.value.map(row => row.category);

		const uniqueCategories = [... new Set(categories)];

		return uniqueCategories.map(category => ({
			label: category,
			value: category.toLowerCase().replace(' ', '-'),
			total: data.value.filter(row => row.category === category).length
		}))
	})

	return {data, dataCategories, totalPlatforms, isLoading, error};
}
