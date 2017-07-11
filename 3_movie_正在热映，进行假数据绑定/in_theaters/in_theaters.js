(function(angular){
  
  // 1.创建正在热映模块
  var app = angular.module('in_theaters', ['ngRoute'])

  // 2.路由规则
  app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/in_theaters',{  // #/in_theaters
      templateUrl:'./in_theaters/in_theaters.html',
      controller:'in_theatersController'
    })
  }])

  // 3.创建控制器
  app.controller('in_theatersController', ['$scope',function($scope){
    $scope.data = {
  "count": 20,
  "start": 0,
  "total": 27,
  "subjects": [
    {
      "rating": {
        "max": 10,
        "average": 6.9,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "剧情",
        "喜剧"
      ],
      "title": "我不是潘金莲",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1050059/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1691.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1691.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1691.jpg"
          },
          "name": "范冰冰",
          "id": "1050059"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274274/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/39703.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/39703.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/39703.jpg"
          },
          "name": "郭涛",
          "id": "1274274"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1324043/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/58870.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/58870.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/58870.jpg"
          },
          "name": "大鹏",
          "id": "1324043"
        }
      ],
      "collect_count": 50418,
      "original_title": "我不是潘金莲",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1274255/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/45667.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/45667.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/45667.jpg"
          },
          "name": "冯小刚",
          "id": "1274255"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2378133884.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2378133884.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2378133884.jpg"
      },
      "alt": "https://movie.douban.com/subject/26630781/",
      "id": "26630781"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.9,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "动作",
        "科幻",
        "奇幻"
      ],
      "title": "奇异博士",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1009405/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/41072.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/41072.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/41072.jpg"
          },
          "name": "本尼迪克特·康伯巴奇",
          "id": "1009405"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1025152/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/3546.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/3546.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/3546.jpg"
          },
          "name": "蒂尔达·斯文顿",
          "id": "1025152"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1040529/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/57893.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/57893.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/57893.jpg"
          },
          "name": "麦斯·米科尔森",
          "id": "1040529"
        }
      ],
      "collect_count": 149413,
      "original_title": "Doctor Strange",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1320372/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/49077.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/49077.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/49077.jpg"
          },
          "name": "斯科特·德瑞克森",
          "id": "1320372"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2388501883.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2388501883.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2388501883.jpg"
      },
      "alt": "https://movie.douban.com/subject/3025375/",
      "id": "3025375"
    },
    {
      "rating": {
        "max": 10,
        "average": 8.6,
        "stars": "45",
        "min": 0
      },
      "genres": [
        "剧情",
        "战争"
      ],
      "title": "比利·林恩的中场战事",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1348117/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1424957578.32.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1424957578.32.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1424957578.32.jpg"
          },
          "name": "乔·阿尔文",
          "id": "1348117"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1047958/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/47467.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/47467.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/47467.jpg"
          },
          "name": "加内特·赫德兰",
          "id": "1047958"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1012533/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/11265.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/11265.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/11265.jpg"
          },
          "name": "克里斯汀·斯图尔特",
          "id": "1012533"
        }
      ],
      "collect_count": 93888,
      "original_title": "Billy Lynn's Long Halftime Walk",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1054421/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/595.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/595.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/595.jpg"
          },
          "name": "李安",
          "id": "1054421"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2391542403.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2391542403.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2391542403.jpg"
      },
      "alt": "https://movie.douban.com/subject/25983044/",
      "id": "25983044"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.2,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "剧情",
        "冒险",
        "灾难"
      ],
      "title": "深海浩劫",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1035674/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1407766093.88.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1407766093.88.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1407766093.88.jpg"
          },
          "name": "马克·沃尔伯格",
          "id": "1035674"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1314963/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/53688.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/53688.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/53688.jpg"
          },
          "name": "迪伦·欧布莱恩",
          "id": "1314963"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1041013/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1367250434.9.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1367250434.9.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1367250434.9.jpg"
          },
          "name": "约翰·马尔科维奇",
          "id": "1041013"
        }
      ],
      "collect_count": 9675,
      "original_title": "Deepwater Horizon",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1031938/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/30850.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/30850.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/30850.jpg"
          },
          "name": "彼得·博格",
          "id": "1031938"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2396092735.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2396092735.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2396092735.jpg"
      },
      "alt": "https://movie.douban.com/subject/22266320/",
      "id": "22266320"
    },
    {
      "rating": {
        "max": 10,
        "average": 8.1,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "剧情",
        "动作",
        "动画"
      ],
      "title": "航海王之黄金城",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1016801/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/4978.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/4978.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/4978.jpg"
          },
          "name": "田中真弓",
          "id": "1016801"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1037337/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/10219.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/10219.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/10219.jpg"
          },
          "name": "中井和哉",
          "id": "1037337"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1033344/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/15181.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/15181.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/15181.jpg"
          },
          "name": "冈村明美",
          "id": "1033344"
        }
      ],
      "collect_count": 17773,
      "original_title": "ONE PIECE FILM GOLD",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1364439/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "宮元宏彰",
          "id": "1364439"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2392493260.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2392493260.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2392493260.jpg"
      },
      "alt": "https://movie.douban.com/subject/26598021/",
      "id": "26598021"
    },
    {
      "rating": {
        "max": 10,
        "average": 4,
        "stars": "20",
        "min": 0
      },
      "genres": [
        "奇幻",
        "冒险"
      ],
      "title": "勇士之门",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1274608/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/30529.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/30529.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/30529.jpg"
          },
          "name": "赵又廷",
          "id": "1274608"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1315861/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/57286.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/57286.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/57286.jpg"
          },
          "name": "倪妮",
          "id": "1315861"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1252786/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1429752266.85.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1429752266.85.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1429752266.85.jpg"
          },
          "name": "尤赖亚·谢尔顿",
          "id": "1252786"
        }
      ],
      "collect_count": 1406,
      "original_title": "勇士之门",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1332523/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "马蒂亚斯·霍恩",
          "id": "1332523"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2393908940.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2393908940.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2393908940.jpg"
      },
      "alt": "https://movie.douban.com/subject/25845294/",
      "id": "25845294"
    },
    {
      "rating": {
        "max": 10,
        "average": 6.5,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "喜剧"
      ],
      "title": "阿拉丁与神灯",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1356429/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1459858599.17.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1459858599.17.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1459858599.17.jpg"
          },
          "name": "凯文·亚当斯",
          "id": "1356429"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1005269/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/19115.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/19115.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/19115.jpg"
          },
          "name": "让-保罗·卢弗",
          "id": "1005269"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1339884/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1398669983.38.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1398669983.38.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1398669983.38.jpg"
          },
          "name": "凡妮莎·吉德",
          "id": "1339884"
        }
      ],
      "collect_count": 1965,
      "original_title": "Les nouvelles aventures d'Aladin",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1345487/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1459925913.71.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1459925913.71.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1459925913.71.jpg"
          },
          "name": "亚瑟·邦扎康",
          "id": "1345487"
        }
      ],
      "year": "2015",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2392693383.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2392693383.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2392693383.jpg"
      },
      "alt": "https://movie.douban.com/subject/26602796/",
      "id": "26602796"
    },
    {
      "rating": {
        "max": 10,
        "average": 8.4,
        "stars": "45",
        "min": 0
      },
      "genres": [
        "剧情",
        "喜剧"
      ],
      "title": "驴得水",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1362973/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1478066140.77.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1478066140.77.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1478066140.77.jpg"
          },
          "name": "任素汐",
          "id": "1362973"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1355797/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1458442004.38.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1458442004.38.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1458442004.38.jpg"
          },
          "name": "大力",
          "id": "1355797"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1337891/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1392696207.67.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1392696207.67.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1392696207.67.jpg"
          },
          "name": "刘帅良",
          "id": "1337891"
        }
      ],
      "collect_count": 91083,
      "original_title": "驴得水",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1362256/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1477663977.75.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1477663977.75.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1477663977.75.jpg"
          },
          "name": "周申",
          "id": "1362256"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1362257/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1477663883.18.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1477663883.18.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1477663883.18.jpg"
          },
          "name": "刘露",
          "id": "1362257"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2393044761.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2393044761.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2393044761.jpg"
      },
      "alt": "https://movie.douban.com/subject/25921812/",
      "id": "25921812"
    },
    {
      "rating": {
        "max": 10,
        "average": 8.1,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "动作",
        "犯罪"
      ],
      "title": "湄公河行动",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1274319/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1431679077.58.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1431679077.58.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1431679077.58.jpg"
          },
          "name": "张涵予",
          "id": "1274319"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1013782/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1368156632.65.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1368156632.65.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1368156632.65.jpg"
          },
          "name": "彭于晏",
          "id": "1013782"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274640/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/5979.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/5979.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/5979.jpg"
          },
          "name": "孙淳",
          "id": "1274640"
        }
      ],
      "collect_count": 223668,
      "original_title": "湄公河行动",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1275075/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1372934445.18.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1372934445.18.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1372934445.18.jpg"
          },
          "name": "林超贤",
          "id": "1275075"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2380677316.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2380677316.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2380677316.jpg"
      },
      "alt": "https://movie.douban.com/subject/25815034/",
      "id": "25815034"
    },
    {
      "rating": {
        "max": 10,
        "average": 4.7,
        "stars": "25",
        "min": 0
      },
      "genres": [
        "剧情",
        "喜剧"
      ],
      "title": "外公芳龄38",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1009179/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1368762337.01.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1368762337.01.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1368762337.01.jpg"
          },
          "name": "佟大为",
          "id": "1009179"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1313303/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/37554.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/37554.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/37554.jpg"
          },
          "name": "陈妍希",
          "id": "1313303"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1355329/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1478848828.8.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1478848828.8.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1478848828.8.jpg"
          },
          "name": "吕云骢",
          "id": "1355329"
        }
      ],
      "collect_count": 2174,
      "original_title": "外公芳龄38",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1276884/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/46669.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/46669.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/46669.jpg"
          },
          "name": "安兵基",
          "id": "1276884"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2394844095.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2394844095.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2394844095.jpg"
      },
      "alt": "https://movie.douban.com/subject/26415200/",
      "id": "26415200"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.6,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "动画",
        "奇幻",
        "冒险"
      ],
      "title": "魔发精灵",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1040987/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/419.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/419.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/419.jpg"
          },
          "name": "贾斯汀·汀布莱克",
          "id": "1040987"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1013789/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/31847.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/31847.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/31847.jpg"
          },
          "name": "安娜·肯德里克",
          "id": "1013789"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1013758/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/3139.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/3139.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/3139.jpg"
          },
          "name": "佐伊·丹斯切尔",
          "id": "1013758"
        }
      ],
      "collect_count": 5643,
      "original_title": "Trolls",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1292230/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "迈克·米歇尔",
          "id": "1292230"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1363786/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "沃尔特·道恩",
          "id": "1363786"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2392222202.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2392222202.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2392222202.jpg"
      },
      "alt": "https://movie.douban.com/subject/7065238/",
      "id": "7065238"
    },
    {
      "rating": {
        "max": 10,
        "average": 0,
        "stars": "00",
        "min": 0
      },
      "genres": [
        "悬疑",
        "惊悚"
      ],
      "title": "白云桥",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1326971/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1473847921.78.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1473847921.78.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1473847921.78.jpg"
          },
          "name": "钟萱",
          "id": "1326971"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1042785/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/7016.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/7016.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/7016.jpg"
          },
          "name": "温兆伦",
          "id": "1042785"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1339574/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1457753799.81.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1457753799.81.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1457753799.81.jpg"
          },
          "name": "刘宇珽",
          "id": "1339574"
        }
      ],
      "collect_count": 92,
      "original_title": "白云桥",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1326971/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1473847921.78.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1473847921.78.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1473847921.78.jpg"
          },
          "name": "钟萱",
          "id": "1326971"
        }
      ],
      "year": "2015",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2397925697.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2397925697.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2397925697.jpg"
      },
      "alt": "https://movie.douban.com/subject/26438800/",
      "id": "26438800"
    },
    {
      "rating": {
        "max": 10,
        "average": 6.4,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "悬疑",
        "惊悚"
      ],
      "title": "但丁密码",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1054450/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/551.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/551.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/551.jpg"
          },
          "name": "汤姆·汉克斯",
          "id": "1054450"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1013981/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/42373.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/42373.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/42373.jpg"
          },
          "name": "菲丽希缇·琼斯",
          "id": "1013981"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1040512/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/2150.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/2150.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/2150.jpg"
          },
          "name": "本·福斯特",
          "id": "1040512"
        }
      ],
      "collect_count": 29120,
      "original_title": "Inferno",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1031844/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1366641135.85.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1366641135.85.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1366641135.85.jpg"
          },
          "name": "朗·霍华德",
          "id": "1031844"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2388072933.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2388072933.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2388072933.jpg"
      },
      "alt": "https://movie.douban.com/subject/24860318/",
      "id": "24860318"
    },
    {
      "rating": {
        "max": 10,
        "average": 5.8,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "犯罪",
        "悬疑",
        "惊悚"
      ],
      "title": "捉迷藏",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1015713/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1414655610.66.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1414655610.66.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1414655610.66.jpg"
          },
          "name": "霍建华",
          "id": "1015713"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1274437/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/48635.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/48635.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/48635.jpg"
          },
          "name": "秦海璐",
          "id": "1274437"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1315477/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1393913263.07.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1393913263.07.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1393913263.07.jpg"
          },
          "name": "万茜",
          "id": "1315477"
        }
      ],
      "collect_count": 9569,
      "original_title": "捉迷藏",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1274348/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1372060655.97.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1372060655.97.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1372060655.97.jpg"
          },
          "name": "刘杰",
          "id": "1274348"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2392969596.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2392969596.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2392969596.jpg"
      },
      "alt": "https://movie.douban.com/subject/26757373/",
      "id": "26757373"
    },
    {
      "rating": {
        "max": 10,
        "average": 7.3,
        "stars": "40",
        "min": 0
      },
      "genres": [
        "喜剧",
        "动画"
      ],
      "title": "蜡笔小新：梦境世界大突击",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1048689/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/25830.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/25830.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/25830.jpg"
          },
          "name": "矢岛晶子",
          "id": "1048689"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1007835/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "楢桥美纪",
          "id": "1007835"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1028837/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/5770.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/5770.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/5770.jpg"
          },
          "name": "藤原启治",
          "id": "1028837"
        }
      ],
      "collect_count": 3531,
      "original_title": "クレヨンしんちゃん 爆睡!ユメミーワールド大突撃",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1344924/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "高桥涉",
          "id": "1344924"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2393770821.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2393770821.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2393770821.jpg"
      },
      "alt": "https://movie.douban.com/subject/26660834/",
      "id": "26660834"
    },
    {
      "rating": {
        "max": 10,
        "average": 6.3,
        "stars": "35",
        "min": 0
      },
      "genres": [
        "剧情",
        "喜剧",
        "动作"
      ],
      "title": "邻家大贱谍",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1044996/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/8710.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/8710.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/8710.jpg"
          },
          "name": "盖尔·加朵",
          "id": "1044996"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1041001/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/437.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/437.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/437.jpg"
          },
          "name": "艾拉·菲舍尔",
          "id": "1041001"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1027137/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1197.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1197.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1197.jpg"
          },
          "name": "扎克·加利凡纳基斯",
          "id": "1027137"
        }
      ],
      "collect_count": 2596,
      "original_title": "Keeping Up with the Joneses",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1274466/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/4286.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/4286.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/4286.jpg"
          },
          "name": "格雷格·莫托拉",
          "id": "1274466"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2394353738.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2394353738.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2394353738.jpg"
      },
      "alt": "https://movie.douban.com/subject/25847558/",
      "id": "25847558"
    },
    {
      "rating": {
        "max": 10,
        "average": 6.1,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "剧情",
        "爱情",
        "家庭"
      ],
      "title": "一句顶一万句",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1315488/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1458782554.68.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1458782554.68.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1458782554.68.jpg"
          },
          "name": "毛孩",
          "id": "1315488"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1313760/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1411387657.99.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1411387657.99.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1411387657.99.jpg"
          },
          "name": "李倩",
          "id": "1313760"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1304661/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/27755.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/27755.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/27755.jpg"
          },
          "name": "刘蓓",
          "id": "1304661"
        }
      ],
      "collect_count": 3982,
      "original_title": "一句顶一万句",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1361863/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/6hKOEUaShmkcel_avatar_uploaded1472732748.85.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/6hKOEUaShmkcel_avatar_uploaded1472732748.85.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/6hKOEUaShmkcel_avatar_uploaded1472732748.85.jpg"
          },
          "name": "刘雨霖",
          "id": "1361863"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2389970856.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2389970856.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2389970856.jpg"
      },
      "alt": "https://movie.douban.com/subject/26389466/",
      "id": "26389466"
    },
    {
      "rating": {
        "max": 10,
        "average": 5.8,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "恐怖",
        "古装"
      ],
      "title": "育婴室",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1316703/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/1421138015.79.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/1421138015.79.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/1421138015.79.jpg"
          },
          "name": "邱敏敏",
          "id": "1316703"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1318883/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1469384955.41.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1469384955.41.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1469384955.41.jpg"
          },
          "name": "朱一龙",
          "id": "1318883"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1315812/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/39261.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/39261.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/39261.jpg"
          },
          "name": "徐洁儿",
          "id": "1315812"
        }
      ],
      "collect_count": 689,
      "original_title": "育婴室",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1327529/",
          "avatars": {
            "small": "http://img3.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
            "large": "http://img7.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
            "medium": "http://img3.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
          },
          "name": "皮查农·塔玛杰拉",
          "id": "1327529"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2372301645.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2372301645.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2372301645.jpg"
      },
      "alt": "https://movie.douban.com/subject/26318896/",
      "id": "26318896"
    },
    {
      "rating": {
        "max": 10,
        "average": 4.7,
        "stars": "25",
        "min": 0
      },
      "genres": [
        "剧情",
        "喜剧",
        "爱情"
      ],
      "title": "贫穷富爸爸",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1274666/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/40550.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/40550.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/40550.jpg"
          },
          "name": "郑嘉颖",
          "id": "1274666"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1276012/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/12983.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/12983.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/12983.jpg"
          },
          "name": "小小彬",
          "id": "1276012"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1312835/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1408117253.33.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1408117253.33.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1408117253.33.jpg"
          },
          "name": "李呈媛",
          "id": "1312835"
        }
      ],
      "collect_count": 226,
      "original_title": "贫穷富爸爸",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1016979/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1963.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1963.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1963.jpg"
          },
          "name": "张坚庭",
          "id": "1016979"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img7.doubanio.com/view/movie_poster_cover/ipst/public/p2392170434.jpg",
        "large": "http://img7.doubanio.com/view/movie_poster_cover/lpst/public/p2392170434.jpg",
        "medium": "http://img7.doubanio.com/view/movie_poster_cover/spst/public/p2392170434.jpg"
      },
      "alt": "https://movie.douban.com/subject/25955373/",
      "id": "25955373"
    },
    {
      "rating": {
        "max": 10,
        "average": 5.5,
        "stars": "30",
        "min": 0
      },
      "genres": [
        "喜剧",
        "爱情"
      ],
      "title": "从你的全世界路过",
      "casts": [
        {
          "alt": "https://movie.douban.com/celebrity/1274235/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/805.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/805.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/805.jpg"
          },
          "name": "邓超",
          "id": "1274235"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1275542/",
          "avatars": {
            "small": "http://img3.doubanio.com/img/celebrity/small/21559.jpg",
            "large": "http://img3.doubanio.com/img/celebrity/large/21559.jpg",
            "medium": "http://img3.doubanio.com/img/celebrity/medium/21559.jpg"
          },
          "name": "白百何",
          "id": "1275542"
        },
        {
          "alt": "https://movie.douban.com/celebrity/1276051/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/1435567211.65.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/1435567211.65.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/1435567211.65.jpg"
          },
          "name": "杨洋",
          "id": "1276051"
        }
      ],
      "collect_count": 95972,
      "original_title": "从你的全世界路过",
      "subtype": "movie",
      "directors": [
        {
          "alt": "https://movie.douban.com/celebrity/1275554/",
          "avatars": {
            "small": "http://img7.doubanio.com/img/celebrity/small/11460.jpg",
            "large": "http://img7.doubanio.com/img/celebrity/large/11460.jpg",
            "medium": "http://img7.doubanio.com/img/celebrity/medium/11460.jpg"
          },
          "name": "张一白",
          "id": "1275554"
        }
      ],
      "year": "2016",
      "images": {
        "small": "http://img3.doubanio.com/view/movie_poster_cover/ipst/public/p2382076389.jpg",
        "large": "http://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2382076389.jpg",
        "medium": "http://img3.doubanio.com/view/movie_poster_cover/spst/public/p2382076389.jpg"
      },
      "alt": "https://movie.douban.com/subject/26280528/",
      "id": "26280528"
    }
  ],
  "title": "正在上映的电影-北京"
};


  }])

})(angular)