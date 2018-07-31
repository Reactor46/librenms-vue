<template>
    <div v-click-outside="clickAway" class="w-full text-center align-middle h-20 text-white" @click="select" 
    :class="primary">
        <a class="no-underline text-white ">
            <div class="w-full p-2 text-center pt-4">
                <svg class="fill-current text-white h-6 w-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path :d="svg"/></svg>
                <br/>
                <span class="text-sm">{{name}}</span>
            </div>
        </a>
        <transition name="slide-fade">
        <div v-if="active" class="absolute pin-l pin-t h-screen min-h-screen lg:ml-20 md:ml-20 sm:ml-20 w-64 z-40 lg:z-30 md:z-30 sm:z-30 text-white" :class="`bg-${$root.libreTheme.bg.sideNav}-darkest`">
            <div class="text-left p-4">
                <a @click.prevent.stop="clickAway()" class="text-white no-underline align-right" href="#">X</a>
                <slot></slot>
            </div>
        </div>
        </transition>
    </div>
</template>

<script>
/**
 * Sidebar Item
 * 
 * This component will scaffold out the sidebar items, must be nested inside the Sidebar Component
 * 
 * Ex:
 * <sidebar>
 *      <sidebar-item svg="M20 14v4a2 2 0 0 1-2 2h-4v-2a2 2 0 0 0-2-2..." name="Devices">
 *          ...
 *      </sidebar-item>
 * </sidebar>
 * 
 */
export default {
    /**
     * @param string svg The svg icon to use
     * @param string name The name of the component
     */
    props: [
        'svg',
        'name'
    ],
    data() {
        return {
            active: false,
            groups: this.$children
        }
    },
    computed: {
        primary: function() {
            if (this.active) {
                return `bg-${this.libreTheme.colours.primary}`;
            }
            return '';
        },
    },
    methods: {
        select: function() {
            this.active = true;
        },
        clickAway: function() {
            this.active = false;
        }
    }
}
</script>

<style>
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s ease;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
