<script setup lang='ts'>
	import { useCoverageData } from './composables/useCoverageData';
	import CoverageHeader from './components/CoverageHeader.vue'
	import CoverageFilters from './components/CoverageFilters.vue';
	import CoverageTable from './components/CoverageTable.vue';
	import { useCoverageFilters } from './composables/useCoverageFilters';
	import { useCoverageSort } from './composables/useCoverageSort';
	import SearchBar from './components/SearchBar.vue';

	const {data, dataCategories, totalPlatforms} = useCoverageData();
	const {searchInput, statusFilter, categoryFilter, filteredData} = useCoverageFilters(data);
	const {sortDirection, sortedData} = useCoverageSort(filteredData);
</script>


<template>
	<CoverageHeader :total="totalPlatforms"/>

	<div class="filters">
		<CoverageFilters
		:categories="dataCategories"
		:activeFilter="categoryFilter"
		:totalPlatforms="totalPlatforms"
		@change="categoryFilter = $event"/>
		
		<SearchBar
		:search="searchInput"
		@update:search="searchInput = $event"
		/>
	</div>

	<CoverageTable
	:rows="sortedData"
	:statusFilter="statusFilter"
	:sortDirection="sortDirection"
	@update:statusFilter="statusFilter = $event"
	@update:sortDirection="sortDirection = $event"
	/>
</template>

<style scoped>
	.filters {
		width: 100%;
		display: flex;
		flex-wrap: nowrap;
		background-color: white;
		align-items: center;
		justify-content: space-between;
		padding-inline: 20px;
		box-sizing: border-box;
		gap: 12px;
	}
</style>
