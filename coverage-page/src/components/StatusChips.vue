<script setup lang="ts">
	import { computed } from 'vue';

	const props = defineProps<{
		modelValue : 'all' | 'working' | 'coming-soon'
	}>()

	const emit = defineEmits<{
		(e: 'update:modelValue', value: 'all' | 'working' | 'coming-soon'): void
	}>()

	const statusFilter = computed({
		get: () => props.modelValue,
		set: v => emit('update:modelValue', v)
	})

</script>

<template>
	<div class="statusFilters">
		<button
			class="chip left"
			:class="{ active: statusFilter === 'working' }"
			@click="statusFilter = (statusFilter === 'working') ? 'all' : 'working'"
			:aria-pressed="statusFilter === 'working'"
			aria-label="Filter by working status"
		>
			<svg
				class="status-icon"
				viewBox="0 0 24 24"
				aria-hidden="true"
				>
				<circle cx="12" cy="12" r="10" />
				<polyline points="7 11, 11 15, 17 8"/>
			</svg>
		</button>
		<button
			class="chip right"
			:class="{ active: statusFilter === 'coming-soon' }"
			@click="statusFilter = (statusFilter === 'coming-soon') ? 'all' : 'coming-soon'"
			:aria-pressed="statusFilter === 'coming-soon'"
			aria-label="Filter by coming soon status"
		>
			<svg
				class="status-icon"
				viewBox="0 0 24 24"
				aria-hidden="true"
				>
				<circle cx="12" cy="12" r="10" />
				<polyline points="12 8, 12 13, 16 13" />
			</svg>
		</button>
	</div>
</template>

<style scoped>
	.statusFilters {
		display: flex;
		gap: 5px;
	}

	.chip {
		width: fit-content;
		background-color: #eaf0f5;
		color: #b0b0b0;
		border: 1px solid transparent;
		cursor: pointer;
		font-family: inherit;
	}

	.left {
		border-top-left-radius: 8px;
		border-bottom-left-radius: 8px;
	}

	.right {
		border-top-right-radius: 8px;
		border-bottom-right-radius: 8px;
	}

	.chip.active {
		background-color: #d9d9d9;
		color: white;
	}

	.status-icon {
		width: 18px;
		height: 18px;
		flex-shrink: 0;
		vertical-align: middle;
		margin-right: 5px;
	}

	.status-icon circle,
	.status-icon polyline {
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}
</style>
