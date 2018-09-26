import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';
const animationPlay = [
  trigger('logHero', [
    transition(
      'false=> true',
      animate(
        '300ms',
        keyframes([
          style({ backgroundColor: 'yellow', offset: 0 }),
          style({ backgroundColor: 'greenyellow', offset: 0.4 }),
          style({ backgroundColor: 'yellow', offset: 0.6 }),
          style({ backgroundColor: 'greenyellow', offset: 1 })
        ])
      )
    ),

    transition('true => false', animate('100ms ease-out'))
  ])
];

export { animationPlay };
