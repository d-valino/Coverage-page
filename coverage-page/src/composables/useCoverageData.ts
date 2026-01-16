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
	
	onMounted(async () => {
		try {
			const res = await fetch("https://api.getrollee.com/api/dashboard/v0.1/documentation/datasources", {
				method: 'GET',
			});
			const json = await res.json();
			data.value = normalizeData(json.datasources);
		} catch (error) {
			console.error(error);
		}
	});

	const totalPlatforms = computed(() => data.value.length)
	
	const dataCategories = computed(() => {
		const categories = data.value.map(row => row.category);
		const uniqueCategories = [... new Set(categories)];
		return uniqueCategories.map(category => ({
			label: category,
			value: category.toLowerCase().replace(' ', '-'),
			total: data.value.filter(row => row.category === category).length
		}))
	})

	return {data, dataCategories, totalPlatforms};
}
