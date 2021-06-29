<template>  
  <div>
    <el-row>
      <el-col :span="8" v-for="item in cats" :key="item.name">
        <el-card :body-style="{ padding: '10px' }">
          <img :src="item.src" class="image">
          <div style="padding: 14px;">
            <span>{{item.id}}</span>
            <div class="bottom clearfix">
              <el-popover
              placement="top-start"
              :title="item.id"
              width="200"
              trigger="hover"
              :content=getDescription(item.name)
              @show=show(item)>
                <el-button type="text" slot="reference" class="button" :breed="item.name">详情</el-button>
              </el-popover>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {

    return {
        cats: [
            {
                'name': 'Norwegian Forest Cat',
                'src': require('../public/images/c1.jpg')
            },
            {
                'name': 'Siamese Cat',
                'src': require('../public/images/c2.jpg')
            },
            {
                'name': 'Abyssinian Cat',
                'src': require('../public/images/c3.jpg')
            },
        ],
        products: [
          {
            "id": "NW001",
            "name": "Norwegian Forest Cat",
            "list_name": "Cats",
            "category": "Pet/Cat",
            "list_position": 1,
            "price": 20000
          },
          {
          "id": "XL002",
          "name": "Siamese Cat",
          "list_name": "Cats",
          "category": "Pet/Cat",
          "list_position": 2,
          "price": 6000
        },
        {
          "id": "AB003",
          "name": "Abyssinian Cat",
          "list_name": "Cats",
          "category": "Pet/Cat",
          "list_position": 3,
          "price": 15000
        }
      ]
    };
  },
  methods: {
    show(item) {
      var product = null
      this.products.forEach((p) =>{
         if(item.name == p.name) {
           product = p
         }
      })
      /*
      gtag('event', 'view-item', {
        "content_type": "product",
        "items": [
          product
        ]
      });
      ga('send', {
        hitType: 'event',
        eventCategory: 'item-detail',
        eventAction: 'view-item',
        eventLabel: item.name
      });*/
    },
    getDescription(name) {
       var description = null
       this.products.forEach((item) =>{
         if(item.name == name) {
           description  = item.name + ', price is ' + item.price
         }
       })
       return description
    }
  },
  mounted() {
    /*
    gtag('config', 'UA-166137413-1', {
      'custom_map': {
        'dimension1': 'breed',
        'metric1': 'hover_time'
      }
    });
    gtag('event', 'view_item_list', {
      "items": this.products
    });*/
  }
};
</script>

<style > 
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    height: 50;
    display: block;
  }
  .el-col {
    border:5px;
  }

</style>