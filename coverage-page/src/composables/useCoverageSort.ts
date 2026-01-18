import { ref, computed, type Ref, onMounted } from 'vue'
import { type NormalizedData } from '../utils/types';


const SORT_COLUMNS = ['name', 'type'] as const;
export type SortColumn = typeof SORT_COLUMNS[number];

export function useCoverageSort(data: Ref<NormalizedData[]>) {
	const sortDirection = ref< 'asc' | 'desc' >('asc');
	const sortColumn = ref<SortColumn>('name');

	onMounted(() => {
		const params = new URLSearchParams(window.location.search)

		const direction = params.get('dir');
		const column = params.get('column');

		if (column && SORT_COLUMNS.includes(column as SortColumn))
			sortColumn.value = column as SortColumn;

		if (direction && (direction === 'asc' || direction === 'desc'))
			sortDirection.value = direction;
	})

	const sortedData = computed(() => {
		return [...data.value]
		.map((item, index) => ({item, index}))
		.sort((a, b) => {

			const aVal = a.item[sortColumn.value];
			const bVal = b.item[sortColumn.value];

			let cmp = aVal.localeCompare(bVal);

			if (cmp !== 0)
				return ((sortDirection.value === 'asc') ? cmp : -cmp);

			cmp = a.item.name.localeCompare(b.item.name)
			if (cmp !== 0)
				return cmp

			return (a.index - b.index);
		}).map(({ item }) => item);
	})

	function toggleSort(column: SortColumn)
	{		
		if (sortColumn.value === column)
		{
			sortDirection.value =
			sortDirection.value === 'asc' ? 'desc' : 'asc'
		}
		else {
			sortColumn.value = column
			sortDirection.value = 'asc'
		}
	}

	return {sortColumn, sortDirection, sortedData, toggleSort};
}
