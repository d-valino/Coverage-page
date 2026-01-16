<script setup lang="ts">
	import CoverageRow from './CoverageRow.vue';
	import StatusChips from './StatusChips.vue';

	defineProps<{
		rows: {
			id: string,
			name: string,
			category: string,
			type: string,
			status: string,
			logoURL: string
		}[]
		statusFilter: 'all' | 'working' | 'coming-soon'
	}>()

	const emits = defineEmits<{
		(e: 'update:statusFilter', value: 'all' | 'working' | 'coming-soon'): void
	}>()
</script>


<template>
	<table>
		<thead>
			<tr>
				<th>Platform</th>
				<th>Type</th>
				<th class="status">
					Status
					<StatusChips
						:model-value="statusFilter"
						@update:model-value="emits('update:statusFilter', $event)"
					/>
				</th>
			</tr>
		</thead>
		<tbody>
			<CoverageRow v-for="row in rows" :key="row.id" :row="row" />
		</tbody>
	</table>
</template>


<style scoped>
	table {
		width: 100%;
		padding: 20px;
		border-collapse: separate;
		border-spacing: 0 2px;
	}
	thead {
		background-color: #fafafa;
		font-size: small;
	}
	tbody {
		background-color: #fff;
	}
	th {
		width: 300px;
		text-align: left;
		color: #223857;
		font-weight: 600;
		padding-block: 10px;
		padding-inline: 15px;
		align-items: center;
	}
	.status {
		display: flex;
		gap: 8px;
	}
</style>
