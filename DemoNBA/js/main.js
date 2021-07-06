var app = new Vue({
    el: "#app",
    data() {
        return {
            // 轮播图
            CarouselImg: [
                'http://inews.gtimg.com/newsapp_ls/0/13729911752_1164606/0',
                'http://inews.gtimg.com/newsapp_ls/0/13730049664_1164606/0',
                'http://inews.gtimg.com/newsapp_ls/0/13729755959_1164606/0'
            ],
            // 要闻列表
            impnews: ["丁维迪:自由市场上最好的控卫已经准备好了", "波蒂斯：全情投入 我要为胸前的队名而战", "如老鹰队G6取胜 字母哥或在抢七大战中复出", "文字", "文字2"],

            ImgImpnews: [
                {
                    "title": "47年与28年 雄鹿和太阳终于重返总决赛",
                    "url": "http://inews.gtimg.com/newsapp_ls/0/13730049664_1164606/0"
                }, {
                    "title": "【当日之星】朱-霍勒迪27+9+9身手全能",
                    "url": "http://inews.gtimg.com/newsapp_ls/0/13727225842_1164606/0"
                }, {
                    "title": "仓促复出状态低迷 特雷杨接受失败洗礼",
                    "url": "http://inews.gtimg.com/newsapp_ls/0/13727025750_1164606/0"
                }
            ],
            dataImg: [
                {
                    "url": "https://china.nba.com/media/img/players/silos/440x700/203114.png",
                    "name": "克里斯 米德尔顿",
                    "dec": " 20前锋 /  雄鹿",
                    "score": 32
                }, {
                    "url": "https://china.nba.com/media/img/players/silos/440x700/201950.png",
                    "name": "克里斯 米德尔顿",
                    "dec": " 20前锋 /  雄鹿",
                    "score": 32
                }, {
                    "url": "https://china.nba.com/media/img/players/silos/440x700/201572.png",
                    "name": "克里斯 米德尔顿",
                    "dec": " 20前锋 /  雄鹿",
                    "score": 32
                }, {
                    "url": "https://china.nba.com/media/img/players/silos/440x700/1628381.png",
                    "name": "克里斯 米德尔顿",
                    "dec": " 20前锋 /  雄鹿",
                    "score": 32
                }, {
                    "url": "https://china.nba.com/media/img/players/silos/440x700/203114.png",
                    "name": "克里斯 米德尔顿",
                    "dec": " 20前锋 /  雄鹿",
                    "score": 32
                }
            ],
            partner: [
                "//mat1.gtimg.com/chinanba/web/statics/logo_partner_01_79da27.jpg", "//mat1.gtimg.com/chinanba/web/statics/logo_partner_02_084a68.jpg", "//img1.gtimg.com/mobilenbachina/pics/hv1/204/14/2291/148976049.png", "//mat1.gtimg.com/chinanba/web/statics/changhong_102d6e.png", "//mat1.gtimg.com/chinanba/web/statics/qingyang-nanshi_23be81.png", "//mat1.gtimg.com/chinanba/web/statics/migu_8d29fc.jpg", "//img1.gtimg.com/chinanba/pics/hv1/96/18/2324/151122786.jpg"
            ],
            currentDate: new Date(),
            VideoData: "2021-07-05",
            seritem: [
                {
                    "serimg": "http://inews.gtimg.com/newsapp_ls/0/13734779270_1164606/0",
                    "sertitle": "47年与28年 雄鹿和太阳终于重返总决赛"
                },
                {
                    "serimg": "http://inews.gtimg.com/newsapp_ls/0/13730049664_1164606/0",
                    "sertitle": "雄鹿和太阳终于重返总决赛"
                }
            ],
            videoUrl: [
                {
                    "url": "http://inews.gtimg.com/newsapp_ls/0/13720271693_1164606/0"
                }, {
                    "url": "http://inews.gtimg.com/newsapp_ls/0/13727009992_1164606/0"
                }, {
                    "url": "http://inews.gtimg.com/newsapp_ls/0/13727461638_1164606/0"
                }
            ],
            special: [
                {
                    "ImgUrl": "https://img1.gtimg.com/chinanba/pics/hv1/195/15/2284/148521120.jpg",
                    "pics": "http://img1.gtimg.com/chinanba/pics/hv1/32/15/2326/151252007.jpg"
                },
                {
                    "ImgUrl": "https://img1.gtimg.com/chinanba/pics/hv1/118/16/2284/148521298.jpg",
                    "pics": "http://img1.gtimg.com/chinanba/pics/hv1/38/15/2326/151252013.jpg"
                }, {
                    "ImgUrl": "https://mat1.gtimg.com/chinanba/web/statics/zt_nba5V5_2cb751.jpg",
                    "pics": "http://img1.gtimg.com/chinanba/pics/hv1/41/15/2326/151252016.jpg"
                }
            ]
        }
    }
})