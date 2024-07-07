function formatDate(date) {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    let formattedDate = new Date(date).toLocaleDateString('th-TH', options);
    formattedDate = formattedDate.replace(/ /g, '-').replace(/\./g, '');
    const months = ['ม.ค', 'ก.พ', 'มี.ค', 'เม.ย', 'พ.ค', 'มิ.ย', 'ก.ค', 'ส.ค', 'ก.ย', 'ต.ค', 'พ.ย', 'ธ.ค'];
    
    months.forEach(month => {
        const regex = new RegExp(month.replace('.', ''), 'g');
        formattedDate = formattedDate.replace(regex, month);
    });

    return formattedDate;
}


function generateRandomTimes(startTime, count) {
    let times = [];
    let currentTime = new Date(startTime);

    while (times.length < count) {
        times.push(new Date(currentTime));
        const minutesToSubtract = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
        const secondsToSubtract = Math.floor(Math.random() * 60);
        currentTime.setMinutes(currentTime.getMinutes() - minutesToSubtract);
        currentTime.setSeconds(currentTime.getSeconds() - secondsToSubtract);

        if (currentTime.getHours() < 9) {
            currentTime.setDate(currentTime.getDate() - 1);
            currentTime.setHours(21, 0, 0, 0);
        }
    }

    return times;
}

function getRandomText() {
    const texts = [
        "KBANK x3592 น.ส. ลักขณา ทวาดิตร์", "SCB x6942 นาย ตนพล มัคคะที",
        "BAAC x1342 น.ส. วรวรรณ แก้วกัณหา", "TTB x4700 นาย กัญญาณัฐ อุ่นแสง",
        "SCB x1001 นาย โชคชัย ปัญญา", "KBANK x4378 น.ส. ฐิตาภา ยอดใบ",
        "KTB x7101 นาย ธนาชัย อุดมศักดิ์ศิริ", "BAY x0579 นาย อาณาจักร เจนด่านกลาง",
        "SCB x1990 น.ส. ศุภลักษณ์ ลันนันท์", "SCB x7891 นาย ณัฐธิดา บูชาลี",
        "KBANK x4521 น.ส. ศิรลักษณ์ บุตรชา", "TTB x7441 น.ส. ขันทอง จุลเต",
        "BBL x4931 นาย ปัญญา ทับเอี่ยม", "BAAC x7796 นาย พาราดอน สินสมุทร",
        "SCB x1103 น.ส. ภิลาวรรณ์ สอนเสน", "KBANK x4644 น.ส. บัณฑิต วังวรน",
        "KKP x9631 น.ส.กมลทิพย์ อุปวงษ์", "BAAC x8854 นาย อุกฤษ ถวิลวรรณะ",
        "KTB x6341 น.ส. ณัฐมน คำสะอาด", "KBANK x4410 นาย พิพัฒน์ ภูทวี",
        "BBL x8520 นาย สมชัย แก่นนาคำ", "BAAC x4210 น.ส. ระพีพร เล็กวิญญาณ",
        "SCB x5390 นาง มนชยา ไทยใหม่", "SCB x9906 น.ส. สุจิตรา คล้ายแก้ว",
        "SCB x9137 นาย ณัฐรุจ อาษาพา", "KBANK x8216 นาย บุณยนุช ชะม้อย",
        "KBANK x8314 นาย ศศิเพชร ถือพุทรา", "BAY x5881 นาย ชาย พุทธภาวี",
        "KTB x3942 น.ส. วรรณนิศา แก้วบุตร", "KKP x0012 น.ส. วาสนา หล่อเหลี่ยม",
        "KBANK x4377 น.ส. อามานี มาหะมิง", "SCB x4674 น.ส. สุภาพร พรมภักดี",
        "KTB x9971 นาย ปริญญา สวัสดี", "GSB x4309 น.ส. รัตนาภรณ์ จันทวี",
        "SCB x1094 น.ส. ศิริวรรณ กวานกลม", "BAAC x0004 น.ส. ขวัญจิตร เกื้อเอียด",
        "GSB x5541 นาง บานเย็น สร้อยพูล", "TTB x9415 น.ส. มุฐิตา ดวงจิต",
        "KBANK x6284 น.ส กรองทอง โจทย์รัมย์", "BAY x6151 น.ส. ชลธิชา ปิตธวัชชัย",
        "GSB x0023 นาย บารนาบัส ประทุมรัตน์", "CIMBT x9055 นาย ธานี ศรีรุ่งเรือง",
        "KTB x6135 น.ส. สุภาพร รัตนรัตน์", "BAY x9770 นาย โกมินทร์ แก้วจวง",
        "UOB x6640 นาย ณรงศ์ฤทธิ์ ถกลจิตร", "KBANK x5977 น.ส. ปภาดา เมืองแดง",
        "SCB x6120 น.ส. นวรัตน์ ยอดผักแว่น","BBL x0036 น.ส. ณิชาภัทร ศรีสุคนธ์",
        "BBL x6340 นาย ชาญชัย วิภัชภาพันธ์","KKP x0590 นาย ณัฐณรงค์ ไวปัญญา",
        "KBANK x5011 น.ส. สุชาดา ทวยไธสง","BAY x9340 น.ส. พัฒน์รพี กมลานนท์",
        "BAAC x9320 น.ส. รัชนก ตั้งแต่ง","KTB x9058 นาย ณัชพล แสงเดือน",
        "BBL x0942 น.ส. กนกวรรณ ฉิมจิ๋ว","KBANK x1069 น.ส. สายชล เปรมปรี",
        "BAY x9058 น.ส. ศิริกุล ตระกูลเกิด","BAAC x0694 น.ส. ศุภวรรณ์ นวลละออง",
        "KTB x8545 นาย ชูสิทธิ์ สิงห์ชู","KBANK x9105 น.ส. ภุมรินทร์ คากาญจน์",
        "BAAC x1265 นาย อัครสิทธิ์ ชุ่มใจรัก","KBANK x8920 น.ส. มัฐฐิตา บุญหล้า",
        "SCB x1809 น.ส. เพ็ญแสง จันทวี","UOB x1810 นาย ฐาปกรณ์ ฉางแก้ว",
        "KBANK x4520 นาย พัสกร แย้มลังกา","SCB x5009 น.ส. สุรีรัตน์ สุวรพันธ์",
        "BAY x0800 น.ส. เนตรชนก ภู่พงษ์พันธ์","GSB x5005 น.ส. มณัญญา นันทะวงศ์",
        "KBANK x8512 น.ส. อัจฉรา ซอวงค์","SCB x1212 น.ส. วรันธร ปภัสสรศิริ",
        "UOB x5409 น.ส. วรันธร ปภัสสรศิริ","BBL x6559 น.ส. ธนภรณ์ มีลาภ",
        "SCB x9404 นาย สุทธิสาร เนตรจตุพร","KBANK x8084 นาย สิทธิโชค อินทศรี",
        "KBANK x1058 นาย วิธวินท์วิชญ์ เนาวนนท์","KTB x9450 น.ส. มุทิตา เปรมกาศ",
        "KBANK x8400 นาย ณัฐพงษ์ เปลี่ยนพลอย","BAAC x6840 น.ส. ธานี สร้อยมี",
        "TTB x0011 นาย วงเพ็ชร ภูปาง", "KBANK x4110 น.ส. ณภัทร กิจอาจเมธา"
    ];

    return texts[Math.floor(Math.random() * texts.length)];
}

function generateRandomMessage() {
    const messages = [
        "012351192516AORO1953", "012351123956AOR01695", "012354523659AOR06300",
        "012355621234BOR05349", "012351162369BOR01352", "012355634569COR01930",
        "012351142972BOR01100", "012354231539BOR00093", "012356513452AOR04319",
        "012341142934COR00013", "012351423549COR06620", "012351172364COR05593",
        "012344412345AOR04319", "012355211023BOR01366", "012341123456BOR01090",
        "012351429730COR01934","012350126945BOR04629","012354129345BOR01173",
        "012341415237COR01369","012351913407COR01002","012351634920AOR01349",
        "012341423945BOR02943","012351412349AOR01395","012341424139BOR07370",
        "012340102345AOR04394","012344431930BOR09349","012351423490BOR00123",
        "012344319350COR01934","012351349043AOR01394","012344394290COR01729",
        "012351031019AOR09534","012340901345AOR04641","012359613490COR01424",
        "012351142493BOR09348","012351934691AOR04394","012346349043BOR04653",
        "012354390409AOR01392","012344619307COR01378","012351426490COR01934",
        "012341119349AOR04964","012353439429AOR02729","012341934004BOR02973",
        "012349349090AOR01394","012359349234AOR04617","012349349007BOR01934",
        "012349349000AOR01934","012344004930COR00083","012344390739COR04629",
        "012354631090AOR04394","012354940491AOR04934","012349340940BOR04629",
        "012349373907BOR04394","012349370408AOR02943","012340808934BOR00943",
        "012354390407COR04629","012349340973AOR00073","012344394080AOR04394",
        "012341119349BOR04390","012350009340COR07394","012351093482COR00097",
        "012341301019AOR07319","012354310099COR05534","012348834850COR04625",
        "012344394058AOR04462","012354369428COR06688","012349090439BOR04629",
        "012351341930AOR04639","012351934804AOR04631","012344390438BOR00097",
        "012341398043AOR07928","012340909437COR01522","012340812349BOR01551",
        "012344394007AOR01349","012344934077AOR09955","012347734180COR02634",
        "012346613810AOR04966","012351359073BOR04642","012354630792AOR04692",
        "012351249374AOR04319", "012351423459COR00079", "012347752169AOR04109"
    ];

    return messages.sort(() => 0.5 - Math.random()).slice(0, 16);
}

function generateRandomAmounts() {
    const amounts = [
        "10,000.00", "10,000.00", "10,000.00", "10,000.00", "10,000.00", 
        "10,000.00", "10,000.00", "10,000.00", "10,000.00", "10,000.00",
        "10,000.00", "10,000.00", "10,000.00", "10,000.00", "10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00","10,000.00","10,000.00",
        "10,000.00", "10,000.00", "10,000.00"
    ];

    return amounts.sort(() => 0.5 - Math.random()).slice(0, 16);
}

function generateZeroAmounts() {
    const zeroAmounts = Array(16).fill("0.00");
    return zeroAmounts;
}

function generateAdditionalMessages() {
    const additionalMessages = [
        "K0526309", "K0529630", "K0521123", "K0524692", "K0525390",
        "K0524249", "K0524394", "K0521219", "K0521100", "K0521233",
        "K0526369", "K0529634", "K0524241", "K0521239", "K0524240",
        "K0526369", "K0524394", "K0524149",
        "K0524142","K0529344","K0521124",
        "K0521210","K0521293","K0524692",
        "K0524882","K0521308","K0524349",
        "K0527193","K0524629","K0526392",
        "K0524318","K0521237","K0524311",
        "K0524922","K0524641","K0524934",
        "K0524942","K0529292","K0521923",
        "K0524680","K0524955","K0525593",
        "K0526677","K0524649","K0524922",
        "K0524923","K0524449","K0529933",
        "K0527792","K0528693","K0526693",
        "K0524462","K0528292","K0524639",
        "K0529993","K0524334","K0524694",
        "K0523333","K0528858","K0525628",
        "K0524462","K0524115","K0524695",
        "K0524229","K0526344","K0522992",
        "K0526275","K0524529","K0525597",
        "K0527752","K0524522","K0524855",
        "K0527887","K0527859","K0524228",
        "K0524520","K0524692","K0521639",
        "K0520093", "K0524300", "K0524193"
    ];

    return additionalMessages.sort(() => 0.5 - Math.random()).slice(0, 16);
}

function generateStatement() {
    const dateInput = document.getElementById('date').value;
    const timeInput = document.getElementById('time').value;
    const accountNumber = document.getElementById('accountNumber').value;
    const accountName = document.getElementById('accountName').value;
    let dateTime = new Date(`${dateInput}T${timeInput}`);

    if (timeInput < "09:00:00") {
        dateTime.setDate(dateTime.getDate() - 1);
        dateTime.setHours(21, 0, 0, 0);
    }

    const rows = [];
    const randomMessages = generateRandomMessage();
    const randomAmounts = generateRandomAmounts();
    const zeroAmounts = generateZeroAmounts();
    const randomTimes = generateRandomTimes(dateTime, 16);
    const additionalMessages = generateAdditionalMessages();
    
    for (let i = 0; i < 16; i++) {
        const date = formatDate(randomTimes[i]);
        const time = randomTimes[i].toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        const text = getRandomText();
        const randomMessage = randomMessages[i];
        const randomAmount = randomAmounts[i];
        const zeroAmount = zeroAmounts[i];
        const additionalMessage = additionalMessages[i];
        const transactionEffectDate = formatDate(randomTimes[i]);

        rows.push({ date, time, text, randomMessage, randomAmount, zeroAmount, additionalMessage, transactionEffectDate });
    }

    localStorage.setItem('statementData', JSON.stringify(rows));

    const outputWindow = window.open('', '', 'width=1063,height=965');
    outputWindow.document.write(`
        <!DOCTYPE html>
        <html lang="th">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bank Statement</title>
            <link rel="stylesheet" href="styles-output.css">
        </head>
        <body>
            <div class="container">
                
                <div class="statement-content">
                    <p style="position: absolute; top: 289px; left: 48px;font-size: 20px;letter-spacing: -0.25px;">${accountNumber}</p>
                    <p style="position: absolute; top: 350px; left: 25px;font-size: 22px;letter-spacing: -0.25px;">${accountName}- <span style="color:#00d833;">${accountNumber}</span> </p>
                    ${rows.map((row, index) => `
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 35px;font-size: 19px;letter-spacing: -0.25px;">${row.date}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 140px;font-size: 19px;letter-spacing: -0.25px;">${row.time}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 224px; font-size: 19px; letter-spacing: -0.7px;">${row.text}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 427px;font-size: 19px;letter-spacing: -0.7px;">${row.randomMessage}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 640px;font-size: 19px;letter-spacing: -0.7px;text-align: center; transform: translateX(-100%);">${row.randomAmount}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 810px;font-size: 19px;letter-spacing: -0.25px;text-align: center; transform: translateX(-100%);">${row.zeroAmount}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 845px;font-size: 19px;letter-spacing: -0.25px;">${row.additionalMessage}</p>
                        <p style="position: absolute; top: ${464 + index * 25}px; left: 922px;font-size: 19px;letter-spacing: -0.25px;">${row.transactionEffectDate}</p>
                    `).join('')}
                    <p style="position: absolute; top: 288px; left: 708px;font-size: 20px;letter-spacing: -0.25px;">${formatDate(randomTimes[0])}</p>
                    <p style="position: absolute; top: 288px; left: 543px;font-size: 20px;letter-spacing: -0.25px;">${formatDate(randomTimes[randomTimes.length - 1])}</p>
                </div>
            </div>
        </body>
        </html>
    `);
}
