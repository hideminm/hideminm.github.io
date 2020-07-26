qa = new Array();
qa[0] = ["ブドウ", "fraise", "cerise", "raisin", "peche", "poire", "pomme", "citron", "ananas", "pamplemousse", "pastèque", 3];
qa[1] = ["ナシ", "fraise", "cerise", "raisin", "peche", "poire", "pomme", "citron", "ananas", "pamplemousse", "pastèque", 5];
qa[2] = ["イチゴ", "fraise", "cerise", "raisin", "peche", "poire", "pomme", "citron", "ananas", "pamplemousse", "pastèque", 1];
qa[3] = ["リンゴ", "fraise", "cerise", "raisin", "peche", "poire", "pomme", "citron", "ananas", "pamplemousse", "pastèque", 6];
qa[4] = ["モモ", "fraise", "cerise", "raisin", "peche", "poire", "pomme", "citron", "ananas", "pamplemousse", "pastèque", 4];
qa[5] = ["スイカ", "fraise", "cerise", "raisin", "peche", "poire", "pomme", "citron", "ananas", "pamplemousse", "pastèque", 10];
qa[6] = ["パイナップル", "fraise", "cerise", "raisin", "peche", "poire", "pomme", "citron", "ananas", "pamplemousse", "pastèque", 8];
qa[7] = ["グレープフルーツ", "fraise", "cerise", "raisin", "peche", "poire", "pomme", "citron", "ananas", "pamplemousse", "pastèque", 9];
qa[8] = ["レモン", "fraise", "cerise", "raisin", "peche", "poire", "pomme", "citron", "ananas", "pamplemousse", "pastèque", 7];
qa[9] = ["サクランボ", "fraise", "cerise", "raisin", "peche", "poire", "pomme", "citron", "ananas", "pamplemousse", "pastèque", 2];

//初期設定
q_sel = 10; //選択肢の数

setReady();

function setReady() {
    count = 0; //問題番号
    ansers = new Array(); //解答記録

    //最初の問題
    quiz();
}

//問題表示
function quiz() {
    //問題
    document.getElementById("text_q").innerHTML = "Numéro." + (count + 1) + qa[count][0];
    //選択肢
    s = "";
    for (n = 1; n <= q_sel; n++) {
        s += "【<a href='javascript:anser(" + n + ")'>" + n + "：" + qa[count][n] + "</a>】";
    }
    document.getElementById("text_s").innerHTML = s;
}

//解答表示
function anser(num) {
    var s;
    s = "Numéro." + (count + 1);
    //答え合わせ
    if (num == qa[count][q_sel + 1]) {
        //正解
        ansers[count] = "〇";
    } else {
        ansers[count] = "✕";
    }
    s += ansers[count] + qa[count][num];
    document.getElementById("text_a").innerHTML = s;
    //次の問題を表示
    count++;
    if (count < qa.length) {
        quiz();
    } else {
        //終了
        s = "<table border='2'><caption>Résultat</caption>";
        //1行目
        s += "<tr><th>Question</th>";
        for (n = 0; n < qa.length; n++) {
            s += "<th>" + (n + 1) + "</th>";
        }
        s += "</tr>";
        //2行目
        s += "<tr><th>Résultat</th>";
        for (n = 0; n < qa.length; n++) {
            s += "<td>" + ansers[n] + "</td>";
        }
        s += "</tr>";
        s += "</table>";
        document.getElementById("text_q").innerHTML = s;
        //次の選択肢
        s = "【<a href='javascript:history.back()'>retour à la page précédente</a>】";
        s += "【<a href='javascript:setReady()'>commencer depuis le début</a>】";
        //s += "【<a href=''>avancer au jeu suivant</a>】";

        document.getElementById("text_s").innerHTML = s;
    }
}
