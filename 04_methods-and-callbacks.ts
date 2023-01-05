interface ISmigle {
  flurgnar: boolean;
  replenishFluids: (fluid: string) => boolean;
}

const mySmigle: ISmigle = {
  flurgnar: true,
  replenishFluids: (fluid) => {
    return true;
  },
};

const myHOF = (callback: (num: number) => string) => {
  callback(4);
};
