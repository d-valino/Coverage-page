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
	<div class="filters">
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
	.filters {
		display: flex;
		background-color: white;
		gap: 10px;
		padding-block: 10px;
		padding-inline: 20px;
	}
</style>
