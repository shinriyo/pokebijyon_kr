// URLに飛ぶ
function moveUrl(url) {
    chrome.tabs.executeScript(null, {
        "code": "window.location.href = '" + url + "';"
    });
}

(function(loadedListener) {　
    var doc, readyState;

    　
    doc = document;　
    readyState = doc.readyState;

    　
    if (readyState === 'complete' || readyState === 'interactive') {　　 loadedListener();　 } else {　　 doc.addEventListener("DOMContentLoaded", loadedListener, false);　 }
})(function() {
    // popup.html.
    var dev_movedebug_btn = document.getElementById('pokevision');
    if (dev_movedebug_btn != null) {
        // 処理を入れておく
        dev_movedebug_btn.addEventListener('click', function() {
            moveUrl("https://pokevision.com/");
        });
    }
});


$(function() {
    // URLを判定
    var href_str = window.location.href;
    var res = href_str.match(/pokevision.com/);
    // 違ったらしない
    if (res == null) return;

    // アフィリエイト
    var amazon = "<div>포켓몬 고 공략 겟 - WiLLBee CLIPON (흑색) Pokemon Go 스마트 폰 > 핸드 밴드 홀더 링 - Xperia iPhone 6S 6 Plus<br /><a  href=\"http://www.amazon.co.jp/gp/product/B01IIGUB4M/ref=as_li_tf_il?ie=UTF8&camp=247&creative=1211&creativeASIN=B01IIGUB4M&linkCode=as2&tag=noctushinrsdi-22\"><img border=\"0\" src=\"http://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B01IIGUB4M&Format=_SL110_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=noctushinrsdi-22\" ></a><img src=\"http://ir-jp.amazon-adsystem.com/e/ir?t=noctushinrsdi-22&l=as2&o=9&a=B01IIGUB4M\" width=\"1\" height=\"1\" border=\"0\" alt=\"\" style=\"border:none !important; margin:0px !important;\" /></div>";
    // 警告をそのまま書き換え
    $('.home-sidebar-warning').replaceWith(amazon);

    // ボタン生成
    $('<button/>', {
        text: 'ID選ぶぜ',
        id: 'user_btn',
        click: function() {
            var num = document.getElementById('mynum');
            changeUser(num.value);
        }
    }).appendTo(".center-align-text");

    var pokemon_arr = [
        "캐이시",
        "프테라",
        "후딘",
        "아보크",
        "윈디",
        "프리져",
        "독침붕",
        "모다피",
        "거북왕",
        "이상해씨",
        "버터플",
        "캐터피",
        "럭키",
        "리자몽",
        "파이리",
        "리자드",
        "픽시",
        "삐삐",
        "파르셀",
        "탕구리",
        "쥬레곤",
        "디그다",
        "메타몽",
        "두트리오",
        "두두",
        "신뇽",
        "망나뇽",
        "미뇽",
        "슬리프",
        "닥트리오",
        "이브이",
        "아보",
        "에레브",
        "붐볼",
        "아라리",
        "나시",
        "파오리",
        "깨비드릴조",
        "부스터",
        "고오스",
        "팬텀",
        "꼬마돌",
        "냄새꼬",
        "골뱃",
        "콘치",
        "골덕",
        "딱구리",
        "데구리",
        "질퍽이",
        "가디",
        "갸라도스",
        "고우스트",
        "홍수몬",
        "시라소몬",
        "쏘드라",
        "슬리퍼",
        "이상해풀",
        "푸린",
        "쥬피썬더",
        "루주라",
        "투구",
        "투구푸스",
        "윤겔라",
        "딱충이",
        "캥카",
        "킹크랩",
        "또가스",
        "크랩",
        "라프라스",
        "내루미",
        "괴력몬",
        "근육몬",
        "알통몬",
        "잉어킹",
        "마그마",
        "코일",
        "레어코일",
        "망키",
        "텅구리",
        "나옹",
        "단데기",
        "뮤",
        "뮤츠",
        "파이어",
        "마임맨",
        "질뻐기",
        "니드킹",
        "니드퀸",
        "니드런♀",
        "니드런♂",
        "니드리나",
        "니드리노",
        "나인테일",
        "뚜벅쵸",
        "암나이트",
        "암스타",
        "롱스톤",
        "파라스",
        "파라섹트",
        "페르시온",
        "피죤투",
        "피죤",
        "구구",
        "피카츄",
        "쁘사이저",
        "발챙이",
        "수륙챙이",
        "강챙이",
        "포니타",
        "폴리곤",
        "성원숭",
        "고라파덕",
        "라이츄",
        "날쌩마",
        "레트라",
        "꼬렛",
        "코뿌리",
        "뿔카노",
        "모래두지",
        "고지",
        "스라크",
        "시드라",
        "왕콘치",
        "쥬쥬",
        "셀러",
        "야도란",
        "야돈",
        "잠만보",
        "깨비참",
        "꼬부기",
        "아쿠스타",
        "별가사리",
        "덩구리",
        "켄타로스",
        "왕눈해",
        "독파리",
        "샤미드",
        "도나리",
        "콘팡",
        "이상해꽃",
        "우츠보트",
        "라플레시아",
        "찌리리공",
        "식스테일",
        "어니부기",
        "뿔충이",
        "우츠동",
        "또도가스",
        "푸크린",
        "썬더",
        "주뱃"
    ]

    // 辞書
    var poke_dic = {};

    // プルダウン内
    var $el = $('.dropdown-menu.inner');

    // ツールのため
    //var names = "";
    $.each($el.children(), function(index, value) {
        // ツールのため
        // names += "\"" + $(value).find(".text").text() + "\",";
        var en_name = $(value).find(".text").text();
        var jp_name = pokemon_arr[index];
        // textクラスを書き換え
        $(value).find(".text").text(pokemon_arr[index]);
        // ついでに辞書作り
        poke_dic[en_name] = jp_name;
    });
    // console.log(names);

    var nm;
    var poke_en;
    var poke_jp;

    // マップの中
    　
    var countup = function() {
        // tipの名前
        var tip = $('.home-map-tooltip');
        var tmp = tip.attr("data-original-title");

        // <strong>Pidgey</strong><small>Despawns in 09:40
        if (typeof tmp !== "undefined") {
            var match = tmp.match(/<strong>(.*)<\/strong>/);
            if (typeof match[1] != "undefined") {

                var tmp_jp = poke_dic[match[1]];
                if (typeof tmp_jp != "undefined") {
                    // 日本名ポケモン名
                    // console.log(poke_jp);
                    // 英語名ポケモン名仮（日本語になってることも）
                    poke_en = match[1];
                    poke_jp = poke_dic[poke_en];
                }
            }
        }

        if (typeof poke_en !== "undefined" &&
            typeof poke_jp !== "undefined"
        ) {
            var nm = $('.home-map-tooltip').attr("data-original-title");
            var replace_str = nm.replace(poke_en, poke_jp);
            $('.home-map-tooltip').attr("data-original-title", replace_str);

            // tip
            var tip = $('.tooltip-inner');
            if (tip !== "undefined") {
                var re = function() {
                    tip.html(replace_str);
                }
                re();　
                setTimeout(re, 100);
            }
        }

        　　
        setTimeout(countup, 300);　
    }

    // 何度も呼ぶ
    　
    countup();
});