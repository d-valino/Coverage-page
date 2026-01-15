<script setup lang='ts'>
	import { useCoverageData } from './composables/useCoverageData';
	import CoverageFilters from './components/CoverageFilters.vue';
	import CoverageTable from './components/CoverageTable.vue';
	import { useCoverageFilters } from './composables/useCoverageFilters';

	const {data, dataCategories} = useCoverageData();
	const {activeFilter, filteredData} = useCoverageFilters(data);
</script>


<template>
	
	<CoverageFilters
	:categories="dataCategories"
	:activeFilter="activeFilter"
	@change="activeFilter = $event"/>

	<CoverageTable :rows="filteredData"/>
</template>
