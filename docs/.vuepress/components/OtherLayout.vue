<template>
  <div>
    <el-row>
      <el-col :span="8" v-for="item in cats" :key="item.name">
        <el-card :body-style="{ padding: '10px' }">
          <img :src="item.src" class="image">
          <div style="padding: 14px;">
            <span>{{item.name}}</span>
            <div class="bottom clearfix">
              <el-popover
              placement="top-start"
              :title="item.name"
              width="200"
              trigger="hover"
              :content="item.description"
              @show=show(item)>
                <el-button type="text" slot="reference" class="button">详情</el-button>
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
                'name': '挪威森林猫',
                'src': require('../public/images/c1.jpg'),
                'description': '挪威森林猫性格内向，独立性强，聪颖敏捷，机灵警觉，行动谨慎，喜欢冒险和活动，且能抓善捕，善爬树攀岩，有“能干的狩猎者”之美誉。',
            },
                        {
                'name': '暹罗猫',
                'src': require('../public/images/c2.jpg'),
                'description': '暹罗猫性格刚烈好动，机智灵活，好奇心特强，善解人意。暹罗猫喜欢与人为伴，需要主人的不断爱抚和关心，对主人忠心耿耿。',
            },
                        {
                'name': '阿比西尼亚猫',
                'src': require('../public/images/c3.jpg'),
                'description': '阿比西尼亚猫性格温顺，而且活泼开朗。喜欢生活在比较宽敞的环境，喜欢自由活动。这种猫喜欢独居，善爬树，体态轻盈，性情温和，很通人性。'
            },
        ]
    };
  },
  methods: {
    show(item) {
      /*
      console.log(item.name)
      gtag('event', 'view-item', {
        'event_category': 'item-detail',
        'event_label': item.name
      });
      
      ga('send', {
        hitType: 'event',
        eventCategory: 'item-detail',
        eventAction: 'view-item',
        eventLabel: item.name
      });*/
    }
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