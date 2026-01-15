<script setup lang="ts">
	import { computed } from 'vue'

	const props = defineProps<{
		status: string
	}>()

	const normalizedStatus = computed(() =>
		props.status.trim().toLowerCase().replace(' ', '-')
	)
</script>


<template>
	<svg
		:class="normalizedStatus"
		class="status-icon"
		viewBox="0 0 24 24"
		aria-hidden="true"
	>
		<template v-if="status === 'Working'">
			<circle cx="12" cy="12" r="10" />
			<polyline points="7 11, 11 15, 17 8"/>
		</template>
		<template v-else>
			<circle cx="12" cy="12" r="10" />
			<polyline points="12 8, 12 13, 16 13" />
		</template>
	</svg>
</template>


<style scoped>
	.status-icon {
		width: 20px;
		height: 20px;
		color: #777e89;
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

	.status-icon.working {
		color: #0b5ffb;
	}
</style>