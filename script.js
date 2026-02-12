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


// const helpMessage = `
const helpMsgReg = `
    <div style="text-align: center; font-size: 14px; line-height: 1.4;">
        <h3 style="margin-bottom: 10px;">How To Register</h3>
        
        <div style="text-align: left; display: inline-block;">
            <p>1. Choose your <b>school</b> and <b>grade</b> ✨</p>
            <p>2. You can name whatever you want <br> if it is <b>unique in your school / grade</b> </p>
            <p>3. Enter 4-digits password. Don't forget it!</p>
        </div>

        <div class="image-container" style="position: relative; width: 100%; height: 120px; margin-top: 10px; background: #f0f0f0; border-radius: 8px; overflow: hidden;">
            <img src="hlpRg1.png" class="fade-img" style="position: absolute; width: 100%; height: 100%; object-fit: contain;">
            <img src="hlpRg2.png" class="fade-img img-2" style="position: absolute; width: 100%; height: 100%; object-fit: contain;">
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 5px;">Click the button to check which names are already taken</p>
    </div>
`;
const helpMsgGame = `
    <div style="text-align: center; font-size: 14px; line-height: 1.4;">
        <h3 style="margin-bottom: 10px;">How To Play</h3>
        
        <div style="text-align: left; display: inline-block;">
            <p>1. Choose any available number ✨</p>
            <p>2. Pick the numbers that add up to 10 </p>
            <p>3. (1+9, 2+8, 3+7, 4+6, 5+5...)</p>
        </div>

        <div class="image-container" style="position: relative; width: 100%; height: 120px; margin-top: 10px; background: #f0f0f0; border-radius: 8px; overflow: hidden;">
            <img src="hlpGm1.png" class="fade-img" style="position: absolute; left: 50%; transform: translateX(-50%); height: 100%; width: auto;">
            <img src="hlpGm2.png" class="fade-img img-2" style="position: absolute; left: 50%; transform: translateX(-50%); height: 100%; width: auto;">
        </div>
        <p style="font-size: 12px; color: #666; margin-top: 5px;">Black numbers are available.<br>Click [?] button at the right top to show this again</p>
    </div>
`;

let startTime;               // ゲームを始めた瞬間の時刻
let pausedStartTime;         // 一時停止（モーダルを開いた）瞬間の時刻
let totalPausedDuration = 0;   // 合計で何ミリ秒止まっていたか
let timerInterval = null;           // setIntervalの入れ物// let elapsedSeconds = 0; // 実際にプレイした秒数
let isPaused = false;       //  一時停止中

// let pausedTime = 0;         //？？必要？？
// let elapsedTime = 0; // ？？それまでに経過した合計時間（ミリ秒）必要？？


// ***** Initializing game variables
let firstCell = null; 
errors = 0;
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

    if(!school) { 
        showModal("Select your school!");
        playSound('wrong');
        return; 
    }
    if(!grade) { 
        showModal("Select your grade!");
        playSound('wrong');
        return; 
    }
    if(!name) { 
        showModal("Enter your name!");
        playSound('wrong');
        return; 
    }
    if(password.length !== 4) { 
        showModal("Enter a 4-digit password!");
        playSound('wrong');
        return; 
    }

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
        let displayBest = result.data.time;
        if (typeof displayBest === 'string' && displayBest.includes('T')) {
            const timeMatch = displayBest.match(/(\d{2}:\d{2})/); // "11:58" のような部分を探す
            displayBest = timeMatch ? timeMatch[0] : displayBest;
        }
// +++++++++++++++++++
        document.getElementById('best-time').innerText = displayBest;     // ベストタイムを表示
//        document.getElementById('best-time').innerText = result.data;     // ベストタイムを表示
// +++++++++++++++++++
// --- 追加：新規ユーザーならヘルプを表示 ---
        if (result.data.isNew) {
            showModal(helpMsgGame);
        }
// +++++++++++++++++++
        // ゲーム開始の準備
       document.getElementById('setup-screen').style.display = 'none'; // 設定画面を隠す
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
    totalPausedDuration = 0; // リセット
    // elapsedSeconds = 0; // リセット
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
            f.classList.add('correct-pop'); c.classList.add('correct-pop');
            setTimeout(() => {
                document.querySelectorAll('.cell.latest').forEach(el => {
                    el.classList.replace('latest', 'hidden');
                });
                f.classList.remove('correct-pop', 'selected');
                c.classList.remove('correct-pop', 'selected');
                f.classList.remove('selected'); c.classList.remove('selected');
                f.classList.add('latest'); c.classList.add('latest');
                checkClear();
            }, 300);
        } else {
            errors++;
            document.getElementById('error-count').innerText = errors;
            playSound('wrong');
            f.classList.add('wrong-flash'); c.classList.add('wrong-flash');
            setTimeout(() => { 
                f.classList.remove('wrong-flash', 'selected'); c.classList.remove('wrong-flash', 'selected'); 
            }, 300);
        }
        firstCell = null;
    }
}

function checkClear() {     // ***** done / not yet
    const solved = document.querySelectorAll('.cell.hidden, .cell.latest').length;
    
    if (solved === 72) {
        isClear = true;
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

        saveResult(finalTime, finalErrors);
       
        setTimeout(() => {           // 演出が終わった後に実行される処理
            allCells.forEach(cell => {      // ここで allCells を使ってもエラーになりません
                cell.classList.remove('rainbow', 'clear-flash');
            });
            
        // alertの代わりに自作モーダルを呼ぶ
            showModal(`FINISH!\nTime: ${finalTime}\nErrors: ${finalErrors}`, true);
            
        }, 6000); // flash for 0.3 sec
    }
}

// to chaeck if the time is shorter than the best time
function checkNewRecord(currentTimeStr) {
    const lastBest = document.getElementById('best-time').innerText;
    const currentSec = timeToSec(currentTimeStr);
    const lastBestSec = timeToSec(lastBest);
    return currentSec < lastBestSec;
}


// // 終了時の保存処理を修正
// async function saveResult(time, err) {
//     const schoolName = document.getElementById('school-list').value;
//     const schoolData = schoolMaster.find(s => s.name === schoolName);

//  // URLSearchParams の中にすべてのデータを詰め込む
//     const params = new URLSearchParams({
//         action: "save",
//         name: document.getElementById('user-name').value,
//         school: schoolName,
//         grade: document.getElementById('grade-list').value,
//         password: document.getElementById('user-pass').value,
//         time: time,
//         errors: err,
//         circuit: schoolData.circuit,
//         cluster: schoolData.cluster,
//         ur: schoolData.ur,
//         schoolID: schoolData.id
//     });
//     //    const payload = {
//     //     action: "save",
//     //     name: document.getElementById('user-name').value,
//     //     school: schoolName,
//     //     grade: document.getElementById('grade-list').value,
//     //     password: document.getElementById('user-pass').value,
//     //     time: time,
//     //     errors: err,
//     //     circuit: schoolData.circuit,
//     //     cluster: schoolData.cluster,
//     //     ur: schoolData.ur,
//     //     schoolID: schoolData.id
//     // };
//     // console.log("Payload to send:", payload); // ★これを追加して、送信前に中身を確認！
//     console.log("Saving data...", params.toString());
//     // await fetch(`${GAS_URL}?${params.toString()}`, { mode: 'no-cors' });
//     // console.log("Data saved successfully");
//     try {
//         // params.toString() を使って URL の後ろにデータをくっつけて送る
//         await fetch(`${GAS_URL}?${params.toString()}`, { mode: 'no-cors' });
//         console.log("Data saved successfully");
//     } catch (e) {
//         console.error("Save error:", e);
//     }
// }

async function saveResult(time, err) {
    console.log("Saving process started..."); // 動作確認用

    const schoolName = document.getElementById('school-list').value;
    const schoolData = schoolMaster.find(s => s.name === schoolName);

    if (!schoolData) {
        console.error("School data not found!");
        return;
    }

    // URLSearchParams を「この関数内」で定義する
    const params = new URLSearchParams({
        action: "save",
        name: document.getElementById('user-name').value,
        school: schoolName,
        grade: document.getElementById('grade-list').value,
        password: document.getElementById('user-pass').value,
        time: time,
        errors: err,
        circuit: schoolData.circuit,
        cluster: schoolData.cluster,
        ur: schoolData.ur,
        id: schoolData.id
    });

    const fullURL = `${GAS_URL}?${params.toString()}`;
    console.log("Full URL to be sent:", fullURL); // ★これをコンソールで見て、URLが正しいか確認！

    try {
        // mode: 'no-cors' で送信
        await fetch(fullURL, { mode: 'no-cors' });
        console.log("Fetch call completed (no-cors). Check Spreadsheet now.");
    } catch (e) {
        console.error("Fetch failed:", e);
    }
}

// |||||||||||||||||||||||||||||  added 31 Jan  |||||||||||||||||||
function showModal(message, isClear = false) {
    if (isPaused) return; // 二重実行防止
    isPaused = true;
    pausedStartTime = Date.now(); // ★追加：止めた瞬間を記録
    clearInterval(timerInterval); // ★追加：表示の更新も止める
    // pauseTimer();

    const modal = document.getElementById('custom-modal');
    const msgArea = document.getElementById('modal-message');
    const btnArea = document.getElementById('modal-buttons');
    const rankingArea = document.getElementById('ranking-area');

    // CSSの display:none を打ち消すために flex を指定
    modal.style.display = 'flex'; 
//    msgArea.innerText = message;
    msgArea.innerHTML = message;
    rankingArea.style.display = 'none';
    
    if (isClear) {        // cleared all the cards
        btnArea.innerHTML = `
            <div class = "ranking-btn-container">
                <button class = "ranking-btn" onclick="fetchRanking('school')">School TOP5</button>
                <button class = "ranking-btn" onclick="fetchRanking('circuit')">Circuit TOP5</button>
                <button class = "ranking-btn" onclick="fetchRanking('region')">Region TOP5</button>
            </div>

            <button class="action-btn" onclick="restartGame()">Try Again</button>
            <button class="action-btn secondary" onclick="backToSetup()">Quit</button>
        `;
    } else {            // 通常のエラー時はOKボタンだけ表示
        btnArea.innerHTML = `<button class="action-btn secondary" onclick="closeModal()">OK</button>`;
    }
}

function closeModal() {
// console.log("closeModalが呼ばれました");
//     // if (!isPaused) return;
//     if (!isPaused) {
// console.warn("一時停止状態ではないため、処理を中断しました。isPausedの値:", isPaused);
//         // 実はここで return せずに進めてしまったほうが、
//         // 万が一の時でも「モーダルが閉じない」事態は防げます。
//     }
//     // const resumeTime = Date.now();
//     // const duration = resumeTime - pausedTime;   //中断時間の算出
// // console.log("② 再開までの時間経過(ms):", duration);

//         //  開始時刻を「止まっていた分」だけ後ろにずらす
// console.log("④ ずらす前の startTime:", startTime);
//     // startTime += duration;
// console.log("⑤ ずらした後の startTime:", startTime);
//     isPaused = false;
//     // pausedTime = 0; // リセットしておく
//     resumeTimer();

//     // //　モーダルを閉じる
//     // document.getElementById('custom-modal').style.display = 'none';
//     // // document.getElementById('helpmodal').style.display = 'none';

// // --- モーダルを閉じる（安全な書き方） ---
//     const modal = document.getElementById('custom-modal'); // ここ、ID合ってますか？
//     if (modal) {
//         modal.style.display = 'none';
//         console.log("モーダルを非表示にしました");
//     } else {
//         console.error("エラー: 'custom-modal' というIDの要素が見つかりません！");
//     }

// //     const setupVisible = document.getElementById('setup-screen').style.display !== 'none';
// //     // ゲーム中ならタイマーを再開
// //     if (!setupVisible) {
// // console.log("③ 中断していたミリ秒 (duration):", duration);
// //         totalPausedDuration += duration;
// //         // 5. タイマーの画面更新を再開
// //         timerInterval = setInterval(updateTimer, 1000);
// //     }

// // --- セットアップ画面の判定 ---
//     const setupScreen = document.getElementById('setup-screen');
//     if (setupScreen) {
//         const setupVisible = setupScreen.style.display !== 'none';
//         if (!setupVisible) {
//             console.log("③ タイマーを再開します。中断時間:", duration);
//             totalPausedDuration += duration;
//             // 二重タイマー防止のため、一度クリアしてからセット
//             clearInterval(timerInterval); 
//             timerInterval = setInterval(updateTimer, 1000);
//         }
//     }
// ----------------------------------
// 【重要】まず最初に「停止していた時間」を計算して合計に足す！
    // これを isPaused = false にする前にやらないと、計算がスキップされてしまいます。
    if (isPaused) {
        const duration = Date.now() - pausedStartTime;
        totalPausedDuration += duration;
        isPaused = false; // 計算が終わってからフラグを下ろす
        resumeTimer(); // ここで停止時間の加算とsetIntervalが行われる
    }
// 1. モーダルを消す（UIの役割）
    const modal = document.getElementById('custom-modal');
    if (modal) modal.style.display = 'none';

// 2. 停止状態なら、計算を再開させる（ロジックの役割）
    // if (isPaused) {
    //     isPaused = false;
    //     resumeTimer(); // ここで停止時間の加算とsetIntervalが行われる
    // }
// ----------------------------------
    if (!isPaused) return;

    // // ★今回の停止時間を計算して、合計に足す
    // const duration = Date.now() - pausedStartTime;
    // totalPausedDuration += duration;
    
    // isPaused = false;

    // // モーダルを閉じる
    // document.getElementById('custom-modal').style.display = 'none';

    // // セットアップ画面でなければタイマーを再始動
    // const setupScreen = document.getElementById('setup-screen');
    // if (setupScreen && setupScreen.style.display === 'none') {
    //     clearInterval(timerInterval); 
    //     timerInterval = setInterval(updateTimer, 1000);
    // }
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
    document.getElementById('board').style.display = 'none';
    document.getElementById('setup-screen').style.display = 'block';
}

async function fetchRanking(type) {
    const rankingArea = document.getElementById('ranking-area');
    const rankingTitle = document.getElementById('ranking-title');
    const rankingList = document.getElementById('ranking-list');
 
    rankingArea.classList.add('ranking-visible'); 
    rankingArea.style.display = 'block';
    rankingTitle.innerText = "Loading...";
    rankingList.innerHTML = ""; // 最初にリストを空にする

    const schoolName = document.getElementById('school-list').value;
    const schoolData = schoolMaster.find(s => s.name === schoolName);

    const params = new URLSearchParams({
        action: "getRanking",
        type: type,
        school: schoolName,
        circuit: schoolData ? schoolData.circuit : "", // エラー防止
        region: "Otjozondjupa"
    });

    try {
        const response = await fetch(`${GAS_URL}?${params.toString()}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();

        const titles = { school: "School", circuit: "Circuit", region: "Region" };
        rankingTitle.innerText = `${titles[type]} TOP 5`;

        if (!data || data.length === 0) {
            rankingList.innerHTML = "<li>No data</li>";
        } else {
            // --- ここからループ開始 ---
            // 比較用のユーザー情報を取得
            const currentName = document.getElementById('user-name').value;
            const currentSchool = document.getElementById('school-list').value;
            const currentGrade = document.getElementById('grade-list').value;

            data.forEach((item, index) => {
                const li = document.createElement('li');
                
                // 1. 自分のデータかどうか判定
                const isMe = (item.name === currentName && 
                              item.school === currentSchool && 
                              String(item.grade) === String(currentGrade));

                // 2. テキストの設定 (1. 01:20 | abc - School gr1)
                li.innerText = `${index + 1}. ${item.time} | ${item.name} - ${item.school} ${item.grade}`;

                // 3. 自分だったらスタイルを変更
                if (isMe) {
                    li.style.color = "red";
                    li.style.fontWeight = "bold";
                }

                rankingList.appendChild(li);
            }); // forEach終了
        }
    } catch (e) {
        console.error(e);
        rankingTitle.innerText = "Error loading ranking";
    }
} // fetchRanking終了


// 入力状況を監視して、3つ揃ったらボタンを青く（有効に）する
function checkFormCompletion() {
    const c = document.getElementById('circuit-filter').value;
    const s = document.getElementById('school-list').value;
    const g = document.getElementById('grade-list').value;
    const btn = document.getElementById('check-names-btn');
    
    if (c && s && g) {
        btn.disabled = false;
        btn.classList.add('secondary'); // 灰色へ
        btn.classList.remove('supress'); 
    } else {
        btn.disabled = true;
        btn.classList.add('supress');   //よく見えなくする
        btn.classList.remove('secondary');
    }
}

// 各セレクトボックスにイベントを登録
document.getElementById('circuit-filter').addEventListener('change', checkFormCompletion);
document.getElementById('school-list').addEventListener('change', checkFormCompletion);
document.getElementById('grade-list').addEventListener('change', checkFormCompletion);

// 名前一覧を表示する処理
async function handleCheckNames() {
    const school = document.getElementById('school-list').value;
    const grade = document.getElementById('grade-list').value;
    const listArea = document.getElementById('registered-names-list');

    listArea.innerHTML = "Loading...";
    listArea.style.display = "block";

    const params = new URLSearchParams({ action: "getRanking", type: "school", school: school });
    const response = await fetch(`${GAS_URL}?${params.toString()}`);
    const data = await response.json();

    // 学年で絞り込み、名前をアルファベット順に
    const names = data
        .filter(item => String(item.grade) === String(grade))
        .map(item => item.name);
    
    const uniqueNames = [...new Set(names)].sort((a, b) => a.localeCompare(b.name));

    if (uniqueNames.length > 0) {
        listArea.innerHTML = `<strong>Registered: ${school} ${grade}</strong><br> ${uniqueNames.join(", ")}`;
    } else {
        listArea.innerHTML = `No names registered for ${school} ${grade} yet.`;
    }
};

    document.getElementById('check-names-btn').onclick = handleCheckNames;

// 1. ヘルプを表示する専用の関数を定義
// function showHelp() {

//     if (isPaused) return; // 二重実行防止

//     isPaused = true;
//     pausedTime = Date.now(); 
  
// console.log("① 中断した時刻:", pausedTime);
// //         // 1. タイマー（画面更新）を止める
// //         clearInterval(timerInterval);
// //         // 2. 止めた瞬間の時刻を記録
// //         pausedTime = Date.now();
// // console.log("① 中断した時刻 (pausedTime):", pausedTime); // 確認用
// //         showModal(helpMessage);

//     document.getElementById('custom-Modal').style.display = 'block';
// }

// 2. ? ボタンをクリックした時にその関数を呼び出すように設定
// document.getElementById('help-btn').onclick = showHelp;
// document.getElementById('help-btn').onclick = () => {
//     showModal(helpMsgReg);
// };



// // ヘルプを開くとき
// function pauseTimer() {
//   clearInterval(timerInterval);
//   // 現在時刻 - 開始時刻 をして、これまでの経過時間を保存
//   elapsedTime += Date.now() - startTime;
// }

// // ヘルプを閉じて再開するとき
// function resumeTimer() {
//   startTime = Date.now(); // 今の時刻を新しい開始時刻にする
//   timerInterval = setInterval(updateTimer, 10);
// }

// 1. ゲーム開始時
function startTimer() {
    startTime = Date.now();
    totalPausedDuration = 0; // リセット
    timerInterval = setInterval(updateTimer, 1000);
}

// 2. 一時停止（モーダルを開くときなど）
function pauseTimer() {
    clearInterval(timerInterval);
    pausedStartTime = Date.now(); // 「いつ止めたか」を記録
}

// 3. 再開（closeModalの中から呼ぶ）
function resumeTimer() {
    const duration = Date.now() - pausedStartTime; // 今回止まっていた時間を計算
    totalPausedDuration += duration;               // 累計停止時間に加算
    
    // 再び1秒おきに表示更新を開始
    timerInterval = setInterval(updateTimer, 1000);
}

// // 4. 計算と表示（1秒ごとに勝手に動く）
// function updateTimer() {
//     const now = Date.now();
//     // 【公式】経過時間 = 今 - 開始時 - 止まってた合計
//     const diffInMs = now - startTime - totalPausedDuration;
    
//     const totalSeconds = Math.floor(diffInMs / 1000);
//     const m = Math.floor(totalSeconds / 60);
//     const s = totalSeconds % 60;

//     document.getElementById('timer').innerText = 
//         String(m).padStart(2, '0') + ":" + String(s).padStart(2, '0');
// }


function updateTimer() {
    // ★重要：一時停止フラグが true の時は、これ以降の処理をしない
    if (!startTime) return;
    if (isPaused) return;
    // 現在時刻と開始時刻の差分（ミリ秒）を計算
    const now = Date.now();
    const diffInMs = now - startTime - totalPausedDuration;
    // const totalSeconds = now - Math.floor(diffInMs / 1000); // 
    const totalSeconds = Math.floor(diffInMs / 1000); // 
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;

    // // 00:00 の形式に整えて表示
    const displayTime = 
        String(minutes).padStart(2, '0') + ":" + 
        String(seconds).padStart(2, '0');
    
    document.getElementById('timer').innerText = displayTime;
};






// 5. 変換ツール（計算には直接関与せず、データの整形用）
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
