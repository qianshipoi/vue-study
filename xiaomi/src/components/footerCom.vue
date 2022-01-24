<template>
  <footer class="footer">
    <div class="w">
      <div class="footer_server">
        <ul class>
          <li>
            <a href="javascript:;">
              <i class="iconfont">&#xe62e;</i>预约维修服务
            </a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">
              <i class="iconfont">&#xe600;</i>7天无理由退货
            </a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">
              <i class="iconfont">&#xe638;</i>15天免费换货
            </a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">
              <i class="iconfont">&#xe60b;</i>满99元包邮（试运行）
            </a>
          </li>
          <li></li>
          <li>
            <a href="javascript:;">
              <i class="iconfont">&#xe662;</i>520余家售后网点
            </a>
          </li>
        </ul>
      </div>
      <div class="footer_links">
        <div class="links">
          <dl>
            <dt>帮助中心</dt>
            <dd>
              <a href="javascript:;">账户管理</a>
            </dd>
            <dd>
              <a href="javascript:;">购物指南</a>
            </dd>
            <dd>
              <a href="javascript:;">订单操作</a>
            </dd>
          </dl>
          <dl>
            <dt>服务支持</dt>
            <dd>
              <a href="javascript:;">售后政策</a>
            </dd>
            <dd>
              <a href="javascript:;">自助服务</a>
            </dd>
            <dd>
              <a href="javascript:;">相关下载</a>
            </dd>
          </dl>
           <dl>
            <dt>线下门店</dt>
            <dd>
              <a href="javascript:;">小米之家</a>
            </dd>
            <dd>
              <a href="javascript:;">服务网点</a>
            </dd>
            <dd>
              <a href="javascript:;">授权体验店</a>
            </dd>
          </dl>
           <dl>
            <dt>关注小米</dt>
            <dd>
              <a href="javascript:;">了解小米</a>
            </dd>
            <dd>
              <a href="javascript:;">加入小米</a>
            </dd>
            <dd>
              <a href="javascript:;">投资者关系</a>
            </dd>
          </dl>
           <dl>
            <dt>关注我们</dt>
            <dd>
              <a href="javascript:;">新浪微博</a>
            </dd>
            <dd>
              <a href="javascript:;">官方微信</a>
            </dd>
            <dd>
              <a href="javascript:;">联系我们</a>
            </dd>
          </dl>
           <dl>
            <dt>特色服务</dt>
            <dd>
              <a href="javascript:;">F 码通道</a>
            </dd>
            <dd>
              <a href="javascript:;">礼物码</a>
            </dd>
            <dd>
              <a href="javascript:;">防伪查询</a>
            </dd>
          </dl>
        </div>
        <div class="contact">
            <p class="tel">400-100-5678</p>
            <p class="time"><span>周一至周日 8:00-18:00</span><br/><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;（仅收市话费）</span></p>
            <a href="javascript:;"><i class="iconfont">&#xe635;</i>人工客服</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  background-color: #ffffff;
}
.w {
  /* border: 1px solid red; */
  height: 270px;
}
/* server */
.footer_server {
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #b0b0b0;
  font-size: 16px;
}
.footer_server ul {
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.footer_server ul li:nth-child(even) {
  height: 25px;
  width: 1px;
  background-color: #b0b0b0;
}
.footer_server ul li i {
  font-size: 30px;
  vertical-align: middle;
  margin-right: 5px;
}
/* links */
.footer_links {
  display: flex;
  padding: 40px 0;
  height: 190px;
}
.footer_links .links{
    flex: 19;
    display: flex;
    justify-content: space-between;
}
.footer_links dl{
    flex: 1;
}
.footer_links dl dt {
    margin-bottom: 16px;
  font-size: 16px;
  color: black;
}
.footer_links dl dd {
    margin-top: 6px;
  font-size: 14px;
}
.footer_links .contact{
    flex: 5;
    border-left: 1px solid #B0B0B0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}
.contact .tel{
    font-size: 18px;
    color: #F25807;
}
.contact time{
    font-size: 16px;
}
.contact a{
    display: block;
    width: 120px;
    height: 30px;
    border: 1px solid #F25807;
    color: #F25807;
    text-align: center;
}

.contact a:hover{
    background-color: #F25807;
    color: #FFFFFF;
}
</style>