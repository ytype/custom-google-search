<template>
  <div>
    <div class="title-box">
      <img src="~@/assets/google-logo.png">
    </div>
    <div class="search-box">
      <input type="text" name="" class="serach-txt" placeholder="Search" v-model="query" />
      <a class="serach-btn">
        <i class="fas fa-search"></i>
      </a>
    </div>
    <div class="result-box">

      <li class="result-txt" v-for="i in data" :key=i.id>{{ i[0] }}</li>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            query: ''
        }
    },
    created() {
        window.addEventListener(
            'resize',
            this.$store.commit('setWindowWidth')
        )
    },
    computed: {
        windowWidth() {
            return this.$store.state.windowWidth
        }
    },
    asyncComputed: {
        async data() {
            const res = await this.axios.get(
                `search?client=hp&hl=en&sugexp=msedr&gs_rn=62&gs_ri=hp&cp=1&gs_id=9c&q=${this.query}&xhr=t`
            )

            for (let i = 0; i < 10; i++) {
                res.data[1][i][0] = res.data[1][i][0].split('<b>').join('')
                res.data[1][i][0] = res.data[1][i][0].split('</b>').join('')
            }
            return res.data[1]
        }
    }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
    background: url("~@/assets/background.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .search-box {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2f3640;
    height: 40px;
    border-radius: 40px;
    padding: 10px;
  }

  .search-box:hover>.serach-txt {
    width: 240px;
    padding: 0 6px;
  }

  .search-box:hover>.serach-btn {
    background: white;
    color: black;
  }

  .serach-btn {
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    color: white;
    cursor: pointer;
  }

  .serach-btn>i {
    font-size: 30px;
  }

  .serach-txt {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
    font-weight: bold;
  }

  .result-box {
    position: absolute;
    display: flexbox;
    top: 70%;
    left: 50%;
    max-height: 30%;
    width: auto !important;
    overflow: scroll;
    transform: translate(-50%, -50%);
  }

  .result-txt {
    display: inline-block;
    background: #2f3640;
    border-radius: 20px;
    padding: 5px 25px 6px;
    margin: 2px;
    color: white;
  }

  .title-box {
    position: absolute;
    display: block;
    top: 40%;
    left: 50%;
  }

  .title-box img {
    width: 250px;
    height: auto;
    transform: translate(-50%, -50%);
  }
</style>
