const GAS_URL = "https://script.google.com/macros/s/AKfycbzyPXyOUf1uctPYWFkvtzZ92LaVzcv05GgRo2XfhOCtiF-3F5azgWeKDcV3BfHib-3a/exec";

// 学校マスターデータ
const schoolMaster = [
    {id:8864, name:"Karstveld Academy", circuit:"Grootfontein", sorp:"P", cluster:"Otjiwanda Primary", ur:"U"},
    {id:8926, name:"Kalahari New Hope", circuit:"Grootfontein", sorp:"P", cluster:"Mangetti Dune", ur:"R"},
    {id:7827, name:"Reenboog Paradyse Private", circuit:"Grootfontein", sorp:"P", cluster:"Otjiwanda Primary", ur:"U"},
    {id:7345, name:"St. Isidor Primary", circuit:"Grootfontein", sorp:"P", cluster:"Otjiwanda Primary", ur:"R"},
    {id:7403, name:"Coblenz Combined", circuit:"Grootfontein", sorp:"S", cluster:"Makalani", ur:"R"},
    {id:8813, name:"Mangetti Dune Combined", circuit:"Grootfontein", sorp:"S", cluster:"Mangetti Dune", ur:"R"},
    {id:7300, name:"Aasvoëlnes Primary", circuit:"Grootfontein", sorp:"S", cluster:"Tsumkwe Primary", ur:"R"},
    {id:8592, name:"Auuns Primary", circuit:"Grootfontein", sorp:"S", cluster:"Otjiwanda Primary", ur:"R"},
    {id:8570, name:"Berg Aukas Primary", circuit:"Grootfontein", sorp:"S", cluster:"Otjiwanda Primary", ur:"R"},
    {id:8791, name:"Gam Primary", circuit:"Grootfontein", sorp:"S", cluster:"Tsumkwe Primary", ur:"R"},
    {id:7097, name:"Grashoek Primary", circuit:"Grootfontein", sorp:"S", cluster:"Mangetti Dune", ur:"R"},
    {id:9140, name:"Grootfontein Project Primary", circuit:"Grootfontein", sorp:"S", cluster:"Makalani", ur:"U"},
    {id:7445, name:"Kalenga Primary", circuit:"Grootfontein", sorp:"S", cluster:"Makalani", ur:"U"},
    {id:7098, name:"Kanovlei Primary", circuit:"Grootfontein", sorp:"S", cluster:"Mangetti Dune", ur:"R"},
    {id:7096, name:"Kukurushe Primary", circuit:"Grootfontein", sorp:"S", cluster:"Mangetti Dune", ur:"R"},
    {id:7810, name:"Luiperdheuwel Primary", circuit:"Grootfontein", sorp:"S", cluster:"Makalani", ur:"R"},
    {id:7331, name:"Makalani Primary", circuit:"Grootfontein", sorp:"S", cluster:"Makalani", ur:"U"},
    {id:7389, name:"M'Kata Primary", circuit:"Grootfontein", sorp:"S", cluster:"Mangetti Dune", ur:"R"},
    {id:7091, name:"Nyae Nyae Village Schools", circuit:"Grootfontein", sorp:"S", cluster:"Tsumkwe Primary", ur:"R"},
    {id:7357, name:"Omatako Primary", circuit:"Grootfontein", sorp:"S", cluster:"Mangetti Dune", ur:"R"},
    {id:7265, name:"Omulunga Primary", circuit:"Grootfontein", sorp:"S", cluster:"Makalani", ur:"U"},
    {id:7424, name:"Otjituuo Primary", circuit:"Grootfontein", sorp:"S", cluster:"Makalani", ur:"R"},
    {id:8571, name:"Rooidaghek Primary", circuit:"Grootfontein", sorp:"S", cluster:"Mangetti Dune", ur:"R"},
    {id:7843, name:"Shamalindi Primary", circuit:"Grootfontein", sorp:"S", cluster:"Otjiwanda Primary", ur:"R"},
    {id:8790, name:"Tsumkwe Primary", circuit:"Grootfontein", sorp:"S", cluster:"Tsumkwe Primary", ur:"R"},
    {id:7027, name:"Wilhelm Nortier Primary", circuit:"Grootfontein", sorp:"S", cluster:"Otjiwanda Primary", ur:"U"},
    {id:8576, name:"Berg-Op Academy", circuit:"Okahandja", sorp:"P", cluster:"Okakango River", ur:"U"},
    {id:9100, name:"Catalyst Educational Centre", circuit:"Okahandja", sorp:"P", cluster:"Okamita River", ur:"U"},
    {id:9101, name:"Eagles Christian Academy", circuit:"Okahandja", sorp:"P", cluster:"Okamita River", ur:"U"},
    {id:7340, name:"Elles Mason Private", circuit:"Okahandja", sorp:"P", cluster:"Okakarara Primary", ur:"U"},
    {id:7764, name:"St. Veron Academy", circuit:"Okahandja", sorp:"P", cluster:"Okakarara Primary", ur:"U"},
    {id:7272, name:"Thornhill Private College", circuit:"Okahandja", sorp:"P", cluster:"Okakango River", ur:"U"},
    {id:9013, name:"Yuan Jue Private", circuit:"Okahandja", sorp:"P", cluster:"Okamita River", ur:"R"},
    {id:7355, name:"Eden Combined", circuit:"Okahandja", sorp:"S", cluster:"Okamita River", ur:"U"},
    {id:7400, name:"K.J. Kapeua Combined", circuit:"Okahandja", sorp:"S", cluster:"Okakango River", ur:"R"},
    {id:7809, name:"K.W. von Mareés Combined", circuit:"Okahandja", sorp:"S", cluster:"Okakango River", ur:"U"},
    {id:7411, name:"Okamatapati Combined", circuit:"Okahandja", sorp:"S", cluster:"Okakarara Primary", ur:"R"},
    {id:7413, name:"Okondjatu Combined", circuit:"Okahandja", sorp:"S", cluster:"Okakarara Primary", ur:"R"},
    {id:7356, name:"Aurora Primary", circuit:"Okahandja", sorp:"S", cluster:"Okakango River", ur:"U"},
    {id:7921, name:"Five Rand Primary", circuit:"Okahandja", sorp:"S", cluster:"Okakango River", ur:"U"},
    {id:7407, name:"Ludwig Ndinda Primary", circuit:"Okahandja", sorp:"S", cluster:"Okakarara Primary", ur:"U"},
    {id:8801, name:"Nau-Aib Primary", circuit:"Okahandja", sorp:"S", cluster:"Okamita River", ur:"U"},
    {id:7846, name:"Okaepe Project", circuit:"Okahandja", sorp:"S", cluster:"Okakarara Primary", ur:"R"},
    {id:7936, name:"Okahandja Primary", circuit:"Okahandja", sorp:"S", cluster:"Okamita River", ur:"U"},
    {id:7408, name:"Okakarara Primary", circuit:"Okahandja", sorp:"S", cluster:"Okakarara Primary", ur:"U"},
    {id:9019, name:"Oruuua Primary", circuit:"Okahandja", sorp:"S", cluster:"Okakango River", ur:"R"},
    {id:7335, name:"Otjozondu Primary", circuit:"Okahandja", sorp:"S", cluster:"Okamita River", ur:"R"},
    {id:8787, name:"Uitkoms Primary", circuit:"Okahandja", sorp:"S", cluster:"Okamita River", ur:"R"},
    {id:7430, name:"Waterberg Primary", circuit:"Okahandja", sorp:"S", cluster:"Okakarara Primary", ur:"R"},
    {id:7845, name:"Edugate Academy", circuit:"Otjiwarongo", sorp:"P", cluster:"Mokati", ur:"U"},
    {id:9041, name:"Nazareth Greenwood Private", circuit:"Otjiwarongo", sorp:"P", cluster:"Mokati", ur:"U"},
    {id:8824, name:"Otjiwarongo Christian", circuit:"Otjiwarongo", sorp:"P", cluster:"Mokati", ur:"U"},
    {id:7075, name:"Deutsche Privatschule Otavi", circuit:"Otjiwarongo", sorp:"P", cluster:"Otavi", ur:"U"},
    {id:9051, name:"Goedehoop Private", circuit:"Otjiwarongo", sorp:"P", cluster:"Orwetoveni", ur:"R"},
    {id:7326, name:"Mount Etjo Private", circuit:"Otjiwarongo", sorp:"P", cluster:"Otavi", ur:"R"},
    {id:8812, name:"Privatschule Otjiwarongo", circuit:"Otjiwarongo", sorp:"P", cluster:"Orwetoveni", ur:"U"},
    {id:8951, name:"Train Occasion Private", circuit:"Otjiwarongo", sorp:"P", cluster:"Orwetoveni", ur:"U"},
    {id:7804, name:"G.K. Wahl Combined", circuit:"Otjiwarongo", sorp:"S", cluster:"Mokati", ur:"R"},
    {id:7036, name:"Kombat Combined", circuit:"Otjiwarongo", sorp:"S", cluster:"Otavi", ur:"R"},
    {id:8788, name:"Donatus Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Orwetoveni", ur:"U"},
    {id:7336, name:"Kalkfeld Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Mokati", ur:"R"},
    {id:7338, name:"Karundu Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Orwetoveni", ur:"U"},
    {id:9076, name:"Ombili Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Mokati", ur:"U"},
    {id:7365, name:"Orwetoveni Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Orwetoveni", ur:"U"},
    {id:7095, name:"Osire Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Orwetoveni", ur:"R"},
    {id:8789, name:"Otavi Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Otavi", ur:"U"},
    {id:8507, name:"Otjiwarongo Project Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Orwetoveni", ur:"U"},
    {id:7364, name:"Rogate Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Mokati", ur:"U"},
    {id:7361, name:"Shalom Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Otavi", ur:"U"},
    {id:7370, name:"Spes Bona Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Mokati", ur:"U"},
    {id:8599, name:"Tsaraxa-aibes Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Mokati", ur:"U"},
    {id:7047, name:"Vooruit Primary", circuit:"Otjiwarongo", sorp:"S", cluster:"Orwetoveni", ur:"U"}
];

// ***** Initializing game variables
let firstCell = null, startTime = 0, timerInterval = null, errors = 0;
const board = document.getElementById('game-board');

function updateSchoolList() {   // ***** Filtering the school list by circuit
    const circuit = document.getElementById('circuit-filter').value;
    const select = document.getElementById('school-list');
    select.innerHTML = '<option value="">Select School</option>';
    
    const filtered = schoolMaster.filter(s => s.circuit === circuit);
    filtered.sort((a,b) => a.name.localeCompare(b.name));
    
    filtered.forEach(s => {
        const opt = document.createElement('option');
        opt.value = s.name;
        opt.innerText = s.name;
        select.appendChild(opt);
    });
}

function playSound(id) {      // ***** play 4 types of sounds
    const s = document.getElementById('sound-' + id);
    if(s) { s.currentTime = 0; s.play().catch(e => console.log("Audio play blocked")); }
}

async function initGame() {     // ***** ゲーム開始時の処理を修正

    // 既存のタイマー停止などの後に
    //board.innerHTML = ''; // これで古いセル（とアニメーション）は完全に消去されます

    const btn = document.getElementById('start-button');
    const name = document.getElementById('user-name').value;
    const school = document.getElementById('school-list').value;
    const grade = document.getElementById('grade-list').value;
    const password = document.getElementById('user-pass').value;

    if(!name) return showModal("Enter your name!");
    if(!school) return showModal("Select your school!");
    if(!grade) return showModal("Select your grade!");
    if(password.length !== 4) return showModal("Enter a 4-digit password!");

    // --- 追加：音源のアンロック処理 ---
    const sounds = ['correct', 'wrong', 'clear', 'new-record'];
    sounds.forEach(id => {
        const s = document.getElementById('sound-' + id);
        s.play().then(() => {
            s.pause(); // 一瞬再生して即停止（これでブラウザが許可してくれる）
            s.currentTime = 0;
        }).catch(e => console.log("Unlock failed:", e));
    });
    // ------------------------------

    // --- 【追加】ボタンを無効化し、表示を変える ---
    btn.disabled = true;
    const originalText = btn.innerText;
    btn.innerText = "Connecting...";

// ログイン（ベストタイム取得）
    try{
        const response = await fetch(GAS_URL, {
            method: "POST",
            body: JSON.stringify({
                action: "login", name: name, school: school, grade: grade, password: password
            })
        });

        if (!response.ok) throw new Error("Network issues");

        const result = await response.json();
        if (result.status === "error") {
//            return alert(result.data); // パスワード間違いなど
            showModal(result.data);
            // エラー時はボタンを元に戻して再試行できるようにする
            btn.disabled = false;
            btn.innerText = originalText;
            return;
        }
// +++++++++++++++++++
        // result.data が長い日付形式だったら、分:秒 だけを抜き出す
        let displayBest = result.data;
        if (displayBest.includes('T')) {
            const timeMatch = displayBest.match(/(\d{2}:\d{2})/); // "11:58" のような部分を探す
            displayBest = timeMatch ? timeMatch[0] : displayBest;
        }
// +++++++++++++++++++
        document.getElementById('best-time').innerText = displayBest;     // ベストタイムを表示
//        document.getElementById('best-time').innerText = result.data;     // ベストタイムを表示

        // ゲーム開始の準備
//        document.getElementById('setup-screen').style.display = 'none'; // 設定画面を隠す
        startGameLogic(); // 実際のゲーム開始処理（セル生成など）を別関数に切り出すと綺麗です

    } catch (e) {
        console.warn("GAS connection failed, but starting game anyway:", e);
        // 通信に失敗しても、過去の記録が見れないだけでゲーム自体は始められるようにします
        document.getElementById('best-time').innerText = "OFFLINE";
        document.getElementById('setup-screen').style.display = 'none';
        startGameLogic();  
    } finally {
        // --- 【追加】最後にボタンの状態を戻す（念のため） ---
        btn.disabled = false;
        btn.innerText = originalText;
    }
}

function startGameLogic() {
    const setup = document.getElementById('setup-screen');
    const game = document.getElementById('game-screen');
    const board = document.getElementById('board');

    // 1. 画面表示の切り替え
    // document.getElementById('setup-screen').style.display = 'none'; // 入力画面を隠す
    // document.getElementById('game-screen').style.display = 'block'; // ゲーム画面を出す
    setup.style.display = 'none'; // 設定画面を消す
    game.style.display = 'block'; // ゲーム画面を出す（ここが動かないと真っ白になります）

    // 2. 変数の初期化
    errors = 0;
    document.getElementById('error-count').innerText = "0";
    document.getElementById('timer').innerText = "00:00";
    
    // 3. 以前のタイマーがあれば止めて、新しく開始
    startTime = Date.now();
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);

    // 4. ゲーム盤の作成(1-9, 8 each)
//    const board = document.getElementById('board');
    board.innerHTML = ''; // 古いセルを消去
    let nums = []
    for(let i=1; i<=9; i++) {
        for(let j=0; j<8; j++) nums.push(i);
    }
    
    // シャッフル
    for(let i=nums.length-1; i>0; i--){
        const j = Math.floor(Math.random()*(i+1));
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    nums.forEach(n => {
        const c = document.createElement('div');
        c.className = 'cell'; // 'hidden'を入れない（入れると最初からグレーで数字が見えなくなります）
        c.innerText = n;
        c.onclick = () => onCellClick(c);
        board.appendChild(c);
    });
}
// 配列の中身をランダムに混ぜる関数
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        // [i] と [j] の要素を入れ替える
        [array[i], array[j]] = [array[j], array[i]];
    }
}
/*
    numbers.forEach(num => {
        const cell = document.createElement('div');
        cell.className = 'cell hidden';
        cell.innerText = num;
        cell.onclick = () => handleCellClick(cell);
        board.appendChild(cell);
    });
}
*/    

function updateTimer() {
    const now = Date.now();
    const diff = now - startTime; // 開始時間からの差分（ミリ秒）

    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    // 00:00 の形式に整えて表示
    const displayTime = 
        String(minutes).padStart(2, '0') + ":" + 
        String(seconds).padStart(2, '0');
    
    document.getElementById('timer').innerText = displayTime;
}

function onCellClick(cell) {
    if (cell.classList.contains('hidden') || cell.classList.contains('latest')) return;
    if (firstCell === cell) { cell.classList.remove('selected'); firstCell = null; return; }
    cell.classList.add('selected');
    if (!firstCell) { firstCell = cell; } else {
        const sum = parseInt(firstCell.innerText) + parseInt(cell.innerText);
        const f = firstCell; const c = cell;
        if (sum === 10) {
            f.onclick = null;         // make the cell unavailable
            c.onclick = null;         // to avoid too many yellow cells
            playSound('correct');
        //     f.classList.add('correct-flash'); c.classList.add('correct-flash');
        //     setTimeout(() => {
                document.querySelectorAll('.cell.latest').forEach(el => {
                    el.classList.replace('latest', 'hidden');
                });
        //         f.classList.remove('correct-flash', 'selected');
        //         c.classList.remove('correct-flash', 'selected');
                f.classList.remove('selected'); c.classList.remove('selected');
                f.classList.add('latest'); c.classList.add('latest');
                checkClear();
        //     }, 3000);
        } else {
            errors++;
            document.getElementById('error-count').innerText = errors;
            playSound('wrong');
            f.classList.add('wrong-flash'); c.classList.add('wrong-flash');
            // setTimeout(() => { 
                f.classList.remove('wrong-flash', 'selected'); c.classList.remove('wrong-flash', 'selected'); 
            // }, 3000);
        }
        firstCell = null;
    }
}

function checkClear() {     // ***** done / not yet
    const solved = document.querySelectorAll('.cell.hidden, .cell.latest').length;
    
    if (solved === 72) {
        clearInterval(timerInterval);
        const finalTime = document.getElementById('timer').innerText;
        const finalErrors = errors;
        const isNewRecord = checkNewRecord(finalTime);
        const allCells = document.querySelectorAll('.cell');    // ★ ここで定義する（これ以降、setTimeoutの中でも使えます）
        
        if (isNewRecord) {
            playSound('new-record');
            document.getElementById('best-time').innerText = finalTime;     // update bestTime in the screen
            allCells.forEach(cell => cell.classList.add('rainbow'));
        } else {
            playSound('clear');
            allCells.forEach(cell => cell.classList.add('clear-flash'));
        }
       
        setTimeout(() => {           // 演出が終わった後に実行される処理
            allCells.forEach(cell => {      // ここで allCells を使ってもエラーになりません
                cell.classList.remove('rainbow', 'clear-flash');
            });
            
        // alertの代わりに自作モーダルを呼ぶ
            showModal(`FINISH!\nTime: ${finalTime}\nErrors: ${finalErrors}`, true);
            // saveResult(finalTime, finalErrors);

        }, 2000); // flash for 0.3 sec
    }
}

// to chaeck if the time is shorter than the best time
function checkNewRecord(currentTimeStr) {
    const lastBest = document.getElementById('best-time').innerText;
    const currentSec = timeToSec(currentTimeStr);
    const lastBestSec = timeToSec(lastBest);
    return currentSec < lastBestSec;
}

function timeToSec(t) {
    if (!t || t === "--:--") return 9999;
    
    // スプレッドシートが日付形式（2026-01...T11:58...）で返してきた場合の対策
    if (t.includes('T')) {
        const timePart = t.split('T')[1]; // "11:58:00.000Z"
        const parts = timePart.split(':');
        return parseInt(parts[0]) * 60 + parseInt(parts[1]); // 分と秒を取得
    }
    
    // 通常の "01:23" 形式の場合
    const p = t.split(':');
    return parseInt(p[0]) * 60 + parseInt(p[1]);
}

// 終了時の保存処理を修正
async function saveResult(time, err) {
    const schoolName = document.getElementById('school-list').value;
    const schoolData = schoolMaster.find(s => s.name === schoolName);

    const payload = {
        action: "save",
        name: document.getElementById('user-name').value,
        school: schoolName,
        grade: document.getElementById('grade-list').value,
//        password: document.getElementById('user-pass').value,
        password: document.getElementById('user-pass').value,
        time: time,
        errors: err,
        circuit: schoolData.circuit,
        cluster: schoolData.cluster,
        ur: schoolData.ur,
        schoolID: schoolData.id
    };

    console.log("Payload to send:", payload); // ★これを追加して、送信前に中身を確認！

    await fetch(GAS_URL, {
        method: "POST",
        mode: "no-cors", // 保存のみの場合はこれで安定します
        body: JSON.stringify(payload)
    });
}

// |||||||||||||||||||||||||||||  added 31 Jan  |||||||||||||||||||
function showModal(message, isClear = false) {
    const modal = document.getElementById('custom-modal');
    const msgArea = document.getElementById('modal-message');
    const btnArea = document.getElementById('modal-buttons');
    const rankingArea = document.getElementById('ranking-area');

    modal.classList.add('active'); // CSSで .active { display: flex; } と定義しておく

    modal.style.display = 'flex';   // centering
    msgArea.innerText = message;
    rankingArea.style.display = 'none';     // hide ranking at the beginning
    
    if (isClear) {        // クリア時は2つのボタンを出す
        btnArea.innerHTML = `
            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 5px;">
                <button onclick="fetchRanking('school')" style="font-size:12px; padding:8px 4px;">School TOP5</button>
                <button onclick="fetchRanking('circuit')" style="font-size:12px; padding:8px 4px;">Circuit TOP5</button>
                <button onclick="fetchRanking('region')" style="font-size:12px; padding:8px 4px;">Region TOP5</button>
            </div>
            <button onclick="restartGame()">Try Again</button>
            <button onclick="backToSetup()">Quit</button>
        `;
    } else {            // 通常のエラー時はOKボタンだけ
        btnArea.innerHTML = `<button onclick="closeModal()">OK</button>`;
    }
}

function closeModal() {
    document.getElementById('custom-modal').style.display = 'none';
}

function restartGame() {
    // 1. さっき出した記録（finalTime）が新記録なら、画面の表示を更新する
    const currentTimeStr = document.getElementById('timer').innerText;
    const bestTimeStr = document.getElementById('best-time').innerText;

    if (checkNewRecord(currentTimeStr)) {
        document.getElementById('best-time').innerText = currentTimeStr;
    }
    closeModal();       // close the modal
    startGameLogic();   // re-start the game from the beginning
}

function backToSetup() {
    closeModal();
    document.getElementById('game-screen').style.display = 'none';
    document.getElementById('setup-screen').style.display = 'block';
}

async function fetchRanking(type) {
    const rankingArea = document.getElementById('ranking-area');
    const rankingTitle = document.getElementById('ranking-title');
    const rankingList = document.getElementById('ranking-list');
 
    rankingArea.classList.add('ranking-visible'); // 直接 style を触らずクラスで制御

    rankingArea.style.display = 'block';
    rankingTitle.innerText = "Loading...";
    rankingList.innerHTML = "";

    const schoolName = document.getElementById('school-list').value;
    const schoolData = schoolMaster.find(s => s.name === schoolName);

    const params = new URLSearchParams({
        action: "getRanking",
        type: type,
        school: schoolName,
        circuit: schoolData.circuit,
        region: "Otjozondjupa" // 固定
    });

    try {
        // ランキング取得時は mode: 'no-cors' を絶対に付けない（デフォルトのままで良い）
        const response = await fetch(`${GAS_URL}?${params.toString()}`);
// console.log('raw data:', rawData); 
// console.log('type/len:', typeof rawData, rawData?.length);
// console.log('first item keys:', rawData && Object.keys(rawData[0] || {}));
// const sample5 = (rawData || []).slice(0, 5);
// console.table(sample5);




        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        // ボタン名を Region に合わせて表示
        const titles = { school: "School", circuit: "Circuit", region: "Region" };
        rankingTitle.innerText = `${titles[type]} TOP 5`;

        if (!data || data.length === 0) {
            rankingList.innerHTML = "<li>No data</li>";
        } else {
//            data.forEach((item, index) => {
            data.forEach(item => {
                const li = document.createElement('li');
                li.innerText = `${item.name}: ${item.time}`;
                // li.style.borderBottom = "1px solid #eee";
                // li.style.padding = "4px 0";
                // li.innerHTML = `<strong>${index + 1}.</strong> ${item.name} (${item.school}) <br> 
                //                 <span style="color:#d32f2f;">${item.time}</span> [Err:${item.errors}]`;
                rankingList.appendChild(li);
            });
        }
    } catch (e) {
        console.error(e);
        rankingTitle.innerText = "Error loading ranking";
    }
}