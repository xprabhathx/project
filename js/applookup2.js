var units = [
    {
      code: "ICT10001",
      desc: "Problem Solving with ICT",
      cp: 12.5,
      type: "Core",
    },
    { code: "COS10005", desc: "Web Development", cp: 12.5, type: "Core" },
    {
      code: "INF10003",
      desc: "Introduction to Business Information Systems",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "INF10002",
      desc: "Database Analysis and Design",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "COS10009",
      desc: "Introduction to Programming",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "INF30029",
      desc: "Information Technology Project Management",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "ICT30005",
      desc: "Professional Issues in Information Technology",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "ICT30001",
      desc: "Information Technology Project",
      cp: 12.5,
      type: "Core",
    },
    {
      code: "COS20001",
      desc: "User-Centred Design",
      cp: 12.5,
      type: "Software Development",
    },
    {
      code: "TNE10005",
      desc: "Network Administration",
      cp: 12.5,
      type: "Software Development",
    },
    {
      code: "COS20016",
      desc: "Operating System Configuration",
      cp: 12.5,
      type: "Software Development",
    },
    {
      code: "SWE20001",
      desc: "Development Project 1 - Tools and Practices",
      cp: 12.5,
      type: "Software Development",
    },
    {
      code: "COS20007",
      desc: "Object Oriented Programming",
      cp: 12.5,
      type: "Software Development",
    },
    {
      code: "COS30015",
      desc: "IT Security",
      cp: 12.5,
      type: "Software Development",
    },
    {
      code: "COS30043",
      desc: "Interface Design and Development",
      cp: 12.5,
      type: "Software Development",
    },
    {
      code: "COS30017",
      desc: "Software Development for Mobile Devices",
      cp: 12.5,
      type: "Software Development",
    },
    {
      code: "INF20012",
      desc: "Enterprise Systems",
      cp: 12.5,
      type: "Systems Analysis",
    },
    {
      code: "ACC10007",
      desc: "Financial Information for Decision Making",
      cp: 12.5,
      type: "Systems Analysis",
    },
    {
      code: "INF20003",
      desc: "Requirements Analysis and Modelling",
      cp: 12.5,
      type: "Systems Analysis",
    },
    {
      code: "ACC20014",
      desc: "Management Decision Making",
      cp: 12.5,
      type: "Systems Analysis",
    },
    {
      code: "INF30005",
      desc: "Business Process Management",
      cp: 12.5,
      type: "Systems Analysis",
    },
    {
      code: "INF30003",
      desc: "Business Information Systems Analysis",
      cp: 12.5,
      type: "Systems Analysis",
    },
    {
      code: "INF30020",
      desc: "Information Systems Risk and Security",
      cp: 12.5,
      type: "Systems Analysis",
    },
    {
      code: "INF30001",
      desc: "Systems Acquisition & Implementation Management",
      cp: 12.5,
      type: "Systems Analysis",
    },
  ];

  const Unit = {
    data() {
      return { units };
    },

    template: `<div>
  <hr>

  <h1>Unit Code: {{ $route.params.id }}
  </h1>

  <ul v-for="unit in filteredUnits">
      <li>{{unit.code}}</li>
      <li>{{unit.desc}}</li>    
      <li>{{unit.cp.toFixed(2)}}</li>
      <li>{{unit.type}}</li>
  </ul>

  </div>`,
    computed: {
      filteredUnits: function () {
        return this.units.filter((s) =>
          s.code.toLowerCase().match(this.$route.params.id.toLowerCase())
        );
      },
    },
  };

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes: [
      {
        path: "/unit/:id",
        component: Unit,
      },
    ],
  });

  const app = Vue.createApp({});

  app.component("app-lookup2", {
    data: function () {
      return {
        units,
      };
    },

    template: `
  <div>

      <h1>Unit Information System
      </h1>
      <table class="table table-striped table-hover">

      <thead><tr>
              <th>Code</th>
              <th>Description</th>
              <th>More Info</th>
          </tr></thead>

          <tbody>  
          <tr v-for="s in units">
              <td>{{ s.code }}</td>
              <td>{{ s.desc }}</td>
              <td><router-link :to="{ path:'/unit/'+s.code }">show details</router-link></td>
          </tr>
          </tbody>

      </table>
      <router-view></router-view>	

      </div>`,
  });

  app.use(router);
  app.mount("#app");