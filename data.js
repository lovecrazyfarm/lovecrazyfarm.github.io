// 颜色常量库
const FC = {
	LIUGUANG: { color: 'linear-gradient(135deg, #1A2980, #FF69B4, #26D0CE, #00B4DB)', priority: 1 },
	SHUIJING: { color: 'linear-gradient(225deg, #FDC830, #F37335, #F15F79)', priority: 2 },
	CIHUA: { color: '#b25bd7', priority: 3 },
	JIN: { color: '#3b95de', priority: 4 },
	LUOLEI: { color: '#178128', priority: 5 },
	MIWU: { color: '#7293b0', priority: 6 },
	YGC: { color: 'linear-gradient(to bottom, #E8F0F8, #CFDCE8, #B6C6D6, #9AABBF)', priority: 1 },
	YDC: { color: 'linear-gradient(to bottom, #D8F0D2, #B0D9A8, #8FC08A, #6AA66B)', priority: 2 },
	YHT: { color: 'linear-gradient(to bottom, #B8E1FC, #8FC9F0, #6BB0DA, #4A8FC0)', priority: 3 },
	YM: { color: 'linear-gradient(to bottom, #E5D0FF, #D6BAF2, #C5A0E5, #B285D9, #9F6ACC, #8C4FB5)', priority: 4 },
	YHS: { color: 'linear-gradient(to bottom, #FFD4A3, #F9A26C, #E2712E, #B8420C)', priority: 5 },
	HYH: { color: 'linear-gradient(to bottom, #C6E6FF, #A5ADFF, #BBA5FF, #D2A9FF, #B386FF)', priority: 6 },
};

// 标签库
const tagLibrary = {
	// 部分数据来自:https://www.bilibili.com/opus/1170360012470484992
	'xingkong0': { id: 'xingkong0', name: '星空', times: 40, level: 0, fillColor: FC.LIUGUANG.color, priority: FC.LIUGUANG.priority, synthesis: [], synDel: [] },
	
	'liuguang0': { id: 'liuguang0', name: '流光', times: 30, level: 0, fillColor: FC.LIUGUANG.color, priority: FC.LIUGUANG.priority, synthesis: [], synDel: [] },
	'nihong2': { id: 'nihong2', name: '霓虹', times: 18, level: 2, fillColor: FC.LIUGUANG.color, priority: FC.LIUGUANG.priority, synthesis: [], synDel: [] },
	
	'shuijing0': { id: 'shuijing0', name: '水晶', times: 20, level: 0, fillColor: FC.SHUIJING.color, priority: FC.SHUIJING.priority, synthesis: [], synDel: [] },
	'jin0': { id: 'jin0', name: '金', times: 10, level: 0, fillColor: FC.JIN.color, priority: FC.JIN.priority, synthesis: [], synDel: [] },
	'yin0': { id: 'yin0', name: '银', times: 3, level: 0, fillColor: FC.LUOLEI.color, priority: FC.LUOLEI.priority, synthesis: [], synDel: [] },
	'huancai2': { id: 'huancai2', name: '幻彩', times: 3, level: 2, fillColor: FC.SHUIJING.color, priority: FC.SHUIJING.priority+0.18, synthesis: [], synDel: [] },
	'chengzuan2': { id: 'chengzuan2', name: '橙钻', times: 18, level: 2, fillColor: FC.SHUIJING.color, priority: FC.SHUIJING.priority+0.2, synthesis: ['liangjingjing2', 'hupo2'], synDel: ['liangjingjing2', 'hupo2', 'shengji2'] },
	'liuhuo2': { id: 'liuhuo2', name: '流火', times: 15, level: 2, fillColor: FC.SHUIJING.color, priority: FC.SHUIJING.priority+0.1, synthesis: ['taiyangyaoban2', 'zhuore2'], synDel: ['taiyangyaoban2', 'zhuore2']}, 
	
	'shupian1': { id: 'shupian1', name: '薯片', times: 1.5, level: 1, fillColor: FC.CIHUA.color, priority: FC.CIHUA.priority, synthesis: [], synDel: [] },
	'lianti1': { id: 'lianti1', name: '连体', times: 1.5, level: 1, fillColor: FC.CIHUA.color, priority: FC.CIHUA.priority, synthesis: [], synDel: [] },
	'fangxing1': { id: 'fangxing1', name: '方形', times: 1.5, level: 1, fillColor: FC.CIHUA.color, priority: FC.CIHUA.priority, synthesis: [], synDel: [] },
	'tanghulu1': { id: 'tanghulu1', name: '糖葫芦', times: 1.5, level: 1, fillColor: FC.CIHUA.color, priority: FC.CIHUA.priority, synthesis: [], synDel: [] },
	'xiangjiaohou1': { id: 'xiangjiaohou1', name: '香蕉猴', times: 2, level: 1, fillColor: FC.SHUIJING.color, priority: FC.SHUIJING.priority, synthesis: [], synDel: [] },
	'wangshengye1': { id: 'wangshengye1', name: '万圣夜', times: 2, level: 1, fillColor: FC.SHUIJING.color, priority: FC.SHUIJING.priority, synthesis: [], synDel: [] },
	'huanghuashe1': { id: 'huanghuashe1', name: '黄瓜蛇', times: 2.5, level: 1, fillColor: FC.SHUIJING.color, priority: FC.SHUIJING.priority, synthesis: [], synDel: [] },
	'xiaorikui1': { id: 'xiaorikui1', name: '笑日葵', times: 10, level: 1, fillColor: FC.LIUGUANG.color, priority: FC.LIUGUANG.priority, synthesis: [], synDel: [] },
	
	'chaoshi2': { id: 'chaoshi2', name: '潮湿', times: 1, level: 2, fillColor: FC.MIWU.color, priority: FC.MIWU.priority+0.2, synthesis: [], synDel: [] },
	'zhanli2': { id: 'zhanli2', name: '颤栗', times: 1, level: 2, fillColor: FC.MIWU.color, priority: FC.MIWU.priority, synthesis: [], synDel: [] },
	'shengji2': { id: 'shengji2', name: '生机', times: 2, level: 2, fillColor: FC.MIWU.color, priority: FC.MIWU.priority+0.55, synthesis: [], synDel: [] },
	'miwu2': { id: 'miwu2', name: '迷雾', times: 2, level: 2, fillColor: FC.MIWU.color, priority: FC.MIWU.priority+0.3, synthesis: [], synDel: [] },
	'fuxue2': { id: 'fuxue2', name: '覆雪', times: 2, level: 2, fillColor: FC.MIWU.color, priority: FC.MIWU.priority+0.1, synthesis: [], synDel: [] },
	'shachen2': { id: 'shachen2', name: '沙尘', times: 2, level: 2, fillColor: FC.MIWU.color, priority: FC.MIWU.priority+0.28, synthesis: [], synDel: [] },
	'jieshuang2': { id: 'jieshuang2', name: '结霜', times: 2, level: 2, fillColor: FC.MIWU.color, priority: FC.MIWU.priority+0.26, synthesis: [], synDel: [] },
	'zhuore2': { id: 'zhuore2', name: '灼热', times: 2, level: 2, fillColor: FC.MIWU.color, priority: FC.MIWU.priority+0.5, synthesis: [], synDel: [] },
	
	'luolei2': { id: 'luolei2', name: '落雷', times: 3, level: 2, fillColor: FC.LUOLEI.color, priority: FC.LUOLEI.priority, synthesis: [], synDel: [] },
	'bingdong2': { id: 'bingdong2', name: '冰冻', times: 4, level: 2, fillColor: FC.LUOLEI.color, priority: FC.LUOLEI.priority+0.1, synthesis: ['chaoshi2', 'jieshuang2'], synDel: ['chaoshi2', 'jieshuang2'], synKeep: ['chaoshi2'], },
	'yunshi2': { id: 'yunshi2', name: '陨石', times: 3, level: 2, fillColor: FC.LUOLEI.color, priority: FC.LUOLEI.priority+0.2, synthesis: [], synDel: [] },
	'taohua2': { id: 'taohua2', name: '陶化', times: 4, level: 2, fillColor: FC.LUOLEI.color, priority: FC.LUOLEI.priority+0.15, synthesis: ['chaoshi2', 'shachen2'], synDel: ['shachen2'], synKeep: ['chaoshi2'] },
	
	'cihua2': { id: 'cihua2', name: '瓷化', times: 8, level: 2, fillColor: FC.CIHUA.color, priority: FC.CIHUA.priority, synthesis: ['taohua2', 'zhuore2'], synDel: ['taohua2', 'zhuore2'] },
	'liangjingjing2': { id: 'liangjingjing2', name: '亮晶晶', times: 10, level: 2, fillColor: FC.CIHUA.color, priority: FC.CIHUA.priority+0.2, synthesis: [], synDel: [] },
	'xinghuan2': { id: 'xinghuan2', name: '星环', times: 10, level: 2, fillColor: FC.CIHUA.color, priority: FC.CIHUA.priority+0.1, synthesis: [], synDel: [] },
	'rishi2': { id: 'rishi2', name: '日蚀', times: 10, level: 2, fillColor: FC.CIHUA.color, priority: FC.CIHUA.priority+0.25, synthesis: [], synDel: [] },
	'huayu2': { id: 'huayu2', name: '花雨', times: 7, level: 2, fillColor: FC.CIHUA.color, priority: FC.CIHUA.priority+0.25, synthesis: [], synDel: [] },
	
	'taiyangyaoban2': { id: 'taiyangyaoban2', name: '太阳耀斑', times: 5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.5, synthesis: [], synDel: [] },
	'hupo2': { id: 'hupo2', name: '琥珀', times: 4.5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.82, synthesis: ['chaoshi2', 'shengji2'], synDel: ['chaoshi2', 'shengji2'] },
	'yicai2': { id: 'yicai2', name: '异彩', times: 1.5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.55, synthesis: [], synDel: [] },
	'caihong2': { id: 'caihong2', name: '彩虹', times: 5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.3, synthesis: [], synDel: [] },
	'yingguang2': { id: 'yingguang2', name: '荧光', times: 5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.4, synthesis: [], synDel: [] },
	'anwu2': { id: 'anwu2', name: '暗雾', times: 6, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.51, synthesis: [], synDel: [] },
	
	'guzhang2': { id: 'guzhang2', name: '故障', times: 5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.7, synthesis: [], synDel: [] },
	'hajimi2': { id: 'hajimi2', name: '哈基咪', times: 5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.9, synthesis: [], synDel: [] },
	'jinbi2': { id: 'jinbi2', name: '金币', times: 5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.6, synthesis: [], synDel: [] },
	'xueyue2': { id: 'xueyue2', name: '血月', times: 5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority, synthesis: [], synDel: [] },
	'youhun2': { id: 'youhun2', name: '幽魂', times: 5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.05, synthesis: [], synDel: [] },
	'jinghunye2': { id: 'jinghunye2', name: '惊魂夜', times: 5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.1, synthesis: [], synDel: [] },
	'jiguang2': { id: 'jiguang2', name: '极光', times: 5, level: 2, fillColor: FC.JIN.color, priority: FC.JIN.priority+0.2, synthesis: [], synDel: [] },
	'caichen2': {id: 'caichen2',  name: '彩尘',  times: 5,  level:2, fillColor: FC.JIN.color,  priority: FC.JIN.priority+0.8,  synthesis: [], synDel: []}, 
	
};

// 标签组
const tagGroups = {
	'group_basic': { tags: ['liuguang0', 'shuijing0', 'jin0', 'yin0', 'chaoshi2', 'zhanli2', 'shengji2', 'miwu2', 'fuxue2', 'shachen2', 'jieshuang2', 'zhuore2', 'luolei2', 'caihong2', 'yingguang2', 'liangjingjing2', 'nihong2', 'bingdong2', 'taohua2', 'cihua2', 'yicai2', 'huancai2', 'hupo2', 'chengzuan2','yunshi2', 'xingkong0', 'rishi2', 'anwu2', 'taiyangyaoban2', 'liuhuo2', 'huayu2'] },
	'group_tudou': { tags: ['shupian1'] },
	'group_huanggua': { tags: ['huanghuashe1'] },
	'group_xigua': { tags: ['fangxing1'] },
	'group_pingguo': { tags: ['tanghulu1'] },
	'group_xiangjiao': { tags: ['xiangjiaohou1'] },
	'group_nangua': { tags: ['wangshengye1'] },
	'group_caomei': { tags: ['lianti1'] },
	'group_xiangrikui': { tags: ['xiaorikui1'] },
	
	'group_activity': { tags: [
		'xinghuan2',
		'caichen2',
		'guzhang2',
		'hajimi2',
		'jinbi2',
		'youhun2',
		'jinghunye2',
		'xueyue2',
		'jiguang2',
	] },
};

const exclusiveGroups = [
	{ id: 'exclusive_L0', tags: ['xingkong0', 'liuguang0', 'shuijing0', 'jin0', 'yin0'] }, 
	{ id: 'exclusive_liuhuo_cihua', tags: ['liuhuo2', 'cihua2'] },
	{ id: 'exclusive_huancai_yicai', tags: ['huancai2', 'yicai2'] },
];

// 作物数据
const itemsData = [
	// 幻彩
	{ id: 'item_xuelian', name: '雪莲', basePrice: 56980.64, maxWeight: 10.2, growthSpeed: 0, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_yinxing', name: '银杏', basePrice: 96760.6, maxWeight: 5.1, growthSpeed: 0, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_qiushuixian', name: '秋水仙', basePrice: 10342.25, maxWeight: 34, growthSpeed: 705.8824, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_tiaowudeshidaila', name: '跳舞的柿黛拉', basePrice: 8781.526, maxWeight: 45.2, growthSpeed: 796.4602, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_linglanyouyou', name: '铃兰幽幽', basePrice: 12082.314, maxWeight: 23.8, growthSpeed: 1512.61, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_matilian', name: '马蹄莲', basePrice: 5081.2, maxWeight: 17, growthSpeed: 645.6105, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_luhui', name: '芦荟', basePrice: 54636.33, maxWeight: 10.2, growthSpeed: 2353, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_huolonggou', name: '火龙狗', basePrice: 10881.881, maxWeight: 34, growthSpeed: 705.8824, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	
	{ id: 'item_yuechanchu', name: '月蟾蜍', basePrice: 9801.135, maxWeight: 34, growthSpeed: 978.9, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_bianhua', name: '彼岸花', basePrice: 49684.72, maxWeight: 10.2, growthSpeed: 2908.5, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_yuetu', name: '月兔', basePrice: 11154.54, maxWeight: 23.8, growthSpeed: 1523, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_hongbaoguo', name: '红包果', basePrice: 80883.11, maxWeight: 5.1, growthSpeed: 5125, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_xingkongmeigui', name: '星空玫瑰', basePrice: 33134.09, maxWeight: 10.2, growthSpeed: 2966.6, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_huanyuehua', name: '幻月花', basePrice: 8368.833, maxWeight: 23.8, growthSpeed: 1142.5, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_yueyingmei', name: '月影梅', basePrice: 75418, maxWeight: 3.4, growthSpeed: 4022.5, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	
	{ id: 'item_moguichaotianjiao', name: '魔鬼朝天椒', basePrice: 33143.6022, maxWeight: 10.2, growthSpeed: 2400, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_pantao', name: '蟠桃', basePrice: 8780.9359, maxWeight: 20.4, growthSpeed: 1333.33, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_xianrenzhangxiang', name: '仙人掌象', basePrice: 9525.0487, maxWeight: 34, growthSpeed: 720, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_jingqigu', name: '惊奇菇', basePrice: 49659, maxWeight: 10.2, growthSpeed: 2256.17, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_putao', name: '葡萄', basePrice: 24836.8915, maxWeight: 10.2, growthSpeed: 2400, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_dawangju', name: '大王菊', basePrice: 24833.3587, maxWeight: 10.2, growthSpeed: 2400, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_songguo', name: '松果', basePrice: 4614.5318, maxWeight: 17, growthSpeed: 570, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },
	{ id: 'item_xiangrikui', name: '向日葵', basePrice: 370.3206, maxWeight: 51, growthSpeed: 80, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_xiangrikui', 'group_activity'], fillColor: FC.HYH.color, priority: FC.HYH.priority },

	// 橙
	{ id: 'item_zanghonghua', name: '藏红花', basePrice: 4286.443, maxWeight: 20.4,  growthSpeed: 0, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHS.color, priority: FC.YHS.priority },
	{ id: 'item_lingzhi', name: '灵芝', basePrice: 306.306, maxWeight: 61.2,  growthSpeed: 0, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHS.color, priority: FC.YHS.priority },
	
	{ id: 'item_tinggedeshidaila', name: '听歌的柿黛拉', basePrice: 783.386, maxWeight: 42.5,  growthSpeed: 888.888, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHS.color, priority: FC.YHS.priority },
	{ id: 'item_youzi', name: '柚子', basePrice: 225.22, maxWeight: 61.2,  growthSpeed: 67.34, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHS.color, priority: FC.YHS.priority },
	{ id: 'item_bocai', name: '菠菜', basePrice: 3880.3, maxWeight: 20.4,  growthSpeed: 495.7627, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHS.color, priority: FC.YHS.priority },

	{ id: 'item_yueheguo', name: '月核果', basePrice: 3387.512, maxWeight: 17, growthSpeed: 460, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHS.color, priority: FC.YHS.priority },
	{ id: 'item_yeguangteng', name: '液光藤', basePrice: 3512.968, maxWeight: 20.4, growthSpeed: 520, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHS.color, priority: FC.YHS.priority },

	{ id: 'item_mihoutao', name: '猕猴桃', basePrice: 2147.9813, maxWeight: 13.6, growthSpeed: 278, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHS.color, priority: FC.YHS.priority },
	{ id: 'item_caomei', name: '草莓', basePrice: 8702.3915, maxWeight: 8.5, growthSpeed: 888, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_caomei', 'group_activity'], fillColor: FC.YHS.color, priority: FC.YHS.priority },
	{ id: 'item_lizhi', name: '荔枝', basePrice: 790.1983, maxWeight: 23.8, growthSpeed: 135, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHS.color, priority: FC.YHS.priority },
	{ id: 'item_liulian', name: '榴莲', basePrice: 202.944, maxWeight: 61.2, growthSpeed: 55.55, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHS.color, priority: FC.YHS.priority },
	
	// 紫
	{ id: 'item_mangguo', name: '芒果', basePrice: 5040.3, maxWeight: 8.5, growthSpeed: 0, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YM.color, priority: FC.YM.priority },
	
	{ id: 'item_longyan', name: '龙眼', basePrice: 4319.81, maxWeight: 8.5, growthSpeed: 438.7755, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YM.color, priority: FC.YM.priority },
	{ id: 'item_shizi', name: '柿子', basePrice: 236.5, maxWeight: 37.4, growthSpeed: 45.5122, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YM.color, priority: FC.YM.priority },

	{ id: 'item_yuemei', name: '月莓', basePrice: 3920.926, maxWeight: 8.5, growthSpeed: 375, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YM.color, priority: FC.YM.priority },
	{ id: 'item_xingyecai', name: '星叶菜', basePrice: 3973.084, maxWeight: 10.2, growthSpeed: 416, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YM.color, priority: FC.YM.priority },

	{ id: 'item_pingguo', name: '苹果', basePrice: 188.7409, maxWeight: 37.4, growthSpeed: 40.5, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_pingguo', 'group_activity'], fillColor: FC.YM.color, priority: FC.YM.priority },
	{ id: 'item_shiliu', name: '石榴', basePrice: 527.5836, maxWeight: 20.4, growthSpeed: 83.5, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YM.color, priority: FC.YM.priority },
	{ id: 'item_xiangjiao', name: '香蕉', basePrice: 2484.6553, maxWeight: 10.2, growthSpeed: 280, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_xiangjiao', 'group_activity'], fillColor: FC.YM.color, priority: FC.YM.priority },
	{ id: 'item_chelizi', name: '车厘子', basePrice: 1657.661, maxWeight: 10.2, growthSpeed: 166, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YM.color, priority: FC.YM.priority },
	{ id: 'item_nangua', name: '南瓜', basePrice: 12.9595, maxWeight: 204, growthSpeed: 6.5, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_nangua', 'group_activity'], fillColor: FC.YM.color, priority: FC.YM.priority },
	{ id: 'item_yezi', name: '椰子', basePrice: 145.9826, maxWeight: 40.8, growthSpeed: 32.5, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YM.color, priority: FC.YM.priority },

	// 蓝
	{ id: 'item_lanmei', name: '蓝莓',  basePrice: 113.4475, maxWeight: 40.8,  growthSpeed: 27.9928, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHT.color, priority: FC.YHT.priority },
	{ id: 'item_huasheng', name: '花生',  basePrice: 2858.96, maxWeight: 5.1,  growthSpeed: 207.1111, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHT.color, priority: FC.YHT.priority },

	{ id: 'item_yuehuanguo', name: '月环果', basePrice: 321.9977, maxWeight: 20.4, growthSpeed: 58, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHT.color, priority: FC.YHT.priority },
	{ id: 'item_yinhuitai', name: '银辉苔', basePrice: 3045.368, maxWeight: 5.1, growthSpeed: 280, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHT.color, priority: FC.YHT.priority },

	{ id: 'item_mainhua', name: '棉花', basePrice: 2578.4733, maxWeight: 5.2, growthSpeed: 200, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHT.color, priority: FC.YHT.priority },
	{ id: 'item_baicai', name: '白菜', basePrice: 579.7213, maxWeight: 10.2, growthSpeed: 80, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHT.color, priority: FC.YHT.priority },
	{ id: 'item_li', name: '梨', basePrice: 484.155, maxWeight: 13.6, growthSpeed: 75, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHT.color, priority: FC.YHT.priority },
	{ id: 'item_xigua', name: '西瓜', basePrice: 10.7111, maxWeight: 170, growthSpeed: 6, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_xigua', 'group_activity'], fillColor: FC.YHT.color, priority: FC.YHT.priority },
	{ id: 'item_juzi', name: '橘子', basePrice: 537.9143, maxWeight: 13.6, growthSpeed: 75, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHT.color, priority: FC.YHT.priority },
	{ id: 'item_yumi', name: '玉米', basePrice: 103.5216, maxWeight: 40.8, growthSpeed: 27.78, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHT.color, priority: FC.YHT.priority },
	{ id: 'item_qianniuhua', name: '牵牛花', basePrice: 2108.1851, maxWeight: 5.1, growthSpeed: 200, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YHT.color, priority: FC.YHT.priority },

	// 绿
	{ id: 'item_yuedengcao', name: '月灯草', basePrice: 1503.785, maxWeight: 5.1, growthSpeed: 205, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YDC.color, priority: FC.YDC.priority },
	{ id: 'item_yuefanqie', name: '月番茄', basePrice: 662.4846, maxWeight: 10.2, growthSpeed: 111, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YDC.color, priority: FC.YDC.priority },
	{ id: 'item_dadou', name: '大豆', basePrice: 2579.0104, maxWeight: 3.4, growthSpeed: 275, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YDC.color, priority: FC.YDC.priority },
	{ id: 'item_zhuzi', name: '竹子', basePrice: 12.2462, maxWeight: 136, growthSpeed: 7.5, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YDC.color, priority: FC.YDC.priority },
	{ id: 'item_huanggua', name: '黄瓜', basePrice: 215.0425, maxWeight: 13.6, growthSpeed: 50, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_huanggua', 'group_activity'], fillColor: FC.YDC.color, priority: FC.YDC.priority },

	// 灰
	{ id: 'item_yueguangcao', name: '月光草', basePrice: 330.8416, maxWeight: 3.4, growthSpeed: 111, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YGC.color, priority: FC.YGC.priority },
	{ id: 'item_yuerangdou', name: '灰壤豆', basePrice: 1351.187, maxWeight: 3.4, growthSpeed: 180, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YGC.color, priority: FC.YGC.priority },

	{ id: 'item_tudou', name: '土豆', basePrice: 26.3026, maxWeight: 11.9, growthSpeed: 28.5, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_tudou', 'group_activity'], fillColor: FC.YGC.color, priority: FC.YGC.priority },
	{ id: 'item_xianggu', name: '香菇', basePrice: 687.682, maxWeight: 3.4, growthSpeed: 133, categories: ['cat_putong'], tagGroups: ['group_basic', , 'group_activity'], fillColor: FC.YGC.color, priority: FC.YGC.priority },
	{ id: 'item_fanqie', name: '番茄', basePrice: 66.2398, maxWeight: 10.2, growthSpeed: 33.33, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YGC.color, priority: FC.YGC.priority },
	{ id: 'item_bosiju', name: '波斯菊', basePrice: 43.5424, maxWeight: 34, growthSpeed: 17, categories: ['cat_putong'], tagGroups: ['group_basic', 'group_activity'], fillColor: FC.YGC.color, priority: FC.YGC.priority },

];

const categories = [
	{ id: 'cat_putong', name: '≤ 2026.10.29' }
];
