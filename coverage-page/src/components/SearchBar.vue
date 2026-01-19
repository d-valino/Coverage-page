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

	const clearSearch = () => {
		emits.value = ''
	}
</script>


<template>
	<div class="searchFilter">
		<div class="searchWrapper">
			<input
				class="searchBar"
				v-model="emits"
				type="text"
				placeholder="Search Platform..."
				aria-label="Search platform by name"
			>
			<button
				v-if="emits"
				@click="clearSearch"
				type="button"
				aria-label="Clear search"
				class="clearButton"
			>
			✕
			</button>
		</div>
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
		box-sizing: border-box;
	}
	.searchFilter {
		flex: 1;
		display: flex;
		justify-content: flex-end;
		width: 100%;
		box-sizing: border-box;
		max-width: 100%;
		padding: 0 10px;
	}
	.searchWrapper {
		position: relative;
		width: 100%;
		max-width: 500px;
	}
	.clearButton {
		position: absolute;
		color: #b0b0b0;
		cursor: pointer;
		font-family: inherit;
		right: 5px;
		top: 50%;
		transform: translateY(-50%);
		background: transparent;
		border: none;
		padding: 0;
	}
	.clearButton:hover {
		color: black;
	}
</style>
