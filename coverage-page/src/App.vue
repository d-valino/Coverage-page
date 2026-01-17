<script setup lang='ts'>
	import { useCoverageData } from './composables/useCoverageData';
	import CoverageHeader from './components/CoverageHeader.vue'
	import CoverageFilters from './components/CoverageFilters.vue';
	import CoverageTable from './components/CoverageTable.vue';
	import { useCoverageFilters } from './composables/useCoverageFilters';
	import { useCoverageSort } from './composables/useCoverageSort';
	import SearchBar from './components/SearchBar.vue';
	import { computed, watch } from 'vue';

	const {data, dataCategories, totalPlatforms, isLoading, error} = useCoverageData();
	const {searchInput, statusFilter, categoryFilter, filteredData} = useCoverageFilters(data);
	const {sortDirection, sortedData} = useCoverageSort(filteredData);

	const isEmpty = computed(() => {
		return (!isLoading.value && filteredData.value.length === 0)
	})

	watch([categoryFilter, statusFilter, searchInput, sortDirection], () => {
		const params = new URLSearchParams()

		if (categoryFilter.value) {
			params.set('category', categoryFilter.value)
		}

		if (statusFilter.value) {
			params.set('status', statusFilter.value)
		}

		if (searchInput.value) {
			params.set('search', searchInput.value)
		}

		if (sortDirection.value) {
			params.set('sort', sortDirection.value)
		}

		const url = `${window.location.pathname}?${params.toString()}`
		window.history.replaceState({}, '', url)
	})
</script>


<template>
	
	<div class="stateMessage loader" v-if="isLoading">
		Loading Data...
	</div>
	
	<div class="stateMessage error" v-else-if="error">
		Error : {{ error }}
	</div>

	<div v-else>
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
		:isEmpty="isEmpty"
		@update:statusFilter="statusFilter = $event"
		@update:sortDirection="sortDirection = $event"
		/>
	</div>

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

	.error {
		color: red;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
