## Next Owl Carousel

#### 1.Installation

```script
npm install --save next-owl-carousel
```

```html
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"/>
```

```jsx
import { useRef } from 'react';
import OwlCarousel from 'next-owl-carousel';
```

### 2.Usage

```jsx
const carouselRef = useRef(null);
```

```jsx
const options = {
  loop: true,
  responsiveClass: true,
  dots: false,
  autoplay: true,
  responsive: {
    0: { items: 1, dots: true },
    768: { items: 2 },
  },
};
```

```jsx
const events = {
  onDragged: function (event) {
    console.log('====onDragged===>>', event);
  },
  onChanged: function (event) {
    console.log('====onChanged===>>', event);
  },
};
```

```jsx
<OwlCarousel ref={carouselRef} options={options} events={events} className="owl-carousel">
  <div className="item"><img src="/img/fullimage1.jpg" alt="item1" /></div>
  <div className="item"><img src="/img/fullimage1.jpg" alt="item2" /></div>
  <div className="item"><img src="/img/fullimage1.jpg" alt="item3" /></div>
</OwlCarousel>
```

### 3. Methods

<u>Previous</u>

```jsx
<button onClick={() => carouselRef?.current?.prev()}>prev</button>
```

<u>Next</u>

```jsx
<button onClick={() => carouselRef?.current?.next()}>prev</button>
```

<u>goTo(page)</u>

```jsx
<button onClick={() => carouselRef?.current?.goTo(0)}>prev</button>
```

#### Reference https://www.npmjs.com/package/react-owl-carousel2

---

### Hi there, I'm [Anmol](https://www.linkedin.com/in/anmolsukki/) 👋

[![CodeSandbox](https://img.shields.io/badge/Codesandbox-000000?style=flat-round&logo=CodeSandbox)](https://codesandbox.io/u/anmolsukki)&nbsp;&nbsp;&nbsp;
[![Discord](https://img.shields.io/badge/Discord-%235865F2.svg?style=flat-round&logo=discord&logoColor=white)](https://discord.gg/zMkSphwHjE)&nbsp;&nbsp;&nbsp;
[![Linkedin](https://img.shields.io/badge/-LinkedIn-blue?style=flat-round&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/anmolsukki/)](https://www.linkedin.com/in/anmolsukki/)&nbsp;&nbsp;&nbsp;
[![facebook](https://aleen42.github.io/badges/src/facebook.svg)](https://www.facebook.com/Anmolsukki/)&nbsp;&nbsp;&nbsp;
[![twitter](https://aleen42.github.io/badges/src/twitter.svg)](https://twitter.com/anmolsukki)&nbsp;&nbsp;&nbsp;
[![Instagram](https://img.shields.io/badge/-Instagram-e4405f?style=flat-round&logo=Instagram&logoColor=white)](https://www.instagram.com/anmolsukki/)&nbsp;&nbsp;&nbsp;
[![slack](https://aleen42.github.io/badges/src/slack.svg)](https://join.slack.com/t/anmolsukki/shared_invite/zt-k7cfber5-JVl_kGaNdNqvwsMADPiUWg)&nbsp;&nbsp;&nbsp;
[![stackoverflow](https://aleen42.github.io/badges/src/stackoverflow.svg)](https://stackoverflow.com/users/10825957/anmol-kumar-singh)
