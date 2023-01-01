<template>
	<main>
		<h1>Welcome to Software Engineer Technical Assessment</h1>
		<div class="device-section">
			<device-list v-if="isDevicesLoaded" />
			<button @click="load" v-else>Load Devices</button>
		</div>
	</main>
</template>

<script setup lang="ts">
	import DeviceList from '@/components/DeviceList.vue'
	import { DevicesModuleAction } from '@/store/modules/devices/types'
	import { computed } from 'vue'
	import { useStore } from 'vuex'

	let store = useStore()

	let devices = computed(() => store.getters.devices)
	console.log(devices)

	let isDevicesLoaded = computed(() => {
		try {
			return devices.value.length > 0
		} catch (e) {
			return false
		}
	})

	const load = () => {
		store.dispatch(DevicesModuleAction.GetDevices)
	}
</script>

<style scoped>
	main {
		margin: auto;
	}

	h1 {
		margin-bottom: 10rem;
		text-align: center;
	}

	.device-section {
		margin: auto;
		max-width: fit-content;
	}

	button {
		text-align: center;
		padding: 10px 0px;
		width: 10rem;
		border-radius: 20px;
		background-color: var(--vt-c-primary);
		cursor: pointer;
	}

	iframe {
		min-height: 30vh;
		min-width: 30vw;
		max-height: 100vh;
		max-width: 100vw;
	}
</style>
