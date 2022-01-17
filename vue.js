    var app = new Vue({
      el: '#table',
      data: {
        player: player,
        session: session,
        control: control,
        error: '',
        quick: quick
      },
      methods: {
        stateControl: function (state, index) {
          if (state === false) {
            console.log(state);
            session.players[index].active = true;
          } else if (state === true) {
            console.log(state)
            session.players[index].active = false;
          } else {
            console.log(state)
            session.players[index].active = false;
          }
          session.players[index].starter = null;
        },
        quickTransfer: function () {
          let x = Math.floor(quick.amount / quick.divider * (1 - session.fee/100))
          quick.result = new Intl.NumberFormat().format(x)
        },
        addUser: function () {
          pos = session.players.map(function (e) { return e.name; }).indexOf(player.name);
          if (pos === -1 && player.name !== "" && player.name !== null) {
            session.players.push({
              name: player.name,
              money: 0,
              group: 0,
              counter: 0,
              active: true,
              starter: null,
              dividend: 0,
              fees: .5,
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
            })
          } else {
            error = 'error occured'
          }
          player.name = ""
          document.getElementById("addPlayer").focus();
        },
        removeUser: function (player) {
          session.players.splice(player, 1)
        },
        classControl: function (state) {
          if (state === true) {
            return 'bi-pause'
          } else {
            return 'bi-play'
          }
        }
      },
      computed: {
      }
    });
