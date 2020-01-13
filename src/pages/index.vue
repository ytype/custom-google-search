<template>
  <div>
    <div class="title-box">
      <img src="~@/assets/google-logo.png">
    </div>
    <div class="search-box">
      <input type="text" name="" class="serach-txt" placeholder="Search"
      v-model="query" @keyup.enter="goto" />
      <a class="serach-btn">
        <i class="fas fa-circle-notch"></i>
      </a>
    </div>

    <div class="result-box" v-if="data">
      <li class="result-txt" v-for="i in columns" :key=i.id><a :href="'http://www.google.com/search?q='+data[i-1][0]">{{ data[i-1][0] }}</a></li>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            query: '',
            window: {
                width: 0,
                height: 0
            }
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize)
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth
            this.window.height = window.innerHeight
        },
        goto() {
            window.location.href = `http://www.google.com/search?q=${this.query}`
        }
    },
    computed: {
        columns() {
            if (this.window.width > 1281) { return 10 }
            if (this.window.width > 768) { return 6 }
            return 3
        },
        filterData() {
            return this.data.slice(0, this.columns)
        }
    },
    asyncComputed: {
        async data() {
            try {
                const res = await this.axios.get(`search?client=hp&hl=en&sugexp=msedr&gs_rn=62&gs_ri=hp&cp=1&gs_id=9c&q=${this.query}&xhr=t`)
                for (let i = 0; i < 10; i++) {
                    res.data[1][i][0] = res.data[1][i][0].split('<b>').join('')
                    res.data[1][i][0] = res.data[1][i][0].split('</b>').join('')
                }
                return res.data[1]
            } catch {
                return null
                // throw new Error('empty object')
            }
        }
    }
}
</script>

<style>
@font-face {
  font-family: 'NanumSquare', sans-serif;
  src: url("~@/assets/fonts/NanumSquareR.woff") format("woff");
}
  body {
    margin: 0;
    padding: 0;
    background: url("~@/assets/background.jpg") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    font-family: 'NanumSquare', sans-serif;
  }
  a {
    text-decoration: none;
    color: white;
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
    font-family: 'NanumSquare', sans-serif;
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
  @media (min-width: 320px) and (max-width: 625px) {
    .search-box {
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2f3640;
    height: 2rem;
    border-radius: 40px;
    padding: 5px;
  }
  .search-box:hover>.serach-txt {
    width: 6.4rem;
    overflow: hidden;
  }
    .serach-btn>i {
    font-size: 15px;
  }
    .serach-btn {
    float: right;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    color: white;
    cursor: pointer;
  }
  }
</style>
