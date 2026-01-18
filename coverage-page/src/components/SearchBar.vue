<script setup lang="ts">
import { computed } from 'vue';

	const props = defineProps<{
		search: string
	}>()

	const emit = defineEmits<{
		(e: 'update:search', value: string): void
	}>()

	const emits = computed({
		get: () => props.search,
		set: value => emit('update:search', value)
	})

</script>

<template>
	<div class="searchFilter">
		<input
			class="searchBar"
			v-model="emits"
			type="text"
			placeholder="Search Platform..."
			aria-label="Search platform by name"
		>
	</div>
</template>

<style scoped>
	.searchBar {
		width: 100%;
		min-width: 100px;
		max-width: 500px;
		height: 25px;
		border-radius: 10px;
		border: 0.5px solid lightgrey;
		padding-right: 40px;
		padding-left: 10px;
	}
	.searchFilter {
		flex: 1;
		display: flex;
		justify-content: flex-end;
	}
</style>