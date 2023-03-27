import { IViewList, ViewTypeEnum } from 'vue3-vanilla-tab';

const views: IViewList = [
    {
        id: '001',
        type: ViewTypeEnum.MENU,
        name: 'Home',
        title: '首页',
        path: '/src/views/page-home.vue',
    },
    {
        id: '002',
        type: ViewTypeEnum.DIR,
        title: '测试目录',
        children: [
            {
                id: '003',
                type: ViewTypeEnum.MENU,
                name: 'Test01',
                title: '测试页面01',
                path: '/src/views/page-test01.vue',
            },
            {
                id: '004',
                type: ViewTypeEnum.MENU,
                name: 'Test02',
                title: '测试页面02',
                path: '/src/views/page-test02.vue',
            },
        ]
    },
    {
        id: '005',
        type: ViewTypeEnum.IFRAME,
        title: '测试内联',
        link: 'http://139.186.198.135/'
    },
    {
        id: '006',
        type: ViewTypeEnum.LINK,
        title: '测试外联',
        link: 'http://139.186.198.135/'
    },
    {
        id: '007',
        type: ViewTypeEnum.MENU,
        name: 'HiddenPage',
        title: '我是隐藏页面',
        path: '/src/views/page-hidden.vue',
        hidden: true
    },
    {
        id: '008',
        type: ViewTypeEnum.MENU,
        name: 'NotSinglePage',
        title: '多标签页模式',
        path: '/src/views/page-not-single.vue',
        single: false,
        hidden: true
    },
    {
        id: '009',
        type: ViewTypeEnum.MENU,
        name: 'SinglePage',
        title: '单标签页模式',
        path: '/src/views/page-single.vue',
        single: true,
        hidden: true
    },
    {
        id: '010',
        type: ViewTypeEnum.MENU,
        name: 'TestPage',
        title: '表单测试',
        path: '/src/views/form-test/page-index.vue',
        single: true,
    },
    {
        id: '010_add',
        type: ViewTypeEnum.MENU,
        name: 'TestAddForm',
        title: '新增表单',
        path: '/src/views/form-test/form-add.vue',
        hidden: true
    },
    {
        id: '010_info',
        type: ViewTypeEnum.MENU,
        name: 'TestInfoForm',
        title: '表单详情',
        path: '/src/views/form-test/form-info.vue',
        hidden: true
    },
];

export default views;