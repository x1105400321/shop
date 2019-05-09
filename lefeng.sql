/*
Navicat MySQL Data Transfer

Source Server         : 2019157test
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : lefeng

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2019-05-09 11:23:25
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `goods`
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `sid` tinyint(1) unsigned NOT NULL AUTO_INCREMENT COMMENT '商品数据id',
  `url` varchar(200) NOT NULL COMMENT '图片路径',
  `title` varchar(50) NOT NULL COMMENT '标题',
  `count` varchar(10) NOT NULL COMMENT '打折',
  `oprice` float(8,0) unsigned NOT NULL,
  `price` float(8,0) unsigned NOT NULL,
  `urls` varchar(999) NOT NULL COMMENT '放大镜中图片地址',
  `message` varchar(100) NOT NULL COMMENT '详细介绍',
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', 'http://a2.vimage1.com/upload/merchandise/pdcvis/600117/2019/0411/77/7a65eba6-00dc-4ff9-bdbd-506251226126_420_531.jpg', '小蜜坊小蜜坊Manuka Bee花漾保湿滋润口红唇膏', ' 3.7', '79', '29', 'http://a2.vimage1.com/upload/merchandise/pdcvis/600117/2019/0411/77/7a65eba6-00dc-4ff9-bdbd-506251226126_420_531.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/09/07/36/60d577b5-ae49-4ee5-b5c0-ef227175913a.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/09/07/23/72f81733-e476-4236-b0d4-3d3253f0fd97.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/09/07/126/f02f6831-1f7c-45e4-bce6-69cb5915ac86.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/600117/2019/0114/135/f7fdf71a-8f60-4436-b821-a6fe4dc7842a.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/10/20/127/05f72df5ee9e4941b7abf891b7129148-110_4.jpg', '唇膏口红，保湿滋润，时尚轻色，多重滋养，淡彩唇膏，持久保湿，不易脱色，咬唇妆');
INSERT INTO `goods` VALUES ('2', 'http://a2.vimage1.com/upload/merchandise/pdcvis/113145/2018/1221/105/9c19e6e6-dd9e-43bc-b494-d7e806da1ffc_5t.jpg', '锐度【去黑头清毛孔】锐度男士毛孔清透洁面乳150ml 清洁洗面奶', '6.7', '52', '35', 'http://a.vpimg2.com/upload/merchandise/pdc/056/181/958779994907181056/2/6948331306320-110.jpg,http://a.vpimg2.com/upload/merchandise/pdc/056/181/958779994907181056/2/6948331306320-110_1.jpg,http://a.vpimg2.com/upload/merchandise/pdc/056/181/958779994907181056/2/6948331306320-651.jpg,http://a.vpimg2.com/upload/merchandise/pdc/056/181/958779994907181056/2/6948331306320-652.jpg,http://a.vpimg2.com/upload/merchandise/pdc/056/181/958779994907181056/2/6948331306320-653.jpg', '深层清洁，收缩毛孔');
INSERT INTO `goods` VALUES ('3', 'http://a2.vimage1.com/upload/merchandise/pdcvis/600734/2019/0401/130/f8505c26-841e-4b1a-bcf6-7416e31e0698_420_531.jpg', '瓷妆瓷妆水光气垫BB霜', '2.7', '218', '59', 'http://a.vpimg2.com/upload/merchandise/pdcvis/600734/2018/1218/75/e6633b37-2c37-4f0d-98c0-cb66eef2562b.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/11/10/91/6b9e1f99-e419-47c1-b4ea-cfeefdf27018.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/11/10/83/eb7937bd-c802-4d5c-97eb-df1501ccf7de.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/11/10/144/86741a01-f209-4c4e-a218-b9b7e7f7dac9.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/11/10/126/caa6dfa8-f099-4c24-ab08-e40b186cacaa.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/11/10/80/eef1a92d-efb7-497e-b1c8-3f19b7ef8431.jpg', '网红遮瑕气垫BB霜，15秒拍出自然水光肌，添加人参精华妆养合一，裸妆持久补水保湿，隐形毛孔轻薄不卡粉');
INSERT INTO `goods` VALUES ('4', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2019/04/26/167/51ca8d31-ed2d-4d38-958f-92078736c696_420_531.jpg', '薇诺娜【毛孔橡皮擦】薇诺娜毛孔收缩水120ml 补水保湿爽肤水', '7.2', '178', '128', 'http://a.vpimg2.com/upload/merchandise/pdcvis/133125/2018/1207/124/372796aa-1477-48d2-b576-db76e66c0474.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/133125/2018/1207/103/e323de6b-7ad3-453d-b5d2-dfdfdd3c8b58.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/11/18/59/2319ac7e-e8d5-4b55-831e-f7d15fd97413.jpg', '#一步收缩毛孔#推荐湿敷使用，天然植物配方，温和不刺激；榆绣线菊提取物配合透明质酸纳，肌肤清爽不泛油。搭配细致毛孔面膜效果更佳哦。');
INSERT INTO `goods` VALUES ('5', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/06/29/40/3e2955f7-0b03-483f-9bb8-b3eb95c66a39_420_531.jpg', '卡姿兰【平价战斗机】卡姿兰亮颜高光修容蜜粉 定妆散粉持久控油修饰', '7.1', '59', '42', 'http://a.vpimg2.com/upload/merchandise/pdcvis/2017/07/13/115/1b94a49b-1486-40d4-998a-3181deb38951.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2017/07/13/166/58e26950-ecd9-4a66-aead-01da7e6cfc48.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2017/07/13/10/6061e737-55bb-42fb-add0-2fe6510a851c.jpg', '感柔和通透，创造自然柔焦妆效，模糊肌肤上的细纹和瑕疵，令肌肤格外光滑、无瑕');
INSERT INTO `goods` VALUES ('6', 'http://a2.vimage1.com/upload/merchandise/pdcvis/613495/2019/0402/24/e430d464-0bf0-402a-8e6a-721a92eebf5e_420_531.jpg', '法兰琳卡法兰琳卡芦荟胶200g 祛痘印 补水保湿收缩毛孔', '8.0', '99', '79', 'http://a.vpimg2.com/upload/merchandise/pdcvis/2019/01/23/150/2551ed4e-1206-4ebf-8103-e7d2f7c9632f.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2019/01/23/159/e9ecbb54-2c83-4e2d-b9f1-7cb33766bd97.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2019/01/23/136/8e7876b4-4a9f-4977-b204-923f2e065ce4.jpg', '可以放心擦脸的芦荟胶（0酒精配方）');
INSERT INTO `goods` VALUES ('7', 'http://a2.vimage1.com/upload/merchandise/pdcvis/112350/2018/1123/66/bb84591c-ff9a-4e1c-a583-31a255379478_5t.jpg', '水密码轻透沁凉防晒喷雾150ml防水防汗持久物理防晒隔离', '6.2', '158', '98', 'http://a.vpimg2.com/upload/merchandise/pdcvis/112350/2018/1123/37/e0bc1517-bbb4-448c-bde9-75efd6608784.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/112350/2018/1123/121/e36ba30c-f4d0-4e0a-86aa-86aafe0ceb39.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/112350/2018/1123/36/a2857137-90fd-4263-87cc-770895aca1f7.jpg', '#随手一喷 物理防晒# 一年四季，安心常备');
INSERT INTO `goods` VALUES ('8', 'http://a2.vimage1.com/upload/merchandise/pdcvis/107827/2019/0404/149/c12ed239-fdad-41bc-bbd3-a7c2c756ef13_420_531.jpg', '珀莱雅【高倍防晒修颜】珀莱雅 遮瑕美颜BB防水防汗隔离防晒霜55g', '2.8', '287', '79', 'http://a.vpimg2.com/upload/merchandise/pdcvis/107827/2019/0401/195/4a06dfa8-8eb1-4a05-8fe6-9464b60813ab.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/107827/2019/0404/74/e9e037ec-35ed-4d9f-8137-ff43f200f47f.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/107827/2019/0403/158/224becdc-ce61-433c-b709-3d9a077821ff.jpg', '防晒修颜 【赠面膜】SPF50+/PA+++高效阻隔紫外线 质地清透 遮瑕美颜 防水防汗');
INSERT INTO `goods` VALUES ('9', 'http://a2.vimage1.com/upload/merchandise/pdcvis/108846/2018/0831/10/89b10d82-786e-4161-b4b1-aeddf5e3dbf9_5t.jpg', '玻儿玻儿我爱摩登唇膏口红 3.5g 爆款 滋润 不易脱色 唇彩 唇膏 口红', '1.5', '79', '12', 'http://a.vpimg2.com/upload/merchandise/pdcvis/2018/04/18/106/296a29b3-0547-4d1b-89f8-aeb42fb9ab79.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2018/04/18/65/99b5023b-3235-46d4-9e42-1b356b085138.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2018/04/18/110/e3a6c05b-c0c2-4878-8c2f-09ee6d38b20a.jpg', '显色、滋润的持久型哑光唇膏');
INSERT INTO `goods` VALUES ('10', 'http://a2.vimage1.com/upload/merchandise/pdcvis/606121/2019/0225/137/2cab51ed-646c-4c95-881c-477615c2ed38_5t.jpg', '美舒律【缓解疲劳黑眼圈】花王KAO蒸汽眼罩12片柚子香型 日本热敷 见实物', '8.9', '88', '79', 'http://a.vpimg2.com/upload/merchandise/pdcvis/606121/2018/1119/43/e080b733-f8c9-4ad3-802b-cc447a656a65.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/606121/2018/1119/188/baca2e81-bfc1-4306-a4ef-1083c0602ae7.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/606121/2018/1119/177/b2817c28-02ce-4e3c-a34f-7a2cfe2c7fe2.jpg', '#随时随地享受眼部蒸汽spa#香甜柑橘芳香，释放在眼周围令人心情放松，温热的眼罩包覆眼部，让温润的蒸汽滋润双眼，独立包装，携带方便。');
INSERT INTO `goods` VALUES ('11', 'http://a2.vimage1.com/upload/merchandise/pdcvis/105209/2018/0719/95/035acc57-daa3-4108-88ad-e6816a3d29e9_5t.jpg', '沙宣【黑长直必备】沙宣VS 垂坠质感长效锁水发膜 150ml 锁水 保湿', '7.3', '55', '40', 'http://a.vpimg2.com/upload/merchandise/pdcvis/2016/07/29/166/865c087c960645608abc9531103bd867-110_1.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/07/29/127/d6a11a3aae4f40149ee0133dec4ce952-651.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2016/07/29/196/2037f3b674dd485383c576c0fa079e73-110_4.jpg', '长效锁水配方，整夜锁水保湿，令秀发垂坠至发梢，翌日轻松造型。');
INSERT INTO `goods` VALUES ('12', 'http://a2.vimage1.com/upload/merchandise/pdcvis/609956/2019/0422/96/a95b8e5a-43a1-4693-b0ca-10d0fc81642d_420_531.jpg', 'Dr.Ci:Labo日本城野医生亲研 收缩毛孔爽肤水保湿补水化妆水200ml 其他颜色', '8.3', '229', '189', 'http://a.vpimg2.com/upload/merchandise/pdcvis/609956/2019/0429/157/c8a555f8-400d-451b-b204-71ae2593009a.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/609956/2019/0508/197/5c7503a8-3e96-4c22-9771-b296735b70fe.jpg', '＃拒绝毛孔粗大，告别肌肤孔慌＃取材7种温和植物提取物，分阶段调节肌肤状态。');
INSERT INTO `goods` VALUES ('13', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/11/12/152/2d1a50b3-527f-4934-96d7-f2685ef3bd30_5t.jpg', '法兰琳卡法兰琳卡透亮保湿洁面乳50ml 洗面奶女士男士植物草本', '8.0', '49', '39', 'http://a.vpimg2.com/upload/merchandise/pdcvis/2018/11/12/191/44df877f-6bb8-4c3f-8ef3-370e471f38a2.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2018/11/12/13/f50971eb-9a5f-4403-bfec-8419cee7f650.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2018/11/12/114/e620456a-b4c6-4410-919d-0eb7ca0afa14.jpg', '补水保湿，提亮肤色，打造肌肤的海洋');
INSERT INTO `goods` VALUES ('14', 'http://a2.vimage1.com/upload/merchandise/pdcvis/107028/2018/0530/137/51ef2305-04b5-4a8c-afe0-1113124a6c6e_5t.jpg', '狮王狮王(Lion)花语白樱花美白牙膏140g', '7.5', '20', '15', 'http://a.vpimg2.com/upload/merchandise/pdcvis/2018/05/16/186/c607f03b69c7417e9a6d5591c317a495-651.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2018/05/16/93/0de1f2553747431b836f502843b17ae3-651.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2018/05/16/16/70a4bcd195e24a25ba02ecb4c06c3bc0-651.jpg', '绵密泡沫，深层洁净');
INSERT INTO `goods` VALUES ('15', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/05/28/25/69bfe248-3b21-410d-8c76-5697fe4935dd_5t.jpg', '花肌粹蓝莲净润保湿水90ml 爽肤水补水女', '3.5', '140', '49', 'http://a.vpimg2.com/upload/merchandise/pdcvis/2018/03/14/132/cc484012-39b6-49e7-ab7c-60602ed32e4a.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2018/03/14/2/38164609-ff34-467d-a5d0-9f4a7545c0a3.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2018/03/14/33/5b4a852b-d49e-4057-8d1d-540645eebbe4.jpg', '渗透肌底，由内而外细润清爽');
INSERT INTO `goods` VALUES ('16', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2019/02/22/56/59e326f8-340e-497d-8a4b-cc1926aeef91_5t.jpg', '美即【20片】山水蜜光椴树透润面膜 补水亮肤 葡萄籽鲜活', '3.9', '200', '79', 'http://a.vpimg2.com/upload/merchandise/pdcvis/2019/02/22/107/85769c78-7795-434a-b942-86f8aab55c83.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2019/02/22/54/51e978ae-70e5-4433-bf97-be04ab5eb807.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2019/02/22/167/9a7d59ef-d5b3-4b23-9201-abd83672c981.jpg', '暗沉肌救星，源自天然种籽守护！蕴含葡萄籽、蔓越莓籽精粹，为肌肤注入鲜活营养，补水焕活、祛黄提亮，敷出“鲜”气十足少女肌。');
INSERT INTO `goods` VALUES ('17', 'http://a2.vimage1.com/upload/merchandise/pdcvis/609168/2018/0612/166/25ea11ec-00ba-412d-95b3-23fc341a47b7_5t.jpg', '御泥坊男士御泥坊【净透控油 清爽保湿】男士火山岩净透控油爽肤露50ml 其它颜色', '6.0', '99', '59', 'http://a.vpimg2.com/upload/merchandise/pdcvis/609168/2018/0727/67/aae25f56-6de9-42f8-b933-53b90de6df1a.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/609168/2018/0727/32/01d33f91-f74e-4aff-8180-78b77668c88e.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/609168/2018/0927/191/bd06c122-f688-4a66-ab7d-8f6b5087a502.jpg', '控油 补水 保湿');
INSERT INTO `goods` VALUES ('18', 'http://a2.vimage1.com/upload/merchandise/pdcvis/124574/2019/0116/66/839da38b-91de-47ce-a1b5-47fd3c74ce5c_5t.jpg', '萌黛儿萌黛儿刘海吸油纸50片 油头福音 小巧便捷 抽取式 绿色', '5.2', '29', '15', 'http://a.vpimg2.com/upload/merchandise/pdcvis/104129/2018/0929/117/bd1c1d17-91a5-4c13-bb4d-f7a479bc5be1.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/104129/2018/0929/173/c65ba4c1-5a0d-42fe-82c0-efc4982490dc.jpg', '#拯救无眉星人# 巧迪尚惠柔美眉笔，防水防汗持久不脱色、不晕染，双头立体塑型自然上妆，适合初学者');
INSERT INTO `goods` VALUES ('19', 'http://a2.vimage1.com/upload/merchandise/pdcvis/2018/05/30/25/6ee963c0-b7ea-40d9-85fb-3093b813f142_5t.jpg', '萌黛儿【遮瑕隔离粉底液】萌黛儿舒柔平衡粉底液 粉底霜妆前乳', '3.0', '128', '39', 'http://a.vpimg2.com/upload/merchandise/pdcvis/2018/02/07/191/ca65a8cf015541a69f6df05ffc70d31c-110_1.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2018/02/07/127/215398a78ada4352b9917993deca92f5-651.jpg,http://a.vpimg2.com/upload/merchandise/pdcvis/2018/02/07/66/b6f1dce3959c4bf78a743002da2a7894-651.jpg', '轻轻一按去除刘海油光、黏腻状，吸油纸吸取力强，不伤发，不伤肤且小小一包携带方便，随时随地都可用');
INSERT INTO `goods` VALUES ('20', 'http://a.vpimg2.com/upload/merchandise/pdcvis/2018/08/02/183/04876d60-021a-4537-a5e5-0a61233fbd40.jpg', '丽得姿丽得姿leaders 玫瑰润颜黑炭调理面膜5片 补水保湿', '2.2', '180', '39', 'http://a.vpimg2.com/upload/merchandise/pdcvis/2018/08/02/183/04876d60-021a-4537-a5e5-0a61233fbd40.jpg', '#备长炭负离子黑面膜# 提亮肤色拯救油光、毛孔肌！深层清洁肌肤；以黑吸“黑”，肌肤水润有光泽！');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` tinyint(4) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(32) NOT NULL,
  `regdate` datetime NOT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '1111', '96e79218965eb72c92a549dd5a330112', '2019-05-07 20:13:22');
INSERT INTO `user` VALUES ('2', '11111', '96e79218965eb72c92a549dd5a330112', '2019-05-07 20:15:35');
INSERT INTO `user` VALUES ('3', '222222', 'e3ceb5881a0a1fdaad01296d7554868d', '2019-05-07 21:24:05');
INSERT INTO `user` VALUES ('4', '333333', '1a100d2c0dab19c4430e7d73762b3423', '2019-05-07 21:35:25');
INSERT INTO `user` VALUES ('5', '111', '96e79218965eb72c92a549dd5a330112', '2019-05-08 10:19:53');
INSERT INTO `user` VALUES ('6', '444', '73882ab1fa529d7273da0db6b49cc4f3', '2019-05-08 16:18:18');
INSERT INTO `user` VALUES ('7', '555555', '5b1b68a9abf4d2cd155c81a9225fd158', '2019-05-08 16:22:01');
INSERT INTO `user` VALUES ('8', '11', '96e79218965eb72c92a549dd5a330112', '2019-05-08 21:22:05');
INSERT INTO `user` VALUES ('9', '111111', '96e79218965eb72c92a549dd5a330112', '2019-05-08 21:24:37');
INSERT INTO `user` VALUES ('10', '111111111', '96e79218965eb72c92a549dd5a330112', '2019-05-08 22:02:39');
INSERT INTO `user` VALUES ('11', '77', '96e79218965eb72c92a549dd5a330112', '2019-05-09 08:25:58');
