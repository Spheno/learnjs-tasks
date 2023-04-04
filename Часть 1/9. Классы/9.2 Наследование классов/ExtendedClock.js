import { Clock } from './Clock'

class ExtendedClock extends Clock {
  constructor(options) {
    super(options);
    const { precision = 1000 } = options;
    this.precision = precision;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let clock = new ExtendedClock;
clock.start()