<script setup>
import XenBaseLayout from '@/Layouts/Base.vue';
import {ChevronDoubleDownIcon} from '@heroicons/vue/solid'
import {Head, Link} from '@inertiajs/inertia-vue3';

</script>

<template>
    <Head title="Contacts"/>

    <XenBaseLayout>
        <template #link_portfolio>
            <ChevronDoubleDownIcon class="text-yel h-6 w-6 sm:h-8 sm:w-8"/>
            <span class="text-base font-semibold sm:text-lg xl:text-xl text-gray-700">
                My&nbsp;Works
            </span>
        </template>
        <template #page_background>
            <div class="-z-50 h-full w-screen bg-gray-500 bg-contacts bg-left bg-no-repeat fixed"></div>
        </template>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">
                My contacts
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="flex  overflow-hidden sm:rounded-lg">
                    <div class="p-6">
                        <strong>Web Development</strong> <br><br>
                        <p>
                            xenia1898@gmail.com <br>
                            +41 76 410 410 1
                        </p><br>
                        <strong>Oksana Bürki</strong>
                    </div>
                </div>
            </div>
        </div>
    </XenBaseLayout>
</template>

<style scoped>
.bg-contacts {
    /*background-color:  #757575;*/
    background-image: /*linear-gradient(to left, transparent 25%, rgba(255,255,255, 0.7) 98%),*/ linear-gradient(to top, #ffffff, rgba(255, 255, 255, 0.7) 15%, transparent),
    url('@@/bg-bayern3.jpg');
}
</style>
