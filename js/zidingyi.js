/**
 * Created by Administrator on 2016/4/10.
 */
function setVal(argument) {
    window.contentScroll,
        baseWidth = 1920,
        baseSpeed = 0.5,
        $content = $('.content'),
        $kvTitles = $('.why'),
        $navs = $('[data-nav]'),
        $poptd = $('.poptd'),
        $popLayer = $('.popup-layer'),
        $piclist = $('.more .piclist'),
        $videolayer = $('.video-layer'),
        $vdesc = $('.video-description'),
        $ophide = $('.ophide'),
        $contentMod = $('.content').children('[id]'),
        $fdjValue = $('.params-box-wrap h3'),
        $exteriorparams = $('.exterior .params'),
        $paramsBox = $('.params-box-wrap'),
        $resetBtn = $('.reset'),
        kvTitleTop = [],
        $fullMod = $('#exterior,#interior,#ride,#safety,#more,#spec,#media'),
        $sidenavs = $('.side-menu').find('a'),
        v = null,
        _mcs = null,
        curcentV = 0,
        currentData = null,
        supportH5 = false,
        videos = [
            'XMTQ5NjEyMDgyNA==',
            'XMTQ5NjEyMTg3Mg==',
            'XMTUwMDgwNTc4OA==',
            'XMTUwMzk0OTU2NA==',
            'XMTUxMDc3MTQ2OA=='
        ],
        fdjData = {
            'fdj0': [192, 7.4, 350, 7.6],
            'fdj1': [125, 10, 252, 6.2]

        },
        curFdjData = fdjData.fdj0,
        videoTxt = {
            't1': [
                { 'start': 23, 'end': 27, 'title': 'RES发动机远程启停', 'desc': '' },
                { 'start': 28, 'end': 31, 'title': '全新飞翼式镀铬进气格栅', 'desc': '全新飞翼式镀铬进气格栅重现历史概念车型上经典的翼形元素，由别克徽标向两侧延展的飞翼造型，尽显刚毅与大气。首次采用电镀后高级喷涂工艺，略带暖色调的金属质感，配合新一代格栅高亮的轮廓和飞翼设计，充满力量，意喻开启别克新的未来。' },
                { 'start': 32, 'end': 34, 'title': 'LED日间行车灯', 'desc': '由29颗LED组成的展翼型全LED大灯，传承家族式设计元素，犀利别致。车灯内部形面行云流水，丰富的材质对比，勾勒出车灯最吸引人的曲线；纤细的厚壁导光三维展翼式日间行车灯，晶钻剔透。LED色温更接近日光，纯净明亮，响应快速，为驾驶员提供更好的夜间驾驶安全保障。' },
                { 'start': 35, 'end': 37, 'title': '低风阻多功能外后视镜', 'desc': '外后视镜安装于门板上方，降低风阻并大大缩小了A柱盲区，为驾驶者带来更好的前方视野。除常规的电动调节、加热除雾、带LED转向灯等功能外，高配车型还带有电动折叠、自动防眩目、位置记忆和倒车自动向下翻折等功能，实用便捷。' },
                { 'start': 38, 'end': 41, 'title': '360度环抱一体式座舱', 'desc': '' },
                { 'start': 42, 'end': 45, 'title': '多功能人体工程学座椅', 'desc': '全新一代君越的座椅骨架采用通用全球全新开发骨架平台，并特别基于中国人体模型数据库进行人机工程优化和舒适性设计，完全贴合人体曲线，兼顾了短途与长途不同的舒适性需求。除了12向电动调节功能之外，还配有加热、通风、按摩和调节头枕等功能，驾驶座还装备了与智慧安全匹配的震动提醒。椅背分别能够在前后8度范围内进行电动调节，让尊贵的后排乘客在旅途中缓解疲劳，使整个旅途更加愉悦。' },
                { 'start': 46, 'end': 48, 'title': '法式双缝线工艺', 'desc': '外观通常是最初吸引客户的地方，而内饰才是决定用户长期满意度的关键。全新一代君越竭尽全力为驾乘者营造舒适优雅的车内环境。在仪表台、中控台、门板等一切人体可能接触的区域，均大量采用了手感柔软的高档材质。所有仪表板、门板、中控台表面和座椅均采用热压工艺，实现了真正的法式拼缝，体现出更豪华的质感。' },
                { 'start': 49, 'end': 51, 'title': '高级麂皮绒面内饰', 'desc': '' },
                { 'start': 52, 'end': 53, 'title': '钢琴烤漆木纹饰板', 'desc': '' },
                { 'start': 56, 'end': 60, 'title': '智能无钥匙进入', 'desc': '' },
                { 'start': 61, 'end': 64, 'title': '驾驶员座椅自动迎宾及记忆功能', 'desc': '' },
                { 'start': 65, 'end': 68, 'title': '19吋豪华型多幅铝合金轮毂', 'desc': '全新一代君越提供了三款兼具美观与功能性的铝合金轮毂。三款轮毂采用轻量化设计，从而提供用户所期待的舒适、操控和静音品质。同时还具有极好的通风性能，可优化制动冷却效果。' },
                { 'start': 69, 'end': 71, 'title': '前排12向电动调节座椅', 'desc': '全新一代君越的座椅骨架采用通用全球全新开发骨架平台，并特别基于中国人体模型数据库进行人机工程优化和舒适性设计，完全贴合人体曲线，兼顾了短途与长途不同的舒适性需求。除了12向电动调节功能之外，还配有加热、通风、按摩和调节头枕等功能，驾驶座还装备了与智慧安全匹配的震动提醒。椅背分别能够在前后8度范围内进行电动调节，让尊贵的后排乘客在旅途中缓解疲劳，使整个旅途更加愉悦。' },
                { 'start': 72, 'end': 74, 'title': '一键启动', 'desc': '' },
                { 'start': 75, 'end': 77, 'title': '无边纯平8吋高清触摸屏', 'desc': '8吋高清触摸屏采用电容触控技术，相比传统电阻屏响应更快。屏幕表面覆有高透光玻璃材质，具备可视效果良好，触摸手感极佳的优点。屏幕支持显示多媒体信息、手机通讯、导航显示等功能，仅需轻轻一点即可完成操作。' },
                { 'start': 83, 'end': 85, 'title': 'Bose Centerpoint?环绕音响系统带11扬声器', 'desc': '全新一代君越使用了Bose全新调音的8通道环绕立体声音响，不仅配备了Bose第二代 Centerpoint?模拟环绕声系统，还采用了第二代AudioPilot噪音补偿功能和专利的SurroundStage?环绕声数字处理技术。通过布置于车内的11个扬声器，营造车内声场宽阔环绕的空间感、震撼利落的大信号表现、真实清晰的频道均衡，从而营造剧院级的音质表现。' },
                { 'start': 86, 'end': 89, 'title': 'ETRS电子排挡', 'desc': '别克首次在全新一代君越上使用了先进的ETRS电子排档技术，可极大增强耐久性和响应，同时还能节省宝贵的空间。ETRS电子排档省去了复杂的机械结构，将驾驶员的操作转化为电信号，由控制器直接控制变速箱进行档位变换。这种技术不仅大幅节省了车内空间，其衍生功能也能为驾驶带来许多便利性与安全性。' },
                { 'start': 102, 'end': 103, 'title': '两片式超大全景天窗', 'desc': '全新一代君越配备了两片式超大全景天窗，天窗透光面积为0.836m2，配合侧窗的大面积设计，为乘客提供宽敞明亮的车内空间。' },
                { 'start': 117, 'end': 118, 'title': '一体化镀铬双排气管', 'desc': '采用一体化嵌入式设计的排气管分列车尾两侧，表面采用哑光镀铬材质进行点缀，凸显高档感与运动风格。' },
                { 'start': 122, 'end': 125, 'title': '双掠峰腰线设计', 'desc': '全新一代君越的车身比例发生了革命性变化，整车长5018毫米，轴距加长至2905毫米，在车身更长的同时，前悬比上一代车型缩短了67毫米，以此打造出更高效的轴距比例和更宽敞的空间布置。车身更宽，车顶降低，创造出极富动感的视觉冲击力。全新的双掠峰腰线设计勾勒出优雅隽逸的身姿，透出尊贵气度。' },
                { 'start': 139, 'end': 143, 'title': '展翼型全LED大灯', 'desc': '由29颗LED组成的展翼型全LED大灯，传承家族式设计元素，犀利别致。车灯内部形面行云流水，丰富的材质对比，勾勒出车灯最吸引人的曲线；纤细的厚壁导光三维展翼式日间行车灯，晶钻剔透。LED色温更接近日光，纯净明亮，响应快速，为驾驶员提供更好的夜间驾驶安全保障。' },
                { 'start': 144, 'end': 148, 'title': 'Moon White月光白环绕氛围灯', 'desc': '接近于自然光线的月光白氛围灯，能更好的还原内饰材质的真实质感，同时打造宁静柔和的座舱氛围。' },
                { 'start': 163, 'end': 164, 'title': '全框式车窗镀铬饰条', 'desc': '' },
                { 'start': 171, 'end': 172, 'title': '展翼型LED尾灯', 'desc': '翼展型LED尾灯延续了车身形面，如红宝石般嵌入车尾，划出一道绚丽的流光倩影。厚壁导光的位置灯，静如悬冰，动如火焰，书写了冰火激情的碰撞。而纤细的电镀饰条，勾勒出车体的宽度，强调了尾部的优雅。' }
            ],

            't2': [
                { 'start': 10, 'end': 11, 'title': '隐藏式后盖开启按钮', 'desc': '行李箱盖开启按钮巧妙地隐藏于后盖车标之内，使车尾更加美观简洁，只需轻按车标即可打开行李箱盖。' },
                { 'start': 12, 'end': 14, 'title': '523L大开口设计行李箱', 'desc': '容积达到523L，可轻松容纳4个高尔夫球包或4个24寸行李箱，各类日常用品更是不在话下。' },
                { 'start': 18, 'end': 19, 'title': '宽绰前后排空间', 'desc': '' },
                { 'start': 20, 'end': 23, 'title': '945后排纵向空间', 'desc': '' },
                { 'start': 29, 'end': 31, 'title': '8英寸高清行车电脑', 'desc': '仪表盘中央的8英寸高清数码显屏行车电脑除了显示传统车辆信息外，还可便捷显示电话、多媒体、导航地图等信息，配合多功能方向盘使驾驶者操作更加便利。' },
                { 'start': 34, 'end': 36, 'title': 'TPMS智能胎压监测系统', 'desc': 'TPMS智能胎压监测系统时刻监控胎压避免因此而造成的事故。每个轮胎中带有胎压传感器直接测量胎压，并通过无线射频信号将胎压值传输至行车电脑进行显示，并能在胎压异常的情况下向驾驶者进行预警。' },
                { 'start': 38, 'end': 39, 'title': '带WIFI热点功能的OnStar 4G LTE', 'desc': '第10代OnStar全时在线助理为用户提供包括碰撞自动求助、紧急救援协助、安全保障、导航、车况监测、全音控免提电话、手机应用等7大类26项服务。稳定可靠的4G LTE使车辆变成了一个信号质量和带宽极佳的可靠移动热点，允许同时最多7台兼容设备上网，让您随时随地畅享车内信息娱乐，丰富车生活。' },
                { 'start': 40, 'end': 44, 'title': '后排多功能电动调节座椅', 'desc': '全新一代君越的座椅骨架采用通用全球全新开发骨架平台，并特别基于中国人体模型数据库进行人机工程优化和舒适性设计，完全贴合人体曲线，兼顾了短途与长途不同的舒适性需求。除了12向电动调节功能之外，还配有加热、通风、按摩和调节头枕等功能，驾驶座还装备了与智慧安全匹配的震动提醒。椅背分别能够在前后8度范围内进行电动调节，让尊贵的后排乘客在旅途中缓解疲劳，使整个旅途更加愉悦。' },
                { 'start': 48, 'end': 55, 'title': '新一代别克智慧互联系统兼容Apple Carplay', 'desc': '全新一代君越搭载的智慧互联系统可让用户在车内始终与数码生活方式保持连接，同时也尽量做到不会让驾车的用户分心。该系统兼容Apple CarPlay，可通过车内8英寸高清触摸屏显示及使用经认证的智能手机内容和应用程序。更重要的是该系统可以在车辆整个生命周期中保持最新。同时车辆还配备蓝牙链接与ＵＳＢ／ＡｕXin多路音源输入。' },
                { 'start': 66, 'end': 67, 'title': 'EPB电子驻车', 'desc': '' },
                { 'start': 82, 'end': 83, 'title': '四辐多功能真皮方向盘', 'desc': '多功能方向盘使用真皮材质包覆，大小适中，握感舒适，易于操控。方向盘集成多媒体控制、蓝牙电话、语音控制和巡航设定等功能按键，为用户带来更为便捷安全的行车体验。' },
                { 'start': 104, 'end': 105, 'title': 'HUD平视显示系统', 'desc': '别克首次在旗下车型使用了科技感十足的HUD平视显示系统。该显示屏带有4个页面视图：车速、影音、导航和性能。如果车辆配备了如车道偏离警告或前撞预警等功能，HUD上也会显示警告。' },
                { 'start': 117, 'end': 118, 'title': '后排中央扶手带空调娱乐控制', 'desc': '后排乘客可以通过中央扶手上的按键控制多媒体及后排空调设定等功能，更加方便。' },
                { 'start': 134, 'end': 137, 'title': 'Quiet-tuning?别克专利静音科技ANC主动降噪技术', 'desc': '全新一代君越采用了噪声耗散方式，通过轻量化耗散阻尼垫、吸音地毯和吸音顶衬等吸收噪音。在底盘及传动系统，全新一代君越运用了液体阻尼垫，液压和橡胶衬套来隔离路面带来的震动和噪音。同时沿用了车门三道密封条、夹层声学隔音玻璃，进一步提升整车气密性能，打造图书馆般的安静环境。全新一代君越全系配备了ANC主动降噪技术，通过设置在座舱内的麦克风实时侦测发动机噪音，然后通过扬声器释放抵消噪音的反向声波，从而消除发动机的工作噪音，全面净化听觉环境。' },
                { 'start': 141, 'end': 142, 'title': '后排USB接口', 'desc': '' },
                { 'start': 147, 'end': 149, 'title': '后排座椅加热/通风/按摩功能', 'desc': '' },
                { 'start': 158, 'end': 161, 'title': '三区自动空调系统', 'desc': '功能完备的智能3区自动空调系统，能够根据外界气温自动调节座舱温度，并能让前后排成员都能按照自己的需求设定空调温度。' }
            ],

            't3': [
                { 'start': 10, 'end': 12, 'title': '0.29风阻系数', 'desc': '全新一代君越的流线型设计保证了空气动力学上的优势。得益于全新设计的车身比例、极致优化的局部造型、长达1000小时的试验分析。更长、更低的车身极度接近低风阻原型，经过精心模拟测算的进气格栅开口、引擎盖相对位置、前后风挡角度等力求最流畅的空气流动路线，再配合长时间风洞试验逐一优化车身每个型面，从而创造出0.29cd的空气动力学造型。' },
                { 'start': 18, 'end': 24, 'title': 'BFI一体化车身', 'desc': '全新一代君越车身架构设计高于全球五星安全碰撞标准，车身高强度材料使用比例高达75%，其中超高强度钢材达到41%，最大屈服强度能达到1500Mpa。' },
                { 'start': 38, 'end': 44, 'title': '2.0T SIDI直喷涡轮增压发动机', 'desc': '全新一代君越28T车型越搭载的2.0T SIDI直喷涡轮增压发动机，曾荣膺2013年度沃德十佳发动机，拥有192Kw/5400rpm的最大功率及350Nm/2000-5000rpm的峰值扭矩，升功率高达96Kw/L，拥有百公里加速7.4秒、百公里综合油耗7.6升的卓越性能。' },
                { 'start': 47, 'end': 50, 'title': '6速DSS智能启停变速箱', 'desc': '与2.0T发动机相匹配的是6速DSS智能启停变速箱，是目前别克全新一代车型中使用最为广泛的变速箱之一，拥有极佳的可靠性和良好的性能。' },
                { 'start': 65, 'end': 70, 'title': '增强型麦弗逊前悬', 'desc': '依据中国道路特点进行优化的前后悬挂系统，可以提供更迅速和舒适的振动吸收效果。具有良好的减震性能，同时能够保持足够的侧向刚性，具备极佳的操控性能。' },
                { 'start': 71, 'end': 74, 'title': '多连杆独立后悬', 'desc': '' },
                { 'start': 75, 'end': 78, 'title': '八点式全框式副车架', 'desc': '采用全新设计的全框式副车架，通过4个刚性连接点与4个连接加强件与车身连接，并且带有提高安全性的集成式碰撞吸能盒设计，以此全面确保车辆的舒适性与安全性。' },
                { 'start': 86, 'end': 96, 'title': '第二代CDC全时主动式液力减震系统', 'desc': '全新一代君越使用了第二代CDC全时主动式液力减震系统，减震器内部的传感器以每秒100次的频率监测减震器的工作状态，以此判断路面状态并实时调整减震阻尼，确保最佳的减震性和操控性。此外，此避震还会随着驾驶风格的变化或车辆运动模式的启动而调整减震阻尼，最大调整范围达20%。' },
                { 'start': 111, 'end': 115, 'title': 'EPS电子助力转向系统', 'desc': '全新一代君越标配了最新版EPS电子助力转向系统，手感轻巧而直接，在低速状态下可提供较大的助力，而在高速公路的高速状态下，则需要较大的力量才能转向。' },
                { 'start': 124, 'end': 126, 'title': '博世ESP9.1电子稳定系统', 'desc': '' },
                { 'start': 154, 'end': 158, 'title': '发动机自动启停功能', 'desc': '全新一代君越全系配备发动机自动启停功能，针对城市拥堵路况和“走走停停”的日常行驶，能够最大限度降低燃油消耗和尾气排放。' },
                { 'start': 159, 'end': 161, 'title': '百公里混合路况油耗7.6L', 'desc': '全新一代君越28T车型越搭载的2.0T SIDI直喷涡轮增压发动机，曾荣膺2013年度沃德十佳发动机，拥有192Kw/5400rpm的最大功率及350Nm/2000-5000rpm的峰值扭矩，升功率高达96Kw/L，拥有百公里加速7.4秒、百公里综合油耗7.6升的卓越性能。' },
                { 'start': 166, 'end': 168, 'title': '蓝牙免提电话', 'desc': '' },
                { 'start': 172, 'end': 174, 'title': '运动模式', 'desc': '配备最新一代运动模式，其在28T上包含变速箱换挡逻辑、转向助力、悬架阻尼三部分的变化。在运动模式的帮助下，全新一代君越得以完美平衡舒适性与操控性，大幅提升驾驶乐趣。' },
                { 'start': 182, 'end': 183, 'title': '四幅多功能方向盘带换挡拨片', 'desc': '位于方向盘后方的换挡拨片，可以让驾驶员在双手不离开方向盘的情况下快速对档位进行切换，提供更多的安全性和驾驶乐趣。' }
            ],

            't4': [
                { 'start': 15, 'end': '19', 'title': 'ACC自适应巡航系统', 'desc': '在车速大于25km/h时，通过设置车辆速度和车辆间隔，可自动调整本车速度以保持与前车的预设距离。可持续减速至车辆完全停止。' },
                { 'start': 29, 'end': '32', 'title': 'LDW车道偏离预警', 'desc': '' },
                { 'start': 33, 'end': '39', 'title': 'LKA车道保持系统', 'desc': '当车辆时速在80-180km/h之间，如果车辆靠近已探测到的车道线却没有使用相应方向的转向灯，则其会缓缓地转动方向盘加以辅助。其也会在车辆越过车道线时发出车道偏离警告。如果系统探测到您在主动转向，则不会加以辅助或发出警告。' },
                { 'start': 56, 'end': '57', 'title': 'EHHSA增强型坡道辅助系统', 'desc': '' },
                { 'start': 67, 'end': '71', 'title': 'HBA智能远近灯光控制', 'desc': 'HBA智能远近光灯切换可在迎面来车的同时自动控制远近光灯切换，当车速超过40公里/小时，周围黑暗且没有其他车辆时，系统打开远光灯；当系统探测到会车车辆的前照灯、前方车辆的尾灯、周围环境足够明亮不需要远光灯、或车速降至20公里/小时以下时，远光灯自动切换到近光灯，以此提高驾驶的安全性。' },
                { 'start': 87, 'end': '88', 'title': 'SBZA侧盲预警系统', 'desc': 'SBZA侧盲区预警系统可实时监测车辆后方道路情况。当系统探测到车辆左右后方有车辆存在时，对应一侧的后视镜警示灯将自动点亮。此时如果打开对应后方车辆一侧转向灯时，则警示灯将持续闪烁，作为提醒驾驶员的额外警告。' },
                { 'start': 104, 'end': '105', 'title': 'FDI前车距离提示', 'desc': '通过车辆前方的长距离雷达和前摄像头检测与前车的距离，当车速大于40km/h时，在仪表上显示与前车的时间距离。' },
                { 'start': 119, 'end': '124', 'title': '雨量感应式无骨雨刷', 'desc': '' },
                { 'start': 126, 'end': '127', 'title': '通用专利FNC制动盘', 'desc': 'FNC碳氮共渗技术是一种用于提高金属硬度的热处理工艺，以延长零件寿命。别克将此种技术运用于制动盘，大大提高了制动盘的硬度，耐磨性和疲劳强度。' },
                { 'start': 130, 'end': '132', 'title': '外后视镜加热', 'desc': '外后视镜安装于门板上方，降低风阻并大大缩小了A柱盲区，为驾驶者带来更好的前方视野。除常规的电动调节、加热除雾、带LED转向灯等功能外，高配车型还带有电动折叠、自动防眩目、位置记忆和倒车自动向下翻折等功能，实用便捷。' },
                { 'start': 138, 'end': '139', 'title': '电子防炫目内外后视镜', 'desc': '外后视镜安装于门板上方，降低风阻并大大缩小了A柱盲区，为驾驶者带来更好的前方视野。除常规的电动调节、加热除雾、带LED转向灯等功能外，高配车型还带有电动折叠、自动防眩目、位置记忆和倒车自动向下翻折等功能，实用便捷。' },
                { 'start': 146, 'end': '149', 'title': 'FCA前碰撞预警CMB碰撞缓解系统', 'desc': '当车辆车速大于10km/h，系统能对前方慢速行驶或者静止的车辆进行碰撞危险综合评估，并在必要时对驾驶员告警，以便能够采取主动躲避动作以提高对乘员的保护。如果系统探测到可能与前方车辆发生碰撞，但如果驾驶员没有采取相关操作，该系统会根据情况自动刹车，避免或减小碰撞造成的损失。' },
                { 'start': 157, 'end': '158', 'title': 'PD行人识别/保护', 'desc': 'PD行人识别系统能够识别车辆前方的行人，并通过仪表提醒驾驶者注意前方安全，若即将发生碰撞且驾驶者未做出任何反应，该系统能使车辆刹车至完全停止。' },
                { 'start': 166, 'end': '170', 'title': 'APA自动泊车系统', 'desc': '在30km/h以下测量合适的后方或侧方停车位，当找到合适的停车位时，系统会提示驾驶员停车并切换成R档。系统可以自动计算停车轨迹，驾驶员控制刹车和档位，转向系统将自动工作。当驾驶员成功泊车后会弹出图像及声音提示。' },
                { 'start': 171, 'end': '174', 'title': '倒车影像RCTA泊车预警系统', 'desc': '切换至倒档后，倒车影像可显示后方10米内的清晰视野，并会在屏幕上显示动态轨迹线，指引行车轨迹。' },
                { 'start': 181, 'end': '185', 'title': '一键四门天窗遥控关闭', 'desc': '' }
            ]

        };
}


    setVal()
    setMorePics(1, 6);
    initSpec();
    setWallpaperSliser();

$(function(){
    bindEvent();
})

function getScrollTop() { //获取滚动条当前位置
    return Math.abs(contentScroll.mcs.top);
};

function checkIsView(o) { //检测是否在可视区域

    var st = getScrollTop();
    var wh = $(window).height();
    var min = o.position().top;
    if (o.css('position') == 'absolute' || o.hasClass('row')) {
        min = o.parent().position().top + min;
    }
    var viewPos = st + wh;
    var h = o.height();
    var max = min + h;
    var isView = false;
    if (viewPos >= min && st <= max) {
        isView = true;
    };
    return isView
};

function getMiddlePos(o) { //获取在屏幕中间的滚动条位置
    var wh = $(window).height();
    var h = o.height();
    var st = o.position().top - wh + h + ((wh - h) * 0.5);
    return st;
};




function moveKv() {
    if (checkIsView($('.kv'))) {
        var top = getScrollTop();
        $('.kv').children('.kv-wrap').css({ 'transform': 'translateY(' + top * baseSpeed + 'px)' })
    }
};

function initData() {
    $kvTitles.each(function(i) {
        kvTitleTop[i] = parseInt($(this).css('top'));
    });
};

function setFeatureTitle() {
    var wh = $(window).height();
    var ww = $(window).width();

    $kvTitles.each(function(i) {
        var _this = $(this);
        var closest = _this.closest('.feature-kv');
        if (checkIsView(closest)) {
            var st = getScrollTop();
            var view = closest.position().top - wh;
            var mindd = getMiddlePos(closest) - view;
            var ratio = ww / baseWidth;
            var top = kvTitleTop[i] * ratio + mindd * baseSpeed;
            _this.css('top', top - (st - view) * baseSpeed);
        }
    });
};

function initSpec() {
    var specHash = ['parameters', 'appearance', 'interior', 'security', 'security2', 'comfort'];
    // var specHash = ['parameters', 'appearance', 'interior', 'security', 'security2', 'comfort', 'choose'];
    var spec = $('.spec-wrap');
    var subMneu = $('#sub-menu').find('a');
    var st = [];

    $('.spec tr').each(function() {
        var tds = $(this).children('td');
        var first = tds.eq(0);
        first.addClass('tleft');
    });

    $('td[colspan=7]').addClass('title');
    spec.mCustomScrollbar({
        scrollbarPosition: 'outside',
        mouseWheel: {
            scrollAmount: 100
        },
        callbacks: {
            whileScrolling: function() {
                for (var i = st.length - 1; i >= 0; i--) {
                    if (-this.mcs.top >= st[i]) {
                        $('#sub-menu a.active').removeClass('active');
                        subMneu.eq(i).addClass('active');
                        break;
                    }
                }
            }
        }
    });


    $('#spec td.title').each(function() {
        st.push($(this).position().top + 102);
    });
    for (var i = 0; i < subMneu.length; i++) {
        subMneu.eq(i).attr('href', '#' + specHash[i]);
        $('td[colspan=7]').eq(i).attr('id', specHash[i]);

    };

    subMneu.on('click', function(event) {
        event.preventDefault();
        var _this = $(this);
        if (_this.hasClass('active'))
            return;
        // subMneu.removeClass('active');
        // _this.addClass('active');
        var i = subMneu.index(this);
        spec.mCustomScrollbar("scrollTo", st[i]);
        var txt = $(this).text();
        hylink.trackEvent('君越minisite-车型配置-'+txt,'车型配置','点击',txt);
        // var lb = $(this).text();
    });

};

function setWallpaperSliser() {
    var items = $('.wallpaper-list .item');
    for (var i = 0; i < items.length; i++) {
        items.eq(i).attr('data-index', (i+1)).append('<div class="links"><a target="_blank" href="images/wallpaper/' + (i + 1) + '/1020x768.jpg">1020X768</a><a target="_blank" href="images/wallpaper/' + (i + 1) + '/1280x720.jpg">1280X720</a><a target="_blank" href="images/wallpaper/' + (i + 1) + '/1920x1080.jpg">1920X1080</a></div>');
    }


    $('.wallpaper-list .items').bxSlider({
        slideWidth: 214,
        minSlides: 1,
        maxSlides: 4,
        moveSlides: 3,
        slideMargin: 10,
        pager: false,
        nextSelector: $('.wallpaper .arrow-r'),
        prevSelector: $('.wallpaper .arrow-l')
    });
    $('.wallpaper-list .items a').on('click', function(event) {
        var txt = $(this).text();
        var i = $(this).closest('.item').data('index');
       // hylink.trackEvent('君越minisite-精彩鉴赏-壁纸'+i+'-'+txt,'彩鉴赏','点击','壁纸'+i+'-'+txt);

    });


};


function bindEvent(){
    $('.stabs-box .t').on('click', function() {
        var _this = $(this);
        if (_this.hasClass('active')) return;
        _this.siblings('.active').removeClass('active');
        _this.addClass('active');
        var i = $('.stabs-box .t').index(this) + 1;
        var num = parseInt($(this).data('pics'));
        setMorePics(i, num)
        //var track = ['外观','内饰','动力操作','安全技术'];
       // hylink.trackEvent('君越minisite-更多亮点-'+track[i-1], '更多亮点', '点击', track[i-1]);
    });

    var picindex = 2;
    $('.exterior .feature-pic .arrow-l').on('click', function() {
        picindex--
        if (picindex == 0) picindex = 3;
        exteriorPic(picindex)

    });

    $('.exterior .feature-pic .arrow-r').on('click', function() {
        picindex++
        if (picindex == 4) picindex = 1;
        exteriorPic(picindex)

    });

    function exteriorPic(i) {
        var items = $('.exterior .feature-pic .item');
        var left = [];
        if (i == 1) {
            left = ['26%', '58%', '-4%']
        } else if (i == 2) {
            left = ['-4%', '26%', '58%']
        } else if (i == 3) {
            left = ['58%', '-4%', '26%']
        };
        items.removeClass('active');
        items.eq(i - 1).addClass('active');
        for (var i = 0; i < items.length; i++) {
            items.eq(i).css('left', left[i]);
        };
    };


    $('.interior .hotpoint').on('click', function(event) {
        var track = ['Onstar在线助理','后排座椅','前排座椅'];
        var ga = ['/interior-3','/interior-2','/interior-1'];
        var i = $('.interior .hotpoint').index(this);
        var pics = [
            'images/interior/pics/01.jpg',
            'images/interior/pics/02.jpg',
            'images/interior/pics/03.jpg'
        ]
        showPopLayer(pics, 1, i);
    });

    $('.hud-box a').on('click', function(event) {
        event.preventDefault();
        var _this = $(this);
        if (_this.hasClass('active')) return;
        var i = $('.hud-box a').index(this);
        var pics = $('.hud-pic .pic');
        _this.addClass('active');
        _this.siblings('.active').removeClass('active');
        pics.stop().fadeOut(500);
        pics.eq(i).stop().fadeIn(500);
       // hylink.trackEvent('君越minisite-安全-HUD平视显示系统'+(i+1), '安全', '点击', 'HUD平视显示系统'+(i+1));
    });
}


function setMorePics(a, b) {
    var t1 = ['蓄势饱满的车头','低风阻多功能外后视镜','三款多幅条铝合金轮毂','大气舒展的车尾','隐藏式后盖开启按钮','一体化镀铬双排气管'];
    var t2 = ['优雅舒适的内部空间','内饰色彩搭配','MoonWhite月光白氛围灯','四辐多功能真皮方向盘','无边纯平8吋高清触摸屏','高清行车电脑','两片式超大全景天窗/全遮光电动遮阳帘','后排电动遮阳帘','后排中央扶手带空调娱乐控制面板/AQS空气质量控制系统/3区自动空调系统','丰富多变的储物空间/29处实用储物空间','大开口设计的行李箱','Quiet-tuning?别克专利静音科技'];
    var t3 = ['发动机自动启停功能','增强型麦弗逊前悬 后独立多连杆后悬/8点式全框式副车架/EPS电子助力转向系统','通用专利FNC制动盘/高性能静音轮胎'];
    var t4 = ['BFI一体化车身/全车10安全气囊','EHHSA增强型坡道起步辅助','TPMS智能胎压监测系统','电子防眩目内后视镜','倒车影像'];
    //var track = ['外观','内饰','动力操作','安全技术'];
    //var ga = ['/more-exterior-','/more-interior-','/more-drive-','/more-safety-'];
    var cur = [];
    var pics = [];
    switch(a){
        case 1:
            cur = t1
            break;
        case 2:
            cur = t2
            break;
        case 3:
            cur = t3
            break;
        case 4:
            cur = t4
            break;

    }
    var str = '<div class="items"></div><div class="arrow-btn arrow-btn-l"></div><div class="arrow-btn arrow-btn-r"></div>';
    $piclist.html(str);
    var items = $piclist.find('.items');
    str = '';

    for (var i = 0; i < b; i++) {
        str += '<div data-index="' + i + '" class="item"><img src="images/more/' + a + '/' + (i + 1) + '.jpg"></div>';
        pics.push('images/more/' + a + '/big/' + (i + 1) + '.jpg');
    }
    items.html(str);
    items.bxSlider({
        pager: false,
        slideWidth: 353,
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 3,
        slideMargin: 0,
        nextSelector: $('.piclist .arrow-btn-r'),
        prevSelector: $('.piclist .arrow-btn-l')

    });

    items.find('.item').on('click', function() {
        var i = $(this).data('index');
        showPopLayer(pics, 2, i);
        //hylink.trackEvent('君越minisite-更多亮点-'+track[a-1]+'-'+cur[i],'更多亮点','点击',cur[i]);
        setTimeout(function(){
           //hylink.trackPV('君越minisite-更多亮点-'+track[a-1]+'-'+cur[i],ga[a-1]+(i+1));
        },500);
    });

};
function showPopLayer(pics, box, start, bf, cb) {
    var startSlider = start || 0;
    var str = '<div class="pop-slider-box pop-slider-box-' + box + '"><div class="arrow arrow-l"></div><div class="slder-wrap"><ul></ul><div class="close-pop"></div></div><div class="arrow arrow-r"></div></div>'
    $popLayer.html(str);
    var ul = $popLayer.find('ul');
    str = '';
    for (var i = 0; i < pics.length; i++) {
        str += '<li><img src="' + pics[i] + '"></li>'
    }
    ul.html(str);
    $popLayer.fadeIn();

    if (bf) {
        bf();
    }

    ul.bxSlider({
        startSlide: startSlider,
        pager: false,
        nextSelector: $('.arrow-r', $popLayer),
        prevSelector: $('.arrow-l', $popLayer)
    });
    $('.close-pop').on('click', function(event) {
        $popLayer.fadeOut(function() {
            $popLayer.empty();
        });
    });
    if (cb) cb();

};

function showMod() {
    var _this;
    $ophide.each(function() {
        _this = $(this);
        if (checkIsView(_this) && !_this.hasClass('showop')) {
            _this.addClass('showop')
        } else if (!checkIsView(_this) && _this.hasClass('showop')) {
            _this.removeClass('showop')
        }
    });
};

/*function sideNav() {
    var mz = ['外观', '内饰', '动力', '安全', '更多亮点',  '车型配置', '精彩鉴赏'];
    var ga = ['/exterior', '/interior', '/drive', '/safety', '/more', '/spec', '/appreciation'];
    var tn = 0;
    for (var i = 0; i < $fullMod.length; i++) {
        if(getScrollTop() < 200){
            $fullMod.removeClass('sin');
            $sidenavs.removeClass('active');
            $sidenavs.eq(0).addClass('active');
            break;
        }else if (getScrollTop() >= $content.height() - $(window).height()-100) {
            tn = mz.length - 1;
            if(!$fullMod.eq(tn).hasClass('sin')){
                $fullMod.removeClass('sin');
                $sidenavs.removeClass('active');
                $sidenavs.eq(tn+1).addClass('active');
                $fullMod.eq(tn).addClass('sin');
               // hylink.trackPV('君越minisite-'+mz[tn],ga[tn]);
            }
            break;

        } else {
            if (checkIsView($fullMod.eq(i))) {
                tn = i;
                if (!$fullMod.eq(tn).hasClass('sin')) {
                    $fullMod.removeClass('sin');
                    $fullMod.eq(tn).addClass('sin');
                    $sidenavs.removeClass('active');
                    $sidenavs.eq(tn+1).addClass('active');
                   // hylink.trackPV('君越minisite-'+mz[tn],ga[tn]);

                    // hylink.trackPV('君越minisite-' + mz, ga);
                    // console.log(mz[tn])
                }
                break;
            }

        }
    }

};
function bindEvent(){
    $sidenavs.on('click', function(event) {
        event.preventDefault();
        var hash = $(this).attr('href');
        var top = $(hash).position().top;
        $(".content-wrap").mCustomScrollbar('scrollTo', top, {
            scrollInertia: 1000
        });
        var txt = $(this).text();
        // hylink.trackEvent('君越minisite-左侧导航-'+txt, '左侧导航', '点击', txt);


    });
}*/


function buling(num, n) {
    var i = (num + "").length;
    while (i++ < n) num = "0" + num;
    return num;
}

function numAni(o) {
    var n;
    var speed = o.speed || 1000;
    var obj = { 'value': 0 };
    $(obj).stop().animate({ 'value': o.num }, {
        duration: speed,
        easing: 'swing',
        step: function(a) {
            if (o.float > 0) {
                n = a.toFixed(o.float);
            } else {
                n = parseInt(a);
                n = buling(n, String(o.num).length)

            }
            o.el.text(n)
        }
    })
};
function exteriorNum() {
    if (checkIsView($exteriorparams)) {
        if (!$exteriorparams.hasClass('in')) {
            $exteriorparams.addClass('in');
            numAni({
                el: $('.param-1 h3'),
                num: 0.29,
                float: 2
            });
            numAni({
                el: $('.param-2 h3'),
                num: 5018,
                float: 0
            });
            numAni({
                el: $('.param-3 h3'),
                num: 2905,
                float: 0
            });
        }
    } else {
        $exteriorparams.removeClass('in');
    }
};