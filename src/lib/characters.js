// src/lib/characters.js

const CHARACTERS = {
    "wang-lin": {
        "name": "Wang Lin",
        "rarity": "Divine",
        "atk": 1268,
        "def": 1445,
        "hp": 2290,
        "image": "https://i.ibb.co.com/n8Y7WhNc/255-cb-20260607081051.webp",
        "emoji": "❤️"
    },
    "situ-nan": {
        "name": "Situ Nan",
        "rarity": "Divine",
        "atk": 2676,
        "def": 1934,
        "hp": 2546,
        "image": "https://i.ibb.co.com/twR5dFVs/500-cb-20250720175708.webp",
        "emoji": "❤️"
    },
    "li-muwan": {
        "name": "Li Muwan",
        "rarity": "Divine",
        "atk": 1594,
        "def": 2458,
        "hp": 1841,
        "image": "https://i.ibb.co.com/Zz64tWZQ/500-cb-20240613032145.webp",
        "emoji": "❤️"
    },
    "all-seer": {
        "name": "All-Seer",
        "rarity": "Divine",
        "atk": 2066,
        "def": 1431,
        "hp": 1476,
        "image": "https://i.ibb.co.com/gbz53vK8/500-cb-20250930123610.webp",
        "emoji": "❤️"
    },
    "greed": {
        "name": "Greed",
        "rarity": "Divine",
        "atk": 1875,
        "def": 2347,
        "hp": 1850,
        "image": "https://i.ibb.co.com/TxPzhWJN/482-cb-20251005194058.webp",
        "emoji": "❤️"
    },
    "teng-huayuan": {
        "name": "Teng Huayuan",
        "rarity": "Divine",
        "atk": 2417,
        "def": 2337,
        "hp": 2956,
        "image": "https://i.ibb.co.com/RpPp3MSb/500-cb-20231010004829.webp",
        "emoji": "❤️"
    },
    "ouyang-hua": {
        "name": "Ouyang Hua",
        "rarity": "Divine",
        "atk": 2069,
        "def": 1843,
        "hp": 1477,
        "image": "https://i.ibb.co.com/SXN4Fd5H/500-cb-20251018230400.webp",
        "emoji": "❤️"
    },
    "wu-huichu": {
        "name": "Wu Huichu",
        "rarity": "Divine",
        "atk": 1462,
        "def": 1528,
        "hp": 2090,
        "image": "https://i.ibb.co.com/PskjpN92/500-cb-20250809094616.webp",
        "emoji": "❤️"
    },
    "da-lin": {
        "name": "Da Lin",
        "rarity": "Divine",
        "atk": 1294,
        "def": 2219,
        "hp": 2260,
        "image": "https://i.ibb.co.com/qLyWHqCv/500-cb-20251107100144.webp",
        "emoji": "❤️"
    },
    "chu-yunfei": {
        "name": "Chu Yunfei",
        "rarity": "Divine",
        "atk": 2490,
        "def": 1716,
        "hp": 2813,
        "image": "https://i.ibb.co.com/m5VLJKKY/500-cb-20250630130014.webp",
        "emoji": "❤️"
    },
    "zhang-hu": {
        "name": "Zhang Hu",
        "rarity": "Legendary",
        "atk": 1067,
        "def": 1158,
        "hp": 845,
        "image": "https://i.ibb.co.com/bjVqq68W/500-cb-20231010014723.webp",
        "emoji": "💛"
    },
    "lian-ning": {
        "name": "Lian Ning",
        "rarity": "Legendary",
        "atk": 882,
        "def": 1123,
        "hp": 900,
        "image": "https://i.ibb.co.com/0jQFpp8p/500-cb-20250809105102.webp",
        "emoji": "💛"
    },
    "lian-daozhen": {
        "name": "Lian Daozhen",
        "rarity": "Legendary",
        "atk": 900,
        "def": 979,
        "hp": 1073,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💛"
    },
    "da-tou": {
        "name": "Da Tou",
        "rarity": "Legendary",
        "atk": 1082,
        "def": 840,
        "hp": 943,
        "image": "https://i.ibb.co.com/Gf72rwdD/500-cb-20251107100044.webp",
        "emoji": "💛"
    },
    "man-huang-nanming": {
        "name": "Man Huang Nanming",
        "rarity": "Legendary",
        "atk": 889,
        "def": 975,
        "hp": 882,
        "image": "https://i.ibb.co.com/1YmKPPwW/500-cb-20250720145437.webp",
        "emoji": "💛"
    },
    "fan-shanlu": {
        "name": "Fan Shanlu",
        "rarity": "Legendary",
        "atk": 870,
        "def": 900,
        "hp": 894,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💛"
    },
    "xie-hao": {
        "name": "Xie Hao",
        "rarity": "Legendary",
        "atk": 1027,
        "def": 845,
        "hp": 1063,
        "image": "https://i.ibb.co.com/ZzdCF2Hz/419-cb-20251019130009.webp",
        "emoji": "💛"
    },
    "gu-cheng": {
        "name": "Gu Cheng",
        "rarity": "Legendary",
        "atk": 922,
        "def": 1067,
        "hp": 833,
        "image": "https://i.ibb.co.com/358sJhvH/500-cb-20251107100125.webp",
        "emoji": "💛"
    },
    "liu-wei": {
        "name": "Liu Wei",
        "rarity": "Legendary",
        "atk": 929,
        "def": 811,
        "hp": 992,
        "image": "https://i.ibb.co.com/DPTMQKvk/329-cb-20251106070207.webp",
        "emoji": "💛"
    },
    "wang-wei": {
        "name": "Wang Wei",
        "rarity": "Legendary",
        "atk": 1028,
        "def": 958,
        "hp": 877,
        "image": "https://i.ibb.co.com/Q3Fk6M8j/500-cb-20260222183350.webp",
        "emoji": "💛"
    },
    "bai-wei": {
        "name": "Bai Wei",
        "rarity": "Legendary",
        "atk": 1101,
        "def": 1100,
        "hp": 875,
        "image": "https://i.ibb.co.com/k2LcxxjK/500-cb-20250824143715.webp",
        "emoji": "💛"
    },
    "lu-fei": {
        "name": "Lu Fei",
        "rarity": "Legendary",
        "atk": 951,
        "def": 1058,
        "hp": 957,
        "image": "https://i.ibb.co.com/Xrssftyf/500-cb-20250805101900.webp",
        "emoji": "💛"
    },
    "zhou-rui": {
        "name": "Zhou Rui",
        "rarity": "Legendary",
        "atk": 990,
        "def": 1114,
        "hp": 1187,
        "image": "https://i.ibb.co.com/DDDjzJhh/347-cb-20180206131836.webp",
        "emoji": "💛"
    },
    "immortal-imperial-teacher": {
        "name": "Immortal Imperial Teacher",
        "rarity": "Legendary",
        "atk": 975,
        "def": 1024,
        "hp": 1109,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💛"
    },
    "commander-in-chief-shui": {
        "name": "Commander-in-Chief Shui",
        "rarity": "Legendary",
        "atk": 1107,
        "def": 1031,
        "hp": 832,
        "image": "https://i.ibb.co.com/WNVGZ7QZ/500-cb-20260201175238.webp",
        "emoji": "💛"
    },
    "mu-bingmei": {
        "name": "Mu Bingmei",
        "rarity": "Epic",
        "atk": 572,
        "def": 662,
        "hp": 691,
        "image": "https://i.ibb.co.com/8LZgcLBt/286-cb-20241013125502.webp",
        "emoji": "💜"
    },
    "ma-yu": {
        "name": "Ma Yu",
        "rarity": "Epic",
        "atk": 554,
        "def": 629,
        "hp": 640,
        "image": "https://i.ibb.co.com/BV0ttcV4/500-cb-20251107094224.webp",
        "emoji": "💜"
    },
    "teng-xingsen": {
        "name": "Teng Xingsen",
        "rarity": "Epic",
        "atk": 752,
        "def": 556,
        "hp": 628,
        "image": "",
        "emoji": "💜"
    },
    "teng-six": {
        "name": "Teng Six",
        "rarity": "Epic",
        "atk": 649,
        "def": 782,
        "hp": 717,
        "image": "",
        "emoji": "💜"
    },
    "he-kun": {
        "name": "He Kun",
        "rarity": "Epic",
        "atk": 800,
        "def": 544,
        "hp": 714,
        "image": "https://i.ibb.co.com/5X6mh3QK/500-cb-20251116135035.webp",
        "emoji": "💜"
    },
    "chen-long": {
        "name": "Chen Long",
        "rarity": "Epic",
        "atk": 576,
        "def": 563,
        "hp": 674,
        "image": "https://i.ibb.co.com/dsbb6wB5/500-cb-20260215182320.webp",
        "emoji": "💜"
    },
    "an-zi": {
        "name": "An Zi",
        "rarity": "Epic",
        "atk": 649,
        "def": 731,
        "hp": 514,
        "image": "https://i.ibb.co.com/mFSCCzmk/469-cb-20251107094146.webp",
        "emoji": "💜"
    },
    "huan-wuqing": {
        "name": "Huan Wuqing",
        "rarity": "Epic",
        "atk": 673,
        "def": 723,
        "hp": 513,
        "image": "https://i.ibb.co.com/k2jpDfWn/500-cb-20260416124647.webp",
        "emoji": "💜"
    },
    "feng-luan": {
        "name": "Feng Luan",
        "rarity": "Epic",
        "atk": 592,
        "def": 761,
        "hp": 761,
        "image": "https://i.ibb.co.com/ZR70XMWp/500-cb-20240922212508.webp",
        "emoji": "💜"
    },
    "lu-yingjie": {
        "name": "Lu Yingjie",
        "rarity": "Epic",
        "atk": 783,
        "def": 565,
        "hp": 745,
        "image": "",
        "emoji": "💜"
    },
    "black-tortoise-general": {
        "name": "Black Tortoise General",
        "rarity": "Epic",
        "atk": 545,
        "def": 533,
        "hp": 564,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💜"
    },
    "sun-leng": {
        "name": "Sun Leng",
        "rarity": "Epic",
        "atk": 797,
        "def": 760,
        "hp": 504,
        "image": "https://i.ibb.co.com/Z6DH9Wyf/500-cb-20260329183311.webp",
        "emoji": "💜"
    },
    "chi-hu": {
        "name": "Chi Hu",
        "rarity": "Epic",
        "atk": 505,
        "def": 554,
        "hp": 603,
        "image": "https://i.ibb.co.com/MK6VRVy/500-cb-20241125143207.webp",
        "emoji": "💜"
    },
    "xu-liqing": {
        "name": "Xu Liqing",
        "rarity": "Epic",
        "atk": 621,
        "def": 582,
        "hp": 788,
        "image": "https://i.ibb.co.com/zHx9x0vV/500-cb-20240520094404.webp",
        "emoji": "💜"
    },
    "xu-liguo": {
        "name": "Xu Liguo",
        "rarity": "Epic",
        "atk": 643,
        "def": 652,
        "hp": 591,
        "image": "https://i.ibb.co.com/b5mBHnVL/500-cb-20231225102512.webp",
        "emoji": "💜"
    },
    "you-ji": {
        "name": "You Ji",
        "rarity": "Epic",
        "atk": 594,
        "def": 643,
        "hp": 689,
        "image": "https://i.ibb.co.com/7JxDKjsf/500-cb-20260215174907.webp",
        "emoji": "💜"
    },
    "master-enlighten-east": {
        "name": "Master Enlighten East",
        "rarity": "Epic",
        "atk": 652,
        "def": 635,
        "hp": 707,
        "image": "",
        "emoji": "💜"
    },
    "teng-xuan": {
        "name": "Teng Xuan",
        "rarity": "Epic",
        "atk": 767,
        "def": 783,
        "hp": 519,
        "image": "https://i.ibb.co.com/b5dpRjY1/500-cb-20251106150305.webp",
        "emoji": "💜"
    },
    "master-yi-xing": {
        "name": "Master Yi Xing",
        "rarity": "Epic",
        "atk": 598,
        "def": 618,
        "hp": 656,
        "image": "",
        "emoji": "💜"
    },
    "mo-lihai": {
        "name": "Mo Lihai",
        "rarity": "Epic",
        "atk": 527,
        "def": 709,
        "hp": 519,
        "image": "https://i.ibb.co.com/5hz0tDRP/500-cb-20251026165620.webp",
        "emoji": "💜"
    },
    "sun-zhenwei": {
        "name": "Sun Zhenwei",
        "rarity": "Rare",
        "atk": 409,
        "def": 466,
        "hp": 452,
        "image": "https://i.ibb.co.com/6Jb4jGsn/500-cb-20240604015903.webp",
        "emoji": "💙"
    },
    "zhao-xinmeng": {
        "name": "Zhao Xinmeng",
        "rarity": "Rare",
        "atk": 463,
        "def": 391,
        "hp": 345,
        "image": "https://i.ibb.co.com/BVLXSRrb/500-cb-20250907203034.webp",
        "emoji": "💙"
    },
    "elder-zhang": {
        "name": "Elder Zhang",
        "rarity": "Rare",
        "atk": 412,
        "def": 402,
        "hp": 404,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💙"
    },
    "zhou-zihong": {
        "name": "Zhou Zihong",
        "rarity": "Rare",
        "atk": 433,
        "def": 434,
        "hp": 398,
        "image": "https://i.ibb.co.com/6czr28jm/281-cb-20240617122354.webp",
        "emoji": "💙"
    },
    "song-qing": {
        "name": "Song Qing",
        "rarity": "Rare",
        "atk": 331,
        "def": 379,
        "hp": 407,
        "image": "https://i.ibb.co.com/ds24k3gp/500-cb-20250805105010.webp",
        "emoji": "💙"
    },
    "hai-zhu": {
        "name": "Hai Zhu",
        "rarity": "Rare",
        "atk": 314,
        "def": 484,
        "hp": 430,
        "image": "https://i.ibb.co.com/HTbwtpg0/500-cb-20251222133347.webp",
        "emoji": "💙"
    },
    "mo-mo-6-leaf": {
        "name": "Mo Mo(6 leaf)",
        "rarity": "Rare",
        "atk": 367,
        "def": 327,
        "hp": 436,
        "image": "https://i.ibb.co.com/LdNrcJ1S/492-cb-20251109084326.webp",
        "emoji": "💙"
    },
    "yan-hong": {
        "name": "Yan Hong",
        "rarity": "Rare",
        "atk": 441,
        "def": 429,
        "hp": 326,
        "image": "https://i.ibb.co.com/7tn2szQX/500-cb-20250811145450.webp",
        "emoji": "💙"
    },
    "qing-yi": {
        "name": "Qing Yi",
        "rarity": "Rare",
        "atk": 324,
        "def": 478,
        "hp": 403,
        "image": "https://i.ibb.co.com/mCr8f1Gw/480-cb-20260519082246.webp",
        "emoji": "💙"
    },
    "huan-feng-shen": {
        "name": "Huan Feng Shen",
        "rarity": "Rare",
        "atk": 376,
        "def": 311,
        "hp": 476,
        "image": "https://i.ibb.co.com/d44hJYLw/500-cb-20260330115052.webp",
        "emoji": "💙"
    },
    "ancestor-xu-11-leaf": {
        "name": "Ancestor Xu(11 Leaf)",
        "rarity": "Rare",
        "atk": 360,
        "def": 440,
        "hp": 341,
        "image": "https://i.ibb.co.com/7JtXqx4X/500-cb-20251012185503.webp",
        "emoji": "💙"
    },
    "shi-xiao": {
        "name": "Shi Xiao",
        "rarity": "Rare",
        "atk": 434,
        "def": 364,
        "hp": 383,
        "image": "https://i.ibb.co.com/S4Pjy095/500-cb-20251123111404.webp",
        "emoji": "💙"
    },
    "wu-daoqi": {
        "name": "Wu Daoqi",
        "rarity": "Rare",
        "atk": 488,
        "def": 464,
        "hp": 488,
        "image": "https://i.ibb.co.com/R47dRk0D/500-cb-20251106064400.webp",
        "emoji": "💙"
    },
    "liu-fei": {
        "name": "Liu Fei",
        "rarity": "Rare",
        "atk": 479,
        "def": 422,
        "hp": 353,
        "image": "https://i.ibb.co.com/DgWyK7CW/500-cb-20250805090122.webp",
        "emoji": "💙"
    },
    "master-flamespark": {
        "name": "Master Flamespark",
        "rarity": "Rare",
        "atk": 333,
        "def": 432,
        "hp": 434,
        "image": "",
        "emoji": "💙"
    },
    "xu-ting": {
        "name": "Xu Ting",
        "rarity": "Rare",
        "atk": 416,
        "def": 333,
        "hp": 475,
        "image": "",
        "emoji": "💙"
    },
    "huo-pao": {
        "name": "Huo Pao",
        "rarity": "Rare",
        "atk": 475,
        "def": 440,
        "hp": 371,
        "image": "https://i.ibb.co.com/4Z7vVwbh/500-cb-20260119030313.webp",
        "emoji": "💙"
    },
    "chen-bailiang": {
        "name": "Chen Bailiang",
        "rarity": "Rare",
        "atk": 447,
        "def": 484,
        "hp": 375,
        "image": "https://i.ibb.co.com/x8M8s2rH/500-cb-20250805102929.webp",
        "emoji": "💙"
    },
    "you-huan": {
        "name": "You Huan",
        "rarity": "Rare",
        "atk": 358,
        "def": 493,
        "hp": 383,
        "image": "https://i.ibb.co.com/S4wFdb7s/442-cb-20251115003810.webp",
        "emoji": "💙"
    },
    "tan-lang": {
        "name": "Tan Lang",
        "rarity": "Rare",
        "atk": 338,
        "def": 343,
        "hp": 472,
        "image": "",
        "emoji": "💙"
    },
    "wang-qingyue": {
        "name": "Wang Qingyue",
        "rarity": "Rare",
        "atk": 353,
        "def": 363,
        "hp": 426,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💙"
    },
    "yun-tianzi": {
        "name": "Yun Tianzi",
        "rarity": "Rare",
        "atk": 443,
        "def": 488,
        "hp": 452,
        "image": "https://i.ibb.co.com/RTML3Rg9/500-cb-20250805105927.webp",
        "emoji": "💙"
    },
    "chen-bai": {
        "name": "Chen Bai",
        "rarity": "Rare",
        "atk": 336,
        "def": 305,
        "hp": 464,
        "image": "https://i.ibb.co.com/Lf3rWS2/500-cb-20251106133839.webp",
        "emoji": "💙"
    },
    "flower-imperial-concubine-han-yan": {
        "name": "Flower Imperial Concubine Han Yan",
        "rarity": "Rare",
        "atk": 489,
        "def": 316,
        "hp": 383,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💙"
    },
    "ming-yuan": {
        "name": "Ming Yuan",
        "rarity": "Rare",
        "atk": 377,
        "def": 476,
        "hp": 455,
        "image": "https://i.ibb.co.com/Q7kwX707/500-cb-20260104194909.webp",
        "emoji": "💙"
    },
    "wang-lin-ancient-demon": {
        "name": "Wang Lin Ancient Demon",
        "rarity": "Rare",
        "atk": 396,
        "def": 317,
        "hp": 379,
        "image": "",
        "emoji": "💙"
    },
    "lu-yanfei": {
        "name": "Lu Yanfei",
        "rarity": "Rare",
        "atk": 421,
        "def": 456,
        "hp": 396,
        "image": "",
        "emoji": "💙"
    },
    "tian-lui": {
        "name": "Tian Lui",
        "rarity": "Rare",
        "atk": 352,
        "def": 409,
        "hp": 321,
        "image": "https://i.ibb.co.com/FkZYBr5Z/500-cb-20251214122256.webp",
        "emoji": "💙"
    },
    "you-kong": {
        "name": "You Kong",
        "rarity": "Rare",
        "atk": 467,
        "def": 369,
        "hp": 328,
        "image": "https://i.ibb.co.com/fzCC5bDK/500-cb-20251115001548.webp",
        "emoji": "💙"
    },
    "zhi-yi": {
        "name": "Zhi Yi",
        "rarity": "Rare",
        "atk": 442,
        "def": 420,
        "hp": 393,
        "image": "https://i.ibb.co.com/mCR5RQQn/462-cb-20250807091617.webp",
        "emoji": "💙"
    },
    "zhan-li-yunzi": {
        "name": "Zhan Li Yunzi",
        "rarity": "Uncommon",
        "atk": 188,
        "def": 209,
        "hp": 188,
        "image": "",
        "emoji": "💚"
    },
    "meng-qingfan": {
        "name": "Meng Qingfan",
        "rarity": "Uncommon",
        "atk": 253,
        "def": 182,
        "hp": 157,
        "image": "https://i.ibb.co.com/V0CzwNL2/500-cb-20240520100327.webp",
        "emoji": "💚"
    },
    "sun-lingwu": {
        "name": "Sun Lingwu",
        "rarity": "Uncommon",
        "atk": 285,
        "def": 186,
        "hp": 199,
        "image": "https://i.ibb.co.com/zWVV96nV/500-cb-20250805103613.webp",
        "emoji": "💚"
    },
    "yao-xixue": {
        "name": "Yao Xixue",
        "rarity": "Uncommon",
        "atk": 203,
        "def": 245,
        "hp": 157,
        "image": "https://i.ibb.co.com/W4PDxmf3/500-cb-20251026165855.webp",
        "emoji": "💚"
    },
    "xu-yun": {
        "name": "Xu Yun",
        "rarity": "Uncommon",
        "atk": 299,
        "def": 288,
        "hp": 262,
        "image": "",
        "emoji": "💚"
    },
    "second-generation-vermillion-bird-divine-emperor": {
        "name": "Second Generation Vermillion Bird Divine Emperor",
        "rarity": "Uncommon",
        "atk": 282,
        "def": 247,
        "hp": 228,
        "image": "",
        "emoji": "💚"
    },
    "rudy": {
        "name": "Rudy",
        "rarity": "Uncommon",
        "atk": 274,
        "def": 294,
        "hp": 156,
        "image": "",
        "emoji": "💚"
    },
    "lin-tao": {
        "name": "Lin Tao",
        "rarity": "Uncommon",
        "atk": 291,
        "def": 261,
        "hp": 185,
        "image": "https://i.ibb.co.com/zh7xLW6b/433-cb-20251107033716.webp",
        "emoji": "💚"
    },
    "dao-master-miao-yin": {
        "name": "Dao Master Miao Yin",
        "rarity": "Uncommon",
        "atk": 208,
        "def": 266,
        "hp": 249,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💚"
    },
    "mo-luo-6-leaf": {
        "name": "Mo Luo(6 leaf)",
        "rarity": "Uncommon",
        "atk": 240,
        "def": 204,
        "hp": 168,
        "image": "https://i.ibb.co.com/9HHsh2Wx/500-cb-20251109121348.webp",
        "emoji": "💚"
    },
    "yao-mengyun": {
        "name": "Yao Mengyun",
        "rarity": "Uncommon",
        "atk": 232,
        "def": 155,
        "hp": 184,
        "image": "",
        "emoji": "💚"
    },
    "master-yi-chen": {
        "name": "Master Yi Chen",
        "rarity": "Uncommon",
        "atk": 292,
        "def": 227,
        "hp": 179,
        "image": "",
        "emoji": "💚"
    },
    "elder-li": {
        "name": "Elder Li",
        "rarity": "Uncommon",
        "atk": 175,
        "def": 199,
        "hp": 188,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💚"
    },
    "grandmaster-yun-luo": {
        "name": "Grandmaster Yun Luo",
        "rarity": "Uncommon",
        "atk": 239,
        "def": 182,
        "hp": 177,
        "image": "",
        "emoji": "💚"
    },
    "void-cloud": {
        "name": "Void Cloud",
        "rarity": "Uncommon",
        "atk": 240,
        "def": 169,
        "hp": 241,
        "image": "",
        "emoji": "💚"
    },
    "zhou-li": {
        "name": "Zhou Li",
        "rarity": "Uncommon",
        "atk": 235,
        "def": 221,
        "hp": 275,
        "image": "",
        "emoji": "💚"
    },
    "teng-yun-heyun-sect": {
        "name": "Teng Yun(Heyun sect)",
        "rarity": "Uncommon",
        "atk": 153,
        "def": 209,
        "hp": 187,
        "image": "https://i.ibb.co.com/Y4MZPc18/500-cb-20260125144723.webp",
        "emoji": "💚"
    },
    "yun-quezi": {
        "name": "Yun Quezi",
        "rarity": "Uncommon",
        "atk": 165,
        "def": 299,
        "hp": 210,
        "image": "https://i.ibb.co.com/2RSGvWg/411-cb-20250720203937.webp",
        "emoji": "💚"
    },
    "zhuang-yi": {
        "name": "Zhuang Yi",
        "rarity": "Uncommon",
        "atk": 220,
        "def": 277,
        "hp": 153,
        "image": "https://i.ibb.co.com/pjPQC7g2/latest-cb-20251107014455.webp",
        "emoji": "💚"
    },
    "ji-du": {
        "name": "Ji Du",
        "rarity": "Uncommon",
        "atk": 190,
        "def": 260,
        "hp": 259,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💚"
    },
    "eight-ancient-imperial-concubines": {
        "name": "Eight Ancient Imperial Concubines",
        "rarity": "Uncommon",
        "atk": 211,
        "def": 273,
        "hp": 293,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💚"
    },
    "chang-dawei": {
        "name": "Chang Dawei",
        "rarity": "Uncommon",
        "atk": 181,
        "def": 242,
        "hp": 176,
        "image": "https://i.ibb.co.com/HfPTTYpt/latest-cb-20250522201040.webp",
        "emoji": "💚"
    },
    "shi-qi": {
        "name": "Shi Qi",
        "rarity": "Uncommon",
        "atk": 247,
        "def": 278,
        "hp": 204,
        "image": "https://i.ibb.co.com/d0L5tDkK/500-cb-20250821072453.webp",
        "emoji": "💚"
    },
    "zhou-jin": {
        "name": "Zhou Jin",
        "rarity": "Uncommon",
        "atk": 236,
        "def": 286,
        "hp": 239,
        "image": "",
        "emoji": "💚"
    },
    "shi-fang": {
        "name": "Shi Fang",
        "rarity": "Uncommon",
        "atk": 279,
        "def": 291,
        "hp": 173,
        "image": "https://i.ibb.co.com/qLyrmw6P/500-cb-20250928110659.webp",
        "emoji": "💚"
    },
    "lin-yi": {
        "name": "Lin Yi",
        "rarity": "Uncommon",
        "atk": 201,
        "def": 263,
        "hp": 242,
        "image": "https://i.ibb.co.com/bMf65LZn/500-cb-20251107090155.webp",
        "emoji": "💚"
    },
    "wang-tian-shan": {
        "name": "Wang Tian Shan",
        "rarity": "Uncommon",
        "atk": 168,
        "def": 267,
        "hp": 246,
        "image": "https://i.ibb.co.com/3yrxytFq/352-cb-20180206120640.webp",
        "emoji": "💚"
    },
    "xu-si": {
        "name": "Xu Si",
        "rarity": "Uncommon",
        "atk": 185,
        "def": 196,
        "hp": 275,
        "image": "https://i.ibb.co.com/2Y6pgP3h/500-cb-20251107023249.webp",
        "emoji": "💚"
    },
    "sun-ning": {
        "name": "Sun Ning",
        "rarity": "Uncommon",
        "atk": 164,
        "def": 209,
        "hp": 154,
        "image": "https://i.ibb.co.com/DDSDs3Mq/500-cb-20260322174152.webp",
        "emoji": "💚"
    },
    "zhou-peng": {
        "name": "Zhou Peng",
        "rarity": "Uncommon",
        "atk": 285,
        "def": 300,
        "hp": 194,
        "image": "https://i.ibb.co.com/xxFxkY6/500-cb-20231120150541.webp",
        "emoji": "💚"
    },
    "teng-five": {
        "name": "Teng Five",
        "rarity": "Uncommon",
        "atk": 223,
        "def": 285,
        "hp": 261,
        "image": "",
        "emoji": "💚"
    },
    "yi-fu": {
        "name": "Yi Fu",
        "rarity": "Uncommon",
        "atk": 293,
        "def": 278,
        "hp": 229,
        "image": "https://i.ibb.co.com/ZpPLyrnC/452-cb-20251114234045.webp",
        "emoji": "💚"
    },
    "ouyang-long": {
        "name": "Ouyang Long",
        "rarity": "Uncommon",
        "atk": 292,
        "def": 228,
        "hp": 173,
        "image": "",
        "emoji": "💚"
    },
    "sun-yun": {
        "name": "Sun Yun",
        "rarity": "Uncommon",
        "atk": 211,
        "def": 262,
        "hp": 177,
        "image": "https://i.ibb.co.com/W4mKqgXH/500-cb-20260208161909.webp",
        "emoji": "💚"
    },
    "feng-yin": {
        "name": "Feng Yin",
        "rarity": "Uncommon",
        "atk": 224,
        "def": 300,
        "hp": 299,
        "image": "https://i.ibb.co.com/6ctmWM2D/471-cb-20260218201617.webp",
        "emoji": "💚"
    },
    "xu-fei-xuan-dao-sect": {
        "name": "Xu Fei(Xuan Dao Sect)",
        "rarity": "Uncommon",
        "atk": 203,
        "def": 240,
        "hp": 195,
        "image": "https://i.ibb.co.com/JwcG70kK/267-cb-20240514062956.webp",
        "emoji": "💚"
    },
    "master-hong-shan": {
        "name": "Master Hong Shan",
        "rarity": "Uncommon",
        "atk": 287,
        "def": 198,
        "hp": 250,
        "image": "",
        "emoji": "💚"
    },
    "zhao-yixuan": {
        "name": "Zhao Yixuan",
        "rarity": "Uncommon",
        "atk": 199,
        "def": 225,
        "hp": 215,
        "image": "https://i.ibb.co.com/d0DHKDdy/470-cb-20260215182712.webp",
        "emoji": "💚"
    },
    "ye-mo": {
        "name": "Ye Mo",
        "rarity": "Uncommon",
        "atk": 168,
        "def": 177,
        "hp": 216,
        "image": "",
        "emoji": "💚"
    },
    "teng-ba": {
        "name": "Teng Ba",
        "rarity": "Uncommon",
        "atk": 185,
        "def": 251,
        "hp": 220,
        "image": "https://i.ibb.co.com/9mbchLB9/500-cb-20250809071053.webp",
        "emoji": "💚"
    },
    "chen-huan": {
        "name": "Chen Huan",
        "rarity": "Uncommon",
        "atk": 299,
        "def": 227,
        "hp": 230,
        "image": "https://i.ibb.co.com/C3HqDJgr/500-cb-20250807093257.webp",
        "emoji": "💚"
    },
    "azure-dragon-divine-emperor": {
        "name": "Azure Dragon Divine Emperor",
        "rarity": "Uncommon",
        "atk": 275,
        "def": 261,
        "hp": 212,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💚"
    },
    "yu-sen": {
        "name": "Yu Sen",
        "rarity": "Uncommon",
        "atk": 182,
        "def": 248,
        "hp": 163,
        "image": "https://i.ibb.co.com/bgnWPGnr/500-cb-20251221183304.webp",
        "emoji": "💚"
    },
    "demon-general-jin-yuan": {
        "name": "Demon General Jin Yuan",
        "rarity": "Uncommon",
        "atk": 157,
        "def": 207,
        "hp": 203,
        "image": "https://i.ibb.co.com/5X2pmcwC/500-cb-20251221184101.webp",
        "emoji": "💚"
    },
    "jiu-di": {
        "name": "Jiu Di",
        "rarity": "Uncommon",
        "atk": 166,
        "def": 252,
        "hp": 241,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💚"
    },
    "vermillion-bird-ancestor": {
        "name": "Vermillion Bird Ancestor",
        "rarity": "Uncommon",
        "atk": 188,
        "def": 193,
        "hp": 189,
        "image": "",
        "emoji": "💚"
    },
    "dong-lin": {
        "name": "Dong Lin",
        "rarity": "Uncommon",
        "atk": 161,
        "def": 205,
        "hp": 161,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💚"
    },
    "esteemed-teacher-tian-zhao": {
        "name": "Esteemed Teacher Tian Zhao",
        "rarity": "Uncommon",
        "atk": 198,
        "def": 288,
        "hp": 204,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💚"
    },
    "celestial-king-carefree": {
        "name": "Celestial King Carefree",
        "rarity": "Uncommon",
        "atk": 213,
        "def": 221,
        "hp": 236,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "💚"
    },
    "ran-xuefeng": {
        "name": "Ran Xuefeng",
        "rarity": "Uncommon",
        "atk": 213,
        "def": 285,
        "hp": 267,
        "image": "https://i.ibb.co.com/HDgByPfF/500-cb-20260329181255.webp",
        "emoji": "💚"
    },
    "xi-zi-feng": {
        "name": "Xi Zi Feng",
        "rarity": "Common",
        "atk": 103,
        "def": 64,
        "hp": 51,
        "image": "",
        "emoji": "🤍"
    },
    "third-generation-vermillion-bird-divine-emperor": {
        "name": "Third Generation Vermillion Bird Divine Emperor",
        "rarity": "Common",
        "atk": 143,
        "def": 104,
        "hp": 96,
        "image": "",
        "emoji": "🤍"
    },
    "de-gui": {
        "name": "De Gui",
        "rarity": "Common",
        "atk": 117,
        "def": 62,
        "hp": 54,
        "image": "https://i.ibb.co.com/fdsTpssw/500-cb-20260111194236.webp",
        "emoji": "🤍"
    },
    "mu-rong": {
        "name": "Mu Rong",
        "rarity": "Common",
        "atk": 71,
        "def": 66,
        "hp": 68,
        "image": "https://i.ibb.co.com/ZDXVm4g/500-cb-20251107055213.webp",
        "emoji": "🤍"
    },
    "qing-he": {
        "name": "Qing He",
        "rarity": "Common",
        "atk": 79,
        "def": 138,
        "hp": 115,
        "image": "https://i.ibb.co.com/1k06Pb1/500-cb-20250809103418.webp",
        "emoji": "🤍"
    },
    "yan-leizi": {
        "name": "Yan Leizi",
        "rarity": "Common",
        "atk": 57,
        "def": 68,
        "hp": 73,
        "image": "",
        "emoji": "🤍"
    },
    "murong-zhuo": {
        "name": "Murong Zhuo",
        "rarity": "Common",
        "atk": 105,
        "def": 56,
        "hp": 124,
        "image": "https://i.ibb.co.com/1fwrzmzS/500-cb-20260215181626.webp",
        "emoji": "🤍"
    },
    "chi-mu": {
        "name": "Chi Mu",
        "rarity": "Common",
        "atk": 118,
        "def": 50,
        "hp": 54,
        "image": "https://i.ibb.co.com/ksx0WrFD/latest-cb-20250309194854.webp",
        "emoji": "🤍"
    },
    "xie-qing": {
        "name": "Xie Qing",
        "rarity": "Common",
        "atk": 140,
        "def": 145,
        "hp": 81,
        "image": "",
        "emoji": "🤍"
    },
    "ice-boy": {
        "name": "Ice Boy",
        "rarity": "Common",
        "atk": 79,
        "def": 124,
        "hp": 63,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "dao-xu": {
        "name": "Dao Xu",
        "rarity": "Common",
        "atk": 95,
        "def": 120,
        "hp": 124,
        "image": "https://i.ibb.co.com/mFbRcFcs/500-cb-20240711185217.webp",
        "emoji": "🤍"
    },
    "devil-master-nine-heavens": {
        "name": "Devil Master Nine Heavens",
        "rarity": "Common",
        "atk": 120,
        "def": 97,
        "hp": 89,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "sun-ling": {
        "name": "Sun Ling",
        "rarity": "Common",
        "atk": 79,
        "def": 148,
        "hp": 106,
        "image": "https://i.ibb.co.com/5WmLhmtb/500-cb-20260324152031.webp",
        "emoji": "🤍"
    },
    "zhao-chuan-liang": {
        "name": "Zhao Chuan Liang",
        "rarity": "Common",
        "atk": 53,
        "def": 123,
        "hp": 103,
        "image": "https://i.ibb.co.com/HpkYYgDv/500-cb-20250821080351.webp",
        "emoji": "🤍"
    },
    "xu-huichuan": {
        "name": "Xu Huichuan",
        "rarity": "Common",
        "atk": 140,
        "def": 65,
        "hp": 89,
        "image": "https://i.ibb.co.com/Dfy7WhF0/500-cb-20251123180602.webp",
        "emoji": "🤍"
    },
    "master-long-pan": {
        "name": "Master Long Pan",
        "rarity": "Common",
        "atk": 94,
        "def": 120,
        "hp": 50,
        "image": "",
        "emoji": "🤍"
    },
    "gongsun-fan": {
        "name": "Gongsun Fan",
        "rarity": "Common",
        "atk": 134,
        "def": 138,
        "hp": 73,
        "image": "https://i.ibb.co.com/QtvcSwZ/500-cb-20250810123353.webp",
        "emoji": "🤍"
    },
    "sun-youcai": {
        "name": "Sun Youcai",
        "rarity": "Common",
        "atk": 124,
        "def": 120,
        "hp": 68,
        "image": "https://i.ibb.co.com/zTGMvhQV/500-cb-20251107034729.webp",
        "emoji": "🤍"
    },
    "zhu-kun": {
        "name": "Zhu Kun",
        "rarity": "Common",
        "atk": 132,
        "def": 128,
        "hp": 126,
        "image": "https://i.ibb.co.com/60vYVBMh/500-cb-20251111013608.webp",
        "emoji": "🤍"
    },
    "chen-chong": {
        "name": "Chen Chong",
        "rarity": "Common",
        "atk": 123,
        "def": 120,
        "hp": 119,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "esteemed-great-desolation": {
        "name": "Esteemed Great Desolation",
        "rarity": "Common",
        "atk": 93,
        "def": 80,
        "hp": 120,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "old-ouyang": {
        "name": "Old Ouyang",
        "rarity": "Common",
        "atk": 80,
        "def": 82,
        "hp": 74,
        "image": "https://i.ibb.co.com/vpgsPvd/500-cb-20251111013439.webp",
        "emoji": "🤍"
    },
    "nie-ming": {
        "name": "Nie Ming",
        "rarity": "Common",
        "atk": 70,
        "def": 142,
        "hp": 139,
        "image": "https://i.ibb.co.com/Y4WwbGcP/500-cb-20250810090650.webp",
        "emoji": "🤍"
    },
    "zhou-ru": {
        "name": "Zhou Ru",
        "rarity": "Common",
        "atk": 134,
        "def": 65,
        "hp": 119,
        "image": "https://i.ibb.co.com/fzSy0vQ5/500-cb-20250618073658.webp",
        "emoji": "🤍"
    },
    "li-yuan": {
        "name": "Li Yuan",
        "rarity": "Common",
        "atk": 146,
        "def": 99,
        "hp": 52,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "zhao-zi": {
        "name": "Zhao Zi",
        "rarity": "Common",
        "atk": 57,
        "def": 68,
        "hp": 88,
        "image": "",
        "emoji": "🤍"
    },
    "qiu-yao": {
        "name": "Qiu Yao",
        "rarity": "Common",
        "atk": 127,
        "def": 150,
        "hp": 60,
        "image": "",
        "emoji": "🤍"
    },
    "wu-cunsu": {
        "name": "Wu Cunsu",
        "rarity": "Common",
        "atk": 76,
        "def": 143,
        "hp": 135,
        "image": "https://i.ibb.co.com/yF3kkSKK/500-cb-20250809061522.webp",
        "emoji": "🤍"
    },
    "heaven-master-void-god": {
        "name": "Heaven Master Void God",
        "rarity": "Common",
        "atk": 60,
        "def": 120,
        "hp": 149,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "sun-tai": {
        "name": "Sun Tai",
        "rarity": "Common",
        "atk": 75,
        "def": 66,
        "hp": 74,
        "image": "https://i.ibb.co.com/cXcD6VF9/500-cb-20260504132025.webp",
        "emoji": "🤍"
    },
    "sima-mo": {
        "name": "Sima Mo",
        "rarity": "Common",
        "atk": 70,
        "def": 73,
        "hp": 124,
        "image": "",
        "emoji": "🤍"
    },
    "sima-rufeng": {
        "name": "Sima Rufeng",
        "rarity": "Common",
        "atk": 141,
        "def": 103,
        "hp": 142,
        "image": "https://i.ibb.co.com/Xxhd66vr/500-cb-20250907113916.webp",
        "emoji": "🤍"
    },
    "master-lu-fu": {
        "name": "Master Lu Fu",
        "rarity": "Common",
        "atk": 92,
        "def": 117,
        "hp": 92,
        "image": "",
        "emoji": "🤍"
    },
    "lord-of-the-sealed-realm": {
        "name": "Lord of the Sealed Realm",
        "rarity": "Common",
        "atk": 116,
        "def": 145,
        "hp": 129,
        "image": "",
        "emoji": "🤍"
    },
    "sun-qiming": {
        "name": "Sun Qiming",
        "rarity": "Common",
        "atk": 94,
        "def": 101,
        "hp": 98,
        "image": "https://i.ibb.co.com/Y78SJ5Hk/500-cb-20260329175446.webp",
        "emoji": "🤍"
    },
    "ou-zhi": {
        "name": "Ou Zhi",
        "rarity": "Common",
        "atk": 72,
        "def": 129,
        "hp": 106,
        "image": "https://i.ibb.co.com/1GNYSCYK/500-cb-20250907144129.webp",
        "emoji": "🤍"
    },
    "sun-feng": {
        "name": "Sun Feng",
        "rarity": "Common",
        "atk": 56,
        "def": 101,
        "hp": 123,
        "image": "https://i.ibb.co.com/nN0GxTT4/500-cb-20260324152738.webp",
        "emoji": "🤍"
    },
    "wu-feng": {
        "name": "Wu Feng",
        "rarity": "Common",
        "atk": 69,
        "def": 102,
        "hp": 137,
        "image": "",
        "emoji": "🤍"
    },
    "all-seer-grey-robed-all-seer": {
        "name": "All-Seer/Grey Robed All Seer",
        "rarity": "Common",
        "atk": 88,
        "def": 75,
        "hp": 53,
        "image": "https://i.ibb.co.com/7tpnqLf4/500-cb-20250930124014.webp",
        "emoji": "🤍"
    },
    "ma-liang": {
        "name": "Ma Liang",
        "rarity": "Common",
        "atk": 149,
        "def": 63,
        "hp": 52,
        "image": "https://i.ibb.co.com/fzND4T9s/500-cb-20251111022133.webp",
        "emoji": "🤍"
    },
    "tang-yanfeng": {
        "name": "Tang Yanfeng",
        "rarity": "Common",
        "atk": 50,
        "def": 52,
        "hp": 74,
        "image": "",
        "emoji": "🤍"
    },
    "cheng-xian": {
        "name": "Cheng Xian",
        "rarity": "Common",
        "atk": 64,
        "def": 96,
        "hp": 126,
        "image": "https://i.ibb.co.com/6ccLQGfm/435-cb-20251106071238.webp",
        "emoji": "🤍"
    },
    "mu-nan": {
        "name": "Mu Nan",
        "rarity": "Common",
        "atk": 107,
        "def": 113,
        "hp": 121,
        "image": "https://i.ibb.co.com/DftZSz5H/495-cb-20251107103122.webp",
        "emoji": "🤍"
    },
    "luo-chen": {
        "name": "Luo Chen",
        "rarity": "Common",
        "atk": 93,
        "def": 125,
        "hp": 110,
        "image": "",
        "emoji": "🤍"
    },
    "yu-fei": {
        "name": "Yu Fei",
        "rarity": "Common",
        "atk": 70,
        "def": 117,
        "hp": 117,
        "image": "",
        "emoji": "🤍"
    },
    "yao-changdong": {
        "name": "Yao Changdong",
        "rarity": "Common",
        "atk": 110,
        "def": 71,
        "hp": 142,
        "image": "",
        "emoji": "🤍"
    },
    "wang-yu": {
        "name": "Wang Yu",
        "rarity": "Common",
        "atk": 147,
        "def": 91,
        "hp": 85,
        "image": "https://i.ibb.co.com/76BBfdX/500-cb-20250914172523.webp",
        "emoji": "🤍"
    },
    "teng-san": {
        "name": "Teng San",
        "rarity": "Common",
        "atk": 53,
        "def": 83,
        "hp": 50,
        "image": "https://i.ibb.co.com/XZ4B3XRJ/481-cb-20251107005419.webp",
        "emoji": "🤍"
    },
    "maiwu-yi": {
        "name": "Maiwu Yi",
        "rarity": "Common",
        "atk": 93,
        "def": 61,
        "hp": 129,
        "image": "https://i.ibb.co.com/VW7FZqvy/500-cb-20250810120049.webp",
        "emoji": "🤍"
    },
    "gao-qiming": {
        "name": "Gao Qiming",
        "rarity": "Common",
        "atk": 123,
        "def": 113,
        "hp": 77,
        "image": "https://i.ibb.co.com/p6xSqVPB/490-cb-20250807094724.webp",
        "emoji": "🤍"
    },
    "sima-yun": {
        "name": "Sima Yun",
        "rarity": "Common",
        "atk": 122,
        "def": 68,
        "hp": 59,
        "image": "https://i.ibb.co.com/mr2RNN0X/500-cb-20250810062337.webp",
        "emoji": "🤍"
    },
    "thirteen": {
        "name": "Thirteen",
        "rarity": "Common",
        "atk": 86,
        "def": 119,
        "hp": 91,
        "image": "https://i.ibb.co.com/VWqfLYL9/500-cb-20251223011833.webp",
        "emoji": "🤍"
    },
    "quyi-chang": {
        "name": "Quyi Chang",
        "rarity": "Common",
        "atk": 115,
        "def": 119,
        "hp": 119,
        "image": "https://i.ibb.co.com/0ptRwJd0/500-cb-20260201130031.webp",
        "emoji": "🤍"
    },
    "yang-lin": {
        "name": "Yang Lin",
        "rarity": "Common",
        "atk": 130,
        "def": 109,
        "hp": 73,
        "image": "https://i.ibb.co.com/xpPbTpM/500-cb-20250808064917.webp",
        "emoji": "🤍"
    },
    "du-jian": {
        "name": "Du Jian",
        "rarity": "Common",
        "atk": 137,
        "def": 89,
        "hp": 64,
        "image": "https://i.ibb.co.com/F4k4fxYy/500-cb-20260316170515.webp",
        "emoji": "🤍"
    },
    "you-mei": {
        "name": "You Mei",
        "rarity": "Common",
        "atk": 79,
        "def": 134,
        "hp": 139,
        "image": "https://i.ibb.co.com/mFPf2SNh/500-cb-20251115003833.webp",
        "emoji": "🤍"
    },
    "fourth-ancestor-of-the-forsaken-immortal-clan": {
        "name": "Fourth Ancestor of the Forsaken Immortal Clan",
        "rarity": "Common",
        "atk": 111,
        "def": 112,
        "hp": 138,
        "image": "https://i.ibb.co.com/Lhp2FmBV/500-cb-20250720184526.webp",
        "emoji": "🤍"
    },
    "li-yong": {
        "name": "Li Yong",
        "rarity": "Common",
        "atk": 103,
        "def": 101,
        "hp": 118,
        "image": "https://i.ibb.co.com/wFjdwkdD/500-cb-20251107035357.webp",
        "emoji": "🤍"
    },
    "sun-xu": {
        "name": "Sun Xu",
        "rarity": "Common",
        "atk": 139,
        "def": 68,
        "hp": 147,
        "image": "https://i.ibb.co.com/6cgxg1M6/500-cb-20260329183201.webp",
        "emoji": "🤍"
    },
    "zhou-yi": {
        "name": "Zhou Yi",
        "rarity": "Common",
        "atk": 147,
        "def": 91,
        "hp": 87,
        "image": "https://i.ibb.co.com/LzfscLCf/latest-cb-20241125145146.webp",
        "emoji": "🤍"
    },
    "qing-fu": {
        "name": "Qing Fu",
        "rarity": "Common",
        "atk": 53,
        "def": 63,
        "hp": 100,
        "image": "https://i.ibb.co.com/pjzjXm9F/500-cb-20250809095731.webp",
        "emoji": "🤍"
    },
    "sun-ruonan": {
        "name": "Sun Ruonan",
        "rarity": "Common",
        "atk": 93,
        "def": 125,
        "hp": 82,
        "image": "https://i.ibb.co.com/m5w6X2nj/500-cb-20251018220616.webp",
        "emoji": "🤍"
    },
    "wu-yu": {
        "name": "Wu Yu",
        "rarity": "Common",
        "atk": 89,
        "def": 108,
        "hp": 88,
        "image": "https://i.ibb.co.com/BHnnxv79/500-cb-20251107045319.webp",
        "emoji": "🤍"
    },
    "ye-zizai": {
        "name": "Ye Zizai",
        "rarity": "Common",
        "atk": 83,
        "def": 116,
        "hp": 107,
        "image": "https://i.ibb.co.com/Jwps3VQp/454-cb-20240514063234.webp",
        "emoji": "🤍"
    },
    "master-south-cloud": {
        "name": "Master South Cloud",
        "rarity": "Common",
        "atk": 138,
        "def": 58,
        "hp": 120,
        "image": "",
        "emoji": "🤍"
    },
    "dao-master-blue-dream": {
        "name": "Dao Master Blue Dream",
        "rarity": "Common",
        "atk": 79,
        "def": 78,
        "hp": 92,
        "image": "https://i.ibb.co.com/vx5w8Ys7/388-cb-20180715085838.webp",
        "emoji": "🤍"
    },
    "qian-kun": {
        "name": "Qian Kun",
        "rarity": "Common",
        "atk": 86,
        "def": 78,
        "hp": 93,
        "image": "https://i.ibb.co.com/Q3vLWZ57/495-cb-20251107101808.webp",
        "emoji": "🤍"
    },
    "ling-dong": {
        "name": "Ling Dong",
        "rarity": "Common",
        "atk": 74,
        "def": 92,
        "hp": 148,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "huang-yu": {
        "name": "Huang Yu",
        "rarity": "Common",
        "atk": 147,
        "def": 70,
        "hp": 59,
        "image": "https://i.ibb.co.com/5xBQVBQj/500-cb-20260125194135.webp",
        "emoji": "🤍"
    },
    "thunder-daoist": {
        "name": "Thunder Daoist",
        "rarity": "Common",
        "atk": 64,
        "def": 118,
        "hp": 118,
        "image": "https://i.ibb.co.com/LzKBQmjh/500-cb-20260519203826.webp",
        "emoji": "🤍"
    },
    "yang-xiong": {
        "name": "Yang Xiong",
        "rarity": "Common",
        "atk": 63,
        "def": 104,
        "hp": 75,
        "image": "https://i.ibb.co.com/kgjg7tVt/500-cb-20251107033658.webp",
        "emoji": "🤍"
    },
    "master-yi-long": {
        "name": "Master Yi Long",
        "rarity": "Common",
        "atk": 65,
        "def": 130,
        "hp": 75,
        "image": "",
        "emoji": "🤍"
    },
    "jin-ye": {
        "name": "Jin Ye",
        "rarity": "Common",
        "atk": 147,
        "def": 61,
        "hp": 67,
        "image": "https://i.ibb.co.com/Kc5VvvX5/500-cb-20250831152753.webp",
        "emoji": "🤍"
    },
    "ye-mo-s-child": {
        "name": "Ye Mo's Child",
        "rarity": "Common",
        "atk": 50,
        "def": 108,
        "hp": 106,
        "image": "",
        "emoji": "🤍"
    },
    "dun-tian": {
        "name": "Dun Tian",
        "rarity": "Common",
        "atk": 137,
        "def": 98,
        "hp": 93,
        "image": "https://i.ibb.co.com/8D9K6Lr5/500-cb-20250513030821.webp",
        "emoji": "🤍"
    },
    "zi-shu": {
        "name": "Zi Shu",
        "rarity": "Common",
        "atk": 127,
        "def": 111,
        "hp": 89,
        "image": "https://i.ibb.co.com/998d3BLM/500-cb-20260104115953.webp",
        "emoji": "🤍"
    },
    "elder-ma": {
        "name": "Elder Ma",
        "rarity": "Common",
        "atk": 136,
        "def": 67,
        "hp": 63,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "kunpeng-zi": {
        "name": "Kunpeng Zi",
        "rarity": "Common",
        "atk": 61,
        "def": 68,
        "hp": 112,
        "image": "https://i.ibb.co.com/gMLWFXdf/500-cb-20250914120417.webp",
        "emoji": "🤍"
    },
    "xiang-yundong": {
        "name": "Xiang Yundong",
        "rarity": "Common",
        "atk": 124,
        "def": 81,
        "hp": 96,
        "image": "",
        "emoji": "🤍"
    },
    "su-dao": {
        "name": "Su Dao",
        "rarity": "Common",
        "atk": 91,
        "def": 150,
        "hp": 71,
        "image": "",
        "emoji": "🤍"
    },
    "sun-xueshan": {
        "name": "Sun Xueshan",
        "rarity": "Common",
        "atk": 148,
        "def": 52,
        "hp": 65,
        "image": "https://i.ibb.co.com/bgJk45ps/500-cb-20260322153454.webp",
        "emoji": "🤍"
    },
    "li-guang": {
        "name": "Li Guang",
        "rarity": "Common",
        "atk": 105,
        "def": 147,
        "hp": 116,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "blood-god": {
        "name": "Blood God",
        "rarity": "Common",
        "atk": 89,
        "def": 93,
        "hp": 63,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "li-hai": {
        "name": "Li Hai",
        "rarity": "Common",
        "atk": 82,
        "def": 54,
        "hp": 105,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "tie-yan": {
        "name": "Tie Yan",
        "rarity": "Common",
        "atk": 129,
        "def": 123,
        "hp": 51,
        "image": "https://i.ibb.co.com/PvX4KMwv/500-cb-20250420184815.webp",
        "emoji": "🤍"
    },
    "liu-ziuyang": {
        "name": "Liu Ziuyang",
        "rarity": "Common",
        "atk": 130,
        "def": 62,
        "hp": 80,
        "image": "",
        "emoji": "🤍"
    },
    "esteemed-nan-zhao": {
        "name": "Esteemed Nan Zhao",
        "rarity": "Common",
        "atk": 60,
        "def": 63,
        "hp": 64,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "wei-yang": {
        "name": "Wei Yang",
        "rarity": "Common",
        "atk": 121,
        "def": 121,
        "hp": 86,
        "image": "https://i.ibb.co.com/RT0Phn0q/500-cb-20251207180035.webp",
        "emoji": "🤍"
    },
    "chi": {
        "name": "Chi",
        "rarity": "Common",
        "atk": 136,
        "def": 107,
        "hp": 144,
        "image": "https://i.ibb.co.com/Z1V2L4tp/490-cb-20251107091459.webp",
        "emoji": "🤍"
    },
    "cheng-ling": {
        "name": "Cheng Ling",
        "rarity": "Common",
        "atk": 88,
        "def": 117,
        "hp": 140,
        "image": "https://i.ibb.co.com/KpNJ8bty/500-cb-20251106072133.webp",
        "emoji": "🤍"
    },
    "xuan-vice-commander-in-chief": {
        "name": "Xuan Vice Commander-in-Chief",
        "rarity": "Common",
        "atk": 95,
        "def": 91,
        "hp": 81,
        "image": "https://i.ibb.co.com/spFFPSyf/500-cb-20251207175049.webp",
        "emoji": "🤍"
    },
    "master-void-spirit": {
        "name": "Master Void Spirit",
        "rarity": "Common",
        "atk": 64,
        "def": 96,
        "hp": 62,
        "image": "",
        "emoji": "🤍"
    },
    "cheng-fei": {
        "name": "Cheng Fei",
        "rarity": "Common",
        "atk": 148,
        "def": 91,
        "hp": 70,
        "image": "https://i.ibb.co.com/F4xtCHFt/500-cb-20251106100714.webp",
        "emoji": "🤍"
    },
    "sun-dazhu": {
        "name": "Sun Dazhu",
        "rarity": "Common",
        "atk": 128,
        "def": 119,
        "hp": 88,
        "image": "https://i.ibb.co.com/pjjHHyWc/500-cb-20231219054411.webp",
        "emoji": "🤍"
    },
    "bai-fan": {
        "name": "Bai Fan",
        "rarity": "Common",
        "atk": 93,
        "def": 149,
        "hp": 78,
        "image": "https://i.ibb.co.com/9HjcQHS7/313-cb-20180711142219.webp",
        "emoji": "🤍"
    },
    "cao-yidou": {
        "name": "Cao Yidou",
        "rarity": "Common",
        "atk": 92,
        "def": 119,
        "hp": 100,
        "image": "https://i.ibb.co.com/4RGbHQGX/500-cb-20251103102953.webp",
        "emoji": "🤍"
    },
    "ouyang": {
        "name": "Ouyang",
        "rarity": "Common",
        "atk": 90,
        "def": 119,
        "hp": 126,
        "image": "https://i.ibb.co.com/yBK3TDrf/500-cb-20250720161135.webp",
        "emoji": "🤍"
    },
    "li-xiangdong": {
        "name": "Li Xiangdong",
        "rarity": "Common",
        "atk": 54,
        "def": 64,
        "hp": 140,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "li-shan": {
        "name": "Li Shan",
        "rarity": "Common",
        "atk": 99,
        "def": 81,
        "hp": 106,
        "image": "https://i.ibb.co.com/wFFJFCjZ/500-cb-20240115233200.webp",
        "emoji": "🤍"
    },
    "wang-zhen": {
        "name": "Wang Zhen",
        "rarity": "Common",
        "atk": 80,
        "def": 95,
        "hp": 55,
        "image": "https://i.ibb.co.com/s9GwGd2k/480-cb-20251106062014.webp",
        "emoji": "🤍"
    }
};

module.exports = { CHARACTERS };
