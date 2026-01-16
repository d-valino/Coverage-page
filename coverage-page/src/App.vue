<script setup lang='ts'>
	import { useCoverageData } from './composables/useCoverageData';
	import CoverageHeader from './components/CoverageHeader.vue'
	import CoverageFilters from './components/CoverageFilters.vue';
	import CoverageTable from './components/CoverageTable.vue';
	import { useCoverageFilters } from './composables/useCoverageFilters';

	const {data, dataCategories, totalPlatforms} = useCoverageData();
	const {activeFilter, filteredData} = useCoverageFilters(data);
</script>


<template>
	<CoverageHeader :total="totalPlatforms"/>
	
	<CoverageFilters
	:categories="dataCategories"
	:activeFilter="activeFilter"
	:totalPlatforms="totalPlatforms"
	@change="activeFilter = $event"/>

	<CoverageTable :rows="filteredData"/>
</template>
