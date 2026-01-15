<script setup lang="ts">
	defineProps<{
		activeFilter: string
		categories:{ value: string; label: string }[]
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
			All Platforms
		</button>
		<button v-for="category in categories"
			:key="category.value"
			@click="emit('change', category.value)"
			:class="{ active: activeFilter === category.value }">
			{{ category.label }}
		</button>
	</div>
</template>


<style scoped>
	button {
		padding: 8px;
		background-color: #f4fafa;
		color: #767d88;
		border: 1px solid transparent;
		border-radius: 40px;
		font-weight: 500;
		font-size: small;
		cursor: pointer;
		font-family: inherit;
	}
	button.active {
		background-color: #eaf0f5;
		color: #243958;
	}
	.filters {
		display: flex;
		background-color: white;
		gap: 10px;
		padding-block: 10px;
		padding-inline: 20px;
	}
</style>
