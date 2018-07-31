<template>
    <button v-on="$listeners" class="rounded m-1" :class="`font-${sizes[size].font} py-${sizes[size].y} px-${sizes[size].x} ${css}`"><slot></slot></button>
</template>

<script>

/**
 * Libre Button
 * 
 * Standard Button
 * 
 * Events:
 *  @event $listeners all default listeners available from Vue
 */
export default {
    props: {
        /**
         * The Fill type (optional)
         * `fill, outline, link, block`
         * Default: fill
         */
        type: {
            type: String,
            default: "fill",
            validator: function (value) {
                return ["fill", "outline", "link", "block"].includes(value);
            }
        },
        /**
         * The colour (optional)
         * `this.libreTheme.colours`
         * Default: primary
         */
        colour: {
            type: String,
            default: "primary"
        },
        /**
         * The preset type (optional)
         * Setting the preset will select the colour and type for you
         * `submit, custom, cancel, delete`
         * Default: custom
         */
        preset: {
            type: String,
            default: "custom",
            validator: function (value) {
                return ["submit", "custom", "cancel", "delete"]
            }
        },
        /**
         * Any extra classes to add
         * 
         */
        size: {
            type: String,
            default: "md",
            validator: function (value) {
                return ["sm", "md", "lg"]
            }
        }
    },
    data() {
        return {
            sizes: {
                sm: {x:2,y:1,font:"light"},
                md: {x:4,y:2,font:"bold"},
                lg: {x:8,y:4,font:"extrabold"}
            }
        }
    },
    computed: {
        css: function() {
            let colour = this.libreTheme.colours[this.colour];
            let type = this.type;

            if (this.preset != "custom") {
                switch (this.preset) {
                    case "submit":
                        colour = this.libreTheme.colours.success;
                        type = "fill";
                        break;
                    case "cancel":
                        colour = this.libreTheme.colours.primary;
                        type = "link";
                        break;
                    case "delete":
                        colour = this.libreTheme.colours.danger;
                        type = "fill";
                        break;
                }
            }

            return this.calculate(colour, type);
        }
    },
    methods: {
        /**
         * Calculate the required css
         * @param string colour 
         * @param string type
         * 
         * @return string 
         */
        calculate(colour, type) {
            let output = '';

            switch (type) {
                case "fill":
                    output += `bg-${colour} hover:bg-${colour}-dark text-white`
                    break;
                case "block":
                    output += `bg-${colour} w-full hover:bg-${colour}-dark text-white`;
                    break;
                case "outline":
                    output += `bg-transparent hover:bg-${colour} text-${colour}-dark font-semibold hover:text-white border border-${colour} hover:border-transparent`
                    break;
                case "link":
                    output += `bg-transparent text-${colour} font-normal hover:text-${colour}-darker`;
                    break;
            }

            return output;
        }
    }
}
</script>
