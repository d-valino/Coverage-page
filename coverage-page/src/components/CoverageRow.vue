<script setup lang="ts">
	import StatusIcon from './StatusIcon.vue';

	defineProps<{
		row: {
			id: string;
			name: string;
			category: string;
			type: string;
			status: string;
			logoURL: string;
		}
	}>()
</script>


<template>
	<tr>
		<td class="platform">
			<img class="platform-logo" :src="row.logoURL">
			<span>{{ row.name }}</span>
		</td>
		<td class="type">{{ row.type }}</td>
		<td class="status">
			<StatusIcon :status="row.status"/>
			<span>{{ row.status }}</span>
		</td>
	</tr>
</template>


<style scoped>
	tr {
		height: 40px;
	}

	td {
		width: 300px;
		text-align: left;
		color: #243958;
		font-size:15px;
		padding-inline: 10px;
		padding-block: 3px;
	}

	td.platform {
		width: 40%;
	}

	td.type {
		color: #5e6b83;
	}

	td.status{
		color: #5e6b83;
		justify-items: center;
	}

	span {
		vertical-align: middle;
	}

	.platform-logo {
		padding: 5px;
		vertical-align: middle;
		width: 30px;
		height: 30px;
		object-fit: contain;
		border-radius: 100%;
	}
	
</style>
