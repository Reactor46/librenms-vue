export default {
    data: function() {
        return {
            librenms: {
                theme: {
                    default: {
                       bg: {
                            main: 'grey', // Does not require variants
                            topNav: 'white', // Does not require variants
                            sideNav: 'grey' // Requires a variant colour ex: grey-light, grey-dark, grey-darkest
                       },
                       font: {
                            main: 'white',
                            topNav: 'white',
                            sideNav: 'white'
                       },
                       colours: {
                            primary: "red", // Requires a variant colour ex: grey-light, grey-dark, grey-darkest
                            secondary: "grey", // Requires a variant colour ex: grey-light, grey-dark, grey-darkest
                            success: "green", // Requires a variant colour ex: grey-light, grey-dark, grey-darkest
                            danger: "red", // Requires a variant colour ex: grey-light, grey-dark, grey-darkest
                            info: "teal", // Requires a variant colour ex: grey-light, grey-dark, grey-darkest
                            warning: "orange" // Requires a variant colour ex: grey-light, grey-dark, grey-darkest
                        },
                    },
                    red: {
                        bg: {
                             main: 'black',
                             topNav: 'white',
                             sideNav: 'red'
                        },
                        font: {
                             main: 'white',
                             topNav: 'white',
                             sideNav: 'white'
                        },
                        colours: {
                            primary: "red",
                            secondary: "grey",
                            success: "green",
                            danger: "red",
                            info: "teal",
                            warning: "orange"
                        },
                    },
                    blue: {
                        bg: {
                             main: 'black',
                             topNav: 'white',
                             sideNav: 'blue'
                        },
                        font: {
                             main: 'white',
                             topNav: 'white',
                             sideNav: 'white'
                        },
                        colours: {
                            primary: "blue",
                            secondary: "grey",
                            success: "green",
                            danger: "red",
                            info: "teal",
                            warning: "orange"
                        },
                    },
                    green: {
                        bg: {
                             main: 'black',
                             topNav: 'white',
                             sideNav: 'green'
                        },
                        font: {
                             main: 'white',
                             topNav: 'white',
                             sideNav: 'white'
                        },
                        colours: {
                            primary: "green",
                            secondary: "grey",
                            success: "green",
                            danger: "red",
                            info: "teal",
                            warning: "orange"
                        },
                    }
                     
                }
            }
        }
    },
    computed: {
        libreTheme: function() {
            if (this.$data.librenms.theme[this.$root.theme]) {
                return this.$data.librenms.theme[this.$root.theme];
            }

            return this.$data.librenms.theme.default;
        }
    }
}