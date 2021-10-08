import {
  trigger,
  animate,
  transition,
  state,
  AnimationTriggerMetadata,
  style,
} from '@angular/animations';

export const sceneAnimation: AnimationTriggerMetadata = trigger(
  'sceneAnimation',
  [
    state('hidden', style({ opacity: 0 })),
    state('visible', style({ opacity: 1 })),
    transition('hidden <=> visible', animate('1s ease-in')),
  ]
);
