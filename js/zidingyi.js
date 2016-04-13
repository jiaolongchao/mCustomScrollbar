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
                { 'start': 23, 'end': 27, 'title': 'RES������Զ����ͣ', 'desc': '' },
                { 'start': 28, 'end': 31, 'title': 'ȫ�·���ʽ�Ƹ�������դ', 'desc': 'ȫ�·���ʽ�Ƹ�������դ������ʷ������Ͼ��������Ԫ�أ��ɱ�˻ձ���������չ�ķ������ͣ����Ը�����������״β��õ�ƺ�߼���Ϳ���գ��Դ�ůɫ���Ľ����ʸУ������һ����դ�����������ͷ�����ƣ�����������������������µ�δ����' },
                { 'start': 32, 'end': 34, 'title': 'LED�ռ��г���', 'desc': '��29��LED��ɵ�չ����ȫLED��ƣ����м���ʽ���Ԫ�أ�Ϭ�����¡������ڲ�����������ˮ���ḻ�Ĳ��ʶԱȣ����ճ������������˵����ߣ���ϸ�ĺ�ڵ�����άչ��ʽ�ռ��г��ƣ�������͸��LEDɫ�¸��ӽ��չ⣬������������Ӧ���٣�Ϊ��ʻԱ�ṩ���õ�ҹ���ʻ��ȫ���ϡ�' },
                { 'start': 35, 'end': 37, 'title': '�ͷ���๦������Ӿ�', 'desc': '����Ӿ���װ���Ű��Ϸ������ͷ��貢�����С��A��ä����Ϊ��ʻ�ߴ������õ�ǰ����Ұ��������ĵ綯���ڡ����ȳ�����LEDת��Ƶȹ����⣬���䳵�ͻ����е綯�۵����Զ���ѣĿ��λ�ü���͵����Զ����·��۵ȹ��ܣ�ʵ�ñ�ݡ�' },
                { 'start': 38, 'end': 41, 'title': '360�Ȼ���һ��ʽ����', 'desc': '' },
                { 'start': 42, 'end': 45, 'title': '�๦�����幤��ѧ����', 'desc': 'ȫ��һ����Խ�����ιǼܲ���ͨ��ȫ��ȫ�¿����Ǽ�ƽ̨�����ر�����й�����ģ�����ݿ�����˻������Ż�����������ƣ���ȫ�����������ߣ�����˶�;�볤;��ͬ�����������󡣳���12��綯���ڹ���֮�⣬�����м��ȡ�ͨ�硢��Ħ�͵���ͷ��ȹ��ܣ���ʻ����װ�������ǻ۰�ȫƥ��������ѡ��α��ֱ��ܹ���ǰ��8�ȷ�Χ�ڽ��е綯���ڣ������ĺ��ų˿�����;�л���ƣ�ͣ�ʹ������;�������á�' },
                { 'start': 46, 'end': 48, 'title': '��ʽ˫���߹���', 'desc': '���ͨ������������ͻ��ĵط��������β��Ǿ����û���������ȵĹؼ���ȫ��һ����Խ�߾�ȫ��Ϊ�ݳ���Ӫ���������ŵĳ��ڻ��������Ǳ�̨���п�̨���Ű��һ��������ܽӴ������򣬾������������ָ�����ĸߵ����ʡ������Ǳ�塢�Ű塢�п�̨��������ξ�������ѹ���գ�ʵ���������ķ�ʽƴ�죬���ֳ����������ʸС�' },
                { 'start': 49, 'end': 51, 'title': '�߼���Ƥ��������', 'desc': '' },
                { 'start': 52, 'end': 53, 'title': '���ٿ���ľ���ΰ�', 'desc': '' },
                { 'start': 56, 'end': 60, 'title': '������Կ�׽���', 'desc': '' },
                { 'start': 61, 'end': 64, 'title': '��ʻԱ�����Զ�ӭ�������书��', 'desc': '' },
                { 'start': 65, 'end': 68, 'title': '19�������Ͷ�����Ͻ����', 'desc': 'ȫ��һ����Խ�ṩ�������������빦���Ե����Ͻ���챡�������챲�����������ƣ��Ӷ��ṩ�û����ڴ������ʡ��ٿغ;���Ʒ�ʡ�ͬʱ�����м��õ�ͨ�����ܣ����Ż��ƶ���ȴЧ����' },
                { 'start': 69, 'end': 71, 'title': 'ǰ��12��綯��������', 'desc': 'ȫ��һ����Խ�����ιǼܲ���ͨ��ȫ��ȫ�¿����Ǽ�ƽ̨�����ر�����й�����ģ�����ݿ�����˻������Ż�����������ƣ���ȫ�����������ߣ�����˶�;�볤;��ͬ�����������󡣳���12��綯���ڹ���֮�⣬�����м��ȡ�ͨ�硢��Ħ�͵���ͷ��ȹ��ܣ���ʻ����װ�������ǻ۰�ȫƥ��������ѡ��α��ֱ��ܹ���ǰ��8�ȷ�Χ�ڽ��е綯���ڣ������ĺ��ų˿�����;�л���ƣ�ͣ�ʹ������;�������á�' },
                { 'start': 72, 'end': 74, 'title': 'һ������', 'desc': '' },
                { 'start': 75, 'end': 77, 'title': '�ޱߴ�ƽ8�����崥����', 'desc': '8�����崥�������õ��ݴ��ؼ�������ȴ�ͳ��������Ӧ���졣��Ļ���渲�и�͸�ⲣ�����ʣ��߱�����Ч�����ã������ָм��ѵ��ŵ㡣��Ļ֧����ʾ��ý����Ϣ���ֻ�ͨѶ��������ʾ�ȹ��ܣ���������һ�㼴����ɲ�����' },
                { 'start': 83, 'end': 85, 'title': 'Bose Centerpoint?��������ϵͳ��11������', 'desc': 'ȫ��һ����Խʹ����Boseȫ�µ�����8ͨ���������������죬�����䱸��Bose�ڶ��� Centerpoint?ģ�⻷����ϵͳ���������˵ڶ���AudioPilot�����������ܺ�ר����SurroundStage?���������ִ�������ͨ�������ڳ��ڵ�11����������Ӫ�쳵�������������ƵĿռ�С�������Ĵ��źű��֡���ʵ������Ƶ�����⣬�Ӷ�Ӫ���Ժ�������ʱ��֡�' },
                { 'start': 86, 'end': 89, 'title': 'ETRS�����ŵ�', 'desc': '����״���ȫ��һ����Խ��ʹ�����Ƚ���ETRS�����ŵ��������ɼ�����ǿ�;��Ժ���Ӧ��ͬʱ���ܽ�ʡ����Ŀռ䡣ETRS�����ŵ�ʡȥ�˸��ӵĻ�е�ṹ������ʻԱ�Ĳ���ת��Ϊ���źţ��ɿ�����ֱ�ӿ��Ʊ�������е�λ�任�����ּ������������ʡ�˳��ڿռ䣬����������Ҳ��Ϊ��ʻ�������������밲ȫ�ԡ�' },
                { 'start': 102, 'end': 103, 'title': '��Ƭʽ����ȫ���촰', 'desc': 'ȫ��һ����Խ�䱸����Ƭʽ����ȫ���촰���촰͸�����Ϊ0.836m2����ϲര�Ĵ������ƣ�Ϊ�˿��ṩ�������ĳ��ڿռ䡣' },
                { 'start': 117, 'end': 118, 'title': 'һ�廯�Ƹ�˫������', 'desc': '����һ�廯Ƕ��ʽ��Ƶ������ܷ��г�β���࣬��������ƹ�Ƹ����ʽ��е�׺��͹�Ըߵ������˶����' },
                { 'start': 122, 'end': 125, 'title': '˫�ӷ��������', 'desc': 'ȫ��һ����Խ�ĳ�����������˸����Ա仯��������5018���ף����ӳ���2905���ף��ڳ��������ͬʱ��ǰ������һ������������67���ף��Դ˴��������Ч���������͸����Ŀռ䲼�á���������������ͣ�������������е��Ӿ��������ȫ�µ�˫�ӷ�������ƹ��ճ��������ݵ����ˣ�͸��������ȡ�' },
                { 'start': 139, 'end': 143, 'title': 'չ����ȫLED���', 'desc': '��29��LED��ɵ�չ����ȫLED��ƣ����м���ʽ���Ԫ�أ�Ϭ�����¡������ڲ�����������ˮ���ḻ�Ĳ��ʶԱȣ����ճ������������˵����ߣ���ϸ�ĺ�ڵ�����άչ��ʽ�ռ��г��ƣ�������͸��LEDɫ�¸��ӽ��չ⣬������������Ӧ���٣�Ϊ��ʻԱ�ṩ���õ�ҹ���ʻ��ȫ���ϡ�' },
                { 'start': 144, 'end': 148, 'title': 'Moon White�¹�׻��Ʒ�Χ��', 'desc': '�ӽ�����Ȼ���ߵ��¹�׷�Χ�ƣ��ܸ��õĻ�ԭ���β��ʵ���ʵ�ʸУ�ͬʱ����������͵����շ�Χ��' },
                { 'start': 163, 'end': 164, 'title': 'ȫ��ʽ�����Ƹ�����', 'desc': '' },
                { 'start': 171, 'end': 172, 'title': 'չ����LEDβ��', 'desc': '��չ��LEDβ�������˳������棬��챦ʯ��Ƕ�복β������һ��Ѥ��������ٻӰ����ڵ����λ�õƣ�����������������棬��д�˱��������ײ������ϸ�ĵ�����������ճ�����Ŀ�ȣ�ǿ����β�������š�' }
            ],

            't2': [
                { 'start': 10, 'end': 11, 'title': '����ʽ��ǿ�����ť', 'desc': '������ǿ�����ť����������ں�ǳ���֮�ڣ�ʹ��β�������ۼ�ֻ࣬���ᰴ���꼴�ɴ�������ǡ�' },
                { 'start': 12, 'end': 14, 'title': '523L�󿪿����������', 'desc': '�ݻ��ﵽ523L������������4���߶��������4��24�������䣬�����ճ���Ʒ���ǲ��ڻ��¡�' },
                { 'start': 18, 'end': 19, 'title': '���ǰ���ſռ�', 'desc': '' },
                { 'start': 20, 'end': 23, 'title': '945��������ռ�', 'desc': '' },
                { 'start': 29, 'end': 31, 'title': '8Ӣ������г�����', 'desc': '�Ǳ��������8Ӣ��������������г����Գ�����ʾ��ͳ������Ϣ�⣬���ɱ����ʾ�绰����ý�塢������ͼ����Ϣ����϶๦�ܷ�����ʹ��ʻ�߲������ӱ�����' },
                { 'start': 34, 'end': 36, 'title': 'TPMS����̥ѹ���ϵͳ', 'desc': 'TPMS����̥ѹ���ϵͳʱ�̼��̥ѹ������˶���ɵ��¹ʡ�ÿ����̥�д���̥ѹ������ֱ�Ӳ���̥ѹ����ͨ��������Ƶ�źŽ�̥ѹֵ�������г����Խ�����ʾ��������̥ѹ�쳣����������ʻ�߽���Ԥ����' },
                { 'start': 38, 'end': 39, 'title': '��WIFI�ȵ㹦�ܵ�OnStar 4G LTE', 'desc': '��10��OnStarȫʱ��������Ϊ�û��ṩ������ײ�Զ�������������ԮЭ������ȫ���ϡ�������������⡢ȫ��������绰���ֻ�Ӧ�õ�7����26������ȶ��ɿ���4G LTEʹ���������һ���ź������ʹ����ѵĿɿ��ƶ��ȵ㣬����ͬʱ���7̨�����豸������������ʱ��س�������Ϣ���֣��ḻ�����' },
                { 'start': 40, 'end': 44, 'title': '���Ŷ๦�ܵ綯��������', 'desc': 'ȫ��һ����Խ�����ιǼܲ���ͨ��ȫ��ȫ�¿����Ǽ�ƽ̨�����ر�����й�����ģ�����ݿ�����˻������Ż�����������ƣ���ȫ�����������ߣ�����˶�;�볤;��ͬ�����������󡣳���12��綯���ڹ���֮�⣬�����м��ȡ�ͨ�硢��Ħ�͵���ͷ��ȹ��ܣ���ʻ����װ�������ǻ۰�ȫƥ��������ѡ��α��ֱ��ܹ���ǰ��8�ȷ�Χ�ڽ��е綯���ڣ������ĺ��ų˿�����;�л���ƣ�ͣ�ʹ������;�������á�' },
                { 'start': 48, 'end': 55, 'title': '��һ������ǻۻ���ϵͳ����Apple Carplay', 'desc': 'ȫ��һ����Խ���ص��ǻۻ���ϵͳ�����û��ڳ���ʼ�����������ʽ�������ӣ�ͬʱҲ�������������üݳ����û����ġ���ϵͳ����Apple CarPlay����ͨ������8Ӣ����崥������ʾ��ʹ�þ���֤�������ֻ����ݺ�Ӧ�ó��򡣸���Ҫ���Ǹ�ϵͳ�����ڳ����������������б������¡�ͬʱ�������䱸����������գӣ£�����Xin��·��Դ���롣' },
                { 'start': 66, 'end': 67, 'title': 'EPB����פ��', 'desc': '' },
                { 'start': 82, 'end': 83, 'title': '�ķ��๦����Ƥ������', 'desc': '�๦�ܷ�����ʹ����Ƥ���ʰ�������С���У��ո����ʣ����ڲٿء������̼��ɶ�ý����ơ������绰���������ƺ�Ѳ���趨�ȹ��ܰ�����Ϊ�û�������Ϊ��ݰ�ȫ���г����顣' },
                { 'start': 104, 'end': 105, 'title': 'HUDƽ����ʾϵͳ', 'desc': '����״������³���ʹ���˿Ƽ���ʮ���HUDƽ����ʾϵͳ������ʾ������4��ҳ����ͼ�����١�Ӱ�������������ܡ���������䱸���糵��ƫ�뾯���ǰײԤ���ȹ��ܣ�HUD��Ҳ����ʾ���档' },
                { 'start': 117, 'end': 118, 'title': '����������ִ��յ����ֿ���', 'desc': '���ų˿Ϳ���ͨ����������ϵİ������ƶ�ý�弰���ſյ��趨�ȹ��ܣ����ӷ��㡣' },
                { 'start': 134, 'end': 137, 'title': 'Quiet-tuning?���ר�������Ƽ�ANC�������뼼��', 'desc': 'ȫ��һ����Խ������������ɢ��ʽ��ͨ����������ɢ����桢������̺���������ĵ������������ڵ��̼�����ϵͳ��ȫ��һ����Խ������Һ������棬Һѹ���𽺳���������·��������𶯺�������ͬʱ�����˳��������ܷ������в���ѧ������������һ�����������������ܣ�����ͼ��ݰ�İ���������ȫ��һ����Խȫϵ�䱸��ANC�������뼼����ͨ�������������ڵ���˷�ʵʱ��ⷢ����������Ȼ��ͨ���������ͷŵ��������ķ����������Ӷ������������Ĺ���������ȫ�澻������������' },
                { 'start': 141, 'end': 142, 'title': '����USB�ӿ�', 'desc': '' },
                { 'start': 147, 'end': 149, 'title': '�������μ���/ͨ��/��Ħ����', 'desc': '' },
                { 'start': 158, 'end': 161, 'title': '�����Զ��յ�ϵͳ', 'desc': '�����걸������3���Զ��յ�ϵͳ���ܹ�������������Զ����������¶ȣ�������ǰ���ų�Ա���ܰ����Լ��������趨�յ��¶ȡ�' }
            ],

            't3': [
                { 'start': 10, 'end': 12, 'title': '0.29����ϵ��', 'desc': 'ȫ��һ����Խ����������Ʊ�֤�˿�������ѧ�ϵ����ơ�������ȫ����Ƶĳ�������������Ż��ľֲ����͡�����1000Сʱ��������������������͵ĳ����Ƚӽ��ͷ���ԭ�ͣ���������ģ�����Ľ�����դ���ڡ���������λ�á�ǰ��絲�Ƕȵ������������Ŀ�������·�ߣ�����ϳ�ʱ��綴������һ�Ż�����ÿ�����棬�Ӷ������0.29cd�Ŀ�������ѧ���͡�' },
                { 'start': 18, 'end': 24, 'title': 'BFIһ�廯����', 'desc': 'ȫ��һ����Խ����ܹ���Ƹ���ȫ�����ǰ�ȫ��ײ��׼�������ǿ�Ȳ���ʹ�ñ����ߴ�75%�����г���ǿ�ȸֲĴﵽ41%���������ǿ���ܴﵽ1500Mpa��' },
                { 'start': 38, 'end': 44, 'title': '2.0T SIDIֱ��������ѹ������', 'desc': 'ȫ��һ����Խ28T����Խ���ص�2.0T SIDIֱ��������ѹ��������������2013����ֵ�ʮ�ѷ�������ӵ��192Kw/5400rpm������ʼ�350Nm/2000-5000rpm�ķ�ֵŤ�أ������ʸߴ�96Kw/L��ӵ�аٹ������7.4�롢�ٹ����ۺ��ͺ�7.6����׿Խ���ܡ�' },
                { 'start': 47, 'end': 50, 'title': '6��DSS������ͣ������', 'desc': '��2.0T��������ƥ�����6��DSS������ͣ�����䣬��Ŀǰ���ȫ��һ��������ʹ����Ϊ�㷺�ı�����֮һ��ӵ�м��ѵĿɿ��Ժ����õ����ܡ�' },
                { 'start': 65, 'end': 70, 'title': '��ǿ����ѷǰ��', 'desc': '�����й���·�ص�����Ż���ǰ������ϵͳ�������ṩ��Ѹ�ٺ����ʵ�������Ч�����������õļ������ܣ�ͬʱ�ܹ������㹻�Ĳ�����ԣ��߱����ѵĲٿ����ܡ�' },
                { 'start': 71, 'end': 74, 'title': '�����˶�������', 'desc': '' },
                { 'start': 75, 'end': 78, 'title': '�˵�ʽȫ��ʽ������', 'desc': '����ȫ����Ƶ�ȫ��ʽ�����ܣ�ͨ��4���������ӵ���4�����Ӽ�ǿ���복�����ӣ����Ҵ�����߰�ȫ�Եļ���ʽ��ײ���ܺ���ƣ��Դ�ȫ��ȷ���������������밲ȫ�ԡ�' },
                { 'start': 86, 'end': 96, 'title': '�ڶ���CDCȫʱ����ʽҺ������ϵͳ', 'desc': 'ȫ��һ����Խʹ���˵ڶ���CDCȫʱ����ʽҺ������ϵͳ���������ڲ��Ĵ�������ÿ��100�ε�Ƶ�ʼ��������Ĺ���״̬���Դ��ж�·��״̬��ʵʱ�����������ᣬȷ����ѵļ����ԺͲٿ��ԡ����⣬�˱��𻹻����ż�ʻ���ı仯�����˶�ģʽ�������������������ᣬ��������Χ��20%��' },
                { 'start': 111, 'end': 115, 'title': 'EPS��������ת��ϵͳ', 'desc': 'ȫ��һ����Խ���������°�EPS��������ת��ϵͳ���ָ����ɶ�ֱ�ӣ��ڵ���״̬�¿��ṩ�ϴ�����������ڸ��ٹ�·�ĸ���״̬�£�����Ҫ�ϴ����������ת��' },
                { 'start': 124, 'end': 126, 'title': '����ESP9.1�����ȶ�ϵͳ', 'desc': '' },
                { 'start': 154, 'end': 158, 'title': '�������Զ���ͣ����', 'desc': 'ȫ��һ����Խȫϵ�䱸�������Զ���ͣ���ܣ���Գ���ӵ��·���͡�����ͣͣ�����ճ���ʻ���ܹ�����޶Ƚ���ȼ�����ĺ�β���ŷš�' },
                { 'start': 159, 'end': 161, 'title': '�ٹ�����·���ͺ�7.6L', 'desc': 'ȫ��һ����Խ28T����Խ���ص�2.0T SIDIֱ��������ѹ��������������2013����ֵ�ʮ�ѷ�������ӵ��192Kw/5400rpm������ʼ�350Nm/2000-5000rpm�ķ�ֵŤ�أ������ʸߴ�96Kw/L��ӵ�аٹ������7.4�롢�ٹ����ۺ��ͺ�7.6����׿Խ���ܡ�' },
                { 'start': 166, 'end': 168, 'title': '��������绰', 'desc': '' },
                { 'start': 172, 'end': 174, 'title': '�˶�ģʽ', 'desc': '�䱸����һ���˶�ģʽ������28T�ϰ��������任���߼���ת���������������������ֵı仯�����˶�ģʽ�İ����£�ȫ��һ����Խ��������ƽ����������ٿ��ԣ����������ʻ��Ȥ��' },
                { 'start': 182, 'end': 183, 'title': '�ķ��๦�ܷ����̴�������Ƭ', 'desc': 'λ�ڷ����̺󷽵Ļ�����Ƭ�������ü�ʻԱ��˫�ֲ��뿪�����̵�����¿��ٶԵ�λ�����л����ṩ����İ�ȫ�Ժͼ�ʻ��Ȥ��' }
            ],

            't4': [
                { 'start': 15, 'end': '19', 'title': 'ACC����ӦѲ��ϵͳ', 'desc': '�ڳ��ٴ���25km/hʱ��ͨ�����ó����ٶȺͳ�����������Զ����������ٶ��Ա�����ǰ����Ԥ����롣�ɳ���������������ȫֹͣ��' },
                { 'start': 29, 'end': '32', 'title': 'LDW����ƫ��Ԥ��', 'desc': '' },
                { 'start': 33, 'end': '39', 'title': 'LKA��������ϵͳ', 'desc': '������ʱ����80-180km/h֮�䣬�������������̽�⵽�ĳ�����ȴû��ʹ����Ӧ�����ת��ƣ�����Ỻ����ת�������̼��Ը�������Ҳ���ڳ���Խ��������ʱ��������ƫ�뾯�档���ϵͳ̽�⵽��������ת���򲻻���Ը����򷢳����档' },
                { 'start': 56, 'end': '57', 'title': 'EHHSA��ǿ���µ�����ϵͳ', 'desc': '' },
                { 'start': 67, 'end': '71', 'title': 'HBA����Զ���ƹ����', 'desc': 'HBA����Զ������л�����ӭ��������ͬʱ�Զ�����Զ������л��������ٳ���40����/Сʱ����Χ�ڰ���û����������ʱ��ϵͳ��Զ��ƣ���ϵͳ̽�⵽�ᳵ������ǰ�յơ�ǰ��������β�ơ���Χ�����㹻��������ҪԶ��ơ����ٽ���20����/Сʱ����ʱ��Զ����Զ��л�������ƣ��Դ���߼�ʻ�İ�ȫ�ԡ�' },
                { 'start': 87, 'end': '88', 'title': 'SBZA��äԤ��ϵͳ', 'desc': 'SBZA��ä��Ԥ��ϵͳ��ʵʱ��⳵���󷽵�·�������ϵͳ̽�⵽�������Һ��г�������ʱ����Ӧһ��ĺ��Ӿ���ʾ�ƽ��Զ���������ʱ����򿪶�Ӧ�󷽳���һ��ת���ʱ����ʾ�ƽ�������˸����Ϊ���Ѽ�ʻԱ�Ķ��⾯�档' },
                { 'start': 104, 'end': '105', 'title': 'FDIǰ��������ʾ', 'desc': 'ͨ������ǰ���ĳ������״��ǰ����ͷ�����ǰ���ľ��룬�����ٴ���40km/hʱ�����Ǳ�����ʾ��ǰ����ʱ����롣' },
                { 'start': 119, 'end': '124', 'title': '������Ӧʽ�޹���ˢ', 'desc': '' },
                { 'start': 126, 'end': '127', 'title': 'ͨ��ר��FNC�ƶ���', 'desc': 'FNC̼������������һ��������߽���Ӳ�ȵ��ȴ����գ����ӳ������������˽����ּ����������ƶ��̣����������ƶ��̵�Ӳ�ȣ���ĥ�Ժ�ƣ��ǿ�ȡ�' },
                { 'start': 130, 'end': '132', 'title': '����Ӿ�����', 'desc': '����Ӿ���װ���Ű��Ϸ������ͷ��貢�����С��A��ä����Ϊ��ʻ�ߴ������õ�ǰ����Ұ��������ĵ綯���ڡ����ȳ�����LEDת��Ƶȹ����⣬���䳵�ͻ����е綯�۵����Զ���ѣĿ��λ�ü���͵����Զ����·��۵ȹ��ܣ�ʵ�ñ�ݡ�' },
                { 'start': 138, 'end': '139', 'title': '���ӷ���Ŀ������Ӿ�', 'desc': '����Ӿ���װ���Ű��Ϸ������ͷ��貢�����С��A��ä����Ϊ��ʻ�ߴ������õ�ǰ����Ұ��������ĵ綯���ڡ����ȳ�����LEDת��Ƶȹ����⣬���䳵�ͻ����е綯�۵����Զ���ѣĿ��λ�ü���͵����Զ����·��۵ȹ��ܣ�ʵ�ñ�ݡ�' },
                { 'start': 146, 'end': '149', 'title': 'FCAǰ��ײԤ��CMB��ײ����ϵͳ', 'desc': '���������ٴ���10km/h��ϵͳ�ܶ�ǰ��������ʻ���߾�ֹ�ĳ���������ײΣ���ۺ����������ڱ�Ҫʱ�Լ�ʻԱ�澯���Ա��ܹ���ȡ������ܶ�������߶Գ�Ա�ı��������ϵͳ̽�⵽������ǰ������������ײ���������ʻԱû�в�ȡ��ز�������ϵͳ���������Զ�ɲ����������С��ײ��ɵ���ʧ��' },
                { 'start': 157, 'end': '158', 'title': 'PD����ʶ��/����', 'desc': 'PD����ʶ��ϵͳ�ܹ�ʶ����ǰ�������ˣ���ͨ���Ǳ����Ѽ�ʻ��ע��ǰ����ȫ��������������ײ�Ҽ�ʻ��δ�����κη�Ӧ����ϵͳ��ʹ����ɲ������ȫֹͣ��' },
                { 'start': 166, 'end': '170', 'title': 'APA�Զ�����ϵͳ', 'desc': '��30km/h���²������ʵĺ󷽻�෽ͣ��λ�����ҵ����ʵ�ͣ��λʱ��ϵͳ����ʾ��ʻԱͣ�����л���R����ϵͳ�����Զ�����ͣ���켣����ʻԱ����ɲ���͵�λ��ת��ϵͳ���Զ�����������ʻԱ�ɹ�������ᵯ��ͼ��������ʾ��' },
                { 'start': 171, 'end': '174', 'title': '����Ӱ��RCTA����Ԥ��ϵͳ', 'desc': '�л��������󣬵���Ӱ�����ʾ��10���ڵ�������Ұ����������Ļ����ʾ��̬�켣�ߣ�ָ���г��켣��' },
                { 'start': 181, 'end': '185', 'title': 'һ�������촰ң�عر�', 'desc': '' }
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

function getScrollTop() { //��ȡ��������ǰλ��
    return Math.abs(contentScroll.mcs.top);
};

function checkIsView(o) { //����Ƿ��ڿ�������

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

function getMiddlePos(o) { //��ȡ����Ļ�м�Ĺ�����λ��
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
        hylink.trackEvent('��Խminisite-��������-'+txt,'��������','���',txt);
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
       // hylink.trackEvent('��Խminisite-���ʼ���-��ֽ'+i+'-'+txt,'�ʼ���','���','��ֽ'+i+'-'+txt);

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
        //var track = ['���','����','��������','��ȫ����'];
       // hylink.trackEvent('��Խminisite-��������-'+track[i-1], '��������', '���', track[i-1]);
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
        var track = ['Onstar��������','��������','ǰ������'];
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
       // hylink.trackEvent('��Խminisite-��ȫ-HUDƽ����ʾϵͳ'+(i+1), '��ȫ', '���', 'HUDƽ����ʾϵͳ'+(i+1));
    });
}


function setMorePics(a, b) {
    var t1 = ['���Ʊ����ĳ�ͷ','�ͷ���๦������Ӿ�','�����������Ͻ����','������չ�ĳ�β','����ʽ��ǿ�����ť','һ�廯�Ƹ�˫������'];
    var t2 = ['�������ʵ��ڲ��ռ�','����ɫ�ʴ���','MoonWhite�¹�׷�Χ��','�ķ��๦����Ƥ������','�ޱߴ�ƽ8�����崥����','�����г�����','��Ƭʽ����ȫ���촰/ȫ�ڹ�綯������','���ŵ綯������','����������ִ��յ����ֿ������/AQS������������ϵͳ/3���Զ��յ�ϵͳ','�ḻ���Ĵ���ռ�/29��ʵ�ô���ռ�','�󿪿���Ƶ�������','Quiet-tuning?���ר�������Ƽ�'];
    var t3 = ['�������Զ���ͣ����','��ǿ����ѷǰ�� ����������˺���/8��ʽȫ��ʽ������/EPS��������ת��ϵͳ','ͨ��ר��FNC�ƶ���/�����ܾ�����̥'];
    var t4 = ['BFIһ�廯����/ȫ��10��ȫ����','EHHSA��ǿ���µ��𲽸���','TPMS����̥ѹ���ϵͳ','���ӷ�ѣĿ�ں��Ӿ�','����Ӱ��'];
    //var track = ['���','����','��������','��ȫ����'];
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
        //hylink.trackEvent('��Խminisite-��������-'+track[a-1]+'-'+cur[i],'��������','���',cur[i]);
        setTimeout(function(){
           //hylink.trackPV('��Խminisite-��������-'+track[a-1]+'-'+cur[i],ga[a-1]+(i+1));
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
    var mz = ['���', '����', '����', '��ȫ', '��������',  '��������', '���ʼ���'];
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
               // hylink.trackPV('��Խminisite-'+mz[tn],ga[tn]);
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
                   // hylink.trackPV('��Խminisite-'+mz[tn],ga[tn]);

                    // hylink.trackPV('��Խminisite-' + mz, ga);
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
        // hylink.trackEvent('��Խminisite-��ർ��-'+txt, '��ർ��', '���', txt);


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