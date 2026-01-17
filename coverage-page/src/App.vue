<script setup lang='ts'>
	import { useCoverageData } from './composables/useCoverageData';
	import CoverageHeader from './components/CoverageHeader.vue'
	import CoverageFilters from './components/CoverageFilters.vue';
	import CoverageTable from './components/CoverageTable.vue';
	import { useCoverageFilters } from './composables/useCoverageFilters';
	import { useCoverageSort } from './composables/useCoverageSort';

	const {data, dataCategories, totalPlatforms} = useCoverageData();
	const {statusFilter, categoryFilter, filteredData} = useCoverageFilters(data);
	const {sortDirection, sortedData} = useCoverageSort(filteredData);
</script>


<template>
	<CoverageHeader :total="totalPlatforms"/>

	<CoverageFilters
	:categories="dataCategories"
	:activeFilter="categoryFilter"
	:totalPlatforms="totalPlatforms"
	@change="categoryFilter = $event"/>

	<CoverageTable
	:rows="sortedData"
	:statusFilter="statusFilter"
	:sortDirection="sortDirection"
	@update:statusFilter="statusFilter = $event"
	@update:sortDirection="sortDirection = $event"
	/>
</template>
