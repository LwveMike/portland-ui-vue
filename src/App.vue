<template>
  <div>
    <RouterView />
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss">
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Montserrat', sans-serif;
  }

  :root {
    font-size: 16px;
  }

  a {
    text-decoration: none;
    color: black;
  }

img {
    display: block;
  }

li {
    list-style-type: none;
  }

button, select{
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  .centered {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 960px) {
  .product.simple .img-content {
    height: 100px;
  }

  .product.simple .img-content {
    height: 100px;
  }

  .center-side .center-nav {
    padding: 1.6rem 1rem;
  }
}

@media (min-width: 960px) and (max-width: 1366px) {
  :root {
    font-size: 10px;
  }
  .product.simple .img-content {
    height: 120px;
  }

  .center-side .center-nav {
    padding: 1.6rem 2rem;
  }
}

@media (min-width: 1366px) and (max-width: 1420px) {
  :root {
    font-size: 11px;
  }
  .product.simple .img-content {
    height: 140px;
  }
}

@media (min-width: 1420px) and (max-width: 1620px) {
  :root {
    font-size: 12px;
  }
  .product.simple .img-content {
    height: 160px;
  }
}

@media (min-width: 1620px) and (max-width: 1820px) {
  :root {
    font-size: 14px;
  }
  .product.simple .img-content {
    height: 180px;
  }
}

@media (min-width: 1820px) and (max-width: 1920px) {
  :root {
    font-size: 16px;
  }
  .product.simple .img-content {
    height: 200px;
  }
  .center-side .center-nav {
    padding: 1.6rem 4rem;
  }
}

@media (min-width: 1920px) and (max-width: 2140px) {
  :root {
    font-size: 18px;
  }
}

@media (min-width: 2140px) and (max-width: 2340px) {
  :root {
    font-size: 20px;
  }
}

@media (min-width: 2340px) and (max-width: 2540px) {
  :root {
    font-size: 24px;
  }
  .center-side .center-nav {
    padding: 1.6rem 6rem;
  }
}

@media (min-width: 2540px) and (max-width: 2840px) {
  :root {
    font-size: 26px;
  }
  .center-side .center-nav {
    padding: 1.6rem 6rem;
  }
}

@media (min-width: 2840px) and (max-width: 3440px) {
  :root {
    font-size: 32px;
  }
  .center-side .center-nav {
    padding: 1.6rem 4rem;
  }
}

@media (min-width: 3440px) and (max-width: 3840px) {
  :root {
    font-size: 36px;
  }
  .center-side .center-nav {
    padding: 1.6rem 4rem;
  }
}

@media (min-width: 3841px) {
  .center-side .center-nav {
    padding: 1.6rem 6rem;
  }
}

.slider {
  .slider-btn {
    visibility: hidden;

    &::before {
      visibility: visible;
      font-family: 'Font Awesome 5 Pro';
      font-size: 2rem;
      position: absolute;
      display: grid;
      place-items: center center;
      border: 3px solid $arrow-border;
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      color: white;

    }

    &.slider-btn-left {
      &::before {
        content: '\f104';
        left: 2rem;
      }
    }

    &.slider-btn-right {
      &::before {
        content: '\f105';
        right: 2rem;
      }
    }
  }

  .slider-icon {
    border-radius: 50%;
    border: 2px solid $arrow-border;
    padding: 2rem;
  }

  .slider-indicators {
    span.slider-indicator-icon {
      padding: 0.2rem;
      border: 3px solid #7f7f7f;
      margin: 0.3rem;

      &.slider-indicator-active {
        background-color: white;
        border: 3px solid white;
      }
    }
  }
}
</style>
