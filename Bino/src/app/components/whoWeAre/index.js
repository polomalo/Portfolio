import $ from 'jquery';
import anime from 'animejs/lib/anime.es.js';

anime({
  targets: '.whoWeAre__item--icon--box',
  keyframes:[
    {
      rotate: 0,
      borderColor: '#F1F1F1',
    },
    {
      rotate: 45,
      duration: 10000,
      borderColor: '#e74c3c'
    },
    {
      rotate:0,
      duration: 5000,
      borderColor: '#F1F1F1'
    }
  ],
  delay: anime.stagger(11000),
  easing: 'easeOutElastic(1, .8)',
  loop: true
});
anime({
  targets: '.glasses, .heart, .light, .comments',
  keyframes:[
    {
      rotate: 0,
    },
    {
      rotate: -45,
      duration: 10000
    },
    {
      rotate:0,
      duration: 5000,
      borderColor: '#F1F1F1'
    }
  ],
  delay: anime.stagger(11000),
  loop: true
});
anime({
  targets: '.whoWeAre__item--desc--line',
  keyframes:[
    {
      backgroundColor: '#888888'
    },
    {
      backgroundColor: '#e74c3c',
      duration: 10000,
      color: '#e74c3c'
    },
    {
      backgroundColor: '#888888',
      duration: 5000,
    }
  ],
  delay: anime.stagger(11000),
  loop: true
});
