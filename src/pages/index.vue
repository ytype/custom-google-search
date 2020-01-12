
<template>
  <div>
    <div class="title-box">
      <img src="google-logo.png">
    </div>
    <div class="search-box">
      {{ query}}
      <input type="text" name="" class="serach-txt" placeholder="Search" v-model="query"/>
      <a class="serach-btn">
        <i class="fas fa-search"></i>
      </a>
    </div>
    <div class="result-box">

      <li class="result-txt">serach result</li>
    </div>
    {{ customer }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            query: '1',
            out: {}
        }
    },
    computed: {
        // eslint-disable-next-line vue/return-in-computed-property
        /* eslint-disable object-shorthand */
        /* eslint-disable func-names */
        // eslint-disable-next-line vue/return-in-computed-property
        autocomplete: function () {
            // eslint-disable-next-line vue/no-async-in-computed-properties
            axios.get(`search?client=hp&hl=en&sugexp=msedr&gs_rn=62&gs_ri=hp&cp=1&gs_id=9c&q=${this.query}&xhr=t`)
                .then((response) => {
                    console.log(response.data[1])
                    return response.data[1]
                })
                .catch(error => error)
            return 'hello'
        }
    },
    asyncComputed: {
        async customer() {
            const res = await this.axios.get(`search?client=hp&hl=en&sugexp=msedr&gs_rn=62&gs_ri=hp&cp=1&gs_id=9c&q=${this.query}&xhr=t`)
            return res.data
        }
    }
}
</script>

<style scope>

</style>
