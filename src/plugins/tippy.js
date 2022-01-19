import tippy from 'tippy.js';


const addTippy = () => {
  tippy('[data-tippy-content]', {
    placement: 'bottom',
    theme: 'light-border',
    animation: 'shift-away',
  });
};

export default addTippy;