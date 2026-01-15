<script setup lang="ts">
	defineProps<{
		total: number
	}>()
</script>


<template>
	<div class="top">
		<img class="rollee-logo" src="../assets/rollee_logo.svg">
		<div class="total">
			<p>Coverage</p>
			<strong>{{ total }} platforms in total</strong>
		</div>
	</div>
</template>


<style scoped>
	.top {
		width: 100%;
		height: 30px;
		flex-shrink: 0;
		background-color: #fafafa;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding-inline: 15px;
		box-sizing: border-box;
	}
	.rollee-logo {
		height: 30px;
	}
	.total {
		color: #b4b8c2;
		font-size:x-small;
		display: flex;
		align-items: baseline;
		gap: 3px;
	}
	p {
		font-size: large;
		color: #6b727e;
	}
</style>
