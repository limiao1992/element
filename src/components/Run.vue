<template>
  <div>
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="(item,index) in images" :key="index">
        <h3>{{item.name}}</h3>
        <img :src="item.src" style="width:100%">
      </el-carousel-item>
    </el-carousel>


    <div class="block">
      <el-timeline>
        <el-timeline-item :timestamp="new Date().toLocaleDateString()" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item :timestamp="new Date().toLocaleDateString()" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item :timestamp="new Date().toLocaleDateString()" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
    <el-divider><i class="el-icon-mobile-phone"></i></el-divider>
    <div class="demo-image__preview">
      <el-image
        style="width: 100px; height: 100px"
        :src="url"
        :preview-src-list="srcList">
      </el-image>
    </div>
    <template>
      Scroll down to see the bottom-right button.
      <el-backtop>
        <div
          style="{
                        height: 100%;
                        width: 100%;
                        background-color: #f2f5f6;
                        box-shadow: 0 0 6px rgba(0,0,0, .12);
                        text-align: center;
                        line-height: 40px;
                        color: #1989fa;
                    }"
        >
          <span class="sp">回到顶部</span>
        </div>
      </el-backtop>
    </template>

  </div>
</template>
<script>
  export default {
    data () {
      return {
        images: [
          {name: '一帆风顺', src: 'http://pic13.nipic.com/20110409/7119492_114440620000_2.jpg'},
          {name: '二龙腾飞', src: 'http://pic26.nipic.com/20121221/9252150_142515375000_2.jpg'},
          {name: '三阳开泰', src: 'http://pic26.nipic.com/20130121/9252150_101440518391_2.jpg'},
          {name: '四季平安', src: 'http://pic39.nipic.com/20140321/18063302_210604412116_2.jpg'},
          {name: '五福临门', src: 'http://pic68.nipic.com/file/20150601/8164280_104301508000_2.jpg'},
          {name: '六六大顺', src: 'http://pic51.nipic.com/file/20141025/8649940_220505558734_2.jpg'}
        ],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        srcList: [
          'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
          'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
        ]
      }
    }
  }

</script>
<style>
  .el-carousel__item h3 {
    font-size: 14px;
    opacity: 0.75;
    margin: 0px;
  }
  .sp{
    display: block;
    width: 100px;
   font-size: 14px;

  }
</style>
