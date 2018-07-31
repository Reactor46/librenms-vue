<template>
    <div v-click-outside="hide" class="relative" id="select">
        <input :name="name" :id="id" v-show="false" :value="selected.value"/>
        <div class="block appearance-none w-full bg-transparent border border-grey-light hover:border-grey px-4 py-2 pr-6 rounded shadow leading-tight truncate" @click="display = !display">
            {{ selected.name || "Nothing Selected"}}
        </div>
        <transition name="fade">
            <div v-if="display" class="absolute bg-white border-grey-light w-full z-40 shadow">
                <div class="bg-white p-2">
                    <input v-model="search" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight mb-2" type="text" v-if="searchable"/>
                    <ul class="list-reset">
                        <li class="w-full py-1 text-left bg-white rounded truncate px-1" :class="isActive(index)" v-for="(item, index) of parsed" :key="index" @click="select(item, index)">{{item.children[0].text}}</li>
                    </ul>
                </div>
            </div>
        </transition>

        <div v-if="false">
            <slot></slot>
        </div>
    </div>
</template>

<script>
/**
 * The Select form field
 * 
 * Example:
 * <libre-select>
 *  <option>1</option>
 *  <option>2</option>
 *  <option>3</option>
 * </libre-select>
 * 
 * Example 2:
 * <libre-select>
 *  <option value="value_1">1</option>
 *  <option value="value_2">2</option>
 *  <option value="value_3">3</option>
 * </libre-select>
 * 
 * Events:
 *  - @event change Broadcasts the changed value from the event
 */
export default {
    props: {
        /**
         * Html standard name for input for form submit
         */
        name: {
            type: String
        },
        /**
         * HTML stand ID for input
         */
        id: {
            type: String
        },
        /**
         * HTML standard placeholder for input
         */
        placeholder: {
            type: String
        },
        /**
         * Boolean if select is searchable
         */
        searchable: {
            type: Boolean,
            required: false,
            default: true
        }
    },
    data() {
        return {
            selected: {
                name: null,
                value: null,
                index: null
            },
            display: false,
            search: '',
            items: this.$slots.default.filter(vnode => vnode.tag == 'option')
        }
    },
    computed: {
        parsed: function() {
            if (this.search == '' ) return this.items;
            return this.items.filter(item => item.children[0].text.toLowerCase().includes(this.search.toLowerCase()))
        }
    },
    methods: {
        hide: function() {
            this.display = false;
        },
        isActive: function(index) {
            if (index == this.selected.index) {
                return `bg-${this.libreTheme.colours.primary}-light text-white`;
            }
            return '';
        },
        select: function(item, index) {
            this.selected.index = index;
            this.selected.name = item.children[0].text;
            if (item.data) {
                this.selected.value = item.data.attrs.value;
            }
            else {
                this.selected.value = item.children[0].text;
            }
            this.display = false;

            this.$emit('change', this.selected.value);
        }
    }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
