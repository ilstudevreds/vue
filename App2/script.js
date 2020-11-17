// Using axios along with http-server to get out data from data.json
// Axios doesn't work with files locally, so we create a mock server and 
// use axios to make a HTTP request to it. Since axios is promise-based, we must wait for it
// complete the HTTP proccess .then we can we use its response.
axios({
    method: "get",
    url: "data.json"
}).then(response => {
    // You can find the response in the console
    console.log(response)
    window.App = new Vue({
        el: "#VUEAPP",
        data() {
            return {
                cardData: response.data,
                list: [],
                search: "",
                filter1: false,
                filter2: false,
                filter3: false,
                filter4: false,
            }
        },
        // This function is ran after the HTML elements have been mounted and Vue is done loading
        mounted() {
            this.list = this.cardData
        },
        // these methods are connected to there conamed variable. whenever those variables are updated, the corresponding method is ran after.
        watch: {
            search() {
                this.computeList()
            },
            filter1() {
                this.computeList()
            }
        },
        methods: {
            // This method utilizes Lodash's debounce() to prevent over rendering from all the animations added into the screen.
            // debounce() will wait to run the function until x milliseconds after the last function call.
            computeList: _.debounce(function () {
                // Filter results
                let query = this.search.toLowerCase()
                let temp = this.cardData.filter(card => card.title.toLowerCase().includes(query))
                // A-Z
                if (this.filter1) {
                    temp.sort((a, b) => (a.title > b.title) ? 1 : -1)
                }

                // Replace ENTIRE array
                this.list = temp
            }, 300),

            shuffle() {
                console.log("shuffle()")
                this.list = _.shuffle(this.list);
            },

            reverse() {
                console.log("reverse()")
                this.list = _.reverse(this.list);
            }
        }
    })
})