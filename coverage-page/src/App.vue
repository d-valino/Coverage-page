<script setup lang='ts'>
	import { useCoverageData } from './composables/useCoverageData';
	import CoverageTable from './components/CoverageTable.vue';

	const {data} = useCoverageData();
</script>


<template>

	<CoverageTable :rows="data"/>
</template>
