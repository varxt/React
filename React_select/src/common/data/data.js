let brand = [
    {id:Math.random(),desc:'苹果'},
    {id:Math.random(),desc:'小米'},
    {id:Math.random(),desc:'魅族'},
    {id:Math.random(),desc:'华为'},
    {id:Math.random(),desc:'三星'}
];

let size = [
    {id:Math.random(),desc:'3.0英寸'},
    {id:Math.random(),desc:'3.5英寸'},
    {id:Math.random(),desc:'4.0英寸'},
    {id:Math.random(),desc:'4.5英寸'}
];

let os = [
    {id:Math.random(),desc:'安卓'},
    {id:Math.random(),desc:'IOS'},
    {id:Math.random(),desc:'其他'},
    {id:Math.random(),desc:'无'}
];

let net = [
    {id:Math.random(),desc:'联通'},
    {id:Math.random(),desc:'电信'},
    {id:Math.random(),desc:'移动'},
    {id:Math.random(),desc:'双卡'},
    {id:Math.random(),desc:'单卡'}
];

let data = [
    {id:Math.random(),sort:'品牌',data:brand,order:1},
    {id:Math.random(),sort:'尺寸',data:size,order:2},
    {id:Math.random(),sort:'系统',data:os,order:3},
    {id:Math.random(),sort:'网络',data:net,order:4}
];

export default data;

