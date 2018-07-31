<template>
    <aside class="overflow-y-scroll overflow-visible scrolling-touch z-30 lg:z-40 md:z-40 sm:z-40 fixed h-screen min-h-screen w-20 shadow-lg  sm:block md:block lg:block" 
    :class="`${[display ? 'block' : 'hidden']} bg-${libreTheme.bg.sideNav}-darker text-${libreTheme.font.sideNav}`" v-click-outside="clickAway">
        <slot></slot>
    </aside>
</template>

<script>
/**
 * The sidebar component
 * 
 * The parent component to nest the SidebarGroup.vue & SidebarItem.vue
 */
export default {
    props: {
        /**
         * The active property
         * Indicates wether the sidebar is active or not
         * 
         * @param boolean active
         * 
         */
        active: {
            type: Boolean,
            required: true,
            default: true
        }
    },
    watch: {
        active: function(value) {
            this.display = value;
        }
    },
    data() {
        return {
            display: this.active
        }
    },
    methods: {
        clickAway: function() {
            if (this.active) this.$emit('exit');
        }
    }
}
</script>

<style>

</style>
