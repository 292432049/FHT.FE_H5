<template>
  <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="pswp__bg"></div>
    <div class="pswp__scroll-wrap">
      <div class="pswp__container">
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
        <div class="pswp__item"></div>
      </div>
      <div class="pswp__ui pswp__ui--hidden">
        <div class="pswp__top-bar">
          <div class="pswp__counter"></div>
          <button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
          <button class="pswp__button pswp__button--share" title="Share"></button>
          <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
          <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
          <div class="pswp__preloader">
            <div class="pswp__preloader__icn">
              <div class="pswp__preloader__cut">
                <div class="pswp__preloader__donut"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
          <div class="pswp__share-tooltip"></div>
        </div>
        <button class="pswp__button pswp__button--arrow--left" title="Previous (arrow left)">
        </button>
        <button class="pswp__button pswp__button--arrow--right" title="Next (arrow right)">
        </button>
        <div class="pswp__caption">
          <div class="pswp__caption__center">
          </div>
        </div>
      </div>
    </div>
    <div class="edit_img" @click.prevent.stop="previewEdit()">
      编辑
    </div>
  </div>
</template>

<script>
  import PhotoSwipe from 'photoswipe/dist/photoswipe'
  import UI from 'photoswipe/dist/photoswipe-ui-default'
  import bus from '../../bus'
  import 'photoswipe/dist/photoswipe.css';
  import 'photoswipe/dist/default-skin/default-skin.css';
  

  export default {
    data() {
      return {
        defaultOptions: {
          // captionEl: true,
          // bgOpacity: 0.8,
          // fullscreenEl: true,
          // history: false,
          // shareEl: false,
          tapToClose: true,
          isClickableElement: function (el) {
            return /edit_img/.test(el.className)
          }
        },
        currentPic: ''
      }
    },
    methods: {
      open (index, list, params = Object.assign(this.defaultOptions, {})) {
        this.currentPic = list[index]
        this.currentPic.index = index
        let options = Object.assign({
          index: index,
          getThumbBoundsFn (index) {
            let thumbnail = document.querySelectorAll('.preview-img')[index]
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            let rect = thumbnail.getBoundingClientRect()
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
          }
        }, params)
        this.photoswipe = new PhotoSwipe(this.$el, UI, list, options)
        this.photoswipe.init()
      },
      close () {
        this.photoswipe.close()
      },
      previewEdit () {
        bus.$emit('editImg', this.currentPic)
      }
    }
  }
</script>

<style>
  .pswp__counter{
    display: block !important;
  }
  .pswp__caption{
    display: flex;
  }
  .edit_img{
    position: fixed;
    bottom: 0;
    color:#fff;
    font-size: 14px;
    line-height: 44px;
    height: 44px;
    width: 100%;
    text-align: center;
    font-weight:400
  }
</style>
