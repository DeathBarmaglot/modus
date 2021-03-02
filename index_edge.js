/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
            {
                id: 'teh',
                type: 'image',
                rect: ['91px', '22px','215px','128px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"teh.png",'0px','0px']
            },
            {
                id: 'l2',
                type: 'image',
                rect: ['3px', '2px','100px','81px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"l.png",'0px','0px']
            },
            {
                id: '_12',
                type: 'image',
                rect: ['-1148px', '-254px','2769px','580px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: '_22',
                type: 'image',
                rect: ['-1519px', '-97px','3490px','229px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"2.svg",'0px','0px'],
                transform: [[],[],[],['0.08','0.08']]
            },
            {
                id: '_3',
                type: 'image',
                rect: ['-1221px', '-175px','2846px','574px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"3.svg",'0px','0px'],
                transform: [[],[],[],['0.1','0.1']]
            },
            {
                id: 't',
                type: 'image',
                rect: ['33px', '90px','236px','62px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"t.png",'0px','0px']
            },
            {
                id: '_1',
                type: 'image',
                rect: ['90px', '99px','300px','51px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"1.png",'0px','0px']
            },
            {
                id: 'f',
                type: 'image',
                rect: ['0px', '2px','419px','147px','auto', 'auto'],
                fill: ["rgba(0,0,0,0)",im+"f.png",'0px','0px']
            }],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${__22}": [
                ["style", "top", '-97px'],
                ["transform", "scaleY", '0.08'],
                ["style", "height", '229px'],
                ["transform", "scaleX", '0.08'],
                ["style", "opacity", '0'],
                ["style", "left", '-1519px'],
                ["style", "width", '3490px']
            ],
            "${_f}": [
                ["style", "height", '147px'],
                ["style", "top", '2px'],
                ["style", "left", '0px'],
                ["style", "width", '419px']
            ],
            "${__3}": [
                ["style", "top", '-175px'],
                ["style", "left", '-1221px'],
                ["style", "height", '574px'],
                ["style", "opacity", '1'],
                ["style", "clip", [0,2846,-26,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '2846px']
            ],
            "${_l2}": [
                ["style", "top", '2px'],
                ["style", "left", '-97px'],
                ["transform", "rotateZ", '0deg']
            ],
            "${__12}": [
                ["style", "top", '-254px'],
                ["style", "height", '580px'],
                ["style", "left", '-1148px'],
                ["style", "clip", [0,2769,-440,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
                ["style", "width", '2769px']
            ],
            "${__1}": [
                ["style", "top", '99px'],
                ["style", "opacity", '0'],
                ["style", "left", '227px']
            ],
            "${_teh}": [
                ["style", "top", '22px'],
                ["transform", "scaleY", '0'],
                ["style", "height", '128px'],
                ["transform", "scaleX", '0'],
                ["style", "left", '91px'],
                ["style", "width", '215px']
            ],
            "${_Stage}": [
                ["color", "background-color", 'rgba(255,255,255,1)'],
                ["style", "overflow", 'hidden'],
                ["style", "height", '150px'],
                ["style", "width", '420px']
            ],
            "${_t}": [
                ["style", "top", '90px'],
                ["style", "opacity", '0'],
                ["style", "left", '366px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 16500,
            autoPlay: true,
            timeline: [
                { id: "eid64", tween: [ "style", "${__22}", "top", '-137px', { fromValue: '-97px'}], position: 16000, duration: 490, easing: "easeInQuad" },
                { id: "eid35", tween: [ "style", "${_t}", "left", '25px', { fromValue: '366px'}], position: 6390, duration: 488, easing: "easeOutCubic" },
                { id: "eid53", tween: [ "style", "${_t}", "left", '366px', { fromValue: '25px'}], position: 10750, duration: 487, easing: "easeOutCubic" },
                { id: "eid10", tween: [ "transform", "${_l2}", "rotateZ", '360deg', { fromValue: '0deg'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid63", tween: [ "transform", "${_l2}", "rotateZ", '0deg', { fromValue: '360deg'}], position: 16000, duration: 500, easing: "easeInQuad" },
                { id: "eid38", tween: [ "style", "${__1}", "left", '55px', { fromValue: '227px'}], position: 6961, duration: 539 },
                { id: "eid51", tween: [ "style", "${__1}", "left", '147px', { fromValue: '55px'}], position: 10931, duration: 501 },
                { id: "eid4", tween: [ "transform", "${_teh}", "scaleY", '1', { fromValue: '0'}], position: 10750, duration: 696 },
                { id: "eid67", tween: [ "transform", "${_teh}", "scaleY", '0', { fromValue: '1'}], position: 16000, duration: 500 },
                { id: "eid46", tween: [ "style", "${__3}", "opacity", '0', { fromValue: '1'}], position: 6250, duration: 710 },
                { id: "eid3", tween: [ "transform", "${_teh}", "scaleX", '1', { fromValue: '0'}], position: 10750, duration: 696 },
                { id: "eid68", tween: [ "transform", "${_teh}", "scaleX", '0', { fromValue: '1'}], position: 16000, duration: 500 },
                { id: "eid59", tween: [ "style", "${__22}", "opacity", '1', { fromValue: '0'}], position: 10750, duration: 696, easing: "easeOutCubic" },
                { id: "eid42", tween: [ "style", "${__3}", "clip", [0,2846,574,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2846,-26,0]}], position: 2144, duration: 2298, easing: "easeOutCubic" },
                { id: "eid6", tween: [ "style", "${__1}", "opacity", '1', { fromValue: '0'}], position: 6961, duration: 539 },
                { id: "eid52", tween: [ "style", "${__1}", "opacity", '0', { fromValue: '1'}], position: 10931, duration: 306 },
                { id: "eid12", tween: [ "style", "${_l2}", "left", '-3px', { fromValue: '-97px'}], position: 0, duration: 500, easing: "easeInQuad" },
                { id: "eid62", tween: [ "style", "${_l2}", "left", '-97px', { fromValue: '-3px'}], position: 16000, duration: 500, easing: "easeInQuad" },
                { id: "eid14", tween: [ "style", "${__12}", "clip", [0,2769,580,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2769,-440,0]}], position: 250, duration: 1894, easing: "easeOutCubic" },
                { id: "eid56", tween: [ "style", "${__12}", "clip", [0,2769,-440,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,2769,580,0]}], position: 10750, duration: 1894, easing: "easeOutCubic" },
                { id: "eid9", tween: [ "style", "${_t}", "opacity", '1', { fromValue: '0'}], position: 6390, duration: 696, easing: "easeOutCubic" },
                { id: "eid54", tween: [ "style", "${_t}", "opacity", '0', { fromValue: '1'}], position: 10750, duration: 696, easing: "easeOutCubic" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-3629258");
