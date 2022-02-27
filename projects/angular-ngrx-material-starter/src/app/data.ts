import Step from 'shepherd.js/src/types/step';

export const builtInButtons = {
  cancel: {
    classes: 'cancel-button',
    secondary: true,
    text: 'Exit',
    type: 'cancel'
  },
  next: {
    classes: 'shepherd-primary-button',
    text: 'Next',
    type: 'next'
  },
  back: {
    classes: 'back-button',
    secondary: true,
    text: 'Back',
    type: 'back'
  }
};

export const defaultStepOptions: Step.StepOptions = {
  classes: 'shepherd-theme-arrows custom-default-class',
  scrollTo: { behavior: 'smooth', block: 'center' },
  cancelIcon: {
    enabled: true
  },
  canClickTarget: false,
};

export const steps: Step.StepOptions[] = [
  {
    attachTo: {
      element: '.actions',
      on: 'bottom'
    },
    popperOptions: {
      modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
    },
    buttons: [
      builtInButtons.cancel,
      builtInButtons.next
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'intro',
    title: 'Welcome to Angular Shepherd!',
    text: `
          <p>
            Angular Shepherd is a JavaScript library for guiding users through your Angular app.
            It is an Angular library that wraps <a href="https://github.com/shipshapecode/shepherd">Shepherd</a>
            and extends its functionality. Shepherd uses <a href="https://popper.js.org/">Popper.js</a>,
            another open source library, to position all of its steps and enable entrance and exit animations.
          </p>
        
          <p>
            Popper makes sure your steps never end up off screen or cropped by an
            overflow. Try resizing your browser to see what we mean.
          </p>`
  },
  {
    attachTo: {
      element: '.get-started',
      on: 'bottom'
    },
    popperOptions: {
      modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
    },
    buttons: [
      builtInButtons.cancel,
      builtInButtons.back,
      builtInButtons.next
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'installation',
    title: 'Installation',
    text: 'Installation is simple, if you are using Ember-CLI, just install like any other addon.'
  },
  {
    attachTo: {
      element: '.contributors',
      on: 'bottom'
    },
    popperOptions: {
      modifiers: [{ name: 'offset', options: { offset: [0, 12] } }],
    },
    buttons: [
      builtInButtons.cancel,
      builtInButtons.back,
      builtInButtons.next
    ],
    classes: 'custom-class-name-1 custom-class-name-2',
    id: 'usage',
    title: 'Usage',
    text: 'To use the tour service, simply inject it into your application and use it like this example.'
  }
];
