<script setup lang="ts">
document.addEventListener("click", () => {
  setUpAccordion()
  // console.log("ok")
})

/**
 * ブラウザの標準機能(Web Animations API)を使ってアコーディオンのアニメーションを制御します
 */
const setUpAccordion = () => {
  var details = document.querySelectorAll<HTMLInputElement>(".js-details")
  var RUNNING_VALUE: string = "running" // アニメーション実行中のときに付与する予定のカスタムデータ属性の値
  var IS_OPENED_CLASS: string = "is-opened" // アイコン操作用のクラス名
  // console.log(details)

  details.forEach((element) => {
    var summary = element.querySelector(".js-summary") as HTMLElement | null
    let content = element.querySelector(".js-content") as HTMLElement | null

    summary!.addEventListener("click", (event) => {
      // デフォルトの挙動を無効化
      event.preventDefault()

      // 連打防止用。アニメーション中だったらクリックイベントを受け付けないでリターンする
      if (element.dataset.animStatus === RUNNING_VALUE) {
        return
      }

      // detailsのopen属性を判定
      if (element.hasAttribute("open")) {
        // アコーディオンを閉じるときの処理
        // アイコン操作用クラスを切り替える(クラスを取り除く)
        element.classList.toggle(IS_OPENED_CLASS)

        // アニメーションを実行
        const closingAnim = content!.animate(
          closingAnimKeyframes(content),
          animTiming
        )
        // アニメーション実行中用の値を付与
        element.dataset.animStatus = RUNNING_VALUE

        // アニメーションの完了後に
        closingAnim.onfinish = () => {
          // open属性を取り除く
          element.removeAttribute("open")
          // アニメーション実行中用の値を取り除く
          element.dataset.animStatus = ""
        }
      } else {
        // アコーディオンを開くときの処理
        // open属性を付与
        element.setAttribute("open", "true")

        // アイコン操作用クラスを切り替える(クラスを付与)
        element.classList.toggle(IS_OPENED_CLASS)

        // アニメーションを実行
        const openingAnim = content!.animate(
          openingAnimKeyframes(content),
          animTiming
        )
        // アニメーション実行中用の値を入れる
        element.dataset.animStatus = RUNNING_VALUE

        // アニメーション完了後にアニメーション実行中用の値を取り除く
        openingAnim.onfinish = () => {
          element.dataset.animStatus = ""
        }
      }
    })
  })
}

/**
 * アニメーションの時間とイージング
 */
const animTiming = {
  duration: 400,
  easing: "ease-out",
}

/**
 * アコーディオンを閉じるときのキーフレーム
 */
const closingAnimKeyframes = (content: any) => [
  {
    height: content.offsetHeight + "px", // height: "auto"だとうまく計算されないため要素の高さを指定する
    opacity: 1,
  },
  {
    height: 0,
    opacity: 0,
  },
]

/**
 * アコーディオンを開くときのキーフレーム
 */
const openingAnimKeyframes = (content: any) => [
  {
    height: 0,
    opacity: 0,
  },
  {
    height: content.offsetHeight + "px",
    opacity: 1,
  },
]
</script>

<template>
  <details class="js-details">
    <summary class="js-summary">概要<span class="icon"></span></summary>
    <div class="content js-content">
      <div class="content_inner">折りたたまれている部分です。</div>
    </div>
  </details>
</template>

<style lang="scss">
summary {
  cursor: pointer;
  /* display: list-item;以外を指定してデフォルトの三角形アイコンを消します */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border: 1px solid #d2beff;
  font-weight: bold;
  color: #002255;
}

summary::-webkit-details-marker {
  /* Safariで表示されるデフォルトの三角形アイコンを消します */
  display: none;
}

.icon {
  display: block;
  position: relative;
  width: 24px;
  margin-left: 6px;
  flex-shrink: 0;
  transform-origin: center 43%;
  transition: transform 0.4s;
}

/*details[open] .icon {*/
/*  transform: rotate(180deg);*/
/*}*/

/* is-openedクラスが付与されたときのスタイル */
details.is-opened .icon {
  transform: rotate(180deg);
}

/* アイコンのバーのスタイル */
.icon::before,
.icon::after {
  content: "";
  position: absolute;
  display: block;
  width: 15px;
  height: 3px;
  background-color: #7050ff;
}

.icon::before {
  left: 0;
  transform: rotate(45deg);
}

.icon::after {
  right: 0;
  transform: rotate(-45deg);
}

/* --------アコーディオンの中身のスタイル-------- */
.content {
  overflow: hidden;
  background-color: #f0f2ff;

  /* details直下のタグにpaddingを設定すると挙動がおかしくなるので、ここには指定しない */
}

.content_inner {
  padding: 24px 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* --------レイアウト用のスタイル-------- */
.wrapper {
  width: 700px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (max-width: 760px) {
  .wrapper {
    width: 100%;
  }
}
</style>
