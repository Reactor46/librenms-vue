<template>
    <input v-on="$listeners" v-on:focus="active = true" v-on:blur="active = false" class="outline-none bg-transparent appearance-none border-b-2 w-full py-2 text-grey-darker leading-tight" :class="`${activeBorder()}`" type="text" :name="name" :disabled="disabled"/>
</template>

<script>

/**
 * Libre Input
 * 
 * Standard input
 * 
 * Events:
 *  @event $listeners all default listeners available from Vue
 */
export default {
    props: {
        /**
         * The Name Property
         * @param string
         */
        name: {
            type: String,
            required: true
        },

        /**
         * The State property
         * @param string The state the input field is in
         */
        state: {
            type: String,
            required: false,
            default: "default",
            validator: function (value) {
                return ["success", "default", "danger"].includes(value);
            }
        },
        
        /**
         * The disabled Property
         * @param boolean The input field is disabled
         */
        disabled: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data() {
        return {
            active: false
        }
    },
    computed: {
        colour: function() {
            return this.libreTheme.colours[this.state] || "grey";
        }
    },
    methods: {
        activeBorder: function() {
            if (this.active) {
                return `border-${this.libreTheme.colours.primary}`;
            }
            return `border-${this.colour}`
        }
    }
}
</script>

<style>

</style>
