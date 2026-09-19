document.addEventListener("DOMContentLoaded", () => {
  const hamburgerBtn = document.querySelector(".hamburger-menu-btn");
  const navMenu = document.querySelector(".gnav");
  const mask = document.querySelector(".mask");

  hamburgerBtn.addEventListener("click", () => {
    hamburgerBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
    mask.classList.toggle("active");
  });

  $(function () {
    let pagetop = $(".toTop");
    pagetop.hide();

    $(window).scroll(function () {
      if ($(this).scrollTop() > 700) {
        pagetop.fadeIn();
      } else {
        pagetop.fadeOut();
      }
    });

    pagetop.click(function () {
      $("body,html").animate({ scrollTop: 0 }, 500);
      return false;
    });
  });
});
/*
①
// Vanilla JSでのスムーズスクロール
const pagetop = document.querySelector(".toTop");
pagetop.addEventListener("click", (e) => {
    e.preventDefault(); // デフォルト動作をキャンセル
    window.scrollTo({
        top: 0,
        behavior: "smooth" // スムーズスクロールを有効化
    });
});

②
css：
html {
    scroll-behavior: smooth;
}

js：
  pagetop.click(function (e) {
  e.preventDefault(); // デフォルト動作をキャンセル
  window.scrollTo(0, 0); // スムーズなアニメーションはCSSに任せる
  return false;
});
*/
