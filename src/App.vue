<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import Accodeon from "./components/Accodeon.vue"
import AccordionTs from "./components/Accordion-ts.vue"
import AccodeonList from "./components/Accodeon-list.vue"
import Btn from "./components/Btn.vue"
import CountBtn from "./components/CountBtn.vue"
import AccodeonTab from "./components/Accodeon-tab.vue"

</script>

<template>
  <header>
    <nav class="navbar">
      <a href="#" class="navbar-brand">LOGO</a>
      <ul class="navbar-menu">
        <li class="navbar-menu-item" data-menu="menu-1">
          <router-link to="/"><a>Page1へ遷移</a></router-link>
          <router-view></router-view>
          <a href="#">Menu 1</a>
          <div class="navbar-submenu-wrapper" id="menu-1">
            <ul class="navbar-submenu">
              <li class="navbar-submenu-item">
                <a href="#">Sub Menu 1.1</a>
              </li>
              <li class="navbar-submenu-item">
                <a href="#">Sub Menu 1.2</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="navbar-menu-item" data-menu="menu-2">
          <a href="#menu-1">Menu 2</a>
          <div class="navbar-submenu-wrapper is-large" id="menu-2">
            <ul class="navbar-submenu">
              <li class="navbar-submenu-item">
                <a href="#">Large Sub Menu 2.1</a>
              </li>
              <li class="navbar-submenu-item">
                <a href="#">Large Sub Menu 2.2</a>
              </li>
              <li class="navbar-submenu-item">
                <a href="#">Large Sub Menu 2.3</a>
              </li>
              <li class="navbar-submenu-item">
                <a href="#">Large Sub Menu 2.4</a>
              </li>
              <li class="navbar-submenu-item">
                <a href="#">Large Sub Menu 2.5</a>
              </li>
            </ul>
          </div>
        </li>
        <li class="navbar-menu-item" data-menu="menu-3">
          <a href="#menu-1">Menu 3</a>
          <div class="navbar-submenu-wrapper" id="menu-3">
            <div class="navbar-submenu-icon">
              <svg viewBox="0 0 24 24">
                <path
                  d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
                ></path>
              </svg>
              <p>リンク以外も入れられる。</p>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  </header>

  <h1 class="text-3xl font-bold underline">Hello world!</h1>
  <Accodeon />
  <AccodeonList />
  <AccordionTs class="mb-4">
    <template v-slot:title>
      <span class="font-semibold text-xl">Accordion 1</span>
    </template>
    <template v-slot:content>
      <p>
        <b>Lorem</b>, ipsum dolor sit amet consectetur adipisicing elit. Quia,
        porro. Non a excepturi, voluptatibus ipsam magnam, eligendi, accusantium
        ipsa quae quis praesentium voluptate saepe ullam sint ea itaque
        consectetur impedit?
      </p>
    </template>
  </AccordionTs>
  <Btn />
  <CountBtn />
  <AccodeonTab />
</template>

<script lang="ts">
export default {
  name: "home",
}
document.addEventListener("DOMContentLoaded", () => {
  DropdownMenu.init()
})

/**
 * ドロップダウンメニュー
 * constructor
 * @param {HTMLElement} elem 開くための要素
 * @property {HTMLElement} button 開くための要素
 * @property {HTMLElement} target 開閉される要素
 * @property {number} contentHeight サブメニューの高さ
 */
function DropdownMenu(elem) {
  this.button = elem

  const targetId = this.button.dataset.menu
  this.target = document.getElementById(targetId)

  const content = this.target.children[0]
  this.contentHeight = content.clientHeight

  this.handleEvent()
}

/**
 * イベント登録
 */
DropdownMenu.prototype.handleEvent = function () {
  // マウスオーバーで開く
  this.button.addEventListener("mouseover", this.open.bind(this))

  // マウスアウトで閉じる
  this.button.addEventListener("mouseout", this.close.bind(this))
}

/**
 * 開く
 */
DropdownMenu.prototype.open = function () {
  this.target.style.height = this.contentHeight + "px"
}

/**
 * 閉じる
 */
DropdownMenu.prototype.close = function () {
  this.target.style.height = "0"
}

/**
 * 初期化
 */
DropdownMenu.init = function () {
  const menus = document.querySelectorAll("[data-menu]")
  menus.forEach((menu) => new DropdownMenu(menu))
}
</script>

<style scoped lang="scss">
.navbar {
  background-color: #00695c;
  color: #fff;
  display: flex;
  justify-content: space-between;
  height: 4rem;
  padding: 0 2%;
  position: relative;
}

.navbar a {
  color: inherit;
  text-decoration: none;
}

.navbar-brand {
  font-weight: bold;
  display: flex;
  align-items: center;
}

.navbar-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-menu-item {
  display: flex;
}

.navbar-menu-item + .navbar-menu-item {
  margin-left: 1rem;
}

.navbar-menu-item > a {
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
}

.navbar-menu-item > a:hover {
  background: #004d40;
}

.navbar-submenu-wrapper {
  background-color: #fff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  color: #333;
  position: absolute;
  top: 4rem;
  right: 2%;
  width: 50vw;
  height: 0;
  overflow: hidden;
  transition: height 300ms ease-in-out;
}

.navbar-submenu-wrapper.is-large {
  left: 2%;
  width: auto;
}

.navbar-submenu {
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-submenu-item {
  color: #2962ff;
}

.navbar-submenu-item a {
  display: block;
  padding: 1rem;
}

.navbar-submenu-item a:hover {
  opacity: 0.65;
}

.navbar-submenu-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 8rem;
}

.navbar-submenu-icon svg {
  height: 3rem;
  width: 3rem;
  fill: #f50057;
}
</style>