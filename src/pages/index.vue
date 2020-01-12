
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

      <li class="result-txt" v-for="i in customer" :key=i.id>{{ i[0] }}</li>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            query: '',
            out: {}
        }
    },
    asyncComputed: {
        async customer() {
            const res = await this.axios.get(`search?client=hp&hl=en&sugexp=msedr&gs_rn=62&gs_ri=hp&cp=1&gs_id=9c&q=${this.query}&xhr=t`)

            for (let i = 0; i < 10; i++) {
                res.data[1][i][0] = res.data[1][i][0].replace('<b>', '')
                res.data[1][i][0] = res.data[1][i][0].replace('</b>', '')
            }
            return res.data[1]
        }
    }
}
</script>

<style scope>

</style>
