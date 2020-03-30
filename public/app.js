var currentName = "JP Morgan"
new Vue({
    el: '#app',
    data: function () {
        return {
            company_name: currentName,
            tab_active: 0,
            score: company_data[currentName].score,
            covid_response: company_data[currentName]["metrics"]["covid-response"].score,
            employer_accountability: company_data[currentName]["metrics"]["employer-accountability"].score,
            solcial_altruism: company_data[currentName]["metrics"]["social-altruism"].score,
            sources: company_data[currentName]["sources"],
            sidebar: side,
            filter: "",
            filtered: side
        }
    },
    methods: {
        changeTab: function(val) {
            this.tab_active = val;
        },
        get_average_score() {
            var sum = parseInt(this.covid_response) + parseInt(this.employer_accountability) + parseInt(this.solcial_altruism)
            sum /= 3;
            return Math.floor(sum)
        },
        resets: function(key) {
            // console.log(key)
            currentName = key;
            this.company_name = currentName,
            this.score = company_data[currentName].score,
            this.covid_response = company_data[currentName]["metrics"]["covid-response"].score,
            this.employer_accountability = company_data[currentName]["metrics"]["employer-accountability"].score,
            this.solcial_altruism = company_data[currentName]["metrics"]["social-altruism"].score,
            this.sources = company_data[currentName]["sources"],
            this.sidebar = side
        }
    },
    watch: {
        filter: function(val) {
            // console.log(val)
            var arr = []
            for(var i = 0; i < side.length; i++) {
                if(side[i].key.toLowerCase().indexOf(val.toLowerCase()) != -1) {
                    // console.log(side[i].key)
                    arr.push(side[i])
                }
            }
            this.filtered = arr;
        }
    },
    mounted: function() {
        // var sidebar = []
        // for(var key in company_data) {
        //     sidebar.push({
        //         key,
        //         score: company_data[key].score
        //     })
        // }
        // console.log(sidebar)
    }
})