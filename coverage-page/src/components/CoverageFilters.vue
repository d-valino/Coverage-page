<script setup lang="ts">
	defineProps<{
		activeFilter: string
		categories:{ value: string; label: string, total:number }[]
		totalPlatforms: number
	}>()

	const emit = defineEmits<{
		(e: 'change', value: string): void
	}>()
</script>


<template>
	<div class="categoryFilters">
		<button
			@click="emit('change', 'all')"
			:class="{ active: activeFilter === 'all' }">
			All Platforms ({{ totalPlatforms }})
		</button>
		<button v-for="category in categories"
			:key="category.value"
			@click="emit('change', category.value)"
			:class="{ active: activeFilter === category.value }">
			{{ category.label }} ({{ category.total }})
		</button>
	</div>
</template>


<style scoped>
	button {
		flex-shrink: 0;
		white-space: nowrap;
		padding: 8px;
		background-color: #f4fafa;
		color: #79808b;
		border: 1px solid transparent;
		border-radius: 40px;
		font-weight: 500;
		font-size: x-small;
		cursor: pointer;
		font-family: inherit;
	}
	button.active {
		background-color: #eaf0f5;
		color: #223857;
	}
	.categoryFilters {
		display: flex;
		white-space: nowrap;
		gap: 10px;
		padding-block: 10px;
		padding-inline: 20px;

		min-width: 0;
		flex: 1 1 auto;
		overflow-x: auto;
		overflow-y: hidden;

		scrollbar-width: thin;
	}
</style>
