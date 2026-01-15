<script setup lang="ts">
	import CoverageRow from './CoverageRow.vue';

	defineProps<{
		rows: {
			id: string,
			name: string,
			category: string,
			type: string,
			status: string,
			logoURL: string
		}[]
	}>()
</script>


<template>
	<table>
		<thead>
			<tr>
				<th>Platform</th>
				<th>Type</th>
				<th>Status</th>
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
		color: #243958;
		font-weight: 600;
		padding-block: 10px;
		padding-inline: 15px;
	}
</style>
