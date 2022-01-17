    session = {
      amount: 100000000,
      count: 0,
      time: 0,
      fee: 0.5,
      players: [{
        name: "John Doe",
        money: 0,
        group: 0,
        counter: 0,
        active: false,
        starter: null,
        dividend: 0,
        fees: [],
        log: [],
        money: 0,
        deductions: 0,
        display: {
          timer: "",
          money: "",
          deductions: "",
          fees: "",
          total: ""
        },
      },
      {
        name: "Jane Doe",
        money: 0,
        group: 0,
        counter: 0,
        active: true,
        starter: null,
        dividend: 0,
        fees: [],
        log: [],
        money: 0,
        deductions: 0,
        display: {
          timer: "",
          money: "",
          deductions: "",
          fees: "",
          total: ""
        },
      }]
    }
    let player = {
      name: "",
      money: 0,
      group: 0,
      counter: 0,
      active: true,
      starter: null,
      dividend: 0,
      fees: [],
      log: [],
      money: 0,
      deductions: 0,
      display: {
        timer: "",
        money: "",
        deductions: "",
        fees: "",
        total: ""
      },
    };
    let quick = {
      amount: 0,
      result: 0,
      divider: 1,
    }
    let isTrue = true;
    let control = 'Start';
