<script setup lang="ts">

	const props = defineProps<{
		active: boolean
		direction: 'asc' | 'desc'
		column: string
	}>()

	const emit = defineEmits<{
		(e: 'toggle'): void
	}>()

</script>


<template>
	<button
		@click="$emit('toggle')"
		:class="[{active}]"
		:aria-label="`Sort by ${column}`"
	>
		<svg
		:class="['sort-icon', props.direction, {active}]"
		viewBox="0 0 24 24"
		aria-hidden="true"
	>
		<template v-if="props.direction === 'desc'">
			<text x="14" y="10" font-size="17">a</text>
			<text x="14" y="22" font-size="17">z</text>
			<polyline points="4 10, 7 5, 10 10"/>
			<line x1="7" y1="5" x2="7" y2="18"/>
		</template>
		<template v-else>
			<text x="14" y="10" font-size="17">a</text>
			<text x="14" y="22" font-size="17">z</text>
			<polyline points="4 13, 7 18, 10 13"/>
			<line x1="7" y1="5" x2="7" y2="18"/>
		</template>
	</svg>
	</button>
</template>


<style scoped>
	button {
		background-color: #eaf0f5;
		color: #b0b0b0;
		border: 1px solid transparent;
		cursor: pointer;
		border-radius: 10px;
	}
	.sort-icon {
		width: 20px;
		height: 20px;
		color: #777e89;
		flex-shrink: 0;
		vertical-align: middle;
		margin-right: 5px;
	}

	.sort-icon line,
	.sort-icon circle,
	.sort-icon polyline {
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
		stroke-linecap: round;
		stroke-linejoin: round;
	}

	.sort-icon text {
		fill: currentColor;
		stroke: currentColor;
		stroke-width: 1;
		stroke-linecap: round;
	}

	.active {
		background-color: #d9d9d9;
		color: white;
	}

</style>