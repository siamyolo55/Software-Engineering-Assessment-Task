<template>
	<main>
		<h1>Welcome to Software Engineer Technical Assessment</h1>
		<div class="device-section">
			<div>
				<iframe ref="banner" src="/Old Codebase/banner/index.html" frameborder="0"></iframe>
			</div>
			<div>
				<iframe src="/Old Codebase/patients/index.html" frameborder="0"></iframe>
			</div>
			<!-- <device-list v-if="isDevicesLoaded" />
			<button @click="load" v-else>Load Devices</button> -->
		</div>
	</main>
</template>

<script setup lang="ts">
	import DeviceList from '@/components/DeviceList.vue'
	import { DevicesModuleAction } from '@/store/modules/devices/types'
	import { computed, ref, onMounted } from 'vue'
	import { useStore } from 'vuex'

	let store = useStore()

	let banner = ref(null)

	onMounted(() => {
		console.log(banner.value)
		window.addEventListener('message', function(event) {
			let message = event.data
			let bannerElement = banner.value as unknown as HTMLIFrameElement
			bannerElement.contentWindow!.postMessage(message, "*")
		});
	})

	let devices = computed(() => store.getters.devices)
	// console.log(devices)

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
		display: grid;
		grid-template-columns: 1fr 1fr;
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
