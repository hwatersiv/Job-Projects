var express = require('express')
var path = require('path')
var app = express()

var staticPath = path.resolve(__dirname);

app.get('/api/navlinks', function (req, res) {
  res.send(
    [
      {name:"Platform", href:"#"},
      {name:"Features", href:"#"},
      {name:"Pricing", href:"#"},
      {name:"About", href:"#"}
    ]
  )
})

app.get('/api/footerlinks', function (req, res) {
  res.send(
    [
      {
        title: "Product",
        class: "basket",
        links: [
          "Features",
          "Pricing",
          "One-Click Apps"
        ]
      },
      {
        title: "About Us",
        class: "people",
        links: [
          "Our Story",
          "Team",
          "Partnerships"
        ]
      },
      {
        title: "Community",
        class: "circle",
        links: [
          "Tutorials",
          "Blog",
          "Q&A Forum"
        ]
      },
      {
        title: "Connect",
        class: "chaine",
        links: [
          "Email",
          "Linkedin",
          "GitHub"
        ]
      }
    ]
  )
})

app.get('/api/icons', function (req, res) {
  res.send(
    [
      {class: "fa fa-github-alt"},
      {class: "fa fa-linkedin"},
      {class: "fa fa-facebook"},
      {class: "fa fa-twitter"},
      {class: "fa fa-youtube"},
      {class: "fa fa-vimeo"}
    ]
  )
})

app.get('/api/programs', function (req, res) {
  res.send(
    [
      {href:"#", src:"img/programs-01.png"},
      {href:"#", src:"img/programs-02.png"},
      {href:"#", src:"img/programs-03.png"},
      {href:"#", src:"img/programs-04.png"},
      {href:"#", src:"img/programs-05.png"},
      {href:"#", src:"img/programs-06.png"}
    ]
  )
})

app.get('/api/applications', function (req, res) {
  res.send(
    [
      {
        src: "img/applications-01.png",
        title: "Dev-Environment",
        desc: "Your applications are packaged and deployed in to an isolated container environment. Leveraging the speed, security and portability provided by Docker."
      },
      {
        src: "img/applications-02.png",
        title: "Open-Source",
        desc: "Kubernets automates the provisioning, management and scaling of your containers - ensuring your applications and microservices are always running."
      },
      {
        src: "img/applications-03.png",
        title: "Transparency",
        desc: "OpenShift’s build and deployment tools include jenkins CD pipelines, binary injection and automated Git integration - accelerating your application delivery process."
      },
      {
        src: "img/applications-04.png",
        title: "Easy To Use",
        desc: "The flexibility of PaaS mitigates the complexity of distributed systems associated with the modern microservices trend - promoting rapid application development."
      },
      {
        src: "img/applications-05.png",
        title: "Multi-Language Support",
        desc: "Your applications are packaged and deployed in to an isolated container environment. Leveraging the speed, security and portability provided by Docker."
      },
      {
        src: "img/applications-06.png",
        title: "Container-Based",
        desc: "Kubernets automates the provisioning, management and scaling of your containers - ensuring your applications and microservices are always running."
      }
    ]
  )
})

app.get('/api/tabs', function (req, res) {
  res.send(
    [
      {
        id: 'tab1',
        memory: "512MB",
        cpu: 1,
        storage: 10,
        dataTransfer: 300,
        price: 30,
        class: "small"
      },
      {
        id: 'tab2',
        memory: "1GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 40,
        class: "rectangle"
      },
      {
        id: 'tab3',
        memory: "2GB",
        cpu: 1,
        storage: 10,
        dataTransfer: 300,
        price: 50,
        class: "rectangle"
      },
      {
        id: 'tab4',
        memory: "3GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 60,
        class: "rectangle"
      },
      {
        id: 'tab5',
        memory: "4GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 70,
        class: "small"
      },
      {
        id: 'tab6',
        memory: "5GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 80,
        class: "rectangle"
      },
      {
        id: 'tab7',
        memory: "6GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 90,
        class: "rectangle"
      },
      {
        id: 'tab8',
        memory: "7GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 100,
        class: "rectangle"
      },
      {
        id: 'tab9',
        memory: "8GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 110,
        class: "small"
      },
      {
        id: 'tab10',
        memory: "9GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 120,
        class: "rectangle"
      },
      {
        id: 'tab11',
        memory: "10GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 130,
        class: "rectangle"
      },
      {
        id: 'tab12',
        memory: "11GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 140,
        class: "rectangle"
      },
      {
        id: 'tab13',
        memory: "12GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 150,
        class: "small"
      },
      {
        id: 'tab14',
        memory: "13GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 160,
        class: "rectangle"
      },
      {
        id: 'tab15',
        memory: "14GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 170,
        class: "rectangle"
      },
      {
        id: 'tab16',
        memory: "15GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 180,
        class: "rectangle"
      },
      {
        id: 'tab17',
        memory: "16GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 190,
        class: "small"
      },
      {
        id: 'tab18',
        memory: "17GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 200,
        class: "rectangle"
      },
      {
        id: 'tab19',
        memory: "18GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 210,
        class: "rectangle"
      },
      {
        id: 'tab20',
        memory: "19GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 220,
        class: "rectangle"
      },
      {
        id: 'tab21',
        memory: "19GB",
        cpu: 1,
        storage: 15,
        dataTransfer: 400,
        price: 230,
        class: "small"
      }
    ]
  )
})

app.use(express.static(staticPath));

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
});