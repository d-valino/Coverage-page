import { describe, it, expect, beforeEach } from 'vitest'
import { ref, nextTick } from 'vue'
import { useCoverageSort } from '../src/composables/useCoverageSort'
import type { NormalizedData } from '../src/utils/types'


const mockData: NormalizedData[] = [
	{
		id: '1',
		name: 'Zomato',
		category: 'Gig Economy',
		type: 'Gig Economy',
		status: 'working',
		logoURL: ''
	},
	{
		id: '2',
		name: 'Amazon',
		category: 'Gig Economy',
		type: 'Gig Economy',
		status: 'working',
		logoURL: ''
	},
	{
		id: '3',
		name: 'SAT',
		category: 'Gig Economy',
		type: 'Tax portals',
		status: 'working',
		logoURL: ''
	}
]

it('sorts by name ascending by default', () => {
	const data = ref(mockData)

	const { sortedData } = useCoverageSort(data)

	expect(sortedData.value.map(i => i.name))
		.toEqual(['Amazon', 'SAT', 'Zomato'])
})

it('toggles sort direction when clicking same column', async () => {
	const data = ref(mockData)
	const { sortedData, toggleSort } = useCoverageSort(data)

	toggleSort('name')
	await nextTick()

	expect(sortedData.value.map(i => i.name))
		.toEqual(['Zomato', 'SAT', 'Amazon'])
})

it('changes column and resets direction to asc', async () => {
	const data = ref(mockData)
	const { sortedData, toggleSort } = useCoverageSort(data)

	toggleSort('type')
	awaiLt nextTick()

	expect(sortedData.value.map(i => i.type))
		.toEqual(['Gig Economy', 'Gig Economy', 'Tax portals'])
})

it('uses name as secondary sort when primary column is equal', () => {
	const data = ref([
		{ ...mockData[0], type: 'same' },
		{ ...mockData[1], type: 'same' },
		{ ...mockData[2], type: 'same' },
	])

	const { sortedData, toggleSort } = useCoverageSort(data)

	toggleSort('type')

	expect(sortedData.value.map(i => i.name))
		.toEqual(['Amazon', 'SAT', 'Zomato'])
})

it('keeps original order when name and column are equal', () => {
	const data = ref([
		{ ...mockData[0], name: 'Same', type: 'same' },
		{ ...mockData[1], name: 'Same', type: 'same' },
		{ ...mockData[2], name: 'Same', type: 'same' },
	])

	const { sortedData, toggleSort } = useCoverageSort(data)

	toggleSort('type')

	expect(sortedData.value.map(i => i.id))
		.toEqual(['1', '2', '3'])
})

it('does not mutate original data', () => {
	const data = ref([...mockData])
	const copy = [...mockData]

	useCoverageSort(data)

	expect(data.value).toEqual(copy)
})
